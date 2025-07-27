<?php
$ex_features = [

    'easy-setup' => [
        'title'       => 'Easy Setup',
        'description' => 'Integrate Google Drive has been developed to maintain an easy setup for all groups of people. If you using a plugin for the first time, still you can set up & maintain it properly. We made it that simple!',
    ],
    'private-folders' => [
        'title'       => 'Private Folders',
        'description' => 'Securely share your Google Drive documents with your users/clients. This allows your users to view, download and manage their documents in their own private folders.',
    ],
    'audio-video-player' => [
        'title'       => 'Audio & Video Player ',
        'description' => 'Play audio and video in a single player using this module. The audio and video playlist will be created from the selected folders that you select.',
    ],
    'embed-document' => [
        'title'       => 'Embed Document',
        'description' => 'We made embedding documents easy for you. Using the Embed Documents feature users can embed documents (files, docs, excels, pdf, mp3, mp4, etc) with read-only and editable modes.',
    ],
    'file-view-links' => [
        'title'       => 'File View Links',
        'description' => 'File view links can be sometimes effective depending on the sector you are operating. Insert direct links on your website to view any Google Drive files & documents.',
    ],
    'file-download-links' => [
        'title'       => 'File Download Links ',
        'description' => 'You can insert direct links to your post/ page to download your Google Drive cloud files.',
    ],
    'use-own-google-app' => [
        'title'       => 'Use Own Google App',
        'description' => 'What if you want to integrate your own Google App with Integrate Google Drive? Our plugin gives you the freedom to link your own Google App and start playing with it.',
    ],
    'statistics' => [
        'title'       => 'Statistics',
        'description' => 'View all the files downloads, uploads, streams and previews events logs in the statistics page.',
    ],
    'easy-digital-downloads-support' => [
        'title'       => 'Easy Digital Downloads support',
        'description' => 'View all the files downloads, uploads, streams and previews events logs in the statistics page.',
    ],

];
?>

<section id="ex-feature">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="ex-feature-head text-center">
                    <div class="vector5">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/ex-feature/ellipse-1.png" alt="ellipse-1">
                    </div>
                    <h1>Never Miss Valuable</br> Extra <span>Features</span></h1>
                    <p>Let's explore which features are absolute must-haves for any banking app and which ones you can add to stand out and give even more value</p>
                </div>
            </div>
        </div>

        <div class="row">
            <?php foreach ($ex_features as $key => $ex_feature) { ?>
                <div class="col-lg-4 col-md-6 m-auto">
                    <div class="ex-feature-item text-center">
                        <div class="ex-logo">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/ex-feature/<?php echo $key; ?>.png" alt="<?php echo $ex_feature['title']; ?>">
                        </div>
                        <div class="ex-text">
                            <h4><?php echo $ex_feature['title']; ?></h4>
                            <p><?php echo $ex_feature['description']; ?></p>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>
        <div class="vector">
            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/ex-feature/ex-vector2.png" alt="ex-vector2">
        </div>

        <div class="vector1">
            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/ex-feature/ex-vector3.png" alt="ex-vector3">
        </div>

    </div>
</section>