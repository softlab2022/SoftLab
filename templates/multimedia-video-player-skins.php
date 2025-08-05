<?php

/**
 * Template Name: Multimedia Video Player Skins
 *
 */

get_header('multimedia-player');

$skins = [];

if (function_exists('get_field')) {

    $skins = get_field('multiple_player_skins_shortcodes', 'options');
}


?>

<section id="multiple">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="multiple-head text-center">
                    <h1>Video Player Skins</h1>
                    <p>Upgrade your video playback with modern, customizable player skins designed for smooth performance and visual appeal across all devices.</p>
                </div>
            </div>
        </div>
    </div>

</section>

<section id="skins-main">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <section id="skins">
                    <div class="container skins-main">
                        <!----=== Video Player Skin ===----->

                        <div class="row align-items-center ">
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('mvp_skin1_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('mvp_skin1_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('mvp_skin2_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('mvp_skin2_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('mvp_skin3_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('mvp_skin3_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('mvp_skin4_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('mvp_skin4_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('mvp_skin5_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('mvp_skin5_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('mvp_skin6_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('mvp_skin6_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('mvp_skin7_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('mvp_skin7_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('mvp_skin8_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('mvp_skin8_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</section>


<?php

get_template_part('template-parts/multimedia-player/home/cta');

?>


<?php
get_footer('radio-player');
