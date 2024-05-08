<?php
/**
 * Template Name: Radio Player Multiple Player Skins
 *
 */

get_header( 'radio-player' );

$skins = [];

if ( function_exists( 'get_field' ) ) {

	$skins = get_field( 'multiple_player_skins_shortcodes', 'options' );
}


?>

    <section id="multiple">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 m-auto">
                    <div class="multiple-head text-center">
                        <h1>10+ Player Skins With Different Layouts And Styles</h1>
                        <p>Radio Player provides 10+ player skins with different layouts and styles to choose from. You
                            can choose any player skin from the skins library and display it anywhere on your website
                            using the shortcode.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section id="skins">
        <div class="container skins-main">
            <!----===  Player Skin 1 ===----->
            <div class="row align-items-center skin-wrap skin-1" id="skin1">
                <div class="col-lg-5">
                    <div class="skin-item ">
                        <div class="skin-img text-center">
                            <?php //echo do_shortcode( $skins['skin_1']['style_2'] ); ?>
                            <?php //echo do_shortcode(get_option( 'skin1_shortcode_style_1' )); ?>
                            <?php
                                if (!empty(get_option( 'skin1_shortcode_style_1' ))) {
                                    echo do_shortcode(get_option( 'skin1_shortcode_style_1' ));
                                }
                            ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon icon1">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img1.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="section-head text-center">
                        <div class="section-head-img">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h3>Player Skin 1</h3>
                    </div>
                </div>
            </div>
            <!------=== player skin 2 ===-------->
            <div class="row align-items-center flex-column-reverse flex-md-row skin-wrap skin-2" id="skin2">
                
                <div class="col-lg-5">
                    <div class="section-head text-center">
                        <div class="section-head-img text-center">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h3>Player Skin 2</h3>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img2.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="skin-item bar-player-style ">
                        <div class="skin-img  text-center">
                            <?php //echo do_shortcode( $skins['skin_2']['style_2'] ); ?>
                            <?php //echo do_shortcode(get_option( 'skin2_shortcode_style_1' )); ?>

                            <?php
                                if (!empty(get_option( 'skin2_shortcode_style_1' ))) {
                                    echo do_shortcode(get_option( 'skin2_shortcode_style_1' ));
                                }
                            ?>
                        </div>
                    </div>
                </div>
            </div>
                <!------=== player skin 3 ===-------->
            <div class="row align-items-center skin-wrap skin-3" id="skin3">
                <div class="col-lg-5">
                    <div class="skin-item audio-visua">
                        <div class="skin-img text-center">
                            <?php //echo do_shortcode( $skins['skin_3']['style_2'] ); ?>
                            <?php //echo do_shortcode(get_option( 'skin3_shortcode_style_1' )); ?>
                            <?php
                                if (!empty(get_option( 'skin3_shortcode_style_1' ))) {
                                    echo do_shortcode(get_option( 'skin3_shortcode_style_1' ));
                                }
                            ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon icon1 ">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img1.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="section-head text-center">
                        <div class="section-head-img">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h3>Player Skin 3</h3>
                    </div>
                </div>
            </div>
            <!------=== player skin 4 ===-------->
            <div class="row align-items-center flex-column-reverse flex-md-row skin-wrap skin-4" id="skin4">
                <div class="col-lg-5">
                    <div class="section-head text-center">
                        <div class="section-head-img text-center">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h3>Player Skin 4</h3>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img2.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="skin-item player-skin-4">
                        <div class="skin-img text-center">
                            <?php //echo do_shortcode( $skins['skin_4']['style_2'] ); ?>
                            <?php //echo do_shortcode(get_option( 'skin4_shortcode_style_1' )); ?>
                            <?php
                                if (!empty(get_option( 'skin4_shortcode_style_1' ))) {
                                    echo do_shortcode(get_option( 'skin4_shortcode_style_1' ));
                                }
                            ?>
                        </div>
                    </div>
                </div>
            </div>
            <!------=== player skin 5 ===-------->
            <div class="row align-items-center skin-wrap skin-5" id="skin5">
                <div class="col-lg-5">
                    <div class="skin-item">
                        <div class="skin-img text-center">
                            <?php //echo do_shortcode( $skins['skin_5']['style_2'] ); ?>
                            <?php //echo do_shortcode(get_option( 'skin5_shortcode_style_1' )); ?>
                            <?php
                                if (!empty(get_option( 'skin5_shortcode_style_1' ))) {
                                    echo do_shortcode(get_option( 'skin5_shortcode_style_1' ));
                                }
                            ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon icon1 ">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img1.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="section-head text-center">
                        <div class="section-head-img">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h3>Player Skin 5</h3>
                    </div>
                </div>
            </div>
            <!------=== player skin 6 ===-------->
            <div class="row align-items-center flex-column-reverse flex-md-row skin-wrap skin-6" id="skin6">
                
                <div class="col-lg-5">
                    <div class="section-head text-center">
                        <div class="section-head-img text-center">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h3>Player Skin 6</h3>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img2.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="skin-item bar-player-style ">
                        <div class="skin-img text-center">
                            <?php //echo do_shortcode( $skins['skin_6']['style_2'] ); ?>
                            <?php //echo do_shortcode(get_option( 'skin6_shortcode_style_1' )); ?>
                            <?php
                                if (!empty(get_option( 'skin6_shortcode_style_1' ))) {
                                    echo do_shortcode(get_option( 'skin6_shortcode_style_1' ));
                                }
                            ?>
                        </div>
                    </div>
                </div>
            </div>
            <!------=== player skin 7 ===-------->
            <div class="row align-items-center skin-wrap skin-7" id="skin7">
                <div class="col-lg-5">
                    <div class="skin-item player-skin-7">
                        <div class="skin-img text-center">
                            <?php //echo do_shortcode( $skins['skin_7']['style_2'] ); ?>
                            <?php //echo do_shortcode(get_option( 'skin7_shortcode_style_1' )); ?>
                            <?php
                                if (!empty(get_option( 'skin7_shortcode_style_1' ))) {
                                    echo do_shortcode(get_option( 'skin7_shortcode_style_1' ));
                                }
                            ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon icon1 ">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img1.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="section-head text-center">
                        <div class="section-head-img">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h3>Player Skin 7</h3>
                    </div>
                </div>
            </div>
            <!------=== player skin 8 ===-------->
            <div class="row align-items-center flex-column-reverse flex-md-row skin-wrap skin-8" id="skin8">
                
                <div class="col-lg-5">
                    <div class="section-head text-center">
                        <div class="section-head-img text-center">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h3>Player Skin 8</h3>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img2.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="skin-item player-skin-4">
                        <div class="skin-img text-center">
                            <?php //echo do_shortcode( $skins['skin_8']['style_2'] ); ?>
                            <?php //echo do_shortcode(get_option( 'skin8_shortcode_style_1' )); ?>
                            <?php
                                if (!empty(get_option( 'skin8_shortcode_style_1' ))) {
                                    echo do_shortcode(get_option( 'skin8_shortcode_style_1' ));
                                }
                            ?>
                        </div>
                    </div>
                </div>
            </div>
            <!------=== player skin 9 ===-------->
            <div class="row align-items-center skin-wrap skin-9" id="skin9">
                <div class="col-lg-5">
                    <div class="skin-item audio-visua">
                        <div class="skin-img text-center">
                            <?php //echo do_shortcode( $skins['skin_9']['style_2'] ); ?>
                            <?php //echo do_shortcode(get_option( 'skin9_shortcode_style_1' )); ?>
                            <?php
                                if (!empty(get_option( 'skin9_shortcode_style_1' ))) {
                                    echo do_shortcode(get_option( 'skin9_shortcode_style_1' ));
                                }
                            ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon icon1 ">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img1.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="section-head text-center">
                    <div class="section-head-img">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h3>Player Skin 9</h3>
                    </div>
                </div>
            </div>
            <!------=== player skin 10 ===-------->
            <div class="row align-items-center flex-column-reverse flex-md-row skin-wrap skin-10" id="skin10">  
                <div class="col-lg-5">
                    <div class="section-head text-center">
                    <div class="section-head-img text-center">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h3>Player Skin 10</h3>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img2.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="skin-item player-skin-4">
                        <div class="skin-img text-center">
                            <?php //echo do_shortcode( $skins['skin_10']['style_2'] ); ?>
                            <?php //echo do_shortcode(get_option( 'skin10_shortcode_style_1' )); ?>
                            <?php
                                if (!empty(get_option( 'skin10_shortcode_style_1' ))) {
                                    echo do_shortcode(get_option( 'skin10_shortcode_style_1' ));
                                }
                            ?>
                        </div>
                        
                    </div>
                </div>
            </div>
            <!------=== player skin 11 ===-------->
            <div class="row align-items-center skin-wrap skin-11" id="skin11">
                <div class="col-lg-5">
                    <div class="skin-item player-skin-7">
                        <div class="skin-img text-center">
                            <?php //echo do_shortcode( $skins['skin_11']['style_2'] ); ?>
                            <?php //echo do_shortcode(get_option( 'skin11_shortcode_style_1' )); ?>
                            <?php
                                if (!empty(get_option( 'skin11_shortcode_style_1' ))) {
                                    echo do_shortcode(get_option( 'skin11_shortcode_style_1' ));
                                }
                            ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon icon1 ">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img1.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="section-head text-center">
                        <div class="section-head-img">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h3>Player Skin 11</h3>
                    </div>
                </div>
            </div>

        </div>
    </section>

<?php

get_template_part( 'template-parts/radio-player/home/radio-cta' );

?>


<?php
get_footer( 'radio-player' );