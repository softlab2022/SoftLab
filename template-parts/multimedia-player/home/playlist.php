<?php

$playlists = [
	'audio-player' => [
		'title'       => 'Audio Player',
		'description' => 'This feature allows users to choose from different player types, each with unique abilities',
		'image'       => get_template_directory_uri() . '/assets/images/multimedia-player/audio-player.png',
	],

	'video-player' => [
		'title'       => 'Video Player',
		'description' => 'This feature allows users to choose from different player types, each with unique abilities',
		'image'       => get_template_directory_uri() . '/assets/images/multimedia-player/video-player.png',
	],

	'podcast-player' => [
		'title'       => 'Podcast Player',
		'description' => 'This feature allows users to choose from different player types, each with unique abilities',
		'image'       => get_template_directory_uri() . '/assets/images/multimedia-player/podcast-player.png',
	],

];

?>

<section id="playlist">
    <div class="container">

        <div class="row">
            <div class="col-lg-5 m-auto">
                <div class="playlist-head text-center">
                    <h1>Multiple Player Types</h1>
                    <p>This feature allows users to choose from different player types, each with unique abilities</p>
                </div>
            </div>
        </div>

        <div class="row">

			<?php foreach ( $playlists as $key => $playlist ) { ?>
                <div class="col-lg-4 col-md-6 playlist-items">
                    <a href="#" class="playlist-item  playlist-<?php echo $key; ?>">

                        <img class="playlist-icon img-fluid" src="<?php echo $playlist['image']; ?>" alt="playlist Image">

                        <h5 class="playlist-title"><?php echo $playlist['title']; ?></h5>
                        <p class="playlist-description"><?php echo $playlist['description']; ?></p>

                        <div class="playlist-butt">
                            <span>Explore</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </a>
                </div>
			<?php } ?>

        </div>
    </div>
</section>