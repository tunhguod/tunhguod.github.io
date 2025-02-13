function get_flag(num) {
    return Math.floor(Math.random() * num)
}

function print(msg) {
    console.log(msg)
}

function convert_setting_enum_to_string(setting) {
    switch (setting) {
        case SETTING.LOW_1:
            return "1"
        case SETTING.LOW_2:
            return "2"
        case SETTING.HIGH_5:
            return "5"
        case SETTING.HIGH_6:
            return "6"
        default:
            throw new Error("not defined setting.")
    }
}

function to_fixed(value, digits) {
    let fixed_value = value.toFixed(digits)

    if (!isFinite(fixed_value) || fixed_value != fixed_value) {
        return "-"
    }

    return fixed_value.toString()
}

function get_flag(num) {
    return Math.floor(Math.random() * num)
}

function get_random_setting(r1, r2, r5, r6) {
    if (r1 < 0 || r2 < 0 || r5 < 0 || r6 < 0) {
        return SETTING.NOT_DEFINED
    }

    if ((r1 + r2 + r5 + r6) == 0) {
        r1 = 25
        r2 = 25
        r5 = 25
        r6 = 25
    }

    if ((r1 + r2 + r5 + r6) != 100) {
        return SETTING.NOT_DEFINED
    }

    let num = get_flag(100)

    if (0 <= num && num < r1) {
        return SETTING.LOW_1
    } else if (r1 <= num && num < (r1 + r2)) {
        return SETTING.LOW_2
    } else if ((r1 + r2) <= num && num < (r1 + r2 + r5)) {
        return SETTING.HIGH_5
    } else {
        return SETTING.HIGH_6
    }
}

function digest_big_bonus(setting) {
    let data = {}

    let bb_bell = 0
    let bb_cherry_bell = 0
    let bb_cherry = 0
    let bb_high_cherry = 0

    for (let i = 0; i < 25; ++i) {
        let flag = get_flag(65536)
        switch (setting) {
            case SETTING.LOW_1:
            case SETTING.HIGH_5:
                if (0 <= flag && flag < 5904) {
                    ++bb_cherry_bell
                } else if (5904 <= flag && flag < (5904 + 256)) {
                    ++bb_cherry
                } else if ((5904 + 256) <= flag && flag < (5904 + 256 + 4)) {
                    ++bb_high_cherry
                } else {
                    ++bb_bell
                }
                break
            case SETTING.LOW_2:
                if (0 <= flag && flag < 7364) {
                    ++bb_cherry_bell
                } else if (7364 <= flag && flag < (7364 + 512)) {
                    ++bb_cherry
                } else if ((7364 + 512) <= flag && flag < (7364 + 512 + 4)) {
                    ++bb_high_cherry
                } else {
                    ++bb_bell
                }
                break
            case SETTING.HIGH_6:
                if (0 <= flag && flag < 7364) {
                    ++bb_cherry_bell
                } else if (7364 <= flag && flag < (7364 + 512)) {
                    ++bb_cherry
                } else if ((7364 + 512) <= flag && flag < (7364 + 512 + 73)) {
                    ++bb_high_cherry
                } else {
                    ++bb_bell
                }
                break
        }
    }

    data["bb_bell"] = bb_bell
    data["bb_cherry_bell"] = bb_cherry_bell
    data["bb_cherry"] = bb_cherry
    data["bb_high_cherry"] = bb_high_cherry

    return data
}

function simulate_reg_push(setting, rb_push_order, rb_bita_accuracy) {
    let medal, flag
    switch (rb_push_order) {
        case "left":
            medal = 10
            break
        case "center":
            rb_bita_accuracy *= 10
            flag = get_flag(1000)
            if (flag < rb_bita_accuracy) {
                medal = 15
            } else {
                switch (setting) {
                    case SETTING.LOW_1:
                    case SETTING.LOW_2:
                        flag = get_flag(350)
                        break
                    default: // 5 or 6
                        flag = get_flag(360)
                        break
                }
                if (flag < 100) {
                    medal = 15
                } else {
                    medal = 4
                }
            }
            break
        case "right":
            flag = get_flag(65536)
            if (flag < 16384) {
                medal = 4
            } else {
                medal = 15
            }
            break
    }
    return medal
}

function digest_reg_bonus(setting, rb_push_order, rb_bita_accuracy) {
    let data = {}

    let one_medal_role = 0
    let x_bell = 0
    let ice = 0
    let blank = 0
    let in_medal = 0
    let out_medal = 0

    let cnt = 0
    for (let i = 0; i < 12; ++i) {
        ++in_medal
        let flag = get_flag(65536)
        switch (setting) {
            case SETTING.LOW_1:
            case SETTING.LOW_2:
                if (0 <= flag && flag < 8192) {
                    ++one_medal_role
                } else if (8192 <= flag && flag < (8192 + 329)) {
                    ++x_bell
                    out_medal += 15
                } else {
                    ++ice
                    out_medal += simulate_reg_push(setting, rb_push_order, rb_bita_accuracy)
                }
                break
            case SETTING.HIGH_5:
            case SETTING.HIGH_6:
                if (0 <= flag && flag < 9362) {
                    ++one_medal_role
                } else if (9362 <= flag && flag < (9362 + 329)) {
                    ++x_bell
                    out_medal += 15
                } else if ((9362 + 329) <= flag && flag < (9362 + 329 + 174)) {
                    ++blank
                } else {
                    ++ice
                    out_medal += simulate_reg_push(setting, rb_push_order, rb_bita_accuracy)
                }
                break
        }

        ++cnt
        if ((x_bell + ice) >= 8) {
            break
        }
    }

    // let flag = get_flag(1000)
    // let blank_cnt = one_medal_role + blank

    data["game_count"] = cnt
    data["one_medal_role"] = one_medal_role
    data["x_bell"] = x_bell
    data["ice"] = ice
    data["blank"] = blank
    // TODO:
    // data["pank_lv_1"] = 0
    // data["pank_lv_2"] = 0
    // data["pank_lv_3"] = 0
    // data["pank_lv_4"] = 0
    // data["pank_lv_5"] = 0
    // data["showed_redbelt_lv_1"] = 0
    // data["showed_redbelt_lv_2"] = 0
    // data["showed_redbelt_lv_3"] = 0
    // data["showed_redbelt_lv_4"] = 0
    // data["showed_redbelt_lv_5"] = 0
    data["in_medal"] = in_medal
    data["out_medal"] = out_medal

    // if (blank_cnt <= 1) {
    //     ++data['pank_lv_1']
    //     if (setting != SETTING.LOW_1 && flag < 31) {
    //         ++data["showed_redbelt_lv_1"]
    //     }
    // } else if (blank_cnt == 2) {
    //     ++data['pank_lv_2']
    //     if (setting != SETTING.LOW_1 && flag < 250) {
    //         ++data["showed_redbelt_lv_2"]
    //     }

    // } else if (blank_cnt == 3) {
    //     ++data['pank_lv_2']
    //     if (setting != SETTING.LOW_1 && flag < 250) {
    //         ++data["showed_redbelt_lv_2"]
    //     }

    // } else if (blank_cnt == 4) {
    //     ++data['pank_lv_2']
    //     if (setting != SETTING.LOW_1 && flag < 250) {
    //         ++data["showed_redbelt_lv_2"]
    //     }

    // } else { // >= 7
    //     ++data['pank_lv_high']
    //     if (setting == SETTING.LOW_2 && flag < 250) {
    //         ++data["showed_redbelt_lv_high"]
    //     } else if (setting == SETTING.HIGH_5 && flag < 500) {
    //         ++data["showed_redbelt_lv_high"]
    //     } else if (setting == SETTING.HIGH_6 && flag < 500) {
    //         ++data["showed_redbelt_lv_high"]
    //     }
    // }

    return data
}

function is_flag_replay(flag) {
    return flag & (ROLE.REP | ROLE.RT_REP | ROLE.JAC_REP | ROLE.VC_JAC_REP | ROLE.VC_RT_REP | ROLE.VG_RT_REP)
}