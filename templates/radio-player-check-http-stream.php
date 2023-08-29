<?php
/**
 * Template Name: Radio Player HTTP Stream Check
 *
 */

add_action( 'wp_enqueue_scripts', function () {
	if ( class_exists( 'Radio_Player_Enqueue' ) ) {
		Radio_Player_Enqueue::instance()->frontend_scripts();
	}
} );

get_header( 'radio-player' );


?>

    <section id="http">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 m-auto">
                    <div class="http-head text-center">
                        <h1>Play HTTP Streams on HTTPS Website</h1>

                        <p>
                            Recent updates of modern browsers introduced stringent rules against mixed content.
                            As a result, if a stream link isn't SSL-encrypted but your website is, it won't play on
                            Chrome.
                            Notably, many browsers are following Chrome's lead. Therefore, it's crucial to ensure your
                            stream links are SSL-secured.
                        </p>

                        <p>
                            HTTP Stream Player Add-on for Radio Player facilitates the playback of HTTP (non-SSL) radio
                            streams on HTTPS-enabled websites. Serving as a bridge, it retrieves the radio stream and
                            delivers it to the player as an HTTPS stream.
                        </p>

                        <p>
                            Additionally, if your website server struggles to retrieve stream data including currently
                            playing song title, artist, artwork, and recent play history, the plugin can fix display of
                            the metadata.
                        </p>
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
                               value="http://162.244.80.131:8020/stream"
                        >

                        <button type="submit" class="btn btn-primary check-btn">Play Now</button>
                    </form>
                </div>
                <div class="col-lg-8 m-auto">
                    <div class="image text-center">


						<?php

						$data = [
							'title'          => 'Soft Classic Rock',
							'status'         => 1,
							'skin'           => 'skin1',
							'history_icon'   => 1,
							'player_status'  => 1,
							'playlist_icon'  => 1,
							'volume_control' => 1,
							'show_artist'    => 1,
							'show_artwork'   => 1,
							'width'          => 300,
							'border_radius'  => 5,
							'bg_type'        => 'color',
							'stations'       => [
								[
									'title'     => 'HTTP Stream Check',
									'stream'    => 'https://worldradio.online/proxy/?site_id=12890822&plugin_id=13399&q=http://162.244.80.131:8020/stream',
									'thumbnail' => 'https://softlabbd.com/wp-content/plugins/radio-player/assets/images/placeholder.png'
								]
							],
							'color_type'     => 'solid',
							'bg_color'       => 'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)'
						];

						?>

                        <div class="radio_player" data-player-type="shortcode"
                             data-data="<?php echo base64_encode( json_encode( $data ) ) ?>"></div>

                    </div>
                </div>
            </div>

        </div>
    </section>

    <script>
        (function ($) {
            $(document).on('ready', function () {

                function playStream(stream) {
                    const isLoadedOverHttps = window.location.protocol === 'https:';

                    if (isLoadedOverHttps) {
                        stream = `${radioPlayer.site_url}/?radio_player_play=${encodeURIComponent(stream)}`;
                    }

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

                    const data = {
                        status: 1,
                        skin: 'skin1',
                        history_icon: 1,
                        player_status: 1,
                        playlist_icon: 1,
                        volume_control: 1,
                        show_artist: 1,
                        show_artwork: 1,
                        width: 300,
                        border_radius: 5,
                        bg_type: 'color',
                        stations: [
                            {
                                stream,
                                title: 'HTTP Stream Check',
                                thumbnail: 'https://softlabbd.com/wp-content/plugins/radio-player/assets/images/placeholder.png'
                            }
                        ],
                        color_type: 'solid',
                        bg_color: 'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)'
                    };

                    // Convert the data object to a base64 encoded string
                    const encodedData = btoa(JSON.stringify(data));

                    // Set the data attribute on the player element
                    $('.radio_player').attr('data-data', encodedData);

                    // Reinitialize the player
                    window.RadioPlayerInit();

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