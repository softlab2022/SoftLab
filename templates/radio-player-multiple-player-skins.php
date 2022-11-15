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

    <!----===  Player Skin 1 - Card Player ===----->
    <section id="skin-1" class="skin-wrap skin-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        <h1>Player Skin 1 - Card Player</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 m-auto">
                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">
							<?php echo do_shortcode( $skins['skin_1']['style_1'] ); ?>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 m-auto">
                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Multiple Stations with playlist</p>
                        </div>
                        <div class="skin-img">
							<?php echo do_shortcode( $skins['skin_1']['style_2'] ); ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!----===  Player skin 2 ===----->
    <section id="skin-2" class="skin-wrap skin-2">
        <div class="container player-skin-2">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        <h1>Player Skin 2</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 m-auto">
                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">
							<?php echo do_shortcode( $skins['skin_2']['style_1'] ); ?>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 m-auto">
                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Multiple Stations with playlist</p>
                        </div>
                        <div class="skin-img">
							<?php echo do_shortcode( $skins['skin_2']['style_2'] ); ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!----===  Player Skin 3- Bar Player Style ===----->
    <section id="skin-3" class="skin-wrap skin-3">
        <div class="container bar-player-style">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        <h1>Player Skin 3- Bar Player Style</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 m-auto">
                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">
							<?php echo do_shortcode( $skins['skin_3']['style_1'] ); ?>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 m-auto">
                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Multiple Stations with playlist</p>
                        </div>
                        <div class="skin-img">
							<?php echo do_shortcode( $skins['skin_3']['style_2'] ); ?>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!----===  Player Skin 4 ===----->
    <section id="multi-sikn">
        <div class="container player-skin-4">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        <h1>Player Skin 4</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 m-auto">
                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">

							<?php echo do_shortcode( '[radio_player id=139]' ); ?>

                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 m-auto">
                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Multiple Stations with playlist</p>
                        </div>
                        <div class="skin-img">

							<?php echo do_shortcode( '[radio_player id=140]' ); ?>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!----===  Player Skin 5 - Radio Player Style ===----->
    <section id="multi-sikn">
        <div class="container bar-player-style ">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        <h1>Player Skin 5 - Radio Player Style</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">
							<?php echo do_shortcode( '[radio_player id=141]' ); ?>
                        </div>
                    </div>

                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Multiple Stations with playlist</p>
                        </div>
                        <div class="skin-img">
							<?php echo do_shortcode( '[radio_player id=141]' ); ?>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <!----===  Player Skin 6 - Audio Visualizer ===----->
    <section id="multi-sikn">
        <div class="container audio-visua">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        <h1>Player Skin 6 - Audio Visualizer</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">
							<?php echo do_shortcode( '[radio_player id=141]' ); ?>
                        </div>
                    </div>

                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Multiple Stations with playlist</p>
                        </div>
                        <div class="skin-img">
							<?php echo do_shortcode( '[radio_player id=141]' ); ?>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <!----===  Player Skin 7 ===----->
    <section id="multi-sikn">
        <div class="container player-skin-7">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        <h1>Player Skin 7</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">
							<?php echo do_shortcode( '[radio_player id=141]' ); ?>
                        </div>
                    </div>

                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Multiple Stations with playlist</p>
                        </div>
                        <div class="skin-img">
							<?php echo do_shortcode( '[radio_player id=141]' ); ?>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <!----===  Player Skin 8 - No Station Title ===----->
    <section id="multi-sikn">
        <div class="container audio-visua">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        <h1>Player Skin 8 - No Station Title</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">
							<?php echo do_shortcode( '[radio_player id=141]' ); ?>
                        </div>
                    </div>

                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Multiple Stations with playlist</p>
                        </div>
                        <div class="skin-img">
							<?php echo do_shortcode( '[radio_player id=141]' ); ?>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <!----===  Player Skin 9 - Open Popup Player Button ===----->
    <section id="multi-sikn">
        <div class="container player-skin-7">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        <h1>Player Skin 9 - Open Popup Player Button</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">
							<?php echo do_shortcode( '[radio_player id=141]' ); ?>
                        </div>
                    </div>

                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Multiple Stations with playlist</p>
                        </div>
                        <div class="skin-img">
							<?php echo do_shortcode( '[radio_player id=141]' ); ?>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <!----===  Player Skin 10 ===----->
    <section id="multi-sikn">
        <div class="container audio-visua">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        <h1>Player Skin 10</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">
							<?php echo do_shortcode( '[radio_player id=141]' ); ?>
                        </div>
                    </div>

                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Multiple Stations with playlist</p>
                        </div>
                        <div class="skin-img">
							<?php echo do_shortcode( '[radio_player id=141]' ); ?>
                        </div>
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