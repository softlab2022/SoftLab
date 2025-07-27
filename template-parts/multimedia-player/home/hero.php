<?php

$multimedia_player_heros = [
    [
        'image'       => get_template_directory_uri() . '/assets/images/multimedia-player/update-hero-image.png',
    ],

    [
        'image'       => get_template_directory_uri() . '/assets/images/multimedia-player/video-player-hero.png',
    ],

    [
        'image'       => get_template_directory_uri() . '/assets/images/multimedia-player/podcast-player-hero.png',
    ],
];

?>


<section class="multimedia-player-hero-area">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6 m-auto">
                <div class="hero-content ">
                    <div class="sub-title">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/multimedia-player/elements.png" alt="elements">
                        <h5>Multimedia Player</h5>
                    </div>
                    <h1>All-in-One Player – Stream Audio, Video & Podcasts Effortlessly!</h1>
                    <?php if (wp_is_mobile()) { ?>
                        <div class="hero-image-main hero-image-main-mobile">
                            <?php foreach ($multimedia_player_heros as $multimedia_player_hero) { ?>
                                <div class="hero-image text-center">
                                    <img class="img-fluid" src="<?php echo $multimedia_player_hero['image']; ?>" alt="multimedia player image">
                                    <div class="hero-how-butt ripple">
                                        <a class="my-btn-primary" href="#" data-lity><i class="fa fa-play"></i></a>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                    <?php } ?>
                    <p>
                        A Comprehensive and Powerful Platform for All Your Audio, Video, and Podcast Needs — Empowering You to Create, Manage, and Share Content Seamlessly.
                    </p>

                    <a href="/multimedia-player-pricing" class="get">Get Started</a>
                    <a href="https://demo.softlabbd.com/?product=multimedia-player" class="get1">Check Demo</a>
                </div>
            </div>
            <div class="col-md-6  m-auto">
                <div class="hero-image-main">
                    <?php foreach ($multimedia_player_heros as $multimedia_player_hero) { ?>
                        <div class="hero-image text-center">
                            <img class="img-fluid" src="<?php echo $multimedia_player_hero['image']; ?>" alt="multimedia player image">
                            <div class="hero-how-butt ripple">
                                <a class="my-btn-primary" href="https://www.youtube.com/watch?v=JKbMmM2-WUU" data-lity><i class="fa fa-play"></i></a>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
</section>