const ROLE = {
  // ボーナス
  D_BB:     1<<0,
  R_BB:     1<<1,
  RB:       1<<2,

  // 特殊役
  SP_A:     1<<3,
  SP_B:     1<<4,
  SP_C:     1<<5,
  SP_D:     1<<6,
  SP_E:     1<<7,

  // リプレイ
  REP:      1<<8,
  RT_REP:   1<<9,
  JAC_REP:  1<<10,

  // 風鈴
  BELL_A:   1<<11,
  BELL_B:   1<<12,

  // 氷
  ICE_A:    1<<13,
  ICE_B:    1<<14,

  // チェリー
  CHER_A1:  1<<15,
  CHER_A2:  1<<16,
  CHER_B:   1<<17,

  HC_BLANK: 1<<18,
  HG_BLANK: 1<<19,

  HC_JAC_REP: 1<<20,
  HC_RT_REP:  1<<21,
  HG_RT_REP:  1<<22
}

const SETTING = {
  NOT_DEFINED: -1,
  LOW_1: 0,
  LOW_2: 1,
  HIGH_5: 2,
  HIGH_6: 3
}

function print(msg) {
  console.log(msg);
}

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
    switch(setting) {
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

function convert_setting_enum_to_string(setting) {
  switch (setting) {
    case SETTING.LOW_1:
      return "1";
    case SETTING.LOW_2:
      return "2";
    case SETTING.HIGH_5:
      return "5";
    case SETTING.HIGH_6:
      return "6";
    default:
      return "N/A";
  }
}

function to_fixed(value, digits) {

  let fixed_value = value.toFixed(digits);

  if (!isFinite(fixed_value) || fixed_value != fixed_value) {
    return "-";
  }

  return fixed_value.toString();
}

function get_flag(num) {
  return Math.floor(Math.random() * num);
}

function get_random_setting(r1, r2, r5, r6) {
  if (r1 < 0 || r2 < 0 || r5 < 0 || r6 < 0) {
    return SETTING.NOT_DEFINED;
  }

  if ((r1 + r2 + r5 + r6) == 0) {
    r1 = 25;
    r2 = 25;
    r5 = 25;
    r6 = 25;
  }

  if ((r1 + r2 + r5 + r6) != 100) {
    return SETTING.NOT_DEFINED;
  }

  let num = get_flag(100);

  if (0 <= num && num < r1) {
    return SETTING.LOW_1;
  } else if (r1 <= num && num < (r1 + r2)) {
    return SETTING.LOW_2;
  } else if ((r1 + r2) <= num && num < (r1 + r2 + r5)) {
    return SETTING.HIGH_5;
  } else {
    return SETTING.HIGH_6
  }

  return SETTING.NOT_DEFINED;
}

function digest_big_bonus(setting) {
  let data = {};

  let horizontal_bell = 0;
  let leaning_bell = 0;
  let rare_bell = 0;

  for (let i = 0; i < 29; ++i) {
    let flag = get_flag(65536);
    switch(setting) {
      case SETTING.LOW_1:
      case SETTING.HIGH_5:
        if (0 <= flag && flag < 5958) {
          ++leaning_bell;
        } else if (5958 <= flag && flag < 5962) {
          ++rare_bell;
        } else {
          ++horizontal_bell;
        }
        break;
      case SETTING.LOW_2:
        if (0 <= flag && flag < 7282) {
          ++leaning_bell;
        } else if (7282<= flag && flag < 7286) {
          ++rare_bell;
        } else {
          ++horizontal_bell;
        }
        break;
      case SETTING.HIGH_6:
        if (0 <= flag && flag < 7282) {
          ++leaning_bell;
        } else if (7282<= flag && flag < 7382) {
          ++rare_bell;
        } else {
          ++horizontal_bell;
        }
        break;
    }
  }

  data["horizontal_bell"] = horizontal_bell;
  data["leaning_bell"] = leaning_bell;
  data["rare_bell"] = rare_bell;

  return data;
}

function simulate_reg_push() {
  let medal, flag;
  switch (rb_push_order) {
    case "left":
      medal = 10;
      break;
    case "center":
      // TODO
      medal = 15;
      break;
    case "right":
      flag = get_flag(65536)
      if (flag < 16384) {
        medal = 4;
      } else {
        medal = 15;
      }
      break;
  }
  return medal;
}

function digest_reg_bonus(setting) {
  let data = {};

  let one_medal_role = 0;
  let leaning_ice = 0;
  let horizontal_ice = 0;
  let blank = 0;
  let in_medal = 0;
  let out_medal = 0;

  let cnt = 0;
  for (let i = 0; i < 12; ++i) {
    ++in_medal;
    let flag = get_flag(65536);
    switch(setting) {
      case SETTING.LOW_1:
      case SETTING.LOW_2:
        if (0 <= flag && flag < 8192) {
          ++one_medal_role;
        } else if (8192 <= flag && flag < 8522) {
          ++leaning_ice;
          out_medal += 15;
        } else {
          ++horizontal_ice;
          out_medal += simulate_reg_push();
        }
        break;
      case SETTING.HIGH_5:
      case SETTING.HIGH_6:
        if (0 <= flag && flag < 9362) {
          ++one_medal_role;
        } else if (9362 <= flag && flag < 9692) {
          ++leaning_ice;
          out_medal += 15;
        } else if (9692 <= flag && flag < 9866) {
          ++blank;
        } else {
          ++horizontal_ice;
          out_medal += simulate_reg_push();
        }
        break;
    }

    ++cnt;
    if ((leaning_ice + horizontal_ice) >= 8) {
      break;
    }
  }

  let flag = get_flag(1000);
  let not_ice = one_medal_role + blank;

  data["game_count"] = cnt;
  data["one_medal_role"] = one_medal_role;
  data["leaning_ice"] = leaning_ice;
  data["blank"] = blank;
  data["pank_lv_low"] = 0;
  data["pank_lv_mid"] = 0;
  data["pank_lv_high"] = 0;
  data["showed_peace_lv_low"] = 0;
  data["showed_peace_lv_mid"] = 0;
  data["showed_peace_lv_high"] = 0;
  data["in_medal"] = in_medal;
  data["out_medal"] = out_medal;

  print(out_medal - in_medal);

  if (not_ice <= 4) {
    ++data['pank_lv_low'];
    if (setting != SETTING.LOW_1 && flag < 31) {
      ++data["showed_peace_lv_low"];
    }
  } else if (not_ice <= 6) {
    ++data['pank_lv_mid'];
    if (setting != SETTING.LOW_1 && flag < 250) {
      ++data["showed_peace_lv_mid"];
    }
  } else { // >= 7
    ++data['pank_lv_high'];
    if (setting == SETTING.LOW_2 && flag < 250) {
      ++data["showed_peace_lv_high"];
    } else if (setting == SETTING.HIGH_5 && flag < 500) {
      ++data["showed_peace_lv_high"];
    } else if (setting == SETTING.HIGH_6 && flag < 500) {
      ++data["showed_peace_lv_high"];
    }
  }

  return data;
}

// html 要素
let game_count = document.getElementById('game-count');
let all_bonus_count = document.getElementById('all-bonus-count');
let all_bonus_per = document.getElementById('all-bonus-per');
let all_bb_count = document.getElementById('all-bb-count');
let all_bb_per = document.getElementById('all-bb-per');
let don_bb_count = document.getElementById('don-bb-count');
let don_bb_per = document.getElementById('don-bb-per');
let red_bb_count = document.getElementById('red-bb-count');
let red_bb_per = document.getElementById('red-bb-per');
let rb_count = document.getElementById('rb-count');
let rb_per = document.getElementById('rb-per');

let bb_hriz_bell_count = document.getElementById('bb-hriz-bell-count');
let bb_hriz_bell_per = document.getElementById('bb-hriz-bell-per');
let bb_lean_bell_count = document.getElementById('bb-lean-bell-count');
let bb_lean_bell_per = document.getElementById('bb-lean-bell-per');
let bb_rare_bell_count = document.getElementById('bb-rare-bell-count');
let bb_rare_bell_per = document.getElementById('bb-rare-bell-per');

let rb_omr_count = document.getElementById('rb-omr-count');
let rb_omr_per = document.getElementById('rb-omr-per');
let rb_lean_ice_count = document.getElementById('rb-lean-ice-count');
let rb_lean_ice_per = document.getElementById('rb-lean-ice-per');
let rb_blank_count = document.getElementById('rb-blank-count');
let rb_blank_per = document.getElementById('rb-blank-per');

let rb_pank_lv_low_count = document.getElementById('rb-pank-lv-low-count');
let rb_pank_lv_low_per = document.getElementById('rb-pank-lv-low-per');
let rb_pank_lv_mid_count = document.getElementById('rb-pank-lv-mid-count');
let rb_pank_lv_mid_per = document.getElementById('rb-pank-lv-mid-per');
let rb_pank_lv_high_count = document.getElementById('rb-pank-lv-high-count');
let rb_pank_lv_high_per = document.getElementById('rb-pank-lv-high-per');
let rb_showed_peace_lv_low_count = document.getElementById('rb-showed-peace-lv-low-count');
let rb_showed_peace_lv_low_per = document.getElementById('rb-showed-peace-lv-low-per');
let rb_showed_peace_lv_mid_count = document.getElementById('rb-showed-peace-lv-mid-count');
let rb_showed_peace_lv_mid_per = document.getElementById('rb-showed-peace-lv-mid-per');
let rb_showed_peace_lv_high_count = document.getElementById('rb-showed-peace-lv-high-count');
let rb_showed_peace_lv_high_per = document.getElementById('rb-showed-peace-lv-high-per');

let all_bell_count = document.getElementById('all-bell-count');
let all_bell_per = document.getElementById('all-bell-per');
let bell_a_count = document.getElementById('bell-a-count');
let bell_a_per = document.getElementById('bell-a-per');
let bell_b_count = document.getElementById('bell-b-count');
let bell_b_per = document.getElementById('bell-b-per');

let all_ice_count = document.getElementById('all-ice-count');
let all_ice_per = document.getElementById('all-ice-per');
let ice_a_count = document.getElementById('ice-a-count');
let ice_a_per = document.getElementById('ice-a-per');
let ice_b_count = document.getElementById('ice-b-count');
let ice_b_per = document.getElementById('ice-b-per');

let all_cher_count = document.getElementById('all-cher-count');
let all_cher_per = document.getElementById('all-cher-per');
let cher_a1_count = document.getElementById('cher-a1-count');
let cher_a1_per = document.getElementById('cher-a1-per');
let cher_a2_count = document.getElementById('cher-a2-count');
let cher_a2_per = document.getElementById('cher-a2-per');
let cher_b_count = document.getElementById('cher-b-count');
let cher_b_per = document.getElementById('cher-b-per');

let hc_blank_count = document.getElementById('hc-blank-count');
let hc_blank_per = document.getElementById('hc-blank-per');
let hg_blank_count = document.getElementById('hg-blank-count');
let hg_blank_per = document.getElementById('hg-blank-per');

let simulate_button = document.getElementById('simulate-button');
let simulate_game_count_form = document.getElementById('game-count-form');
let select_setting = document.getElementById('select-setting');
let screen_shot_area = document.getElementById('screen-shot-area');

let err_msg_label = document.getElementById('errmsg');

let setting_visibility_button = document.getElementById('setting-visibility-button');
let setting_text = document.getElementById('setting');
let peace_visibility_button = document.getElementById('peace-visibility-button');
let screen_shot_button = document.getElementById('screen-shot-button');

let setting_ratio_pane = document.getElementById('setting-ratio-pane');

let setting_1_ratio_form = document.getElementById('low-1-ratio');
let setting_2_ratio_form = document.getElementById('low-2-ratio');
let setting_5_ratio_form = document.getElementById('high-5-ratio');
let setting_6_ratio_form = document.getElementById('high-6-ratio');

let longest_bonus_span = document.getElementById('longest-b-span');
let longest_bb_span = document.getElementById('longest-bb-span');
let longest_rb_span = document.getElementById('longest-rb-span');

let total_medal = document.getElementById('total-medal');
let payout = document.getElementById('payout');
let slump_canvas = document.getElementById("slump-graph");
let context = slump_canvas.getContext('2d');
// ボーナス詳細
let alone_don_bb_count = document.getElementById('alone-don-bb-count');
let alone_don_bb_per = document.getElementById('alone-don-bb-per');
let alone_red_bb_count = document.getElementById('alone-red-bb-count');
let alone_red_bb_per = document.getElementById('alone-red-bb-per');
let alone_rb_count = document.getElementById('alone-rb-count');
let alone_rb_per = document.getElementById('alone-rb-per');

let rt_rep_don_bb_count = document.getElementById('rt-rep-don-bb-count');
let rt_rep_don_bb_per = document.getElementById('rt-rep-don-bb-per');
let rt_rep_red_bb_count = document.getElementById('rt-rep-red-bb-count');
let rt_rep_red_bb_per = document.getElementById('rt-rep-red-bb-per');
let rt_rep_rb_count = document.getElementById('rt-rep-rb-count');
let rt_rep_rb_per = document.getElementById('rt-rep-rb-per');

let jac_rep_don_bb_count = document.getElementById('jac-rep-don-bb-count');
let jac_rep_don_bb_per = document.getElementById('jac-rep-don-bb-per');
let jac_rep_red_bb_count = document.getElementById('jac-rep-red-bb-count');
let jac_rep_red_bb_per = document.getElementById('jac-rep-red-bb-per');
let jac_rep_rb_count = document.getElementById('jac-rep-rb-count');
let jac_rep_rb_per = document.getElementById('jac-rep-rb-per');

let cher_b_don_bb_count = document.getElementById('cher-b-don-bb-count');
let cher_b_don_bb_per = document.getElementById('cher-b-don-bb-per');
let cher_b_red_bb_count = document.getElementById('cher-b-red-bb-count');
let cher_b_red_bb_per = document.getElementById('cher-b-red-bb-per');
let cher_b_rb_count = document.getElementById('cher-b-rb-count');
let cher_b_rb_per = document.getElementById('cher-b-rb-per');

let sp_a_don_bb_count = document.getElementById('sp-a-don-bb-count');
let sp_a_don_bb_per = document.getElementById('sp-a-don-bb-per');
let sp_a_red_bb_count = document.getElementById('sp-a-red-bb-count');
let sp_a_red_bb_per = document.getElementById('sp-a-red-bb-per');

let sp_b_don_bb_count = document.getElementById('sp-b-don-bb-count');
let sp_b_don_bb_per = document.getElementById('sp-b-don-bb-per');
let sp_b_rb_count = document.getElementById('sp-b-rb-count');
let sp_b_rb_per = document.getElementById('sp-b-rb-per');

let sp_c_red_bb_count = document.getElementById('sp-c-red-bb-count');
let sp_c_red_bb_per = document.getElementById('sp-c-red-bb-per');

let sp_d_don_bb_count = document.getElementById('sp-d-don-bb-count');
let sp_d_don_bb_per = document.getElementById('sp-d-don-bb-per');
let sp_d_rb_count = document.getElementById('sp-d-rb-count');
let sp_d_rb_per = document.getElementById('sp-d-rb-per');

let sp_e_don_bb_count = document.getElementById('sp-e-don-bb-count');
let sp_e_don_bb_per = document.getElementById('sp-e-don-bb-per');
let sp_e_red_bb_count = document.getElementById('sp-e-red-bb-count');
let sp_e_red_bb_per = document.getElementById('sp-e-red-bb-per');
let sp_e_rb_count = document.getElementById('sp-e-rb-count');
let sp_e_rb_per = document.getElementById('sp-e-rb-per');

let bell_b_don_bb_count = document.getElementById('bell-b-don-bb-count');
let bell_b_don_bb_per = document.getElementById('bell-b-don-bb-per');

let cher_a1_red_bb_count = document.getElementById('cher-a1-red-bb-count');
let cher_a1_red_bb_per = document.getElementById('cher-a1-red-bb-per');

let rb_push_order = document.querySelector('[name="rb-1st-order"]:checked').value;
// let rb_center_1st_success_per_form = document.getElementById('rb-center-1st-success-per');
let rb_push_order_group = document.getElementsByName('rb-1st-order');

rb_push_order_group.forEach(function(e) {
  e.addEventListener("click", function() {
    rb_push_order = document.querySelector('[name="rb-1st-order"]:checked').value;
    /* TODO
    if (rb_push_order == "center") {
      rb_center_1st_success_per_form.style.display = "block";
    } else {
      rb_center_1st_success_per_form.style.display = "none";
    }
    */
  });
});

let graph = new Chart(context, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: "差枚数",
        data: [],
        borderColor: 'rgb(255, 99, 132)',
      }],
    }
});

select_setting.addEventListener('change', function(){
  var index = this.selectedIndex;
  if (this.options[index].value == "?") {
    setting_ratio_pane.style.display = "block";
  } else {
    setting_ratio_pane.style.display = "none";
  }
});

setting_visibility_button.onclick = () => {
  if (setting_visibility_button.textContent == "設定を隠す") {
    setting_visibility_button.textContent = "設定を見る";
    setting_text.style.opacity = 0.0;
  } else {
    setting_visibility_button.textContent = "設定を隠す";
    setting_text.style.opacity = 1.0;
  }
  document.activeElement.blur()
}

peace_visibility_button.onclick = () => {
  if (peace_visibility_button.textContent == "ピースを隠す") {
    peace_visibility_button.textContent = "ピースを見る";
    rb_showed_peace_lv_low_count.style.opacity = 0.0;
    rb_showed_peace_lv_low_per.style.opacity = 0.0;
    rb_showed_peace_lv_mid_count.style.opacity = 0.0;
    rb_showed_peace_lv_mid_per.style.opacity = 0.0;
    rb_showed_peace_lv_high_count.style.opacity = 0.0;
    rb_showed_peace_lv_high_per.style.opacity = 0.0;
  } else {
    peace_visibility_button.textContent = "ピースを隠す";
    rb_showed_peace_lv_low_count.style.opacity = 1.0;
    rb_showed_peace_lv_low_per.style.opacity = 1.0;
    rb_showed_peace_lv_mid_count.style.opacity = 1.0;
    rb_showed_peace_lv_mid_per.style.opacity = 1.0;
    rb_showed_peace_lv_high_count.style.opacity = 1.0;
    rb_showed_peace_lv_high_per.style.opacity = 1.0;
  }
  document.activeElement.blur()
}

screen_shot_button.onclick = () => {
  screen_shot_button.disabled = true;
  htmlToImage.toPng(screen_shot_area)
  .then(function (dataUrl) {
    download(dataUrl, 'sim-hanabi-ss.png');
    screen_shot_button.disabled = false;
  })
  .catch(function (error) {
    err_msg_label.textContent = "スクショに失敗しました。";
    err_msg_label.style.visibility = "visible";
    simulate_button.disabled = false;
  });
}

simulate_button.onclick = () => {

  simulate_button.disabled = true;
  err_msg_label.style.visibility = "hidden";

  let simulate_game_count = simulate_game_count_form.value;
  if (simulate_game_count <= 0 || simulate_game_count > 500000) {
    err_msg_label.textContent = "無効なG数が指定されています (1 ~ 500000 の値を指定してください)";
    err_msg_label.style.visibility = "visible";
    simulate_button.disabled = false;
    return;
  }

  switch (select_setting.value) {
    case "1":
      setting = SETTING.LOW_1;
      break;
    case "2":
      setting = SETTING.LOW_2;
      break;
    case "5":
      setting = SETTING.HIGH_5;
      break;
    case "6":
      setting = SETTING.HIGH_6;
      break;
    case "?":
      setting = get_random_setting(Number(setting_1_ratio_form.value),
                                   Number(setting_2_ratio_form.value),
                                   Number(setting_5_ratio_form.value),
                                   Number(setting_6_ratio_form.value));
      if (setting == SETTING.NOT_DEFINED) {
        err_msg_label.textContent = "設定配分が不正です";
        err_msg_label.style.visibility = "visible";
        simulate_button.disabled = false;
        return;
      }
      break;
    default:
      err_msg_label.textContent = "設定を指定してください";
      err_msg_label.style.visibility = "visible";
      simulate_button.disabled = false;
      return;
  }

  setting_text.textContent = convert_setting_enum_to_string(setting);

  let in_medal = 0;
  let out_medal = 0;
  let section_unit = Math.trunc(simulate_game_count / 100);
  let section_total_medal = new Array();
  let section_total_medal_labels = new Array();

  let d_bb = 0;
  let r_bb = 0;
  let rb = 0;

  let bb_bell;
  let hriz_bell = 0;
  let lean_bell = 0;
  let rare_bell = 0;
  let rb_game_count = 0;
  let rb_one_medal_role = 0;
  let rb_lean_ice = 0;
  let rb_blank = 0;
  let rb_pank_lv_low = 0;
  let rb_pank_lv_mid = 0;
  let rb_pank_lv_high = 0;
  let rb_showed_peace_lv_low = 0;
  let rb_showed_peace_lv_mid = 0;
  let rb_showed_peace_lv_high = 0;

  let bell_a = 0;
  let bell_b = 0;
  let ice_a = 0;
  let ice_b = 0;
  let cher_a1 = 0;
  let cher_a2 = 0;
  let cher_b = 0;

  let left_hc_game_count = 0;
  let left_hg_game_count = 0;
  let hc_blank = 0;
  let hg_blank = 0;
  let hc_game_count = 0;
  let hg_game_count = 0;

  let role = new Role(setting);

  let longest_bonus_span_game_count = 0;
  let longest_bb_span_game_count = 0;
  let longest_rb_span_game_count = 0;
  let bonus_span_game_count = 0;
  let bb_span_game_count = 0;
  let rb_span_game_count = 0;

  let alone_don_bb = 0;
  let alone_red_bb = 0;
  let alone_rb = 0;

  let rt_rep_don_bb = 0;
  let rt_rep_red_bb = 0;
  let rt_rep_rb = 0;

  let jac_rep_don_bb = 0;
  let jac_rep_red_bb = 0;

  let cher_b_don_bb = 0;
  let cher_b_red_bb = 0;
  let cher_b_rb = 0;

  let sp_a_don_bb = 0;
  let sp_a_red_bb = 0;

  let sp_b_don_bb = 0;
  let sp_b_rb = 0;

  let sp_c_red_bb = 0;

  let sp_d_don_bb = 0;
  let sp_d_rb = 0;

  let sp_e_don_bb = 0;
  let sp_e_red_bb = 0;
  let sp_e_rb = 0;

  let bell_b_don_bb = 0;
  let cher_a1_red_bb = 0;

  let cnt = 0;
  for (; cnt < simulate_game_count; ++cnt) {
    role_bit = role.get_role(get_flag(65536));
    in_medal += 3;

    // RT 中
    if (left_hg_game_count > 0) {
      --left_hg_game_count;
      ++hg_game_count;
      // print("left_hg: " + left_hg_game_count + ", hg: " + hg_game_count)
      if ((role_bit & ROLE.HG_BLANK) != 0) {
        ++hg_blank;
      }
      if ((role_bit & (ROLE.REP | ROLE.HG_RT_REP | ROLE.RT_REP | ROLE.JAC_REP)) != 0) {
        // 0in0out の補正
        in_medal -= 3;
      }
    } else if (left_hc_game_count > 0) {
      --left_hc_game_count;
      ++hc_game_count;
      // print("left_hc: " + left_hc_game_count + ", hc: " + hc_game_count)
      // jacin
      if (((role_bit & ROLE.HC_JAC_REP) != 0) && left_hc_game_count <= 7) {
        left_hg_game_count = 20;
        left_hc_game_count = 0;
      }
      if ((role_bit & ROLE.HC_BLANK) != 0) {
        ++hc_blank;
      }
      if ((role_bit & (ROLE.HC_RT_REP | ROLE.HC_JAC_REP | ROLE.RT_REP | ROLE.JAC_REP)) != 0) {
        // 0in0out の補正
        in_medal -= 3;
      }
    } else { // 通常時
      if ((role_bit & (ROLE.REP | ROLE.RT_REP | ROLE.JAC_REP)) != 0) {
        // 0in0out の補正
        in_medal -= 3;
      }
    }

    // 小役計数
    if ((role_bit & ROLE.BELL_A) != 0) {
      ++bell_a;
      out_medal += 8;
    } else if ((role_bit & ROLE.BELL_B) != 0) {
      ++bell_b;
      out_medal += 8;
    } else if ((role_bit & ROLE.ICE_A) != 0) {
      ++ice_a;
      out_medal += 8;
    } else if ((role_bit & ROLE.ICE_B) != 0) {
      ++ice_b;
      out_medal += 8;
    } else if ((role_bit & ROLE.CHER_A1) != 0) {
      ++cher_a1;
      out_medal += 4;
    } else if ((role_bit & ROLE.CHER_A2) != 0) {
      ++cher_a2;
      out_medal += 4;
    } else if ((role_bit & ROLE.CHER_B) != 0) {
      ++cher_b;
      out_medal += 4;
    }

    ++bonus_span_game_count;
    ++bb_span_game_count;
    ++rb_span_game_count;
    if (bonus_span_game_count > longest_bonus_span_game_count) {
      longest_bonus_span_game_count = bonus_span_game_count;
    }
    if (bb_span_game_count > longest_bb_span_game_count) {
      longest_bb_span_game_count = bb_span_game_count;
    }
    if (rb_span_game_count > longest_rb_span_game_count) {
      longest_rb_span_game_count = rb_span_game_count;
    }

    // ボーナス消化開始
    if ((role_bit & ROLE.D_BB) != 0) {
      if (role_bit == ROLE.D_BB) {
        ++alone_don_bb;
      } else if ((role_bit & ROLE.RT_REP) != 0) {
        ++rt_rep_don_bb;
      } else if ((role_bit & ROLE.JAC_REP) != 0) {
        ++jac_rep_don_bb;
      } else if ((role_bit & ROLE.CHER_B) != 0) {
        ++cher_b_don_bb;
      } else if ((role_bit & ROLE.SP_A) != 0) {
        ++sp_a_don_bb;
      } else if ((role_bit & ROLE.SP_B) != 0) {
        ++sp_b_don_bb;
      } else if ((role_bit & ROLE.SP_D) != 0) {
        ++sp_d_don_bb;
      } else if ((role_bit & ROLE.SP_E) != 0) {
        ++sp_e_don_bb;
      } else if ((role_bit & ROLE.BELL_B) != 0) {
        ++bell_b_don_bb;
      }
      ++d_bb;
      in_medal += 1 + 3 * 29;
      out_medal += 10 * 29;
      bb_bell = digest_big_bonus(setting);
      hriz_bell += bb_bell.horizontal_bell;
      lean_bell += bb_bell.leaning_bell;
      rare_bell += bb_bell.rare_bell;
      left_hc_game_count = 20;
      left_hg_game_count = 0;

      bonus_span_game_count = 0;
      bb_span_game_count = 0;
    } else if ((role_bit & ROLE.R_BB) != 0) {
      if (role_bit == ROLE.R_BB) {
        ++alone_red_bb;
      } else if ((role_bit & ROLE.RT_REP) != 0) {
        ++rt_rep_red_bb;
      } else if ((role_bit & ROLE.JAC_REP) != 0) {
        ++jac_rep_red_bb;
      } else if ((role_bit & ROLE.CHER_B) != 0) {
        ++cher_b_red_bb;
      } else if ((role_bit & ROLE.SP_A) != 0) {
        ++sp_a_red_bb;
      } else if ((role_bit & ROLE.SP_C) != 0) {
        ++sp_c_red_bb;
      } else if ((role_bit & ROLE.SP_E) != 0) {
        ++sp_e_red_bb;
      } else if ((role_bit & ROLE.CHER_A1) != 0) {
        ++cher_a1_red_bb;
      }
      ++r_bb;
      in_medal += 1 + 3 * 29;
      out_medal += 10 * 29;
      bb_bell = digest_big_bonus(setting);
      hriz_bell += bb_bell.horizontal_bell;
      lean_bell += bb_bell.leaning_bell;
      rare_bell += bb_bell.rare_bell;
      left_hc_game_count = 20;
      left_hg_game_count = 0;

      bonus_span_game_count = 0;
      bb_span_game_count = 0;
    } else if ((role_bit & ROLE.RB) != 0) {
      if (role_bit == ROLE.RB) {
        ++alone_rb;
      } else if ((role_bit & ROLE.RT_REP) != 0) {
        ++rt_rep_rb;
      } else if ((role_bit & ROLE.CHER_B) != 0) {
        ++cher_b_rb;
      } else if ((role_bit & ROLE.SP_B) != 0) {
        ++sp_b_rb;
      } else if ((role_bit & ROLE.SP_D) != 0) {
        ++sp_d_rb;
      } else if ((role_bit & ROLE.SP_E) != 0) {
        ++sp_e_rb;
      }
      ++rb;
      rb_data = digest_reg_bonus(setting);
      in_medal += 1 + rb_data.in_medal;
      out_medal += rb_data.out_medal;

      rb_game_count += rb_data.game_count;
      rb_one_medal_role += rb_data.one_medal_role;
      rb_lean_ice += rb_data.leaning_ice;
      rb_blank += rb_data.blank;
      rb_pank_lv_low += rb_data.pank_lv_low;
      rb_pank_lv_mid += rb_data.pank_lv_mid;
      rb_pank_lv_high += rb_data.pank_lv_high;
      rb_showed_peace_lv_low += rb_data.showed_peace_lv_low;
      rb_showed_peace_lv_mid += rb_data.showed_peace_lv_mid;
      rb_showed_peace_lv_high += rb_data.showed_peace_lv_high;
      left_hc_game_count = 0;
      left_hg_game_count = 0;

      bonus_span_game_count = 0;
      rb_span_game_count = 0;
    }

    if (cnt % section_unit == 0) {
      section_total_medal.push(out_medal - in_medal);
      section_total_medal_labels.push(cnt.toString());
    }
  }

  section_total_medal.push(out_medal - in_medal);
  section_total_medal_labels.push(cnt.toString());

  let bb = d_bb + r_bb;
  let bb_bell_count = bb * 29;

  game_count.textContent = cnt + "G";
  all_bonus_count.textContent = bb + rb + "回";
  all_bonus_per.textContent = "1/" + to_fixed(cnt / (bb + rb), 1);
  all_bb_count.textContent = bb + "回";
  all_bb_per.textContent = "1/" + to_fixed(cnt / bb, 1);
  don_bb_count.textContent = d_bb + "回";
  don_bb_per.textContent = "1/" + to_fixed(cnt / d_bb, 1);
  red_bb_count.textContent = r_bb + "回";
  red_bb_per.textContent = "1/" + to_fixed(cnt / r_bb, 1);
  rb_count.textContent = rb + "回";
  rb_per.textContent = "1/" + to_fixed(cnt / rb, 1);

  bb_hriz_bell_count.textContent = hriz_bell + "回";
  bb_hriz_bell_per.textContent = "1/" + to_fixed(bb_bell_count / hriz_bell, 1);
  bb_lean_bell_count.textContent = lean_bell + "回";
  bb_lean_bell_per.textContent = "1/" + to_fixed(bb_bell_count / lean_bell, 1);
  bb_rare_bell_count.textContent = rare_bell + "回";
  bb_rare_bell_per.textContent = "1/" + to_fixed(bb_bell_count / rare_bell, 1);

  rb_omr_count.textContent = rb_one_medal_role + "回";
  rb_omr_per.textContent = "1/" + to_fixed(rb_game_count / rb_one_medal_role, 1);
  rb_lean_ice_count.textContent = rb_lean_ice + "回";
  rb_lean_ice_per.textContent = "1/" + to_fixed(rb_game_count / rb_lean_ice, 1);
  rb_blank_count.textContent = rb_blank + "回";
  rb_blank_per.textContent = "1/" + to_fixed(rb_game_count / rb_blank, 1);

  rb_pank_lv_low_count.textContent = rb_pank_lv_low + "回";
  rb_pank_lv_mid_count.textContent = rb_pank_lv_mid + "回";
  rb_pank_lv_high_count.textContent = rb_pank_lv_high + "回";
  rb_showed_peace_lv_low_count.textContent = rb_showed_peace_lv_low + "回";
  rb_showed_peace_lv_mid_count.textContent = rb_showed_peace_lv_mid + "回";
  rb_showed_peace_lv_high_count.textContent = rb_showed_peace_lv_high + "回";

  rb_pank_lv_low_per.textContent = "1/" + to_fixed(rb / rb_pank_lv_low, 2);
  rb_pank_lv_mid_per.textContent = "1/" + to_fixed(rb / rb_pank_lv_mid, 1);
  rb_pank_lv_high_per.textContent = "1/" + to_fixed(rb / rb_pank_lv_high, 1);
  rb_showed_peace_lv_low_per.textContent = "1/" + to_fixed(rb_pank_lv_low / rb_showed_peace_lv_low, 1);
  rb_showed_peace_lv_mid_per.textContent = "1/" + to_fixed(rb_pank_lv_mid / rb_showed_peace_lv_mid, 1);
  rb_showed_peace_lv_high_per.textContent = "1/" + to_fixed(rb_pank_lv_high / rb_showed_peace_lv_high, 1);

  all_bell_count.textContent = bell_a + bell_b + "回";
  all_bell_per.textContent = "1/" + to_fixed(cnt / (bell_a + bell_b), 1);
  bell_a_count.textContent = bell_a + "回";
  bell_a_per.textContent = "1/" + to_fixed(cnt / bell_a, 1);
  bell_b_count.textContent = bell_b + "回";
  bell_b_per.textContent = "1/" + to_fixed(cnt / bell_b, 1);

  all_ice_count.textContent = ice_a + ice_b + "回";
  all_ice_per.textContent = "1/" + to_fixed(cnt / (ice_a + ice_b), 1);
  ice_a_count.textContent = ice_a + "回";
  ice_a_per.textContent = "1/" + to_fixed(cnt / ice_a, 1);
  ice_b_count.textContent = ice_b + "回";
  ice_b_per.textContent = "1/" + to_fixed(cnt / ice_b, 1);

  all_cher_count.textContent = cher_a1 + cher_a2 + cher_b + "回";
  all_cher_per.textContent = "1/" + to_fixed(cnt / (cher_a1 + cher_a2 + cher_b), 1);
  cher_a1_count.textContent = cher_a1 + "回";
  cher_a1_per.textContent = "1/" + to_fixed(cnt / cher_a1, 1);
  cher_a2_count.textContent = cher_a2 + "回";
  cher_a2_per.textContent = "1/" + to_fixed(cnt / cher_a2, 1);
  cher_b_count.textContent = cher_b + "回";
  cher_b_per.textContent = "1/" + to_fixed(cnt / cher_b, 1);

  hc_blank_count.textContent = hc_blank + "回";
  hc_blank_per.textContent = "1/" + to_fixed(hc_game_count / hc_blank, 1);
  hg_blank_count.textContent = hg_blank + "回";
  hg_blank_per.textContent = "1/" + to_fixed(hg_game_count / hg_blank, 1);

  longest_bonus_span.textContent = longest_bonus_span_game_count + "G";
  longest_bb_span.textContent = longest_bb_span_game_count + "G";
  longest_rb_span.textContent = longest_rb_span_game_count + "G";

  alone_don_bb_count.textContent = alone_don_bb + "回";
  alone_red_bb_count.textContent = alone_red_bb + "回";
  alone_rb_count.textContent = alone_rb + "回";
  alone_don_bb_per.textContent = "1/" + to_fixed(cnt / alone_don_bb, 1);
  alone_red_bb_per.textContent = "1/" + to_fixed(cnt / alone_red_bb, 1);
  alone_rb_per.textContent = "1/" + to_fixed(cnt / alone_rb, 1);

  rt_rep_don_bb_count.textContent = rt_rep_don_bb + "回";
  rt_rep_red_bb_count.textContent = rt_rep_red_bb + "回";
  rt_rep_rb_count.textContent = rt_rep_rb + "回";
  rt_rep_don_bb_per.textContent = "1/" + to_fixed(cnt / rt_rep_don_bb, 1);
  rt_rep_red_bb_per.textContent = "1/" + to_fixed(cnt / rt_rep_red_bb, 1);
  rt_rep_rb_per.textContent = "1/" + to_fixed(cnt / rt_rep_rb, 1);

  jac_rep_don_bb_count.textContent = jac_rep_don_bb + "回";
  jac_rep_red_bb_count.textContent = jac_rep_red_bb + "回";
  jac_rep_don_bb_per.textContent = "1/" + to_fixed(cnt / jac_rep_don_bb, 1);
  jac_rep_red_bb_per.textContent = "1/" + to_fixed(cnt / jac_rep_red_bb, 1);

  cher_b_don_bb_count.textContent = cher_b_don_bb + "回";
  cher_b_red_bb_count.textContent = cher_b_red_bb + "回";
  cher_b_rb_count.textContent = cher_b_rb + "回";
  cher_b_don_bb_per.textContent = "1/" + to_fixed(cnt / cher_b_don_bb, 1);
  cher_b_red_bb_per.textContent = "1/" + to_fixed(cnt / cher_b_red_bb, 1);
  cher_b_rb_per.textContent = "1/" + to_fixed(cnt / cher_b_rb, 1);

  sp_a_don_bb_count.textContent = sp_a_don_bb + "回";
  sp_a_red_bb_count.textContent = sp_a_red_bb + "回";
  sp_a_don_bb_per.textContent = "1/" + to_fixed(cnt / sp_a_don_bb, 1);
  sp_a_red_bb_per.textContent = "1/" + to_fixed(cnt / sp_a_red_bb, 1);

  sp_b_don_bb_count.textContent = sp_b_don_bb + "回";
  sp_b_rb_count.textContent = sp_b_rb + "回";
  sp_b_don_bb_per.textContent = "1/" + to_fixed(cnt / sp_b_don_bb, 1);
  sp_b_rb_per.textContent = "1/" + to_fixed(cnt / sp_b_rb, 1);

  sp_c_red_bb_count.textContent = sp_c_red_bb + "回";
  sp_c_red_bb_per.textContent = "1/" + to_fixed(cnt / sp_c_red_bb, 1);

  sp_d_don_bb_count.textContent = sp_d_don_bb + "回";
  sp_d_rb_count.textContent = sp_d_rb + "回";
  sp_d_don_bb_per.textContent = "1/" + to_fixed(cnt / sp_d_don_bb, 1);
  sp_d_rb_per.textContent = "1/" + to_fixed(cnt / sp_d_rb, 1);

  sp_e_don_bb_count.textContent = sp_e_don_bb + "回";
  sp_e_red_bb_count.textContent = sp_e_red_bb + "回";
  sp_e_rb_count.textContent = sp_e_rb + "回";
  sp_e_don_bb_per.textContent = "1/" + to_fixed(cnt / sp_e_don_bb, 1);
  sp_e_red_bb_per.textContent = "1/" + to_fixed(cnt / sp_e_red_bb, 1);
  sp_e_rb_per.textContent = "1/" + to_fixed(cnt / sp_e_rb, 1);

  bell_b_don_bb_count.textContent = bell_b_don_bb + "回";
  bell_b_don_bb_per.textContent = "1/" + to_fixed(cnt / bell_b_don_bb, 1);
  cher_a1_red_bb_count.textContent = cher_a1_red_bb + "回";
  cher_a1_red_bb_per.textContent = "1/" + to_fixed(cnt / cher_a1_red_bb, 1);

  total_medal.textContent = (out_medal - in_medal) + "枚";
  payout.textContent = to_fixed(out_medal / in_medal * 100, 2) + "%";

  graph.destroy();
  graph = new Chart(context, {
    type: 'line',
    data: {
      labels: section_total_medal_labels,
      datasets: [{
        label: "差枚数",
        data: section_total_medal,
        borderColor: 'rgb(255, 99, 132)',
      }],
    }
  })

  simulate_button.disabled = false;
}
