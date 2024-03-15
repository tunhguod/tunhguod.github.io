self.addEventListener("message", data => {
    for (; data.cnt < data.simulate_game_count; ++data.cnt) {
        let role_bit = data.role.get_role(get_flag(65536));

        // リプレイ判定
        let is_flag_replay = false
        if (data.left_hg_game_count > 0) { // HG 中
            --data.left_hg_game_count;
            ++data.hg_game_count;
            // print("left_hg: " + left_hg_game_count + ", hg: " + hg_game_count)
            if ((role_bit & ROLE.HG_BLANK) != 0) {
                ++data.hg_blank;
            }
            if ((role_bit & (ROLE.REP | ROLE.HG_RT_REP | ROLE.RT_REP | ROLE.JAC_REP)) != 0) {
                is_flag_replay = true
            }
        } else if (data.left_hc_game_count > 0) { // HC 中
            --data.left_hc_game_count;
            ++data.hc_game_count;
            // print("left_hc: " + left_hc_game_count + ", hc: " + hc_game_count)
            // jacin
            if (((role_bit & ROLE.HC_JAC_REP) != 0) && data.left_hc_game_count <= 7) {
                data.left_hg_game_count = 20;
                data.left_hc_game_count = 0;
            }
            if ((role_bit & ROLE.HC_BLANK) != 0) {
                ++data.hc_blank;
            }
            if ((role_bit & (ROLE.HC_RT_REP | ROLE.HC_JAC_REP | ROLE.RT_REP | ROLE.JAC_REP)) != 0) {
                // 0in0out の補正
                is_flag_replay = true
            }
        } else { // 通常時
            if ((role_bit & (ROLE.REP | ROLE.RT_REP | ROLE.JAC_REP)) != 0) {
                // 0in0out の補正
                is_flag_replay = true
            }
        }

        // 小役計数    
        if (is_flag_replay) {
            data.in_medal += calculate_replay_medal()
            data.out_medal += calculate_replay_medal()
        } else {
            data.in_medal += 3
            if ((role_bit & ROLE.BELL_A) != 0) {
                ++data.bell_a;
                data.out_medal += 8;
            } else if ((role_bit & ROLE.BELL_B) != 0) {
                ++data.bell_b;
                data.out_medal += 8;
            } else if ((role_bit & ROLE.ICE_A) != 0) {
                ++data.ice_a;
                data.out_medal += 8;
            } else if ((role_bit & ROLE.ICE_B) != 0) {
                ++data.ice_b;
                data.out_medal += 8;
            } else if ((role_bit & ROLE.CHER_A1) != 0) {
                ++data.cher_a1;
                data.out_medal += 4;
            } else if ((role_bit & ROLE.CHER_A2) != 0) {
                ++data.cher_a2;
                data.out_medal += 4;
            } else if ((role_bit & ROLE.CHER_B) != 0) {
                ++data.cher_b;
                data.out_medal += 4;
            }
        }

        ++data.bonus_span_game_count;
        ++data.bb_span_game_count;
        ++data.rb_span_game_count;
        if (data.bonus_span_game_count > data.longest_bonus_span_game_count) {
            data.longest_bonus_span_game_count = data.bonus_span_game_count;
        }
        if (data.bb_span_game_count > data.longest_bb_span_game_count) {
            data.longest_bb_span_game_count = data.bb_span_game_count;
        }
        if (data.rb_span_game_count > data.longest_rb_span_game_count) {
            data.longest_rb_span_game_count = data.rb_span_game_count;
        }

        // ボーナス消化開始
        if ((role_bit & ROLE.D_BB) != 0) {
            if (role_bit == ROLE.D_BB) {
                ++data.alone_don_bb;
            } else if ((role_bit & ROLE.RT_REP) != 0) {
                ++data.rt_rep_don_bb;
            } else if ((role_bit & ROLE.JAC_REP) != 0) {
                ++data.jac_rep_don_bb;
            } else if ((role_bit & ROLE.CHER_B) != 0) {
                ++data.cher_b_don_bb;
            } else if ((role_bit & ROLE.SP_A) != 0) {
                ++data.sp_a_don_bb;
            } else if ((role_bit & ROLE.SP_B) != 0) {
                ++data.sp_b_don_bb;
            } else if ((role_bit & ROLE.SP_D) != 0) {
                ++data.sp_d_don_bb;
            } else if ((role_bit & ROLE.SP_E) != 0) {
                ++data.sp_e_don_bb;
            } else if ((role_bit & ROLE.BELL_B) != 0) {
                ++data.bell_b_don_bb;
            }
            ++data.d_bb;
            data.in_medal += 1 + 3 * 29;
            data.out_medal += 10 * 29;
            data.bb_bell = digest_big_bonus(data.setting);
            data.hriz_bell += data.bb_bell.horizontal_bell;
            data.lean_bell += data.bb_bell.leaning_bell;
            data.rare_bell += data.bb_bell.rare_bell;
            data.left_hc_game_count = 20;
            data.left_hg_game_count = 0;

            data.bonus_span_game_count = 0;
            data.bb_span_game_count = 0;
        } else if ((role_bit & ROLE.R_BB) != 0) {
            if (role_bit == ROLE.R_BB) {
                ++data.alone_red_bb;
            } else if ((role_bit & ROLE.RT_REP) != 0) {
                ++data.rt_rep_red_bb;
            } else if ((role_bit & ROLE.JAC_REP) != 0) {
                ++data.jac_rep_red_bb;
            } else if ((role_bit & ROLE.CHER_B) != 0) {
                ++data.cher_b_red_bb;
            } else if ((role_bit & ROLE.SP_A) != 0) {
                ++data.sp_a_red_bb;
            } else if ((role_bit & ROLE.SP_C) != 0) {
                ++data.sp_c_red_bb;
            } else if ((role_bit & ROLE.SP_E) != 0) {
                ++data.sp_e_red_bb;
            } else if ((role_bit & ROLE.CHER_A1) != 0) {
                ++data.cher_a1_red_bb;
            }
            ++data.r_bb;
            data.in_medal += 1 + 3 * 29;
            data.out_medal += 10 * 29;
            data.bb_bell = digest_big_bonus(data.setting);
            data.hriz_bell += data.bb_bell.horizontal_bell;
            data.lean_bell += data.bb_bell.leaning_bell;
            data.rare_bell += data.bb_bell.rare_bell;
            data.left_hc_game_count = 20;
            data.left_hg_game_count = 0;

            data.bonus_span_game_count = 0;
            data.bb_span_game_count = 0;
        } else if ((role_bit & ROLE.RB) != 0) {
            if (role_bit == ROLE.RB) {
                ++data.alone_rb;
            } else if ((role_bit & ROLE.RT_REP) != 0) {
                ++data.rt_rep_rb;
            } else if ((role_bit & ROLE.CHER_B) != 0) {
                ++data.cher_b_rb;
            } else if ((role_bit & ROLE.SP_B) != 0) {
                ++data.sp_b_rb;
            } else if ((role_bit & ROLE.SP_D) != 0) {
                ++data.sp_d_rb;
            } else if ((role_bit & ROLE.SP_E) != 0) {
                ++data.sp_e_rb;
            }
            ++data.rb;
            data.rb_data = digest_reg_bonus(data.setting);
            data.in_medal += 1 + data.rb_data.in_medal;
            data.out_medal += data.rb_data.out_medal;

            data.rb_game_count += data.rb_data.game_count;
            data.rb_one_medal_role += data.rb_data.one_medal_role;
            data.rb_lean_ice += data.rb_data.leaning_ice;
            data.rb_blank += data.rb_data.blank;
            data.rb_pank_lv_low += data.rb_data.pank_lv_low;
            data.rb_pank_lv_mid += data.rb_data.pank_lv_mid;
            data.rb_pank_lv_high += data.rb_data.pank_lv_high;
            data.rb_showed_peace_lv_low += data.rb_data.showed_peace_lv_low;
            data.rb_showed_peace_lv_mid += data.rb_data.showed_peace_lv_mid;
            data.rb_showed_peace_lv_high += data.rb_data.showed_peace_lv_high;
            data.left_hc_game_count = 0;
            data.left_hg_game_count = 0;

            data.bonus_span_game_count = 0;
            data.rb_span_game_count = 0;
        }

        if (data.cnt % data.section_unit == 0) {
            data.section_total_medal.push(data.out_medal - data.in_medal);
            data.section_total_medal_labels.push(data.cnt.toString());
        }
    }

    self.postMessage(data);
})