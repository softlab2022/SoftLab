<?php

if (!defined('ABSPATH')) {
  exit;
}

if (!function_exists('sl_theme_option_submenu_register')) {
  function sl_theme_option_submenu_register() {
    add_submenu_page(
      'themes.php',
      __('Theme Option', 'softlab'),
      __('Theme Option', 'softlab'),
      'manage_options',
      'theme-option',
      'theme_option_callback'
    );
  }
  add_action('admin_menu', 'sl_theme_option_submenu_register');
}

// Register settings
function sl_theme_option_custom_settings_init() {
  register_setting(
    'sl-theme-option-custom-settings-group',
    'theme_option_shortcode_http_player',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin1_shortcode_style_1',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin1_shortcode_style_2',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin2_shortcode_style_1',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin2_shortcode_style_2',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin3_shortcode_style_1',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin3_shortcode_style_2',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin4_shortcode_style_1',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin4_shortcode_style_2',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin5_shortcode_style_1',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin5_shortcode_style_2',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin6_shortcode_style_1',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin6_shortcode_style_2',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin7_shortcode_style_1',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin7_shortcode_style_2',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin8_shortcode_style_1',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin8_shortcode_style_2',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin9_shortcode_style_1',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin9_shortcode_style_2',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin10_shortcode_style_1',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin10_shortcode_style_2',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin11_shortcode_style_1',
    'sanitize_callback',
  );
  register_setting(
    'sl-theme-option-custom-settings-group',
    'skin11_shortcode_style_2',
    'sanitize_callback',
  );
}
add_action('admin_init', 'sl_theme_option_custom_settings_init');

function theme_option_callback() {
?>
  <div class="wrap">
    <h2>Theme Options</h2>
    <form method="post" action="options.php">
      <div class="row">
        <div class=" col-lg-9">

          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  <h1><?php _e('Radio Player ', 'softlab') ?></h1>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">

                  <?php settings_fields('sl-theme-option-custom-settings-group'); ?>
                  <?php do_settings_sections('sl-custom-submenu') ?>

                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                          <h6> <?php _e('Shortcodes', 'softlab') ?></h6>
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <div class="form-table">

                            <div class="row">
                              <div class="col-lg-12">
                                <label class="heading_lable" for=""><?php _e('HTTP Player Shortcode ', 'softlab') ?></label>

                                <input class="input_field" type="text" name="theme_option_shortcode_http_player" value="<?php echo esc_attr(get_option('theme_option_shortcode_http_player')) ?>" />
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-lg-12">
                                <label class="heading_lable" for=""><?php _e('Multiple Player Skins Shortcodes', 'softlab') ?></label>
                              </div>
                            </div>
                            <!---Skin1--->
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="skins">
                                  <label class="heading_lable" for=""><?php _e('Skin1', 'softlab') ?></label>
                                  <div class="styles">
                                    <div class="row">
                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style1', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin1_shortcode_style_1" value="<?php echo esc_attr(get_option('skin1_shortcode_style_1')) ?>" />
                                      </div>

                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style2', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin1_shortcode_style_2" value="<?php echo esc_attr(get_option('skin1_shortcode_style_2')) ?>" />
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!--skin2-->
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="skins">
                                  <label class="heading_lable" for=""><?php _e('Skin2', 'softlab') ?></label>
                                  <div class="styles">
                                    <div class="row">
                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style1', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin2_shortcode_style_1" value="<?php echo esc_attr(get_option('skin2_shortcode_style_1')) ?>" />
                                      </div>

                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style2', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin2_shortcode_style_2" value="<?php echo esc_attr(get_option('skin2_shortcode_style_2')) ?>" />
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!--skin3-->
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="skins">
                                  <label class="heading_lable" for=""><?php _e('Skin3', 'softlab') ?></label>
                                  <div class="styles">
                                    <div class="row">
                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style1', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin3_shortcode_style_1" value="<?php echo esc_attr(get_option('skin3_shortcode_style_1')) ?>" />
                                      </div>

                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style2', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin3_shortcode_style_2" value="<?php echo esc_attr(get_option('skin3_shortcode_style_2')) ?>" />
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!--skin4-->
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="skins">
                                  <label class="heading_lable" for=""><?php _e('Skin4', 'softlab') ?></label>
                                  <div class="styles">
                                    <div class="row">
                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style1', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin4_shortcode_style_1" value="<?php echo esc_attr(get_option('skin4_shortcode_style_1')) ?>" />
                                      </div>

                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style2', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin4_shortcode_style_2" value="<?php echo esc_attr(get_option('skin4_shortcode_style_2')) ?>" />
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!--skin5-->
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="skins">
                                  <label class="heading_lable" for=""><?php _e('Skin5', 'softlab') ?></label>
                                  <div class="styles">
                                    <div class="row">
                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style1', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin5_shortcode_style_1" value="<?php echo esc_attr(get_option('skin5_shortcode_style_1')) ?>" />
                                      </div>

                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style2', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin5_shortcode_style_2" value="<?php echo esc_attr(get_option('skin5_shortcode_style_2')) ?>" />
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!--skin6-->
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="skins">
                                  <label class="heading_lable" for=""><?php _e('Skin6', 'softlab') ?></label>
                                  <div class="styles">
                                    <div class="row">
                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style1', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin6_shortcode_style_1" value="<?php echo esc_attr(get_option('skin6_shortcode_style_1')) ?>" />
                                      </div>

                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style2', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin6_shortcode_style_2" value="<?php echo esc_attr(get_option('skin6_shortcode_style_2')) ?>" />
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!--skin7-->
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="skins">
                                  <label class="heading_lable" for=""><?php _e('Skin7', 'softlab') ?></label>
                                  <div class="styles">
                                    <div class="row">
                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style1', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin7_shortcode_style_1" value="<?php echo esc_attr(get_option('skin7_shortcode_style_1')) ?>" />
                                      </div>

                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style2', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin7_shortcode_style_2" value="<?php echo esc_attr(get_option('skin7_shortcode_style_2')) ?>" />
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!--skin8-->
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="skins">
                                  <label class="heading_lable" for=""><?php _e('Skin8', 'softlab') ?></label>
                                  <div class="styles">
                                    <div class="row">
                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style1', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin8_shortcode_style_1" value="<?php echo esc_attr(get_option('skin8_shortcode_style_1')) ?>" />
                                      </div>

                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style2', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin8_shortcode_style_2" value="<?php echo esc_attr(get_option('skin8_shortcode_style_2')) ?>" />
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!--skin9-->
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="skins">
                                  <label class="heading_lable" for=""><?php _e('Skin9', 'softlab') ?></label>
                                  <div class="styles">
                                    <div class="row">
                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style1', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin9_shortcode_style_1" value="<?php echo esc_attr(get_option('skin9_shortcode_style_1')) ?>" />
                                      </div>

                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style2', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin9_shortcode_style_2" value="<?php echo esc_attr(get_option('skin9_shortcode_style_2')) ?>" />
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!--skin10-->
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="skins">
                                  <label class="heading_lable" for=""><?php _e('Skin10', 'softlab') ?></label>
                                  <div class="styles">
                                    <div class="row">
                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style1', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin10_shortcode_style_1" value="<?php echo esc_attr(get_option('skin10_shortcode_style_1')) ?>" />
                                      </div>

                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style2', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin10_shortcode_style_2" value="<?php echo esc_attr(get_option('skin10_shortcode_style_2')) ?>" />
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!--skin11-->
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="skins">
                                  <label class="heading_lable" for=""><?php _e('Skin11', 'softlab') ?></label>
                                  <div class="styles">
                                    <div class="row">
                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style1', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin11_shortcode_style_1" value="<?php echo esc_attr(get_option('skin11_shortcode_style_1')) ?>" />
                                      </div>

                                      <div class="col-lg-6">
                                        <label class="heading_lable" for=""><?php _e('Style2', 'softlab') ?></label>

                                        <input class="input_field" type="text" name="skin11_shortcode_style_2" value="<?php echo esc_attr(get_option('skin11_shortcode_style_2')) ?>" />
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>


                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <?php //submit_button(); 
                  ?>

                </div>
              </div>
            </div>

          </div>

        </div>

        <div class="col-lg-3">

          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  <h6> <?php _e('Publish', 'softlab') ?></h6>
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">

                  <?php submit_button("Update");
                  ?>
                  <!-- <p class="submit">
                    <input type="submit" name="submit" id="submit" class="button button-primary" value="Update">
                  </p> -->

                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </form>


  </div>




<?php
}

// Sanitization callback function
function sanitize_callback($input) {
  return $input;
}
