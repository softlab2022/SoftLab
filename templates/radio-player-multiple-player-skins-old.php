<?php
/**
 * Template Name: Radio Player Multiple Player Skins Old
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
    <section id="skin1" class="skin-wrap skin-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                    <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        <h1>Player Skin 1 - Card Player Style</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">
                        <?php echo do_shortcode( $skins['skin_1']['style_1'] ); ?>
                        
                        </div>
                    </div>

                </div>

                <div class="col-lg-6 col-md-6">

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
    <section id="skin2" class="skin-wrap skin-2">
        <div class="container audio-visua">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                             <h1>Player Skin 2 - Bar Player Style</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">
                        <?php echo do_shortcode( $skins['skin_2']['style_1'] ); ?>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
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
    <section id="skin3" class="skin-wrap skin-3">
        <div class="container bar-player-style">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        <h1>Player Skin 3</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">
                        <?php echo do_shortcode( $skins['skin_3']['style_1'] ); ?>
                        </div>
                    </div>

                </div>

                <div class="col-lg-6 col-md-6">
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
    <section id="skin4" class="skin-wrap skin-4">
        <div class="container player-skin-4">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                             <h1>Player Skin 4</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">
                        <?php echo do_shortcode( $skins['skin_4']['style_1'] ); ?>
                        </div>
                    </div>

                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Multiple Stations with playlist</p>
                        </div>
                        <div class="skin-img">
                        <?php echo do_shortcode( $skins['skin_4']['style_2'] ); ?>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <!----===  Player Skin 5  ===----->
    <section id="skin5" class="skin-wrap skin-5">
        <div class="container bar-player-style ">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        <h1>Player Skin 5</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">
                        <?php echo do_shortcode( $skins['skin_5']['style_1'] ); ?>
                        </div>
                    </div>

                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Multiple Stations with playlist</p>
                        </div>
                        <div class="skin-img">
                        <?php echo do_shortcode( $skins['skin_5']['style_2'] ); ?>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <!----===  Player Skin 6  ===----->
    <section id="skin6" class="skin-wrap skin-6">
        <div class="container audio-visua">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        <h1>Player Skin 6 - Classic Radio Player</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">
                        <?php echo do_shortcode( $skins['skin_6']['style_1'] ); ?>
                        </div>
                    </div>

                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Multiple Stations with playlist</p>
                        </div>
                        <div class="skin-img">
                            <?php echo do_shortcode( $skins['skin_6']['style_2'] ); ?>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <!----===  Player Skin 7 ===----->
    <section id="skin7" class="skin-wrap skin-7">
        <div class="container player-skin-7">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        <h1>Player Skin 7 - Audio Visualizer</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">
                            <?php echo do_shortcode( $skins['skin_7']['style_1'] ); ?>
                        </div>
                    </div>

                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Multiple Stations with playlist</p>
                        </div>
                        <div class="skin-img">
                        <?php echo do_shortcode( $skins['skin_7']['style_2'] ); ?>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <!----===  Player Skin 8 ===----->
    <section id="skin8" class="skin-wrap skin-8">
        <div class="container audio-visua">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        <h1>Player Skin 8</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">
                        <?php echo do_shortcode( $skins['skin_8']['style_1'] ); ?>
                        </div>
                    </div>

                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Multiple Stations with playlist</p>
                        </div>
                        <div class="skin-img">
                            <?php echo do_shortcode( $skins['skin_8']['style_2'] ); ?>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <!----===  Player Skin 9 ===----->
    <section id="skin9" class="skin-wrap skin-9">
        <div class="container player-skin-7">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        <h1>Player Skin 9</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">
                        <?php echo do_shortcode( $skins['skin_9']['style_1'] ); ?>
                        </div>
                    </div>

                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Multiple Stations with playlist</p>
                        </div>
                        <div class="skin-img">
                        <?php echo do_shortcode( $skins['skin_9']['style_2'] ); ?>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <!----===  Player Skin 10 ===----->
    <section id="skin10" class="skin-wrap skin-10">
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
                        <?php echo do_shortcode( $skins['skin_10']['style_1'] ); ?>
                        </div>
                    </div>

                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Multiple Stations with Custom Background</p>
                        </div>
                        <div class="skin-img">
                        <?php echo do_shortcode( $skins['skin_10']['style_2'] ); ?>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <!----===  Player Skin 11 ===----->
    <section id="skin11" class="skin-wrap skin-11">
        <div class="container bar-player-style">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <div class="section-head text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/skin-elements.png">
                        <h1>Player Skin 11 - Open Popup Button</h1>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Default Style</p>
                        </div>
                        <div class="skin-img">
                        <?php echo do_shortcode( $skins['skin_11']['style_1'] ); ?>
                        </div>
                    </div>

                </div>

                <div class="col-lg-6 col-md-6">

                    <div class="skin-item text-center">
                        <div class="skin-head">
                            <p>Custom Text and Background Color</p>
                        </div>
                        <div class="skin-img">
                        <?php echo do_shortcode( $skins['skin_11']['style_2'] ); ?>
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