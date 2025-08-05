<?php

/**
 * Template Name: Multimedia Podcast Player Skins
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
                    <h1>Podcast Player Skins</h1>
                    <p>Showcase your podcast with sleek, professional player skins that highlight your episodes and keep listeners tuned in.</p>
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
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('mpp_skin1_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('mpp_skin1_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('mpp_skin2_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('mpp_skin2_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('mpp_skin3_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('mpp_skin3_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('mpp_skin4_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('mpp_skin4_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('mpp_skin5_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('mpp_skin5_shortcode_style_1'));
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="skin-item ">
                                    <div class="skin-img text-center">
                                        <?php
                                        if (!empty(get_option('mpp_skin6_shortcode_style_1'))) {
                                            echo do_shortcode(get_option('mpp_skin6_shortcode_style_1'));
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
