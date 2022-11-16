<?php
/**
 * Template Name: Radio Player Http Player
 *
 */

get_header( 'radio-player' );


?>

    <section id="http">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 m-auto">
                    <div class="http-head text-center">
                        <h1>Play HTTP Streams on HTTPS Website</h1>

                        <p>Modern browsers no longer accepts mixed-content requests. That means if you have an HTTP
                            stream link, you can't play it on an HTTPS (Secured) website because of browser
                            mixed-content restrictions.
                        </p>
                        <p>But Radio Player has a solution for this. You can play your HTTP stream on your HTTPS website
                            using our HTTP Player Proxy system.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="stream">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 m-auto">
                    <div class="head text-center">
                        <span>Check Your HTTP Stream</span>
                    </div>
                </div>
                <div class="col-lg-6 m-auto">

                    <form id="http-stream-from" class="d-flex align-items-center">
                        <input type="url" class="form-control" id="http-stream" required
                               placeholder="Enter your HTTP stream URL"
                               value="http://sc.hot108.com:4000/;"
                        >

                        <button type="submit" class="btn btn-primary check-btn">Play Now</button>
                    </form>
                </div>
                <div class="col-lg-8 m-auto">
                    <div class="image text-center">

						<?php

						if ( function_exists( 'get_field' ) ) {
							$http_player_shortcode = get_field( 'http_player_shortcode', 'options' );

							echo do_shortcode( $http_player_shortcode );
						}

						?>

                    </div>
                </div>
            </div>

        </div>
    </section>

    <script>
        (function ($) {
            $(document).on('ready', function () {

                function playStream(stream) {
                    var playerElement = $('.radio_player_media audio');

                    const playBtn = $('.radio-play-pause');

                    if (playBtn.hasClass('active')) {
                        playerElement.attr('src', stream);
                        playerElement[0].load();
                        playerElement[0].play();
                    } else {
                        playerElement.attr('src', stream);
                        playBtn.trigger('click');
                    }
                }

                $('#http-stream-from').on('submit', function (e) {
                    e.preventDefault();
                    var stream = $('#http-stream').val();

                    const proxyUrl = 'https://crs.webdesign-flash.ro/?q=';

                    if (stream.includes('http://')) {
                        stream = proxyUrl + stream;
                    }

                    playStream(stream);
                });

            });
        })(jQuery);
    </script>

<?php

get_template_part( 'template-parts/radio-player/home/radio-cta' );

?>

<?php
get_footer( 'radio-player' );