importScripts('./const.js', './function.js')

class Role {
    flag_thresh = new Array()
    vc_flag_thresh = new Array()
    vg_flag_thresh = new Array()
    is_test = false
    call_count = 0

    map_flag(arr, flag) {
        const len = this.flag_thresh.length
        if (len == 0) {
            arr.push(flag)
        } else {
            arr.push(arr.slice(-1)[0] + flag)
        }
    }

    constructor(setting, is_test = false) {
        this.is_test = is_test
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SINGLE_X[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SINGLE_RED[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SINGLE_RB[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.RT_REP_X[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.RT_REP_RED[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.RT_REP_RB[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.JAC_REP_X[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.JAC_REP_RED[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.CHR_B_X[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.CHR_B_RED[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.CHR_B_RB[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SP_A_RED[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SP_B_RED[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SP_C_RED[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SP_D_X[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SP_D_RB[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SP_E_X[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.SP_E_RB[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.BELL_A_X[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.CHR_A_RED[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.BELL_A[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.BELL_B[setting] - MAPPED_FLAG.BELL_A_X[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.ICE_A[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.ICE_B[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.CHR_A[setting] - MAPPED_FLAG.CHR_A_RED[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.CHR_B[setting] - MAPPED_FLAG.CHR_B_X[setting] - MAPPED_FLAG.CHR_B_RED[setting] - MAPPED_FLAG.CHR_B_RB[setting])
        this.map_flag(this.flag_thresh, MAPPED_FLAG.REP[setting] - MAPPED_FLAG.RT_REP_X[setting] - MAPPED_FLAG.RT_REP_RED[setting] - MAPPED_FLAG.RT_REP_RB[setting])

        this.vc_flag_thresh.push(this.flag_thresh.slice(-1)[0] + MAPPED_FLAG.VC_RT_BLANK[setting])
        this.map_flag(this.vc_flag_thresh, MAPPED_FLAG.VC_JAC_REP[setting])

        this.vg_flag_thresh.push(this.flag_thresh.slice(-1)[0] + MAPPED_FLAG.VG_RT_BLANK[setting])
    }

    get_rt_role(flag, state) {
        let role = 0x00
        const thresh = this.flag_thresh.slice(-1)[0]
        if (state == STATE.VC) {
            if (thresh <= flag && flag < this.vc_flag_thresh[0]) {
                role = ROLE.BLANK
            } else if (this.vc_flag_thresh[0] <= flag && flag < this.vc_flag_thresh[1]) {
                role = ROLE.VC_JAC_REP
            } else {
                role = ROLE.VC_RT_REP
            }
        } else { // STATE.VG
            if (thresh <= flag && flag < this.vg_flag_thresh[0]) {
                role = ROLE.BLANK
            } else {
                role = ROLE.VG_RT_REP
            }
        }

        return role
    }

    get_role(flag, state) {
        let role = 0x00
        if (this.is_test) {
            role = TEST_FLAG_LIST[this.call_count]
            ++this.call_count
            return role
        }

        if (flag < this.flag_thresh[0]) {
            role = ROLE.X_BB
        } else if (flag < this.flag_thresh[1]) {
            role = ROLE.R_BB
        } else if (flag < this.flag_thresh[2]) {
            role = ROLE.RB
        } else if (flag < this.flag_thresh[3]) {
            role = ROLE.X_BB | ROLE.RT_REP
        } else if (flag < this.flag_thresh[4]) {
            role = ROLE.R_BB | ROLE.RT_REP
        } else if (flag < this.flag_thresh[5]) {
            role = ROLE.RB | ROLE.RT_REP
        } else if (flag < this.flag_thresh[6]) {
            role = ROLE.X_BB | ROLE.JAC_REP
        } else if (flag < this.flag_thresh[7]) {
            role = ROLE.R_BB | ROLE.JAC_REP
        } else if (flag < this.flag_thresh[8]) {
            role = ROLE.X_BB | ROLE.CHER_B
        } else if (flag < this.flag_thresh[9]) {
            role = ROLE.R_BB | ROLE.CHER_B
        } else if (flag < this.flag_thresh[10]) {
            role = ROLE.RB | ROLE.CHER_B
        } else if (flag < this.flag_thresh[11]) {
            role = ROLE.R_BB | ROLE.SP_A
        } else if (flag < this.flag_thresh[12]) {
            role = ROLE.R_BB | ROLE.SP_B
        } else if (flag < this.flag_thresh[13]) {
            role = ROLE.R_BB | ROLE.SP_C
        } else if (flag < this.flag_thresh[14]) {
            role = ROLE.X_BB | ROLE.SP_D
        } else if (flag < this.flag_thresh[15]) {
            role = ROLE.RB | ROLE.SP_D
        } else if (flag < this.flag_thresh[16]) {
            role = ROLE.X_BB | ROLE.SP_E
        } else if (flag < this.flag_thresh[17]) {
            role = ROLE.RB | ROLE.SP_E
        } else if (flag < this.flag_thresh[18]) {
            role = ROLE.X_BB | ROLE.BELL_A
        } else if (flag < this.flag_thresh[19]) {
            role = ROLE.R_BB | ROLE.CHER_A
        } else if (flag < this.flag_thresh[20]) {
            role = ROLE.BELL_A
        } else if (flag < this.flag_thresh[21]) {
            role = ROLE.BELL_B
        } else if (flag < this.flag_thresh[22]) {
            role = ROLE.ICE_A
        } else if (flag < this.flag_thresh[23]) {
            role = ROLE.ICE_B
        } else if (flag < this.flag_thresh[24]) {
            role = ROLE.CHER_A
        } else if (flag < this.flag_thresh[25]) {
            role = ROLE.CHER_B
        } else if (flag < this.flag_thresh[26]) {
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
    var role = new Role(data.setting, DEBUG_MODE)
    const simulate_game_count = DEBUG_MODE ? TEST_FLAG_LIST.length : data.simulate_game_count
    var section_unit = Math.trunc(simulate_game_count / 100)
    let role_bit = 0x00
    for (; data.cnt < simulate_game_count; ++data.cnt) {
        if (data.left_vg_game_count > 0) { // VG 中
            role_bit = role.get_role(get_flag(65536), STATE.VG)
            --data.left_vg_game_count
            ++data.vg_game_count
            if ((role_bit & ROLE.BLANK) != 0) {
                ++data.vg_blank
            }
        } else if (data.left_vc_game_count > 0) { // VC 中
            role_bit = role.get_role(get_flag(65536), STATE.VC)
            --data.left_vc_game_count
            ++data.vc_game_count
            // jacin
            if (((role_bit & ROLE.VC_JAC_REP) != 0) && data.left_vc_game_count <= 7) {
                data.left_vg_game_count = 20
                data.left_vc_game_count = 0
            }
            if ((role_bit & ROLE.BLANK) != 0) {
                ++data.vc_blank
            }
        } else { // 通常時
            role_bit = role.get_role(get_flag(65536), STATE.NORMAL)
        }

        // 小役計数    
        if (is_flag_replay(role_bit)) {
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
                data.out_medal += 12
            } else if ((role_bit & ROLE.ICE_B) != 0) {
                ++data.ice_b
                data.out_medal += 12
            } else if ((role_bit & ROLE.CHER_A) != 0) {
                ++data.cher_a
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
        if ((role_bit & ROLE.X_BB) != 0) {
            if (role_bit == ROLE.X_BB) {
                ++data.alone_x_bb
            } else if ((role_bit & ROLE.RT_REP) != 0) {
                ++data.rt_rep_x_bb
            } else if ((role_bit & ROLE.JAC_REP) != 0) {
                ++data.jac_rep_x_bb
            } else if ((role_bit & ROLE.CHER_B) != 0) {
                ++data.cher_b_x_bb
            } else if ((role_bit & ROLE.SP_D) != 0) {
                ++data.sp_d_x_bb
            } else if ((role_bit & ROLE.SP_E) != 0) {
                ++data.sp_e_x_bb
            } else if ((role_bit & ROLE.BELL_A) != 0) {
                ++data.bell_a_x_bb
            }
            ++data.x_bb
            data.in_medal += 1 + 3 * 24
            data.out_medal += 12 * 24 + 9
            let bb_data = digest_big_bonus(data.setting)
            data.bb_bell += bb_data.bb_bell
            data.bb_cherry_bell += bb_data.bb_cherry_bell
            data.bb_cherry += bb_data.bb_cherry
            data.bb_high_cherry += bb_data.bb_high_cherry
            data.left_vc_game_count = 20
            data.left_vg_game_count = 0

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
            } else if ((role_bit & ROLE.SP_B) != 0) {
                ++data.sp_b_red_bb
            } else if ((role_bit & ROLE.SP_C) != 0) {
                ++data.sp_c_red_bb
            } else if ((role_bit & ROLE.CHER_A) != 0) {
                ++data.cher_a_red_bb
            }
            ++data.r_bb
            data.in_medal += 1 + 3 * 25
            data.out_medal += 12 * 24 + 9
            let bb_data = digest_big_bonus(data.setting)
            data.bb_bell += bb_data.bb_bell
            data.bb_cherry_bell += bb_data.bb_cherry_bell
            data.bb_cherry += bb_data.bb_cherry
            data.bb_high_cherry += bb_data.bb_high_cherry
            data.left_vc_game_count = 20
            data.left_vg_game_count = 0

            data.bonus_span_game_count = 0
            data.bb_span_game_count = 0
        } else if ((role_bit & ROLE.RB) != 0) {
            if (role_bit == ROLE.RB) {
                ++data.alone_rb
            } else if ((role_bit & ROLE.RT_REP) != 0) {
                ++data.rt_rep_rb
            } else if ((role_bit & ROLE.CHER_B) != 0) {
                ++data.cher_b_rb
            } else if ((role_bit & ROLE.SP_D) != 0) {
                ++data.sp_d_rb
            } else if ((role_bit & ROLE.SP_E) != 0) {
                ++data.sp_e_rb
            }
            ++data.rb
            let rb_data = digest_reg_bonus(data.setting, data.rb_push_order)
            data.in_medal += 1 + rb_data.in_medal
            data.out_medal += rb_data.out_medal

            data.rb_game_count += rb_data.game_count
            data.rb_one_medal_role += rb_data.one_medal_role
            data.rb_x_bell += rb_data.x_bell
            data.rb_ice += rb_data.ice
            data.rb_blank += rb_data.blank
            // data.rb_pank_lv_low += rb_data.pank_lv_low
            // data.rb_pank_lv_mid += rb_data.pank_lv_mid
            // data.rb_pank_lv_high += rb_data.pank_lv_high
            // data.rb_showed_peace_lv_low += rb_data.showed_peace_lv_low
            // data.rb_showed_peace_lv_mid += rb_data.showed_peace_lv_mid
            // data.rb_showed_peace_lv_high += rb_data.showed_peace_lv_high
            data.left_vc_game_count = 0
            data.left_vg_game_count = 0

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