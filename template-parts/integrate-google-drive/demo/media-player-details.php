<?php

$features = [
    [
        'title'       => 'Easy to Manage Your Media Player',
        'description' => 'You can play your Google Drive audio & video files with a playlist into your website. Audio and video can be played in a single player.',
        'image'       => get_template_directory_uri() . "/assets/images/google-drive/media-demo/media-player.png",
        'features'    => ['Manage Media Files', 'Preview Media Files', 'Download Any Files ', 'Import Media & Delete',]
    ],
    [
        'title'       => 'Actionable Playlist Support',
        'description' => 'Enhance your media playback experience with interactive playlists. The Media Player module supports actionable playlists where users can play, download, or view media details directly from the playlist interface.',
        'image'       => get_template_directory_uri() . "/assets/images/google-drive/media-demo/actionable-playlist-support.png",
        'features'    => ['Play audio/video directly from the list', 'View file descriptions and details', 'Supports Google Drive-hosted media', 'Clean, responsive playlist UI',]
    ],
    [
        'title'       => 'Multiple Media Player Types',
        'description' => 'Support both embedded and direct media playback with flexible player options. Whether it\'s a YouTube video, MP3 file, or a Google Drive-hosted file, the Media Player module handles it all seamlessly.',
        'image'       => get_template_directory_uri() . "/assets/images/google-drive/media-demo/multiple-media-player-types.png",
        'features'    => ['Embed', 'Direct Media',]
    ],
    [
        'title'       => 'Play Multiple Media Files in Single Player',
        'description' => 'Group and play multiple media files in one unified player with playlist support. Users can easily navigate between tracks or videos without switching players.',
        'image'       => get_template_directory_uri() . "/assets/images/google-drive/media-demo/play-multiple-media-files-single-player.png",
        'features'    => ['Seamless playlist playback in one player', 'Supports audio and video files','Auto-play the next file in queue','Clean, user-friendly interface']
    ],
];
?>

<section class="demo-details">
    <div class="container">

        <?php
        $i = 0;
        foreach ($features as $feature) {
            $is_odd        = $i % 2 == 0;
            $content_class = $is_odd ? 'col-lg-7 col-md-6' : 'col-lg-5 col-md-6';
            $img_class     = $is_odd ? 'col-lg-5 col-md-6' : 'col-lg-7 col-md-6';
        ?>
            <div class="row feature-item align-items-center">
                <div class="<?php echo $content_class; ?>">
                    <div class="feature-content">
                        <h3><?php echo $feature['title']; ?></h3>
                        <div class="feature-item-img-mobile">
                            <img class="img-fluid" src="<?php echo $feature['image']; ?>" alt="File Browser">
                        </div>
                        <p><?php echo $feature['description']; ?></p>
                        <div class="feature-list">
                            <?php foreach ($feature['features'] as $item) { ?>
                                <span><i class="fa-solid fa-check"></i> <?php echo $item; ?></span>
                            <?php } ?>
                        </div>
                    </div>
                </div>

                <div class="<?php echo $img_class; ?>">
                    <div class="feature-item-img">
                        <img class="img-fluid" src="<?php echo $feature['image']; ?>" alt="File Browser">
                    </div>
                </div>
            </div>
        <?php } ?>
    </div>
</section>