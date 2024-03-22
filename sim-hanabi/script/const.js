const GAME_COUNT_THRESHOLD = 10000000
const IS_REPLAY_ZERO_MEDAL_AS_CALC = true

const ROLE = {
    // ボーナス
    D_BB: 1 << 0,
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
    CHER_A1: 1 << 15,
    CHER_A2: 1 << 16,
    CHER_B: 1 << 17,

    BLANK: 1 << 18,

    HC_JAC_REP: 1 << 19,
    HC_RT_REP: 1 << 20,
    HG_RT_REP: 1 << 21,
}

const SETTING = {
    NOT_DEFINED: -1,
    LOW_1: 0,
    LOW_2: 1,
    HIGH_5: 2,
    HIGH_6: 3
}

const MAPPED_FLAG = {
    SINGLE_DON: [40, 41, 42, 42],
    SINGLE_RED: [32, 33, 34, 35],
    SINGLE_RB: [52, 56, 60, 66],
    RT_REP_DON: [15, 15, 16, 16],
    RT_REP_RED: [15, 15, 16, 16],
    RT_REP_RB: [30, 32, 34, 37],
    JAC_REP_DON: [16, 17, 17, 18],
    JAC_REP_RED: [8, 8, 9, 10],
    CHR_B_DON: [6, 6, 7, 7],
    CHR_B_RED: [6, 6, 7, 7],
    CHR_B_RB: [10, 11, 13, 15],
    SP_A_DON: [8, 8, 9, 10],
    SP_A_RED: [16, 17, 17, 18],
    SP_B_DON: [8, 8, 9, 10],
    SP_B_RB: [40, 43, 47, 51],
    SP_C_RED: [20, 21, 22, 22],
    SP_D_DON: [16, 17, 17, 18],
    SP_D_RB: [30, 33, 36, 40],
    SP_E_DON: [5, 6, 6, 6],
    SP_E_RED: [17, 18, 18, 19],
    SP_E_RB: [22, 23, 24, 25],
    BELL_B_DON: [4, 4, 5, 5],
    CHR_A_RED: [4, 4, 5, 5],
    BELL_A: [4278, 4377, 4518, 4649],
    BELL_B: [4278, 4201, 4279, 4341],
    ICE_A: [1239, 1225, 1321, 1290],
    ICE_B: [40, 40, 40, 40],
    CHR_A1: [659, 659, 660, 660],
    CHR_A2: [3121, 3396, 3181, 3293],
    CHR_B: [232, 233, 237, 239],
    REP: [8978, 8978, 8978, 8978],
    HC_RT_REP: [21845, 21141, 19859, 19276],
    HC_JAC_REP: [18725, 18725, 18725, 18725],
    HG_RT_REP: [37449, 36818, 35425, 34675]
}

const STATE = {
    NORMAL: 0,
    HC: 1,
    HG: 2
}