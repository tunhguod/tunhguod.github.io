const GAME_COUNT_THRESHOLD = 5000000
const IS_REPLAY_ZERO_MEDAL_AS_CALC = false

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

    HC_BLANK: 1 << 18,
    HG_BLANK: 1 << 19,

    HC_JAC_REP: 1 << 20,
    HC_RT_REP: 1 << 21,
    HG_RT_REP: 1 << 22
}

const SETTING = {
    NOT_DEFINED: -1,
    LOW_1: 0,
    LOW_2: 1,
    HIGH_5: 2,
    HIGH_6: 3
}
