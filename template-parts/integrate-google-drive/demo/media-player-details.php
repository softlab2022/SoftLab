<?php

$features = [
    [
        'title'       => 'Easy to manage your media player',
        'description' => 'You can play your Google Drive audio & video files with a playlist into your website. Audio and video can be played in a single player.',
        'image'       => get_template_directory_uri() . "/assets/images/google-drive/media-demo/media-player.png",
        'features'    => ['Manage media files', 'Preview media files', 'Download any files ', 'Import Media & delete',]
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