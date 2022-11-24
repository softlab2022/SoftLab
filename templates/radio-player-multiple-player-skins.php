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

    <!----===  Player Skin 11 ===----->
    <section id="skins">
        <div class="container skins-main">

            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div class="skin-item ">
                        <div class="skin-img text-center">
                            <?php echo do_shortcode( $skins['skin_1']['style_2'] ); ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon icon1">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img1.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="section-head">
                        <div class="section-head-img text-center">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h1>Player Skin 1 - Card Player</h1>
                    </div>
                </div>
            </div>

            <div class="row align-items-center">
                
                <div class="col-lg-5">
                    <div class="section-head text-center">
                        <div class="section-head-img text-center">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h1>Player Skin 2</h1>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img2.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="skin-item items-skin">
                        <div class="skin-img  text-center">
                            <?php echo do_shortcode( $skins['skin_2']['style_2'] ); ?>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div class="skin-item">
                        <div class="skin-img text-center">
                            <?php echo do_shortcode( $skins['skin_3']['style_2'] ); ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon icon1 ">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img1.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="section-head">
                        <div class="section-head-img text-center">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h1>Player Skin 3- Bar Player Style</h1>
                    </div>
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div class="section-head text-center">
                        <div class="section-head-img text-center">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h1>Player Skin 4</h1>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img2.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="skin-item items-skin">
                        <div class="skin-img text-center">
                            <?php echo do_shortcode( $skins['skin_4']['style_2'] ); ?>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div class="skin-item">
                        <div class="skin-img text-center">
                            <?php echo do_shortcode( $skins['skin_5']['style_2'] ); ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon icon1 ">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img1.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="section-head">
                        <div class="section-head-img text-center">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h1>Player Skin 5 - Radio Player Style</h1>
                    </div>
                </div>
            </div>

            <div class="row align-items-center">
                
                <div class="col-lg-5">
                    <div class="section-head text-center">
                        <div class="section-head-img text-center">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h1>Player Skin 6 - Audio Visualizer</h1>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img2.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="skin-item items-skin">
                        <div class="skin-img text-center">
                            <?php echo do_shortcode( $skins['skin_6']['style_2'] ); ?>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div class="skin-item">
                        <div class="skin-img text-center">
                            <?php echo do_shortcode( $skins['skin_7']['style_2'] ); ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon icon1 ">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img1.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="section-head">
                        <div class="section-head-img text-center">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h1>Player Skin 7 - Audio Visualizer</h1>
                    </div>
                </div>
            </div>

            <div class="row align-items-center">
                
                <div class="col-lg-5">
                    <div class="section-head text-center">
                        <div class="section-head-img text-center">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h1>Player Skin 8 - No Station Title</h1>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img2.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="skin-item items-skin">
                        <div class="skin-img text-center">
                            <?php echo do_shortcode( $skins['skin_8']['style_2'] ); ?>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div class="skin-item">
                        <div class="skin-img text-center">
                            <?php echo do_shortcode( $skins['skin_9']['style_2'] ); ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon icon1 ">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img1.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="section-head">
                    <div class="section-head-img text-center">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h1>Player Skin 9 - Open Popup Player Button</h1>
                    </div>
                </div>
            </div>

            <div class="row align-items-center">
                
                <div class="col-lg-5">
                    <div class="section-head text-center">
                    <div class="section-head-img text-center">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h1>Player Skin 10</h1>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img2.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="skin-item items-skin">
                        <div class="skin-img text-center">
                            <?php echo do_shortcode( $skins['skin_10']['style_2'] ); ?>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div class="skin-item">
                        <div class="skin-img text-center">
                            <?php echo do_shortcode( $skins['skin_11']['style_2'] ); ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="item-icon icon1 ">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/multi-demo/img1.png">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="section-head">
                        <div class="section-head-img text-center">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        </div>
                        <h1>Player Skin 11 - Open Popup Button</h1>
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