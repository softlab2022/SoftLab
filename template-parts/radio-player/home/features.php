

<?php

$features = [

    'sticky-player-excellence' => [
        'title'       => 'Sticky Player Excellence',
        'sub-title'       => 'Sticky Player',
        'description' => 'Boost engagement with Radio Player\'s Sticky Player. Offered in versatile styles like Fullwidth, Mini-Fullwidth, and Floating, it ensures seamless listening across your site. Plus, customize its display on specific pages for tailored user experiences.',
    ],
    'continuous-playback-window'  => [
        'title'       => 'Continuous Playback Window',
        'sub-title'       => 'Popup Player',
        'description' => 'Allow listeners to enjoy your radio stream in a dedicated popup window, ensuring continuous playback even as they browse elsewhere. Boost engagement with minimal disruption.',
    ],
    'multiple-stations-playlist' => [
        'title'       => 'Multiple Stations Playlist',
        'sub-title'       => 'Stations Playlist',
        'description' => 'Combine multiple radio stations in one player. Offer listeners a seamless switch between stations, enriching their experience. All within a single, intuitive interface. Simplify choices, maximize engagement.',
    ],
    '10-player-skins' => [
        'title'       => '10+ Player Skins',
        'sub-title'       => 'Multiple Player Skins',
        'description' => 'Personalize your radio experience with our expansive range of player skins. Each design is meticulously crafted, ensuring both style and functionality, to cater to every aesthetic preference.',
    ],
    'embed-play-anywhere'         => [
        'title'       => 'Embed & Play Anywhere',
        'sub-title'       => 'Player Embed Code',
        'description' => 'Easily integrate your radio player on any website or page. Maximize your reach with our easy-to-use embedding feature, making your radio accessible everywhere.',
    ],
    'radio-player-analytics-dashboard' => [
        'title'       => 'Radio Player Analytics Dashboard',
        'sub-title'       => 'Play Statistics',
        'description' => 'Gain insights with our Analytics Dashboard. Track play counts, listener numbers, daily trends, and identify top-performing players. Elevate your broadcast strategy with data-driven insights.',
    ],

    'player-display-schedule' => [
        'title'       => 'Player Display Schedule',
        'sub-title'       => 'Schedule Time',
        'description' => 'Effortlessly manage when your radio player is accessible to listeners with the scheduling feature. You can define a specific start and end date, ensuring the player is only visible during the desired timeframe to gain control over broadcasts, aligning with special events, promotions, or programming needs.',
    ],

];

?>

<section id="radio-player-features">
    <div class="container">

        <?php
        $i = 0;
        foreach ($features as $key => $feature) {
            $is_odd = $i % 2 == 0;

        ?>
            <div class="row feature-items align-items-center feature-<?php echo $key; ?> <?php echo ! $is_odd ? 'flex-row-reverse' : '' ?>">

                <div class="col-md-6">
                    <div class="feature-item-img  <?php echo $is_odd ? 'justify-content-start' : 'justify-content-end'; ?>">
                        <img class="img-fluid"
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/feature/<?php echo $key; ?>-illustration.png"
                            alt="<?php echo $feature['title']; ?>">
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="feature-item">
                        <div class="file-text">
                            <div class="feature-header">
                                <img class="img-fluid element" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/elements.png">
                                <span><?php echo $feature['sub-title']; ?></span>
                            </div>
                            <h3 class="feature-title"><?php echo $feature['title']; ?></h3>
                            <?php if (wp_is_mobile()) { ?>
                                <div class="feature-item-img-mobile">
                                    <img class="img-fluid"
                                        src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/feature/<?php echo $key; ?>-illustration.png"
                                        alt="<?php echo $feature['title']; ?>">
                                </div>
                            <?php } ?>
                            <p class="feature-description"><?php echo $feature['description']; ?></p>

                        </div>

                    </div>
                </div>
            </div>
        <?php
            $i++;
        } ?>
        
        <div class="row">
            <div class="col-lg-8 m-auto">

                <div class="preview-head text-center">

                    <div class="feature-header">
                        <img class="img-fluid element" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/elements.png">
                        <span>Live Player Editing Preview</span>
                    </div>

                    <h2>Player Editing Preview in Realtime</h2>
                    <p>Experience the power of real-time player editing with our intuitive interface. Adjust the appearance, from colors to box shadows, or tweak player controls instantly.</p>
                </div>

            </div>
        </div>

        <div class="row">
            <div class="col-md-6 ">
                <div class="feature-item-img preview-item-img text-center">
                    <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/feature/player-color.png" alt="Customize Player Appearance">
                </div>
                <div class="feature-item preview-item text-center">
                    <div class="file-text">
                        <h3>Customizing Player Appearance</h3>
                        <?php if (wp_is_mobile()) { ?>
                            <div class="feature-item-img-mobile text-center">
                                <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/feature/player-color.png" alt="Customize Player Appearance">
                            </div>
                        <?php } ?>
                        <div class="feature-description">
                            <p>
                                You can customize the player appearance in real-time. You can change the player
                                colors, background color, background image, width, border radius, box shadow, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="feature-item-img preview-item-img text-center">
                    <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/feature/enhanced.png" alt="enhanced">
                </div>
                <div class="feature-item preview-item text-center">
                    <div class="file-text">
                        <h3>Customizing Player Controls</h3>
                        <?php if (wp_is_mobile()) { ?>
                            <div class="feature-item-img-mobile text-center">
                                <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/feature/enhanced.png" alt="enhanced">
                            </div>
                        <?php } ?>
                        <p>
                            You can customize the player controls in real-time.
                            You can show/ hide the different player controls like popup icon, volume icon, playlist icon
                            and live/ offline icon.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>