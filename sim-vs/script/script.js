class SerializableGameData {
  #in_medal = 0
  #out_medal = 0
  #section_total_medal = [0]
  #section_total_medal_labels = ["0"]

  #x_bb = 0
  #r_bb = 0
  #rb = 0

  #bb_data
  #bb_bell = 0
  #bb_cherry_bell = 0
  #bb_cherry = 0
  #bb_high_cherry = 0
  #rb_game_count = 0
  #rb_one_medal_role = 0
  #rb_x_bell = 0
  #rb_ice = 0
  #rb_blank = 0
  #rb_pank_lv_low = 0
  #rb_pank_lv_mid = 0
  #rb_pank_lv_high = 0
  #rb_showed_redbelt_lv_low = 0
  #rb_showed_redbelt_lv_mid = 0
  #rb_showed_redbelt_lv_high = 0

  #bell_a = 0
  #bell_b = 0
  #ice_a = 0
  #ice_b = 0
  #cher_a = 0
  #cher_b = 0

  #left_vc_game_count = 0
  #left_vg_game_count = 0
  #vc_blank = 0
  #vg_blank = 0
  #vc_game_count = 0
  #vg_game_count = 0

  #longest_bonus_span_game_count = 0
  #longest_bb_span_game_count = 0
  #longest_rb_span_game_count = 0
  #bonus_span_game_count = 0
  #bb_span_game_count = 0
  #rb_span_game_count = 0

  #alone_x_bb = 0
  #alone_red_bb = 0
  #alone_rb = 0

  #rt_rep_x_bb = 0
  #rt_rep_red_bb = 0
  #rt_rep_rb = 0

  #jac_rep_x_bb = 0
  #jac_rep_red_bb = 0

  #cher_b_x_bb = 0
  #cher_b_red_bb = 0
  #cher_b_rb = 0

  #sp_a_red_bb = 0
  #sp_b_red_bb = 0
  #sp_c_red_bb = 0

  #sp_d_x_bb = 0
  #sp_d_rb = 0

  #sp_e_x_bb = 0
  #sp_e_rb = 0

  #bell_a_x_bb = 0
  #cher_a_red_bb = 0

  #cnt = 0

  #simulate_game_count = 0
  #setting = SETTING.NOT_DEFINED

  #rb_push_order = "center"
  #rb_bita_accuracy = 100.0

  get in_medal() { return this.#in_medal }
  get out_medal() { return this.#out_medal }
  get section_total_medal() { return this.#section_total_medal }
  get section_total_medal_labels() { return this.#section_total_medal_labels }
  get x_bb() { return this.#x_bb }
  get r_bb() { return this.#r_bb }
  get rb() { return this.#rb }
  get bb_data() { return this.#bb_data }
  get bb_bell() { return this.#bb_bell }
  get bb_cherry_bell() { return this.#bb_cherry_bell }
  get bb_cherry() { return this.#bb_cherry }
  get bb_high_cherry() { return this.#bb_high_cherry }
  get rb_game_count() { return this.#rb_game_count }
  get rb_one_medal_role() { return this.#rb_one_medal_role }
  get rb_x_bell() { return this.#rb_x_bell }
  get rb_ice() { return this.#rb_ice }
  get rb_blank() { return this.#rb_blank }
  get rb_pank_lv_low() { return this.#rb_pank_lv_low }
  get rb_pank_lv_mid() { return this.#rb_pank_lv_mid }
  get rb_pank_lv_high() { return this.#rb_pank_lv_high }
  get rb_showed_redbelt_lv_low() { return this.#rb_showed_redbelt_lv_low }
  get rb_showed_redbelt_lv_mid() { return this.#rb_showed_redbelt_lv_mid }
  get rb_showed_redbelt_lv_high() { return this.#rb_showed_redbelt_lv_high }
  get bell_a() { return this.#bell_a }
  get bell_b() { return this.#bell_b }
  get ice_a() { return this.#ice_a }
  get ice_b() { return this.#ice_b }
  get cher_a() { return this.#cher_a }
  get cher_b() { return this.#cher_b }
  get left_vc_game_count() { return this.#left_vc_game_count }
  get left_vg_game_count() { return this.#left_vg_game_count }
  get vc_blank() { return this.#vc_blank }
  get vg_blank() { return this.#vg_blank }
  get vc_game_count() { return this.#vc_game_count }
  get vg_game_count() { return this.#vg_game_count }
  get longest_bonus_span_game_count() { return this.#longest_bonus_span_game_count }
  get longest_bb_span_game_count() { return this.#longest_bb_span_game_count }
  get longest_rb_span_game_count() { return this.#longest_rb_span_game_count }
  get bonus_span_game_count() { return this.#bonus_span_game_count }
  get bb_span_game_count() { return this.#bb_span_game_count }
  get rb_span_game_count() { return this.#rb_span_game_count }
  get alone_x_bb() { return this.#alone_x_bb }
  get alone_red_bb() { return this.#alone_red_bb }
  get alone_rb() { return this.#alone_rb }
  get rt_rep_x_bb() { return this.#rt_rep_x_bb }
  get rt_rep_red_bb() { return this.#rt_rep_red_bb }
  get rt_rep_rb() { return this.#rt_rep_rb }
  get jac_rep_x_bb() { return this.#jac_rep_x_bb }
  get jac_rep_red_bb() { return this.#jac_rep_red_bb }
  get cher_b_x_bb() { return this.#cher_b_x_bb }
  get cher_b_red_bb() { return this.#cher_b_red_bb }
  get cher_b_rb() { return this.#cher_b_rb }
  get sp_a_red_bb() { return this.#sp_a_red_bb }
  get sp_b_red_bb() { return this.#sp_b_red_bb }
  get sp_c_red_bb() { return this.#sp_c_red_bb }
  get sp_d_x_bb() { return this.#sp_d_x_bb }
  get sp_d_rb() { return this.#sp_d_rb }
  get sp_e_x_bb() { return this.#sp_e_x_bb }
  get sp_e_rb() { return this.#sp_e_rb }

  get bell_a_x_bb() { return this.#bell_a_x_bb }
  get cher_a_red_bb() { return this.#cher_a_red_bb }
  get cnt() { return this.#cnt }
  get simulate_game_count() { return this.#simulate_game_count }
  get setting() { return this.#setting }
  get rb_push_order() { return this.#rb_push_order }
  get rb_bita_accuracy() { return this.#rb_bita_accuracy }

  set in_medal(value) { return this.#in_medal = value }
  set out_medal(value) { this.#out_medal = value }
  set section_total_medal(value) { this.#section_total_medal = value }
  set section_total_medal_labels(value) { this.#section_total_medal_labels = value }
  set x_bb(value) { this.#x_bb = value }
  set r_bb(value) { this.#r_bb = value }
  set rb(value) { this.#rb = value }
  set bb_data(value) { this.#bb_data = value }
  set bb_bell(value) { this.#bb_bell = value }
  set bb_cherry_bell(value) { this.#bb_cherry_bell = value }
  set bb_cherry(value) { this.#bb_cherry = value }
  set bb_high_cherry(value) { this.#bb_high_cherry = value }
  set rb_game_count(value) { this.#rb_game_count = value }
  set rb_one_medal_role(value) { this.#rb_one_medal_role = value }
  set rb_x_bell(value) { this.#rb_x_bell = value }
  set rb_ice(value) { this.#rb_ice = value }
  set rb_blank(value) { this.#rb_blank = value }
  set rb_pank_lv_low(value) { this.#rb_pank_lv_low = value }
  set rb_pank_lv_mid(value) { this.#rb_pank_lv_mid = value }
  set rb_pank_lv_high(value) { this.#rb_pank_lv_high = value }
  set rb_showed_redbelt_lv_low(value) { this.#rb_showed_redbelt_lv_low = value }
  set rb_showed_redbelt_lv_mid(value) { this.#rb_showed_redbelt_lv_mid = value }
  set rb_showed_redbelt_lv_high(value) { this.#rb_showed_redbelt_lv_high = value }
  set bell_a(value) { this.#bell_a = value }
  set bell_b(value) { this.#bell_b = value }
  set ice_a(value) { this.#ice_a = value }
  set ice_b(value) { this.#ice_b = value }
  set cher_a(value) { this.#cher_a = value }
  set cher_b(value) { this.#cher_b = value }
  set left_vc_game_count(value) { this.#left_vc_game_count = value }
  set left_vg_game_count(value) { this.#left_vg_game_count = value }
  set vc_blank(value) { this.#vc_blank = value }
  set vg_blank(value) { this.#vg_blank = value }
  set vc_game_count(value) { this.#vc_game_count = value }
  set vg_game_count(value) { this.#vg_game_count = value }
  set longest_bonus_span_game_count(value) { this.#longest_bonus_span_game_count = value }
  set longest_bb_span_game_count(value) { this.#longest_bb_span_game_count = value }
  set longest_rb_span_game_count(value) { this.#longest_rb_span_game_count = value }
  set bonus_span_game_count(value) { this.#bonus_span_game_count = value }
  set bb_span_game_count(value) { this.#bb_span_game_count = value }
  set rb_span_game_count(value) { this.#rb_span_game_count = value }
  set alone_x_bb(value) { this.#alone_x_bb = value }
  set alone_red_bb(value) { this.#alone_red_bb = value }
  set alone_rb(value) { this.#alone_rb = value }
  set rt_rep_x_bb(value) { this.#rt_rep_x_bb = value }
  set rt_rep_red_bb(value) { this.#rt_rep_red_bb = value }
  set rt_rep_rb(value) { this.#rt_rep_rb = value }
  set jac_rep_x_bb(value) { this.#jac_rep_x_bb = value }
  set jac_rep_red_bb(value) { this.#jac_rep_red_bb = value }
  set cher_b_x_bb(value) { this.#cher_b_x_bb = value }
  set cher_b_red_bb(value) { this.#cher_b_red_bb = value }
  set cher_b_rb(value) { this.#cher_b_rb = value }
  set sp_a_red_bb(value) { this.#sp_a_red_bb = value }
  set sp_b_red_bb(value) { this.#sp_b_red_bb = value }
  set sp_c_red_bb(value) { this.#sp_c_red_bb = value }
  set sp_d_x_bb(value) { this.#sp_d_x_bb = value }
  set sp_d_rb(value) { this.#sp_d_rb = value }
  set sp_e_x_bb(value) { this.#sp_e_x_bb = value }
  set sp_e_rb(value) { this.#sp_e_rb = value }
  set bell_a_x_bb(value) { this.#bell_a_x_bb = value }
  set cher_a_red_bb(value) { this.#cher_a_red_bb = value }
  set cnt(value) { this.#cnt = value }
  set simulate_game_count(value) { this.#simulate_game_count = value }
  set setting(value) { this.#setting = value }
  set rb_push_order(value) { this.#rb_push_order = value }
  set rb_bita_accuracy(value) { this.#rb_bita_accuracy = value }

  toJson() {
    return {
      in_medal: this.#in_medal,
      out_medal: this.#out_medal,
      section_total_medal: this.#section_total_medal,
      section_total_medal_labels: this.#section_total_medal_labels,

      x_bb: this.x_bb,
      r_bb: this.r_bb,
      rb: this.rb,

      bb_data: this.bb_data,
      bb_bell: this.bb_bell,
      bb_cherry_bell: this.bb_cherry_bell,
      bb_cherry: this.bb_cherry,
      bb_high_cherry: this.bb_high_cherry,
      rb_game_count: this.rb_game_count,
      rb_one_medal_role: this.rb_one_medal_role,
      rb_x_bell: this.rb_x_bell,
      rb_ice: this.rb_ice,
      rb_blank: this.rb_blank,
      rb_pank_lv_1: this.rb_pank_lv_1,
      rb_pank_lv_2: this.rb_pank_lv_2,
      rb_pank_lv_3: this.rb_pank_lv_3,
      rb_pank_lv_4: this.rb_pank_lv_4,
      rb_pank_lv_5: this.rb_pank_lv_5,
      rb_showed_redbelt_lv_1: this.rb_showed_redbelt_lv_1,
      rb_showed_redbelt_lv_2: this.rb_showed_redbelt_lv_2,
      rb_showed_redbelt_lv_3: this.rb_showed_redbelt_lv_3,
      rb_showed_redbelt_lv_4: this.rb_showed_redbelt_lv_4,
      rb_showed_redbelt_lv_5: this.rb_showed_redbelt_lv_5,

      bell_a: this.bell_a,
      bell_b: this.bell_b,
      ice_a: this.ice_a,
      ice_b: this.ice_b,
      cher_a: this.cher_a,
      cher_b: this.cher_b,

      left_vc_game_count: this.left_vc_game_count,
      left_vg_game_count: this.left_vg_game_count,
      vc_blank: this.vc_blank,
      vg_blank: this.vg_blank,
      vc_game_count: this.vc_game_count,
      vg_game_count: this.vg_game_count,

      longest_bonus_span_game_count: this.longest_bonus_span_game_count,
      longest_bb_span_game_count: this.longest_bb_span_game_count,
      longest_rb_span_game_count: this.longest_rb_span_game_count,
      bonus_span_game_count: this.bonus_span_game_count,
      bb_span_game_count: this.bb_span_game_count,
      rb_span_game_count: this.rb_span_game_count,

      alone_x_bb: this.alone_x_bb,
      alone_red_bb: this.alone_red_bb,
      alone_rb: this.alone_rb,

      rt_rep_x_bb: this.rt_rep_x_bb,
      rt_rep_red_bb: this.rt_rep_red_bb,
      rt_rep_rb: this.rt_rep_rb,

      jac_rep_x_bb: this.jac_rep_x_bb,
      jac_rep_red_bb: this.jac_rep_red_bb,

      cher_b_x_bb: this.cher_b_x_bb,
      cher_b_red_bb: this.cher_b_red_bb,
      cher_b_rb: this.cher_b_rb,

      sp_a_red_bb: this.sp_a_red_bb,
      sp_b_red_bb: this.sp_b_red_bb,
      sp_c_red_bb: this.sp_c_red_bb,

      sp_d_x_bb: this.sp_d_x_bb,
      sp_d_rb: this.sp_d_rb,
      sp_e_x_bb: this.sp_e_x_bb,
      sp_e_rb: this.sp_e_rb,

      bell_a_x_bb: this.bell_a_x_bb,
      cher_a_red_bb: this.cher_a_red_bb,

      cnt: this.cnt,

      simulate_game_count: this.simulate_game_count,
      setting: this.setting,

      rb_push_order: this.#rb_push_order,
      rb_bita_accuracy: this.#rb_bita_accuracy
    }
  }
}


// html 要素
let game_count = document.getElementById('game-count')
let all_bonus_count = document.getElementById('all-bonus-count')
let all_bonus_per = document.getElementById('all-bonus-per')
let all_bb_count = document.getElementById('all-bb-count')
let all_bb_per = document.getElementById('all-bb-per')
let x_bb_count = document.getElementById('x-bb-count')
let x_bb_per = document.getElementById('x-bb-per')
let red_bb_count = document.getElementById('red-bb-count')
let red_bb_per = document.getElementById('red-bb-per')
let rb_count = document.getElementById('rb-count')
let rb_per = document.getElementById('rb-per')

let bb_bell_count = document.getElementById('bb-bell-count')
let bb_bell_per = document.getElementById('bb-bell-per')
let bb_cheery_bell_count = document.getElementById('bb-cherry-bell-count')
let bb_cheery_bell_per = document.getElementById('bb-cherry-bell-per')
let bb_cherry_count = document.getElementById('bb-cherry-count')
let bb_cherry_per = document.getElementById('bb-cherry-per')
let bb_high_cherry_count = document.getElementById('bb-high-cherry-count')
let bb_high_cherry_per = document.getElementById('bb-high-cherry-per')

let rb_omr_count = document.getElementById('rb-omr-count')
let rb_omr_per = document.getElementById('rb-omr-per')
let rb_x_bell_count = document.getElementById('rb-x-bell-count')
let rb_x_bell_per = document.getElementById('rb-x-bell-per')
let rb_blank_count = document.getElementById('rb-blank-count')
let rb_blank_per = document.getElementById('rb-blank-per')

let rb_pank_lv_1_count = document.getElementById('rb-pank-lv-1-count')
let rb_pank_lv_1per = document.getElementById('rb-pank-lv-1-per')
let rb_pank_lv_2_count = document.getElementById('rb-pank-lv-2-count')
let rb_pank_lv_2_per = document.getElementById('rb-pank-lv-2-per')
let rb_pank_lv_3_count = document.getElementById('rb-pank-lv-3-count')
let rb_pank_lv_3_per = document.getElementById('rb-pank-lv-3-per')
let rb_pank_lv_4_count = document.getElementById('rb-pank-lv-4-count')
let rb_pank_lv_4_per = document.getElementById('rb-pank-lv-4-per')
let rb_pank_lv_5_count = document.getElementById('rb-pank-lv-5-count')
let rb_pank_lv_5_per = document.getElementById('rb-pank-lv-5-per')
let rb_showed_redbelt_lv_1_count = document.getElementById('rb-showed-redbelt-lv-1-count')
let rb_showed_redbelt_lv_1_per = document.getElementById('rb-showed-redbelt-lv-1-per')
let rb_showed_redbelt_lv_2_count = document.getElementById('rb-showed-redbelt-lv-2-count')
let rb_showed_redbelt_lv_2_per = document.getElementById('rb-showed-redbelt-lv-2-per')
let rb_showed_redbelt_lv_3_count = document.getElementById('rb-showed-redbelt-lv-3-count')
let rb_showed_redbelt_lv_3_per = document.getElementById('rb-showed-redbelt-lv-3-per')
let rb_showed_redbelt_lv_4_count = document.getElementById('rb-showed-redbelt-lv-4-count')
let rb_showed_redbelt_lv_4_per = document.getElementById('rb-showed-redbelt-lv-4-per')
let rb_showed_redbelt_lv_5_count = document.getElementById('rb-showed-redbelt-lv-5-count')
let rb_showed_redbelt_lv_5_per = document.getElementById('rb-showed-redbelt-lv-5-per')

let all_bell_count = document.getElementById('all-bell-count')
let all_bell_per = document.getElementById('all-bell-per')
let bell_a_count = document.getElementById('bell-a-count')
let bell_a_per = document.getElementById('bell-a-per')
let bell_b_count = document.getElementById('bell-b-count')
let bell_b_per = document.getElementById('bell-b-per')

let all_ice_count = document.getElementById('all-ice-count')
let all_ice_per = document.getElementById('all-ice-per')
let ice_a_count = document.getElementById('ice-a-count')
let ice_a_per = document.getElementById('ice-a-per')
let ice_b_count = document.getElementById('ice-b-count')
let ice_b_per = document.getElementById('ice-b-per')

let all_cher_count = document.getElementById('all-cher-count')
let all_cher_per = document.getElementById('all-cher-per')
let cher_a_count = document.getElementById('cher-a-count')
let cher_a_per = document.getElementById('cher-a-per')
let cher_b_count = document.getElementById('cher-b-count')
let cher_b_per = document.getElementById('cher-b-per')

let vc_blank_count = document.getElementById('vc-blank-count')
let vc_blank_per = document.getElementById('vc-blank-per')
let vg_blank_count = document.getElementById('vg-blank-count')
let vg_blank_per = document.getElementById('vg-blank-per')

let simulate_button = document.getElementById('simulate-button')
let simulate_game_count_form = document.getElementById('game-count-form')
let select_setting = document.getElementById('select-setting')
let screen_shot_area = document.getElementById('screen-shot-area')

let err_msg_label = document.getElementById('errmsg')

let setting_visibility_button = document.getElementById('setting-visibility-button')
let setting_text = document.getElementById('setting')
let redbelt_visibility_button = document.getElementById('redbelt-visibility-button')
let screen_shot_button = document.getElementById('screen-shot-button')

let setting_ratio_pane = document.getElementById('setting-ratio-pane')

let setting_1_ratio_form = document.getElementById('low-1-ratio')
let setting_2_ratio_form = document.getElementById('low-2-ratio')
let setting_5_ratio_form = document.getElementById('high-5-ratio')
let setting_6_ratio_form = document.getElementById('high-6-ratio')

let longest_bonus_span = document.getElementById('longest-b-span')
let longest_bb_span = document.getElementById('longest-bb-span')
let longest_rb_span = document.getElementById('longest-rb-span')

let total_medal = document.getElementById('total-medal')
let payout = document.getElementById('payout')
let slump_canvas = document.getElementById("slump-graph")
let context = slump_canvas.getContext('2d')
// ボーナス詳細
let alone_x_bb_count = document.getElementById('alone-x-bb-count')
let alone_x_bb_per = document.getElementById('alone-x-bb-per')
let alone_red_bb_count = document.getElementById('alone-red-bb-count')
let alone_red_bb_per = document.getElementById('alone-red-bb-per')
let alone_rb_count = document.getElementById('alone-rb-count')
let alone_rb_per = document.getElementById('alone-rb-per')

let rt_rep_x_bb_count = document.getElementById('rt-rep-x-bb-count')
let rt_rep_x_bb_per = document.getElementById('rt-rep-x-bb-per')
let rt_rep_red_bb_count = document.getElementById('rt-rep-red-bb-count')
let rt_rep_red_bb_per = document.getElementById('rt-rep-red-bb-per')
let rt_rep_rb_count = document.getElementById('rt-rep-rb-count')
let rt_rep_rb_per = document.getElementById('rt-rep-rb-per')

let jac_rep_x_bb_count = document.getElementById('jac-rep-x-bb-count')
let jac_rep_x_bb_per = document.getElementById('jac-rep-x-bb-per')
let jac_rep_red_bb_count = document.getElementById('jac-rep-red-bb-count')
let jac_rep_red_bb_per = document.getElementById('jac-rep-red-bb-per')
let jac_rep_rb_count = document.getElementById('jac-rep-rb-count')
let jac_rep_rb_per = document.getElementById('jac-rep-rb-per')

let cher_b_x_bb_count = document.getElementById('cher-b-x-bb-count')
let cher_b_x_bb_per = document.getElementById('cher-b-x-bb-per')
let cher_b_red_bb_count = document.getElementById('cher-b-red-bb-count')
let cher_b_red_bb_per = document.getElementById('cher-b-red-bb-per')
let cher_b_rb_count = document.getElementById('cher-b-rb-count')
let cher_b_rb_per = document.getElementById('cher-b-rb-per')

let sp_a_red_bb_count = document.getElementById('sp-a-red-bb-count')
let sp_a_red_bb_per = document.getElementById('sp-a-red-bb-per')
let sp_b_red_bb_count = document.getElementById('sp-b-red-bb-count')
let sp_b_red_bb_per = document.getElementById('sp-b-red-bb-per')
let sp_c_red_bb_count = document.getElementById('sp-c-red-bb-count')
let sp_c_red_bb_per = document.getElementById('sp-c-red-bb-per')

let sp_d_x_bb_count = document.getElementById('sp-d-x-bb-count')
let sp_d_x_bb_per = document.getElementById('sp-d-x-bb-per')
let sp_d_rb_count = document.getElementById('sp-d-rb-count')
let sp_d_rb_per = document.getElementById('sp-d-rb-per')

let sp_e_x_bb_count = document.getElementById('sp-e-x-bb-count')
let sp_e_x_bb_per = document.getElementById('sp-e-x-bb-per')
let sp_e_rb_count = document.getElementById('sp-e-rb-count')
let sp_e_rb_per = document.getElementById('sp-e-rb-per')

let bell_a_x_bb_count = document.getElementById('bell-a-x-bb-count')
let bell_a_x_bb_per = document.getElementById('bell-a-x-bb-per')

let cher_a_red_bb_count = document.getElementById('cher-a-red-bb-count')
let cher_a_red_bb_per = document.getElementById('cher-a-red-bb-per')

let rb_push_order = document.querySelector('[name="rb-1st-order"]:checked').value
// let rb_center_1st_success_per_form = document.getElementById('rb-center-1st-success-per')
let rb_push_order_group = document.getElementsByName('rb-1st-order')

let rb_bita_block = document.getElementById('rb-bita-block')
let rb_bita_accuracy_per = document.getElementById('bita-accuracy-per')
let rb_bita_accuracy_text = document.getElementById('bita-accuracy-text')

const setCurrentValue = (val) => {
  rb_bita_accuracy_text.innerText = val;
}

const rangeOnChange = (e) =>{
  setCurrentValue(e.target.value);
}

rb_push_order_group.forEach(function (e) {
  e.addEventListener("click", function () {
    rb_push_order = document.querySelector('[name="rb-1st-order"]:checked').value
    if (rb_push_order == "center") {
      rb_bita_block.style.display = "block"
    } else {
      rb_bita_block.style.display = "none"
    }
  })
})

rb_bita_accuracy_per.addEventListener('input', rangeOnChange);
setCurrentValue(rb_bita_accuracy_per.value);

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
})

select_setting.addEventListener('change', function () {
  var index = this.selectedIndex
  if (this.options[index].value == "?") {
    setting_ratio_pane.style.display = "block"
  } else {
    setting_ratio_pane.style.display = "none"
  }
})

setting_visibility_button.onclick = () => {
  if (setting_visibility_button.textContent == "設定を隠す") {
    setting_visibility_button.textContent = "設定を見る"
    setting_text.style.opacity = 0.0
  } else {
    setting_visibility_button.textContent = "設定を隠す"
    setting_text.style.opacity = 1.0
  }
  document.activeElement.blur()
}

redbelt_visibility_button.onclick = () => {
  if (redbelt_visibility_button.textContent == "赤帯を隠す") {
    redbelt_visibility_button.textContent = "赤帯を見る"
    rb_showed_redbelt_lv_1_count.style.opacity = 0.0
    rb_showed_redbelt_lv_1_per.style.opacity = 0.0
    rb_showed_redbelt_lv_2_count.style.opacity = 0.0
    rb_showed_redbelt_lv_2_per.style.opacity = 0.0
    rb_showed_redbelt_lv_3_count.style.opacity = 0.0
    rb_showed_redbelt_lv_3_per.style.opacity = 0.0
    rb_showed_redbelt_lv_4_count.style.opacity = 0.0
    rb_showed_redbelt_lv_4_per.style.opacity = 0.0
    rb_showed_redbelt_lv_5_count.style.opacity = 0.0
    rb_showed_redbelt_lv_5_per.style.opacity = 0.0
  } else {
    redbelt_visibility_button.textContent = "赤帯を隠す"
    rb_showed_redbelt_lv_1_count.style.opacity = 1.0
    rb_showed_redbelt_lv_1_per.style.opacity = 1.0
    rb_showed_redbelt_lv_2_count.style.opacity = 1.0
    rb_showed_redbelt_lv_2_per.style.opacity = 1.0
    rb_showed_redbelt_lv_3_count.style.opacity = 1.0
    rb_showed_redbelt_lv_3_per.style.opacity = 1.0
    rb_showed_redbelt_lv_4_count.style.opacity = 1.0
    rb_showed_redbelt_lv_4_per.style.opacity = 1.0
    rb_showed_redbelt_lv_5_count.style.opacity = 1.0
    rb_showed_redbelt_lv_5_per.style.opacity = 1.0
  }
  document.activeElement.blur()
}

screen_shot_button.onclick = () => {
  screen_shot_button.disabled = true
  htmlToImage.toPng(screen_shot_area)
    .then(function (dataUrl) {
      download(dataUrl, 'sim-hanabi-ss.png')
      screen_shot_button.disabled = false
    })
    .catch(function (error) {
      err_msg_label.textContent = "スクショに失敗しました。"
      err_msg_label.style.visibility = "visible"
      simulate_button.disabled = false
    })
}

const worker = new Worker('./script/simulate.js')
worker.onmessage = function (e) {
  const data = e.data

  data.rb_push_order = rb_push_order.value
  data.bb_game_count = (data.x_bb + data.r_bb) * 25

  print("in: " + data.in_medal)
  print("out: " + data.out_medal)

  setting_text.textContent = convert_setting_enum_to_string(data.setting)
  game_count.textContent = data.cnt + "G"
  all_bonus_count.textContent = data.x_bb + data.r_bb + data.rb + "回"
  all_bonus_per.textContent = "1/" + to_fixed(data.cnt / (data.x_bb + data.r_bb + data.rb), 1)
  all_bb_count.textContent = data.x_bb + data.r_bb + "回"
  all_bb_per.textContent = "1/" + to_fixed(data.cnt / (data.x_bb + data.r_bb), 1)
  x_bb_count.textContent = data.x_bb + "回"
  x_bb_per.textContent = "1/" + to_fixed(data.cnt / data.x_bb, 1)
  red_bb_count.textContent = data.r_bb + "回"
  red_bb_per.textContent = "1/" + to_fixed(data.cnt / data.r_bb, 1)
  rb_count.textContent = data.rb + "回"
  rb_per.textContent = "1/" + to_fixed(data.cnt / data.rb, 1)

  bb_bell_count.textContent = data.bb_bell + "回"
  bb_bell_per.textContent = "1/" + to_fixed(data.bb_game_count / data.bb_bell, 1)
  bb_cheery_bell_count.textContent = data.bb_cherry_bell + "回"
  bb_cheery_bell_per.textContent = "1/" + to_fixed(data.bb_game_count / data.bb_cherry_bell, 1)
  bb_cherry_count.textContent = data.bb_cherry + "回"
  bb_cherry_per.textContent = "1/" + to_fixed(data.bb_game_count / data.bb_cherry, 1)
  bb_high_cherry_count.textContent = data.bb_high_cherry + "回"
  bb_high_cherry_per.textContent = "1/" + to_fixed(data.bb_game_count / data.bb_high_cherry, 1)

  rb_omr_count.textContent = data.rb_one_medal_role + "回"
  rb_omr_per.textContent = "1/" + to_fixed(data.rb_game_count / data.rb_one_medal_role, 1)
  rb_x_bell_count.textContent = data.rb_x_bell + "回"
  rb_x_bell_per.textContent = "1/" + to_fixed(data.rb_game_count / data.rb_x_bell, 1)
  rb_blank_count.textContent = data.rb_blank + "回"
  rb_blank_per.textContent = "1/" + to_fixed(data.rb_game_count / data.rb_blank, 1)

  // TODO
  // rb_pank_lv_low_count.textContent = data.rb_pank_lv_low + "回"
  // rb_pank_lv_mid_count.textContent = data.rb_pank_lv_mid + "回"
  // rb_pank_lv_high_count.textContent = data.rb_pank_lv_high + "回"
  // rb_showed_redbelt_lv_low_count.textContent = data.rb_showed_redbelt_lv_low + "回"
  // rb_showed_redbelt_lv_mid_count.textContent = data.rb_showed_redbelt_lv_mid + "回"
  // rb_showed_redbelt_lv_high_count.textContent = data.rb_showed_redbelt_lv_high + "回"

  // rb_pank_lv_low_per.textContent = "1/" + to_fixed(data.rb / data.rb_pank_lv_low, 2)
  // rb_pank_lv_mid_per.textContent = "1/" + to_fixed(data.rb / data.rb_pank_lv_mid, 1)
  // rb_pank_lv_high_per.textContent = "1/" + to_fixed(data.rb / data.rb_pank_lv_high, 1)
  // rb_showed_redbelt_lv_low_per.textContent = "1/" + to_fixed(data.rb_pank_lv_low / data.rb_showed_redbelt_lv_low, 1)
  // rb_showed_redbelt_lv_mid_per.textContent = "1/" + to_fixed(data.rb_pank_lv_mid / data.rb_showed_redbelt_lv_mid, 1)
  // rb_showed_redbelt_lv_high_per.textContent = "1/" + to_fixed(data.rb_pank_lv_high / data.rb_showed_redbelt_lv_high, 1)

  all_bell_count.textContent = data.bell_a + data.bell_b + "回"
  all_bell_per.textContent = "1/" + to_fixed(data.cnt / (data.bell_a + data.bell_b), 1)
  bell_a_count.textContent = data.bell_a + "回"
  bell_a_per.textContent = "1/" + to_fixed(data.cnt / data.bell_a, 1)
  bell_b_count.textContent = data.bell_b + "回"
  bell_b_per.textContent = "1/" + to_fixed(data.cnt / data.bell_b, 1)

  all_ice_count.textContent = data.ice_a + data.ice_b + "回"
  all_ice_per.textContent = "1/" + to_fixed(data.cnt / (data.ice_a + data.ice_b), 1)
  ice_a_count.textContent = data.ice_a + "回"
  ice_a_per.textContent = "1/" + to_fixed(data.cnt / data.ice_a, 1)
  ice_b_count.textContent = data.ice_b + "回"
  ice_b_per.textContent = "1/" + to_fixed(data.cnt / data.ice_b, 1)

  all_cher_count.textContent = data.cher_a + data.cher_b + "回"
  all_cher_per.textContent = "1/" + to_fixed(data.cnt / (data.cher_a + data.cher_b), 1)
  cher_a_count.textContent = data.cher_a + "回"
  cher_a_per.textContent = "1/" + to_fixed(data.cnt / data.cher_a, 1)
  cher_b_count.textContent = data.cher_b + "回"
  cher_b_per.textContent = "1/" + to_fixed(data.cnt / data.cher_b, 1)

  vc_blank_count.textContent = data.vc_blank + "回"
  vc_blank_per.textContent = "1/" + to_fixed(data.vc_game_count / data.vc_blank, 1)
  vg_blank_count.textContent = data.vg_blank + "回"
  vg_blank_per.textContent = "1/" + to_fixed(data.vg_game_count / data.vg_blank, 1)

  longest_bonus_span.textContent = data.longest_bonus_span_game_count + "G"
  longest_bb_span.textContent = data.longest_bb_span_game_count + "G"
  longest_rb_span.textContent = data.longest_rb_span_game_count + "G"

  alone_x_bb_count.textContent = data.alone_x_bb + "回"
  alone_red_bb_count.textContent = data.alone_red_bb + "回"
  alone_rb_count.textContent = data.alone_rb + "回"
  alone_x_bb_per.textContent = "1/" + to_fixed(data.cnt / data.alone_x_bb, 1)
  alone_red_bb_per.textContent = "1/" + to_fixed(data.cnt / data.alone_red_bb, 1)
  alone_rb_per.textContent = "1/" + to_fixed(data.cnt / data.alone_rb, 1)

  rt_rep_x_bb_count.textContent = data.rt_rep_x_bb + "回"
  rt_rep_red_bb_count.textContent = data.rt_rep_red_bb + "回"
  rt_rep_rb_count.textContent = data.rt_rep_rb + "回"
  rt_rep_x_bb_per.textContent = "1/" + to_fixed(data.cnt / data.rt_rep_x_bb, 1)
  rt_rep_red_bb_per.textContent = "1/" + to_fixed(data.cnt / data.rt_rep_red_bb, 1)
  rt_rep_rb_per.textContent = "1/" + to_fixed(data.cnt / data.rt_rep_rb, 1)

  jac_rep_x_bb_count.textContent = data.jac_rep_x_bb + "回"
  jac_rep_red_bb_count.textContent = data.jac_rep_red_bb + "回"
  jac_rep_x_bb_per.textContent = "1/" + to_fixed(data.cnt / data.jac_rep_x_bb, 1)
  jac_rep_red_bb_per.textContent = "1/" + to_fixed(data.cnt / data.jac_rep_red_bb, 1)

  cher_b_x_bb_count.textContent = data.cher_b_x_bb + "回"
  cher_b_red_bb_count.textContent = data.cher_b_red_bb + "回"
  cher_b_rb_count.textContent = data.cher_b_rb + "回"
  cher_b_x_bb_per.textContent = "1/" + to_fixed(data.cnt / data.cher_b_x_bb, 1)
  cher_b_red_bb_per.textContent = "1/" + to_fixed(data.cnt / data.cher_b_red_bb, 1)
  cher_b_rb_per.textContent = "1/" + to_fixed(data.cnt / data.cher_b_rb, 1)


  sp_a_red_bb_count.textContent = data.sp_a_red_bb + "回"
  sp_a_red_bb_per.textContent = "1/" + to_fixed(data.cnt / data.sp_a_red_bb, 1)
  sp_b_red_bb_count.textContent = data.sp_b_red_bb + "回"
  sp_b_red_bb_per.textContent = "1/" + to_fixed(data.cnt / data.sp_b_red_bb, 1)
  sp_c_red_bb_count.textContent = data.sp_c_red_bb + "回"
  sp_c_red_bb_per.textContent = "1/" + to_fixed(data.cnt / data.sp_c_red_bb, 1)

  sp_d_x_bb_count.textContent = data.sp_d_x_bb + "回"
  sp_d_rb_count.textContent = data.sp_d_rb + "回"
  sp_d_x_bb_per.textContent = "1/" + to_fixed(data.cnt / data.sp_d_x_bb, 1)
  sp_d_rb_per.textContent = "1/" + to_fixed(data.cnt / data.sp_d_rb, 1)

  sp_e_x_bb_count.textContent = data.sp_e_x_bb + "回"
  sp_e_rb_count.textContent = data.sp_e_rb + "回"
  sp_e_x_bb_per.textContent = "1/" + to_fixed(data.cnt / data.sp_e_x_bb, 1)
  sp_e_rb_per.textContent = "1/" + to_fixed(data.cnt / data.sp_e_rb, 1)

  bell_a_x_bb_count.textContent = data.bell_a_x_bb + "回"
  bell_a_x_bb_per.textContent = "1/" + to_fixed(data.cnt / data.bell_a_x_bb, 1)
  cher_a_red_bb_count.textContent = data.cher_a_red_bb + "回"
  cher_a_red_bb_per.textContent = "1/" + to_fixed(data.cnt / data.cher_a_red_bb, 1)

  total_medal.textContent = (data.out_medal - data.in_medal) + "枚"
  payout.textContent = to_fixed(data.out_medal / data.in_medal * 100, 2) + "%"

  graph.destroy()
  graph = new Chart(context, {
    type: 'line',
    data: {
      labels: data.section_total_medal_labels,
      datasets: [{
        label: "差枚数",
        data: data.section_total_medal,
        borderColor: 'rgb(255, 99, 132)',
      }],
    }
  })

  simulate_button.disabled = false
}

simulate_button.onclick = function () {
  simulate_button.disabled = true
  err_msg_label.style.visibility = "hidden"

  const data = new SerializableGameData()
  data.rb_bita_accuracy = rb_bita_accuracy_per.value
  data.rb_push_order = rb_push_order
  data.simulate_game_count = simulate_game_count_form.value
  if (data.simulate_game_count <= 0 || data.simulate_game_count > GAME_COUNT_THRESHOLD) {
    err_msg_label.textContent = "無効なG数が指定されています (1 ~ " + GAME_COUNT_THRESHOLD + " の値を指定してください)"
    err_msg_label.style.visibility = "visible"
    simulate_button.disabled = false
    return
  }

  switch (select_setting.value) {
    case "1":
      data.setting = SETTING.LOW_1
      break
    case "2":
      data.setting = SETTING.LOW_2
      break
    case "5":
      data.setting = SETTING.HIGH_5
      break
    case "6":
      data.setting = SETTING.HIGH_6
      break
    case "?":
      data.setting = get_random_setting(Number(setting_1_ratio_form.value),
        Number(setting_2_ratio_form.value),
        Number(setting_5_ratio_form.value),
        Number(setting_6_ratio_form.value)
      )
      if (data.setting == SETTING.NOT_DEFINED) {
        err_msg_label.textContent = "設定配分が不正です"
        err_msg_label.style.visibility = "visible"
        simulate_button.disabled = false
        return
      }
      break
    default:
      err_msg_label.textContent = "設定を指定してください"
      err_msg_label.style.visibility = "visible"
      simulate_button.disabled = false
      return
  }

  worker.postMessage(data.toJson())
}