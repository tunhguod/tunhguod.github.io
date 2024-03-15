importScripts('./const.js', './function.js');

class Role {

    flag_thresh = new Array();

    get_mapped_flag_num(flag) {
        let num = 0;
        // XXX: ???
        num += flag[flag.length - 1];
        return num;
    }

    constructor(setting) {
        let rt_thresh = 0;
        switch (setting) {
            case SETTING.LOW_1:
                // リテラルな整数値はそのフラグが 65536 個のフラグに対していくつ割り当てられるかを表す
                this.flag_thresh.push(40);                                                     // 0:  単独ドンBB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 32);        // 1:  単独赤七BB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 52);        // 2:  単独RB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 15);        // 3:  RTリプ + ドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 15);        // 4:  RTリプ + 赤七
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 30);        // 5:  RTリプ + RB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 16);        // 6:  JACリプ + ドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 8);         // 7:  JACリプ + 赤七
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 6);         // 8:  チェリーB + ドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 6);         // 9:  チェリーB + 赤七
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 10);        // 10: チェリーB + RB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 8);         // 11: Aドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 16);        // 12: A赤
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 8);         // 13: Bドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 40);        // 14: Bバケ
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 20);        // 15: C赤
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 16);        // 16: Dドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 30);        // 17: Dバケ
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 5);         // 18: Eドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 17);        // 19: E赤
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 22);        // 20: Eバケ
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 4);         // 21: 風鈴B + ドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 4);         // 22: チェリーA + 赤七
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 4283);      // 23: ベルA
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 4283 - 4);  // 24: ベルB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 1239);      // 25: 氷A
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 40);        // 26: 氷B
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 659 - 4);   // 27: チェリーA1
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 3121);      // 28: チェリーA2
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 232 - 22);  // 29: チェリーB

                rt_thresh = this.get_mapped_flag_num(this.flag_thresh);
                this.flag_thresh.push(rt_thresh + 8977);                                       // 30: リプ
                this.flag_thresh.push(rt_thresh + 21845);                                      // 31: HC中RTリプ
                this.flag_thresh.push(rt_thresh + 21845 + 10923);                              // 32: HC中ハズレ
                this.flag_thresh.push(rt_thresh + 21845 + 10923 + 18724);                      // 33: HC中JACリプ
                this.flag_thresh.push(rt_thresh + 8977 + 4891);                                // 34: HG中ハズレ
                this.flag_thresh.push(rt_thresh + 8977 + 4891 + 37449);                        // 35: HG中RTリプ

                break;
            case SETTING.LOW_2:
                this.flag_thresh.push(41);                                                     // 0:  単独ドンBB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 33);        // 1:  単独赤七BB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 56);        // 2:  単独RB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 15);        // 3:  RTリプ + ドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 15);        // 4:  RTリプ + 赤七
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 32);        // 5:  RTリプ + RB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 17);        // 6:  JACリプ + ドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 8);         // 7:  JACリプ + 赤七
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 6);         // 8:  チェリーB + ドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 6);         // 9:  チェリーB + 赤七
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 11);        // 10: チェリーB + RB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 8);         // 11: Aドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 17);        // 12: A赤
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 8);         // 13: Bドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 43);        // 14: Bバケ
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 21);        // 15: C赤
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 17);        // 16: Dドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 33);        // 17: Dバケ
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 6);         // 18: Eドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 18);        // 19: E赤
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 23);        // 20: Eバケ
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 4);         // 21: 風鈴B + ドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 4);         // 22: チェリーA + 赤七
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 4398);      // 24: ベルA
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 4201 - 4);  // 25: ベルB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 1225);      // 26: 氷A
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 40);        // 27: 氷B
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 659 - 4);   // 28: チェリーA1
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 3396);      // 29: チェリーA2
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 233 - 23);  // 30: チェリーB

                rt_thresh = this.get_mapped_flag_num(this.flag_thresh);
                this.flag_thresh.push(rt_thresh + 8977);                                       // 30: リプ
                this.flag_thresh.push(rt_thresh + 21141);                                      // 31: HC中RTリプ
                this.flag_thresh.push(rt_thresh + 21141 + 11299);                              // 32: HC中ハズレ
                this.flag_thresh.push(rt_thresh + 21141 + 11299 + 18724);                      // 33: HC中JACリプ
                this.flag_thresh.push(rt_thresh + 8977 + 5285);                                // 34: HG中ハズレ
                this.flag_thresh.push(rt_thresh + 8977 + 5285 + 36817);                        // 35: HG中RTリプ

                break;
            case SETTING.HIGH_5:
                this.flag_thresh.push(42);                                                     // 0:  単独ドンBB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 34);        // 1:  単独赤七BB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 60);        // 2:  単独RB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 16);        // 3:  RTリプ + ドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 16);        // 4:  RTリプ + 赤七
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 34);        // 5:  RTリプ + RB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 17);        // 6:  JACリプ + ドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 9);         // 7:  JACリプ + 赤七
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 7);         // 8:  チェリーB + ドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 7);         // 9:  チェリーB + 赤七
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 13);        // 10: チェリーB + RB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 9);         // 11: Aドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 17);        // 12: A赤
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 9);         // 13: Bドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 47);        // 14: Bバケ
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 22);        // 15: C赤
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 17);        // 16: Dドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 36);        // 17: Dバケ
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 6);         // 18: Eドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 18);        // 19: E赤
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 24);        // 20: Eバケ
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 5);         // 21: 風鈴B + ドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 5);         // 22: チェリーA + 赤七
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 4520);      // 23: ベルA
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 4283 - 5);  // 24: ベルB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 1321);      // 25: 氷A
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 40);        // 26: 氷B
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 660 - 5);   // 27: チェリーA1
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 3181);      // 28: チェリーA2
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 237 - 27);  // 29: チェリーB

                rt_thresh = this.get_mapped_flag_num(this.flag_thresh);
                this.flag_thresh.push(rt_thresh + 8977);                                       // 30: リプ
                this.flag_thresh.push(rt_thresh + 20480);                                      // 31: HC中RTリプ
                this.flag_thresh.push(rt_thresh + 20480 + 12365);                              // 32: HC中ハズレ
                this.flag_thresh.push(rt_thresh + 20480 + 12465 + 18724);                      // 33: HC中JACリプ
                this.flag_thresh.push(rt_thresh + 8977 + 6489);                                // 34: HG中ハズレ
                this.flag_thresh.push(rt_thresh + 8977 + 6489 + 35424);                        // 35: HG中RTリプ
                break;
            case SETTING.HIGH_6:
                this.flag_thresh.push(42);                                                     // 0:  単独ドンBB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 35);        // 1:  単独赤七BB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 66);        // 2:  単独RB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 16);        // 3:  RTリプ + ドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 16);        // 4:  RTリプ + 赤七
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 37);        // 5:  RTリプ + RB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 18);        // 6:  JACリプ + ドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 10);        // 7:  JACリプ + 赤七
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 7);         // 8:  チェリーB + ドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 7);         // 9:  チェリーB + 赤七
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 15);        // 10: チェリーB + RB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 10);        // 11: Aドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 18);        // 12: A赤
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 10);        // 13: Bドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 51);        // 14: Bバケ
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 22);        // 15: C赤
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 18);        // 16: Dドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 40);        // 17: Dバケ
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 6);         // 18: Eドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 19);        // 19: E赤
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 25);        // 20: Eバケ
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 5);         // 21: 風鈴B + ドン
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 5);         // 22: チェリーA + 赤七
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 4648);      // 23: ベルA
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 4340 - 5);  // 24: ベルB
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 1290);      // 25: 氷A
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 40);        // 26: 氷B
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 660 - 5);   // 27: チェリーA1
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 3293);      // 28: チェリーA2
                this.flag_thresh.push(this.get_mapped_flag_num(this.flag_thresh) + 239 - 29);  // 29: チェリーB

                rt_thresh = this.get_mapped_flag_num(this.flag_thresh);
                this.flag_thresh.push(rt_thresh + 8977);                                       // 30: リプ
                this.flag_thresh.push(rt_thresh + 19859);                                      // 31: HC中RTリプ
                this.flag_thresh.push(rt_thresh + 19859 + 12850);                              // 32: HC中ハズレ
                this.flag_thresh.push(rt_thresh + 19859 + 12850 + 18724);                      // 33: HC中JACリプ
                this.flag_thresh.push(rt_thresh + 8977 + 6899);                                // 34: HG中ハズレ
                this.flag_thresh.push(rt_thresh + 8977 + 6899 + 34675);                        // 35: HG中RTリプ
                break;
        }
    }

    get_role(flag) {
        let role = 0;
        if (0 <= flag && flag < this.flag_thresh[0]) {
            role = ROLE.D_BB;
        } else if (this.flag_thresh[0] <= flag && flag < this.flag_thresh[1]) {
            role = ROLE.R_BB;
        } else if (this.flag_thresh[1] <= flag && flag < this.flag_thresh[2]) {
            role = ROLE.RB;
        } else if (this.flag_thresh[2] <= flag && flag < this.flag_thresh[3]) {
            role = ROLE.D_BB | ROLE.RT_REP;
        } else if (this.flag_thresh[3] <= flag && flag < this.flag_thresh[4]) {
            role = ROLE.R_BB | ROLE.RT_REP;
        } else if (this.flag_thresh[4] <= flag && flag < this.flag_thresh[5]) {
            role = ROLE.RB | ROLE.RT_REP;
        } else if (this.flag_thresh[5] <= flag && flag < this.flag_thresh[6]) {
            role = ROLE.D_BB | ROLE.JAC_REP;
        } else if (this.flag_thresh[6] <= flag && flag < this.flag_thresh[7]) {
            role = ROLE.R_BB | ROLE.JAC_REP;
        } else if (this.flag_thresh[7] <= flag && flag < this.flag_thresh[8]) {
            role = ROLE.D_BB | ROLE.CHER_B;
        } else if (this.flag_thresh[8] <= flag && flag < this.flag_thresh[9]) {
            role = ROLE.R_BB | ROLE.CHER_B;
        } else if (this.flag_thresh[9] <= flag && flag < this.flag_thresh[10]) {
            role = ROLE.RB | ROLE.CHER_B;
        } else if (this.flag_thresh[10] <= flag && flag < this.flag_thresh[11]) {
            role = ROLE.D_BB | ROLE.SP_A;
        } else if (this.flag_thresh[11] <= flag && flag < this.flag_thresh[12]) {
            role = ROLE.R_BB | ROLE.SP_A;
        } else if (this.flag_thresh[12] <= flag && flag < this.flag_thresh[13]) {
            role = ROLE.D_BB | ROLE.SP_B;
        } else if (this.flag_thresh[13] <= flag && flag < this.flag_thresh[14]) {
            role = ROLE.RB | ROLE.SP_B;
        } else if (this.flag_thresh[14] <= flag && flag < this.flag_thresh[15]) {
            role = ROLE.R_BB | ROLE.SP_C;
        } else if (this.flag_thresh[15] <= flag && flag < this.flag_thresh[16]) {
            role = ROLE.D_BB | ROLE.SP_D;
        } else if (this.flag_thresh[16] <= flag && flag < this.flag_thresh[17]) {
            role = ROLE.RB | ROLE.SP_D;
        } else if (this.flag_thresh[17] <= flag && flag < this.flag_thresh[18]) {
            role = ROLE.D_BB | ROLE.SP_E;
        } else if (this.flag_thresh[18] <= flag && flag < this.flag_thresh[19]) {
            role = ROLE.R_BB | ROLE.SP_E;
        } else if (this.flag_thresh[19] <= flag && flag < this.flag_thresh[20]) {
            role = ROLE.RB | ROLE.SP_E;
        } else if (this.flag_thresh[20] <= flag && flag < this.flag_thresh[21]) {
            role = ROLE.D_BB | ROLE.BELL_B;
        } else if (this.flag_thresh[21] <= flag && flag < this.flag_thresh[22]) {
            role = ROLE.R_BB | ROLE.CHER_A1;
        } else if (this.flag_thresh[22] <= flag && flag < this.flag_thresh[23]) {
            role = ROLE.BELL_A;
        } else if (this.flag_thresh[23] <= flag && flag < this.flag_thresh[24]) {
            role = ROLE.BELL_B;
        } else if (this.flag_thresh[24] <= flag && flag < this.flag_thresh[25]) {
            role = ROLE.ICE_A;
        } else if (this.flag_thresh[25] <= flag && flag < this.flag_thresh[26]) {
            role = ROLE.ICE_B;
        } else if (this.flag_thresh[26] <= flag && flag < this.flag_thresh[27]) {
            role = ROLE.CHER_A1;
        } else if (this.flag_thresh[27] <= flag && flag < this.flag_thresh[28]) {
            role = ROLE.CHER_A2;
        } else if (this.flag_thresh[28] <= flag && flag < this.flag_thresh[29]) {
            role = ROLE.CHER_B;
        }

        if (this.flag_thresh[29] <= flag && flag < this.flag_thresh[30]) {
            role = ROLE.REP;
        } else if (this.flag_thresh[30] <= flag && flag < this.flag_thresh[31]) {
            role = ROLE.HC_RT_REP;
        } else if (this.flag_thresh[31] <= flag && flag < this.flag_thresh[32]) {
            role = ROLE.HC_BLANK;
        } else if (this.flag_thresh[32] <= flag && flag < this.flag_thresh[33]) {
            role = ROLE.HC_JAC_REP;
        }

        if (this.flag_thresh[30] <= flag && flag < this.flag_thresh[34]) {
            role += ROLE.HG_BLANK;
        } else if (this.flag_thresh[34] <= flag && flag < this.flag_thresh[35]) {
            role += ROLE.HG_RT_REP;
        }

        // print("flag: " + flag + ", role: " + role.toString(2));

        return role
    }
}

self.addEventListener("message", (e) => {
    var data = e.data
    var role = new Role(data.setting)
    var section_unit = Math.trunc(data.simulate_game_count / 100);
    for (; data.cnt < data.simulate_game_count; ++data.cnt) {
        let role_bit = role.get_role(get_flag(65536));

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
            data.rb_data = digest_reg_bonus(data.setting, data.rb_push_order);
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

        if (data.cnt % section_unit == 0) {
            data.section_total_medal.push(data.out_medal - data.in_medal);
            data.section_total_medal_labels.push(data.cnt.toString());
        }
    }

    self.postMessage(data);
})