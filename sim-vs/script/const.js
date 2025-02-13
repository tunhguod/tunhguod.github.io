const ROLE = {
    // ボーナス
    X_BB: 1 << 0,
    R_BB: 1 << 1,
    RB: 1 << 2,

    // 特殊役
    SP_A: 1 << 3,
    SP_B: 1 << 4,
    SP_C: 1 << 5,
    SP_D: 1 << 6,
    SP_E: 1 << 7,

    // リプレイ
    REP: 1 << 8,
    RT_REP: 1 << 9,
    JAC_REP: 1 << 10,

    // 風鈴
    BELL_A: 1 << 11,
    BELL_B: 1 << 12,

    // 氷
    ICE_A: 1 << 13,
    ICE_B: 1 << 14,

    // チェリー
    CHER_A: 1 << 15,
    CHER_B: 1 << 16,

    BLANK: 1 << 17,

    VC_JAC_REP: 1 << 18,
    VC_RT_REP: 1 << 19,
    VG_RT_REP: 1 << 20,
    VC_RT_BLANK: 1 << 21,
    VG_RT_BLANK: 1 << 22,
}

const SETTING = {
    NOT_DEFINED: -1,
    LOW_1: 0,
    LOW_2: 1,
    HIGH_5: 2,
    HIGH_6: 3
}

const MAPPED_FLAG = {
    SINGLE_X: [43, 44, 45, 47],
    SINGLE_RED: [19, 20, 20, 21],
    SINGLE_RB: [45, 50, 53, 57],
    RT_REP_X: [11, 11, 12, 12],
    RT_REP_RED: [11, 11, 12, 12],
    RT_REP_RB: [20, 21, 22, 24],
    JAC_REP_X: [16, 17, 17, 18],
    JAC_REP_RED: [8, 8, 8, 9],
    CHR_B_X: [11, 11, 12, 12],
    CHR_B_RED: [11, 11, 12, 12],
    CHR_B_RB: [20, 21, 22, 24],
    SP_A_RED: [8, 8, 8, 9],
    SP_B_RED: [11, 11, 12, 12],
    SP_C_RED: [40, 42, 43, 44],
    SP_D_X: [16, 17, 17, 18],
    SP_D_RB: [27, 29, 31, 36],
    SP_E_X: [11, 11, 12, 12],
    SP_E_RB: [63, 71, 77, 83],
    BELL_A_X: [4, 4, 4, 5],
    CHR_A_RED: [4, 4, 4, 5],
    BELL_A: [6012, 6125, 6243, 6425],
    BELL_B: [3136, 3091, 3228, 3181],
    ICE_A: [880, 928, 904, 953],
    ICE_B: [300, 300, 300, 300],
    CHR_A: [550, 550, 550, 551],
    CHR_B: [1166, 1136, 1234, 1205],
    REP: [8980, 8980, 8980, 8980],
    VC_RT_BLANK: [13107, 13375, 14247, 14564],
    VC_JAC_REP: [18725, 18725, 18725, 18725],
    VG_RT_BLANK: [6489, 6972, 7533, 8091]
}

const STATE = {
    NORMAL: 0,
    VC: 1,
    VG: 2
}

const GAME_COUNT_THRESHOLD = 10000000
const IS_REPLAY_ZERO_MEDAL_AS_CALC = false
const DEBUG_MODE = false
const TEST_FLAG_LIST = [
    ROLE.BLANK,
    ROLE.RB,
    ROLE.RB,
    ROLE.REP,
    ROLE.REP,
    ROLE.BELL_A,
    ROLE.X_BB,
    ROLE.VC_RT_REP,
    ROLE.VC_RT_BLANK,
    ROLE.VC_RT_REP,
    ROLE.BELL_A,
    ROLE.BLANK
]