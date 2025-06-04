<?php

/**
 * Template Name: Multimedia Player Skins
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
            <div class="col-lg-8 m-auto">
                <div class="multiple-head text-center">
                    <h1>Ready-to-Use Modern Player Skins</h1>
                    <p>Choose from modern, customizable media player skins that fit your site’s branding and work perfectly with any design</p>
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
                        <!----=== Audio Player Skin ===----->

                        <div class="row align-items-center ">
                            <div class="col-lg-12 m-auto">
                                <div class="player-head text-center">
                                    <h4>Audio Player Skins</h4>
                                    <p>Stylish, pre-built audio skins that enhance playback and match your site’s design professionally</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin1_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin1_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin2_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin2_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin3_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin3_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin4_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin4_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin5_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin5_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin6_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin6_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin7_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin7_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin8_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin8_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin9_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin9_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin10_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin10_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin11_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin11_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin12_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin12_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="skins">
                    <div class="container skins-main">
                        <!----=== Video Player Skin ===----->

                        <div class="row align-items-center ">
                            <div class="col-lg-12 m-auto">
                                <div class="player-head text-center">
                                    <h4>Video Player Skins</h4>
                                    <p>Modern video player skins with clean layouts and user-friendly controls, designed to compatible with any theme</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin1_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin1_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin2_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin2_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin3_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin3_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin4_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin4_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin5_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin5_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin6_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin6_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin7_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin7_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin8_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin8_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="skins">
                    <div class="container skins-main">
                        <!----=== Audio Player Skin ===----->

                        <div class="row align-items-center ">
                            <div class="col-lg-12 m-auto">
                                <div class="player-head text-center">
                                    <h4>Podcast Player Skins</h4>
                                    <p>Accessible and visually clean pre-designed podcast skins, built for readability and ideal for any environments</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin1_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin1_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin2_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin2_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin3_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin3_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin4_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin4_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin5_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin5_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('map_skin6_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('map_skin6_shortcode_style_1'));
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
