importScripts('./const.js', './function.js')

class Role {

    flag_thresh = new Array()
    hc_flag_thresh = new Array()
    hg_flag_thresh = new Array()

    map_flag(arr, flag) {
        const len = this.flag_thresh.length
        if (len == 0) {
            arr.push(flag)
        } else {
            arr.push(arr.slice(-1)[0] + flag)
        }
    }

    constructor(setting) {
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SINGLE_DON[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SINGLE_RED[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SINGLE_RB[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.RT_REP_DON[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.RT_REP_RED[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.RT_REP_RB[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.JAC_REP_DON[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.JAC_REP_RED[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.CHR_B_DON[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.CHR_B_RED[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.CHR_B_RB[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SP_A_DON[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SP_A_RED[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SP_B_DON[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SP_B_RB[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SP_C_RED[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SP_D_DON[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SP_D_RB[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SP_E_DON[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SP_E_RED[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SP_E_RB[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.BELL_B_DON[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.CHR_A_RED[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.BELL_A[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.BELL_B[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.ICE_A[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.ICE_B[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.CHR_A1[setting] - MAPPED_FLAG.CHR_A_RED[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.CHR_A2[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.CHR_B[setting] - MAPPED_FLAG.CHR_B_DON[setting] - MAPPED_FLAG.CHR_B_RED[setting] - MAPPED_FLAG.CHR_B_RB[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.REP[setting] - MAPPED_FLAG.RT_REP_DON[setting] - MAPPED_FLAG.RT_REP_RED[setting] - MAPPED_FLAG.RT_REP_RB[setting])

        this.hc_flag_thresh.push(this.flag_thresh.slice(-1)[0] + MAPPED_FLAG.HC_RT_REP[setting] - MAPPED_FLAG.REP[setting])
        this.map_flag(this.hc_flag_thresh, MAPPED_FLAG.HC_JAC_REP[setting])

        this.hg_flag_thresh.push(this.flag_thresh.slice(-1)[0] + MAPPED_FLAG.HG_RT_REP[setting])
    }

    get_rt_role(flag, state) {
        let role = 0x00
        const thresh = this.flag_thresh.slice(-1)[0]
        if (state == STATE.HC) {
            if (thresh <= flag && flag < this.hc_flag_thresh[0]) {
                role = ROLE.HC_RT_REP
            } else if (this.hc_flag_thresh[0] <= flag && flag < this.hc_flag_thresh[1]) {
                role = ROLE.HC_JAC_REP
            } else {
                role = ROLE.BLANK
            }
        } else { // STATE.HG
            if (thresh <= flag && flag < this.hg_flag_thresh[0]) {
                role = ROLE.HG_RT_REP
            } else {
                role = ROLE.BLANK
            }
        }

        return role
    }

    get_role(flag, state) {
        let role = 0x00
        if (0 <= flag && flag < this.flag_thresh[0]) {
            role = ROLE.D_BB
        } else if (this.flag_thresh[0] <= flag && flag < this.flag_thresh[1]) {
            role = ROLE.R_BB
        } else if (this.flag_thresh[1] <= flag && flag < this.flag_thresh[2]) {
            role = ROLE.RB
        } else if (this.flag_thresh[2] <= flag && flag < this.flag_thresh[3]) {
            role = ROLE.D_BB | ROLE.RT_REP
        } else if (this.flag_thresh[3] <= flag && flag < this.flag_thresh[4]) {
            role = ROLE.R_BB | ROLE.RT_REP
        } else if (this.flag_thresh[4] <= flag && flag < this.flag_thresh[5]) {
            role = ROLE.RB | ROLE.RT_REP
        } else if (this.flag_thresh[5] <= flag && flag < this.flag_thresh[6]) {
            role = ROLE.D_BB | ROLE.JAC_REP
        } else if (this.flag_thresh[6] <= flag && flag < this.flag_thresh[7]) {
            role = ROLE.R_BB | ROLE.JAC_REP
        } else if (this.flag_thresh[7] <= flag && flag < this.flag_thresh[8]) {
            role = ROLE.D_BB | ROLE.CHER_B
        } else if (this.flag_thresh[8] <= flag && flag < this.flag_thresh[9]) {
            role = ROLE.R_BB | ROLE.CHER_B
        } else if (this.flag_thresh[9] <= flag && flag < this.flag_thresh[10]) {
            role = ROLE.RB | ROLE.CHER_B
        } else if (this.flag_thresh[10] <= flag && flag < this.flag_thresh[11]) {
            role = ROLE.D_BB | ROLE.SP_A
        } else if (this.flag_thresh[11] <= flag && flag < this.flag_thresh[12]) {
            role = ROLE.R_BB | ROLE.SP_A
        } else if (this.flag_thresh[12] <= flag && flag < this.flag_thresh[13]) {
            role = ROLE.D_BB | ROLE.SP_B
        } else if (this.flag_thresh[13] <= flag && flag < this.flag_thresh[14]) {
            role = ROLE.RB | ROLE.SP_B
        } else if (this.flag_thresh[14] <= flag && flag < this.flag_thresh[15]) {
            role = ROLE.R_BB | ROLE.SP_C
        } else if (this.flag_thresh[15] <= flag && flag < this.flag_thresh[16]) {
            role = ROLE.D_BB | ROLE.SP_D
        } else if (this.flag_thresh[16] <= flag && flag < this.flag_thresh[17]) {
            role = ROLE.RB | ROLE.SP_D
        } else if (this.flag_thresh[17] <= flag && flag < this.flag_thresh[18]) {
            role = ROLE.D_BB | ROLE.SP_E
        } else if (this.flag_thresh[18] <= flag && flag < this.flag_thresh[19]) {
            role = ROLE.R_BB | ROLE.SP_E
        } else if (this.flag_thresh[19] <= flag && flag < this.flag_thresh[20]) {
            role = ROLE.RB | ROLE.SP_E
        } else if (this.flag_thresh[20] <= flag && flag < this.flag_thresh[21]) {
            role = ROLE.D_BB | ROLE.BELL_B
        } else if (this.flag_thresh[21] <= flag && flag < this.flag_thresh[22]) {
            role = ROLE.R_BB | ROLE.CHER_A1
        } else if (this.flag_thresh[22] <= flag && flag < this.flag_thresh[23]) {
            role = ROLE.BELL_A
        } else if (this.flag_thresh[23] <= flag && flag < this.flag_thresh[24]) {
            role = ROLE.BELL_B
        } else if (this.flag_thresh[24] <= flag && flag < this.flag_thresh[25]) {
            role = ROLE.ICE_A
        } else if (this.flag_thresh[25] <= flag && flag < this.flag_thresh[26]) {
            role = ROLE.ICE_B
        } else if (this.flag_thresh[26] <= flag && flag < this.flag_thresh[27]) {
            role = ROLE.CHER_A1
        } else if (this.flag_thresh[27] <= flag && flag < this.flag_thresh[28]) {
            role = ROLE.CHER_A2
        } else if (this.flag_thresh[28] <= flag && flag < this.flag_thresh[29]) {
            role = ROLE.CHER_B
        } else if (this.flag_thresh[29] <= flag && flag < this.flag_thresh[30]) {
            role = ROLE.REP
        } else { // blank
            if (state == STATE.NORMAL) {
                role = ROLE.BLANK
            } else {
                role = this.get_rt_role(flag, state)
            }
        }

        return role
    }
}

self.addEventListener("message", (e) => {
    var data = e.data
    var role = new Role(data.setting)
    var section_unit = Math.trunc(data.simulate_game_count / 100)
    let role_bit = 0x00
    for (; data.cnt < data.simulate_game_count; ++data.cnt) {
        // リプレイ判定
        let is_flag_replay = false
        if (data.left_hg_game_count > 0) { // HG 中
            role_bit = role.get_role(get_flag(65536), STATE.HG)
            --data.left_hg_game_count
            ++data.hg_game_count
            if ((role_bit & ROLE.BLANK) != 0) {
                ++data.hg_blank
            }
            if ((role_bit & (ROLE.REP | ROLE.HG_RT_REP | ROLE.RT_REP | ROLE.JAC_REP)) != 0) {
                is_flag_replay = true
            }
        } else if (data.left_hc_game_count > 0) { // HC 中
            role_bit = role.get_role(get_flag(65536), STATE.HC)
            --data.left_hc_game_count
            ++data.hc_game_count
            // jacin
            if (((role_bit & ROLE.HC_JAC_REP) != 0) && data.left_hc_game_count <= 7) {
                data.left_hg_game_count = 20
                data.left_hc_game_count = 0
            }
            if ((role_bit & ROLE.BLANK) != 0) {
                ++data.hc_blank
            }
            if ((role_bit & (ROLE.HC_RT_REP | ROLE.HC_JAC_REP | ROLE.RT_REP | ROLE.JAC_REP)) != 0) {
                is_flag_replay = true
            }
        } else { // 通常時
            role_bit = role.get_role(get_flag(65536), STATE.NORMAL)
            if ((role_bit & (ROLE.REP | ROLE.RT_REP | ROLE.JAC_REP)) != 0) {
                is_flag_replay = true
            }
        }

        // 小役計数    
        if (is_flag_replay) {
            data.in_medal += IS_REPLAY_ZERO_MEDAL_AS_CALC ? 0 : 3
            data.out_medal += IS_REPLAY_ZERO_MEDAL_AS_CALC ? 0 : 3
        } else {
            data.in_medal += 3
            if ((role_bit & ROLE.BELL_A) != 0) {
                ++data.bell_a
                data.out_medal += 8
            } else if ((role_bit & ROLE.BELL_B) != 0) {
                ++data.bell_b
                data.out_medal += 8
            } else if ((role_bit & ROLE.ICE_A) != 0) {
                ++data.ice_a
                data.out_medal += 8
            } else if ((role_bit & ROLE.ICE_B) != 0) {
                ++data.ice_b
                data.out_medal += 8
            } else if ((role_bit & ROLE.CHER_A1) != 0) {
                ++data.cher_a1
                data.out_medal += 4
            } else if ((role_bit & ROLE.CHER_A2) != 0) {
                ++data.cher_a2
                data.out_medal += 4
            } else if ((role_bit & ROLE.CHER_B) != 0) {
                ++data.cher_b
                data.out_medal += 4
            }
        }

        ++data.bonus_span_game_count
        ++data.bb_span_game_count
        ++data.rb_span_game_count
        if (data.bonus_span_game_count > data.longest_bonus_span_game_count) {
            data.longest_bonus_span_game_count = data.bonus_span_game_count
        }
        if (data.bb_span_game_count > data.longest_bb_span_game_count) {
            data.longest_bb_span_game_count = data.bb_span_game_count
        }
        if (data.rb_span_game_count > data.longest_rb_span_game_count) {
            data.longest_rb_span_game_count = data.rb_span_game_count
        }

        // ボーナス消化開始
        if ((role_bit & ROLE.D_BB) != 0) {
            if (role_bit == ROLE.D_BB) {
                ++data.alone_don_bb
            } else if ((role_bit & ROLE.RT_REP) != 0) {
                ++data.rt_rep_don_bb
            } else if ((role_bit & ROLE.JAC_REP) != 0) {
                ++data.jac_rep_don_bb
            } else if ((role_bit & ROLE.CHER_B) != 0) {
                ++data.cher_b_don_bb
            } else if ((role_bit & ROLE.SP_A) != 0) {
                ++data.sp_a_don_bb
            } else if ((role_bit & ROLE.SP_B) != 0) {
                ++data.sp_b_don_bb
            } else if ((role_bit & ROLE.SP_D) != 0) {
                ++data.sp_d_don_bb
            } else if ((role_bit & ROLE.SP_E) != 0) {
                ++data.sp_e_don_bb
            } else if ((role_bit & ROLE.BELL_B) != 0) {
                ++data.bell_b_don_bb
            }
            ++data.d_bb
            data.in_medal += 1 + 3 * 29
            data.out_medal += 10 * 29
            data.bb_bell = digest_big_bonus(data.setting)
            data.hriz_bell += data.bb_bell.horizontal_bell
            data.lean_bell += data.bb_bell.leaning_bell
            data.rare_bell += data.bb_bell.rare_bell
            data.left_hc_game_count = 20
            data.left_hg_game_count = 0

            data.bonus_span_game_count = 0
            data.bb_span_game_count = 0
        } else if ((role_bit & ROLE.R_BB) != 0) {
            if (role_bit == ROLE.R_BB) {
                ++data.alone_red_bb
            } else if ((role_bit & ROLE.RT_REP) != 0) {
                ++data.rt_rep_red_bb
            } else if ((role_bit & ROLE.JAC_REP) != 0) {
                ++data.jac_rep_red_bb
            } else if ((role_bit & ROLE.CHER_B) != 0) {
                ++data.cher_b_red_bb
            } else if ((role_bit & ROLE.SP_A) != 0) {
                ++data.sp_a_red_bb
            } else if ((role_bit & ROLE.SP_C) != 0) {
                ++data.sp_c_red_bb
            } else if ((role_bit & ROLE.SP_E) != 0) {
                ++data.sp_e_red_bb
            } else if ((role_bit & ROLE.CHER_A1) != 0) {
                ++data.cher_a1_red_bb
            }
            ++data.r_bb
            data.in_medal += 1 + 3 * 29
            data.out_medal += 10 * 29
            data.bb_bell = digest_big_bonus(data.setting)
            data.hriz_bell += data.bb_bell.horizontal_bell
            data.lean_bell += data.bb_bell.leaning_bell
            data.rare_bell += data.bb_bell.rare_bell
            data.left_hc_game_count = 20
            data.left_hg_game_count = 0

            data.bonus_span_game_count = 0
            data.bb_span_game_count = 0
        } else if ((role_bit & ROLE.RB) != 0) {
            if (role_bit == ROLE.RB) {
                ++data.alone_rb
            } else if ((role_bit & ROLE.RT_REP) != 0) {
                ++data.rt_rep_rb
            } else if ((role_bit & ROLE.CHER_B) != 0) {
                ++data.cher_b_rb
            } else if ((role_bit & ROLE.SP_B) != 0) {
                ++data.sp_b_rb
            } else if ((role_bit & ROLE.SP_D) != 0) {
                ++data.sp_d_rb
            } else if ((role_bit & ROLE.SP_E) != 0) {
                ++data.sp_e_rb
            }
            ++data.rb
            data.rb_data = digest_reg_bonus(data.setting, data.rb_push_order)
            data.in_medal += 1 + data.rb_data.in_medal
            data.out_medal += data.rb_data.out_medal

            data.rb_game_count += data.rb_data.game_count
            data.rb_one_medal_role += data.rb_data.one_medal_role
            data.rb_lean_ice += data.rb_data.leaning_ice
            data.rb_blank += data.rb_data.blank
            data.rb_pank_lv_low += data.rb_data.pank_lv_low
            data.rb_pank_lv_mid += data.rb_data.pank_lv_mid
            data.rb_pank_lv_high += data.rb_data.pank_lv_high
            data.rb_showed_peace_lv_low += data.rb_data.showed_peace_lv_low
            data.rb_showed_peace_lv_mid += data.rb_data.showed_peace_lv_mid
            data.rb_showed_peace_lv_high += data.rb_data.showed_peace_lv_high
            data.left_hc_game_count = 0
            data.left_hg_game_count = 0

            data.bonus_span_game_count = 0
            data.rb_span_game_count = 0
        }

        if (data.cnt % section_unit == 0) {
            data.section_total_medal.push(data.out_medal - data.in_medal)
            data.section_total_medal_labels.push(data.cnt.toString())
        }
    }

    self.postMessage(data)
})