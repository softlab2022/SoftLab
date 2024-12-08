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

/**
 * Summary of sl_theme_option_custom_settings_init
 * @return void
 */
function sl_theme_option_custom_settings_init() {
    register_setting(
        'sl-theme-option-custom-settings-group',
        'theme_option_shortcode_http_player',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin1_shortcode_style_1',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin1_shortcode_style_2',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin2_shortcode_style_1',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin2_shortcode_style_2',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin3_shortcode_style_1',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin3_shortcode_style_2',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin4_shortcode_style_1',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin4_shortcode_style_2',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin5_shortcode_style_1',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin5_shortcode_style_2',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin6_shortcode_style_1',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin6_shortcode_style_2',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin7_shortcode_style_1',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin7_shortcode_style_2',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin8_shortcode_style_1',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin8_shortcode_style_2',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin9_shortcode_style_1',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin9_shortcode_style_2',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin10_shortcode_style_1',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin10_shortcode_style_2',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin11_shortcode_style_1',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'skin11_shortcode_style_2',
    );


    register_setting(
        'sl-theme-option-custom-settings-group',
        'file_browser_shortcode',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'file_uploader_shortcode',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'gallery_shortcode',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'slider_carousel_shortcode',
    );
    register_setting(
        'sl-theme-option-custom-settings-group',
        'media_player_shortcode',
    );
}

add_action('admin_init', 'sl_theme_option_custom_settings_init');

function theme_option_callback() { ?>
    <div class="wrap">
        <h2>Theme Options</h2>
        <form method="post" action="options.php">
            <div class="row">
                <div class=" col-lg-9">
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingtwo">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsetwo" aria-expanded="true" aria-controls="panelsStayOpen-collapsetwo">
                                    <h1><?php _e('Integrate Google Drive', 'softlab') ?></h1>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapsetwo" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingtwo">
                                <div class="accordion-body">

                                    <?php settings_fields('sl-theme-option-custom-settings-group'); ?>
                                    <?php do_settings_sections('sl-custom-submenu') ?>

                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingTw">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTw" aria-expanded="true" aria-controls="collapseTw">
                                                    <h6> <?php _e('Shortcodes', 'softlab') ?></h6>
                                                </button>
                                            </h2>
                                            <div id="collapseTw" class="accordion-collapse collapse show" aria-labelledby="headingTw" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <div class="form-table">

                                                        <div class="row">
                                                            <div class="col-lg-12">
                                                                <label class="heading_lable" for=""><?php _e('Integrate Google Drive Shortcode Builder', 'softlab') ?></label>
                                                            </div>
                                                        </div>
                                                        <!---File Browser--->
                                                        <div class="row">
                                                            <div class="col-lg-12">
                                                                <div class="skins">
                                                                    <label class="heading_lable" for=""><?php _e('File Browser', 'softlab') ?></label>
                                                                    <div class="styles">
                                                                        <!-- <label class="heading_lable" for=""><?php _e('File Browser', 'softlab') ?></label> -->

                                                                        <input class="input_field" type="text" name="file_browser_shortcode" value="<?php echo esc_attr(get_option('file_browser_shortcode')) ?>" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--File Uploader-->
                                                        <div class="row">
                                                            <div class="col-lg-12">
                                                                <div class="skins">
                                                                    <label class="heading_lable" for=""><?php _e('File Uploader', 'softlab') ?></label>
                                                                    <div class="styles">
                                                                        <!-- <label class="heading_lable" for=""><?php _e('File Uploader', 'softlab') ?></label> -->

                                                                        <input class="input_field" type="text" name="file_uploader_shortcode" value="<?php echo esc_attr(get_option('file_uploader_shortcode')) ?>" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--Gallery-->
                                                        <div class="row">
                                                            <div class="col-lg-12">
                                                                <div class="skins">
                                                                    <label class="heading_lable" for=""><?php _e('Gallery', 'softlab') ?></label>
                                                                    <div class="styles">
                                                                        <!-- <label class="heading_lable" for=""><?php _e('Gallery', 'softlab') ?></label> -->

                                                                        <input class="input_field" type="text" name="gallery_shortcode" value="<?php echo esc_attr(get_option('gallery_shortcode')) ?>" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--Slider Carousel-->
                                                        <div class="row">
                                                            <div class="col-lg-12">
                                                                <div class="skins">
                                                                    <label class="heading_lable" for=""><?php _e('Slider Carousel', 'softlab') ?></label>
                                                                    <div class="styles">
                                                                        <!-- <label class="heading_lable" for=""><?php _e('Slider Carousel', 'softlab') ?></label> -->

                                                                        <input class="input_field" type="text" name="slider_carousel_shortcode" value="<?php echo esc_attr(get_option('slider_carousel_shortcode')) ?>" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!--Media Player-->
                                                        <div class="row">
                                                            <div class="col-lg-12">
                                                                <div class="skins">
                                                                    <label class="heading_lable" for=""><?php _e('Media Player', 'softlab') ?></label>
                                                                    <div class="styles">

                                                                        <!-- <label class="heading_lable" for=""><?php _e('Media Player', 'softlab') ?></label> -->

                                                                        <input class="input_field" type="text" name="media_player_shortcode" value="<?php echo esc_attr(get_option('media_player_shortcode')) ?>" />

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
<?php }

// Sanitization callback function
function sanitize_callback($input) {
    return $input;
}


/**
 * Summary of softlab eacf7 preview metabox
 * @return void
 */
function sl_metabox() {
    add_meta_box('sl-page-id', 'softlab page meta box', 'wpl_sl_pages_function', 'page', 'side', 'default');
}

add_action('add_meta_boxes', 'sl_metabox');

/**
 * Summary of wpl_sl_pages_function
 * @param mixed $post
 * @return void
 */
// function wpl_sl_pages_function($post) {

//     // Retrieve saved meta data
//     $sl_meta_fields = get_post_meta($post->ID, 'sl_meta_fields', true);
//     if (empty($sl_meta_fields)) {
//         $sl_meta_fields = [['title' => '', 'description' => '', 'shortcode' => '']]; // Default empty field
//     }

//     echo '<div id="sl-metabox-container">';
//     foreach ($sl_meta_fields as $index => $field) {
//         echo '<div class="sl-metabox-fields">';
//         echo '<h3>Demo Fields</h3>';
//         echo '<label for="sl_meta_field_' . $index . '">Title: </label>';
//         echo '<input type="text" id="sl_meta_field_' . $index . '" name="sl_meta_fields[' . $index . '][title]" value="' . esc_attr($field['title']) . '">';

//         echo '<br>';
//         echo '<label for="sl_meta_field_description_' . $index . '">Description: </label>';
//         echo '<input type="text" id="sl_meta_field_description_' . $index . '" name="sl_meta_fields[' . $index . '][description]" value="' . esc_attr($field['description']) . '">';
        
//         echo '<br>';
//         echo '<label for="sl_meta_field_shortcode_' . $index . '">Form Shortcode: </label>';
//         echo '<input type="text" id="sl_meta_field_shortcode_' . $index . '" name="sl_meta_fields[' . $index . '][shortcode]" value="' . esc_attr($field['shortcode']) . '">';
//         echo '<br>';
//         echo '</div>';
//     }
//     echo '</div>';

//     // Button group
//     echo '<div class="sl-button-group">';
//     echo '<button type="button" id="add-new-demo">Add New</button>';
//     echo '<button type="button" id="remove-new-demo">Remove</button>';
//     echo '</div>';

//     // Add your meta box content here
//     $meta_value = get_post_meta($post->ID, 'sl_meta_field_url', true);

//     echo '<div class="sl-metabox-field">';
//     echo '<br>';
//     echo '<div>';
//     echo '<label for="sl_meta_field_url">Video Url: </label>';
//     echo '<input type="url" id="sl_meta_field_url" name="sl_meta_field_url" value="' . esc_attr(get_post_meta($post->ID, 'sl_meta_field_url', true)) . '">';
//     echo '</div>';

//     echo '<br>';
//     echo '<div>';
//     echo '<label for="sl_meta_field_documentation_link">Documentation Link: </label>';
//     echo '<input type="url" id="sl_meta_field_documentation_link" name="sl_meta_field_documentation_link" value="' . esc_attr(get_post_meta($post->ID, 'sl_meta_field_documentation_link', true)) . '">';
//     echo '</div>';
// }
function wpl_sl_pages_function($post) {
    // Retrieve saved meta data for multiple fields
    $sl_meta_fields = get_post_meta($post->ID, 'sl_meta_fields', true);
    if (empty($sl_meta_fields)) {
        $sl_meta_fields = [['title' => '', 'description' => '', 'shortcode' => '']];
    }

    echo '<div id="sl-metabox-container">';
    foreach ($sl_meta_fields as $index => $field) {
        echo '<div class="sl-metabox-fields">';
        echo '<h3>Demo Fields</h3>';
        echo '<label for="sl_meta_field_' . $index . '">Title: </label>';
        echo '<input type="text" id="sl_meta_field_' . $index . '" name="sl_meta_fields[' . $index . '][title]" value="' . esc_attr($field['title']) . '">';

        echo '<br>';
        echo '<label for="sl_meta_field_description_' . $index . '">Description: </label>';
        echo '<input type="text" id="sl_meta_field_description_' . $index . '" name="sl_meta_fields[' . $index . '][description]" value="' . esc_attr($field['description']) . '">';
        
        echo '<br>';
        echo '<label for="sl_meta_field_shortcode_' . $index . '">Form Shortcode: </label>';
        echo '<input type="text" id="sl_meta_field_shortcode_' . $index . '" name="sl_meta_fields[' . $index . '][shortcode]" value="' . esc_attr($field['shortcode']) . '">';
        echo '<br>';
        echo '</div>';
    }
    echo '</div>';

        // Button group
    echo '<div class="sl-button-group">';
    echo '<button type="button" id="add-new-demo">Add New</button>';
    echo '<button type="button" id="remove-new-demo">Remove</button>';
    echo '</div>';

    // Single URL fields
    echo '<div class="sl-metabox-field">';
    echo '<label for="sl_meta_field_url">Video URL: </label>';
    echo '<input type="url" id="sl_meta_field_url" name="sl_meta_field_url" value="' . esc_attr(get_post_meta($post->ID, 'sl_meta_field_url', true)) . '">';
    echo '</div>';

    echo '<div class="sl-metabox-field">';
    echo '<label for="sl_meta_field_documentation_link">Documentation Link: </label>';
    echo '<input type="url" id="sl_meta_field_documentation_link" name="sl_meta_field_documentation_link" value="' . esc_attr(get_post_meta($post->ID, 'sl_meta_field_documentation_link', true)) . '">';
    echo '</div>';
}


/**
 * Summary of sl_save_meta_box_data
 * @param mixed $post_id
 * @return void
 */
// function sl_save_meta_box_data($post_id) {
//     if (isset($_POST['sl_meta_fields'])) {
//         $meta_fields = array_filter($_POST['sl_meta_fields'], function ($field) {
           
//             return !empty($field['title']) || !empty($field['description']) || !empty($field['shortcode']);
//         });

//         update_post_meta($post_id, 'sl_meta_fields', $meta_fields);
//     }
//     if (!isset($_POST['sl_meta_field_url'])) {

//         // update_post_meta($post_id, 'sl_meta_field_url', sanitize_text_field($_POST['sl_meta_field_url']));
//         update_post_meta($post_id, 'sl_meta_field_url', esc_url_raw($_POST['sl_meta_field_url']));

//         update_post_meta($post_id, 'sl_meta_field_documentation_link', sanitize_text_field($_POST['sl_meta_field_documentation_link']));

//     }

//     if (isset($_POST['sl_meta_fields']) && is_array($_POST['sl_meta_fields'])) {
//         $sanitized_fields = array_map(function ($field) {
//             return [
//                 'title' => sanitize_text_field($field['title']),
//                 'description' => sanitize_text_field($field['description']),
//                 'shortcode' => wp_kses_post($field['shortcode']),
//             ];
//         }, $_POST['sl_meta_fields']);
//         update_post_meta($post_id, 'sl_meta_fields', $sanitized_fields);
//     }
// }

function sl_save_meta_box_data($post_id) {
    // Check for nonce, autosave, and permissions.
    if (!isset($_POST['sl_meta_field_url']) || defined('DOING_AUTOSAVE') && DOING_AUTOSAVE || !current_user_can('edit_post', $post_id)) {
        return;
    }

    // Save multiple fields.
    if (isset($_POST['sl_meta_fields']) && is_array($_POST['sl_meta_fields'])) {
        $sanitized_fields = array_map(function ($field) {
            return [
                'title' => sanitize_text_field($field['title']),
                'description' => sanitize_text_field($field['description']),
                'shortcode' => wp_kses_post($field['shortcode']),
            ];
        }, $_POST['sl_meta_fields']);
        update_post_meta($post_id, 'sl_meta_fields', $sanitized_fields);
    }

    // Save single URL fields.
    update_post_meta($post_id, 'sl_meta_field_url', esc_url_raw($_POST['sl_meta_field_url']));
    update_post_meta($post_id, 'sl_meta_field_documentation_link', esc_url_raw($_POST['sl_meta_field_documentation_link']));
}

add_action('save_post', 'sl_save_meta_box_data');
