<?php

$features = [
    // 'google-photos' => [
    // 	'title'       => 'Google Photos Integration',
    // 	'description' => 'Integrating Google Photos with WordPress allows you to incorporate Google Photos media files into your WordPress site. You can display and utilize the Google Photos media library within the File Browser, Slider, Gallery modules and WordPress media library. Additionally, this integration enables users to download Google Photos directly from your WordPress website.',
    // ],
    'playlist-support' => [
        'title'       => 'Playlist Support',
        'description' => 'Whether you\'re setting the vibe for a chill evening, curating a podcast series, or building a music journey—your playlists should work the way you think. With such feature built for creators, you can quickly build, organize, and fine-tune your playlists without missing a beat.',
    ],
    'popup-player' => [
        'title'       => 'Popup Player',
        'description' => 'Your audience shouldn\'t have to choose between exploring your site and enjoying your content. That’s where the popup player comes in. It floats effortlessly across pages, staying with users wherever they go—keeping the audio or video playing without interruption.',
    ],
    'embed-anywhere'  => [
        'title'       => 'Embed Anywhere',
        'description' => 'Your content deserves the spotlight—on every page, every post, everywhere. With flexible embed options, it’s easy to drop your player exactly where you want it. No complex setup, just a shortcode or block, and your playlists, episodes, or video content are live and ready to play.',
    ],

    'realtime-editing-preview' => [
        'title'       => 'Realtime Editing Preview',
        'description' => 'Designing your player should feel creative—not clunky. With real-time preview, you can see every change the moment you make it. Adjust layouts, colors, or swap playlists, and watch the results update instantly—no saving, no refreshing.',
    ],

    'multi-source-support'         => [
        'title'       => 'Multi-Source Support',
        'description' => 'No matter where your media lives, it plays beautifully here. Stream from local files, direct URLs, or platforms like YouTube, Vimeo, or SoundCloud—all from one unified player.',
    ],
    'multiple-player-skins'         => [
        'title'       => '20+ Multiple Player Skins',
        'description' => 'Looks matter—especially when your player is part of your brand. Choose from 20+ professionally designed skins, each built to match a different mood, message, or aesthetic.',
    ],
];
?>

<section id="feature" class="multimedia-player-features">
    <div class="container">

        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="section-head text-center">
                    <h1>Top-notch <span>Features</span></h1>
                    <p>Packed with powerful features to enhance your audio, video, and podcast experience.</p>
                </div>
            </div>
        </div>

        <?php
        $i = 0;
        foreach ($features as $key => $feature) {
            $is_odd = $i % 2 == 0;

            $is_integration  = in_array($key, ['multi-source-support']);
            $is_integrations = in_array($key, ['media-library', 'google-photos', 'allow-specific-folders']);

        ?>
            <div class="row feature-item align-items-center feature-<?php echo $key; ?> <?php echo ! $is_odd ? 'flex-row-reverse' : '' ?>">

                <div class="col-md-6">
                    <div class="feature-item-img  <?php echo $is_odd ? 'justify-content-start' : 'justify-content-end'; ?>">
                        <img class="img-fluid"
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/multimedia-player/features/<?php echo $key; ?>-illustration.png"
                            alt="<?php echo $feature['title']; ?>">
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="feature-item-content text-center text-md-start">

                        <h3 class="feature-title"><?php echo $feature['title']; ?></h3>
                        <?php if (wp_is_mobile()) { ?>
                            <div class="feature-item-img-mobile">
                                <img class="img-fluid"
                                    src="<?php echo get_template_directory_uri(); ?>/assets/images/multimedia-player/features/<?php echo $key; ?>-illustration.png"
                                    alt="<?php echo $feature['title']; ?>">
                            </div>
                        <?php } ?>
                        <p class="feature-description"><?php echo $feature['description']; ?></p>

                        <?php if ('multi-source-support' == $key) { ?>
                            <div class="feature-integrations">
                                <span><i class="fa-solid fa-check"></i> Local</span>
                                <span><i class="fa-solid fa-check"></i> YouTube</span>
                                <span><i class="fa-solid fa-check"></i> Facebook</span>
                                <span><i class="fa-solid fa-check"></i> Vimeo</span>
                                <span><i class="fa-solid fa-check"></i> Dailymotion</span>
                                <span><i class="fa-solid fa-check"></i> SoundCloud</span>
                            </div>

                       
                           
                            <!-- <a href="/multimedia-player-<?php //echo $key; ?>" class="feature-demo-btn">Explore Now</a> -->
                        <?php } ?>

                    </div>
                </div>
            </div>
        <?php
            $i++;
        } ?>
    </div>
</section>
