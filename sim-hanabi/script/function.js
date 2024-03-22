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

    let horizontal_bell = 0
    let leaning_bell = 0
    let rare_bell = 0

    for (let i = 0; i < 29; ++i) {
        let flag = get_flag(65536)
        switch (setting) {
            case SETTING.LOW_1:
            case SETTING.HIGH_5:
                if (0 <= flag && flag < 5958) {
                    ++leaning_bell
                } else if (5958 <= flag && flag < 5962) {
                    ++rare_bell
                } else {
                    ++horizontal_bell
                }
                break
            case SETTING.LOW_2:
                if (0 <= flag && flag < 7282) {
                    ++leaning_bell
                } else if (7282 <= flag && flag < 7286) {
                    ++rare_bell
                } else {
                    ++horizontal_bell
                }
                break
            case SETTING.HIGH_6:
                if (0 <= flag && flag < 7282) {
                    ++leaning_bell
                } else if (7282 <= flag && flag < 7382) {
                    ++rare_bell
                } else {
                    ++horizontal_bell
                }
                break
        }
    }

    data["horizontal_bell"] = horizontal_bell
    data["leaning_bell"] = leaning_bell
    data["rare_bell"] = rare_bell

    return data
}

function simulate_reg_push(rb_push_order) {
    let medal, flag
    switch (rb_push_order) {
        case "left":
            medal = 10
            break
        case "center":
            // TODO
            medal = 15
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

function digest_reg_bonus(setting, rb_push_order) {
    let data = {}

    let one_medal_role = 0
    let leaning_ice = 0
    let horizontal_ice = 0
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
                } else if (8192 <= flag && flag < 8522) {
                    ++leaning_ice
                    out_medal += 15
                } else {
                    ++horizontal_ice
                    out_medal += simulate_reg_push(rb_push_order)
                }
                break
            case SETTING.HIGH_5:
            case SETTING.HIGH_6:
                if (0 <= flag && flag < 9362) {
                    ++one_medal_role
                } else if (9362 <= flag && flag < 9692) {
                    ++leaning_ice
                    out_medal += 15
                } else if (9692 <= flag && flag < 9866) {
                    ++blank
                } else {
                    ++horizontal_ice
                    out_medal += simulate_reg_push(rb_push_order)
                }
                break
        }

        ++cnt
        if ((leaning_ice + horizontal_ice) >= 8) {
            break
        }
    }

    let flag = get_flag(1000)
    let not_ice = one_medal_role + blank

    data["game_count"] = cnt
    data["one_medal_role"] = one_medal_role
    data["leaning_ice"] = leaning_ice
    data["blank"] = blank
    data["pank_lv_low"] = 0
    data["pank_lv_mid"] = 0
    data["pank_lv_high"] = 0
    data["showed_peace_lv_low"] = 0
    data["showed_peace_lv_mid"] = 0
    data["showed_peace_lv_high"] = 0
    data["in_medal"] = in_medal
    data["out_medal"] = out_medal

    if (not_ice <= 4) {
        ++data['pank_lv_low']
        if (setting != SETTING.LOW_1 && flag < 31) {
            ++data["showed_peace_lv_low"]
        }
    } else if (not_ice <= 6) {
        ++data['pank_lv_mid']
        if (setting != SETTING.LOW_1 && flag < 250) {
            ++data["showed_peace_lv_mid"]
        }
    } else { // >= 7
        ++data['pank_lv_high']
        if (setting == SETTING.LOW_2 && flag < 250) {
            ++data["showed_peace_lv_high"]
        } else if (setting == SETTING.HIGH_5 && flag < 500) {
            ++data["showed_peace_lv_high"]
        } else if (setting == SETTING.HIGH_6 && flag < 500) {
            ++data["showed_peace_lv_high"]
        }
    }

    return data
}

function calculate_replay_medal() {
    let medal = 3
    if (IS_REPLAY_ZERO_MEDAL_AS_CALC) {
        medal = 0
    }
    return IS_REPLAY_ZERO_MEDAL_AS_CALC ? 0 : 3
}