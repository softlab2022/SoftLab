<?php

$features = [
    // 'google-photos' => [
    // 	'title'       => 'Google Photos Integration',
    // 	'description' => 'Integrating Google Photos with WordPress allows you to incorporate Google Photos media files into your WordPress site. You can display and utilize the Google Photos media library within the File Browser, Slider, Gallery modules and WordPress media library. Additionally, this integration enables users to download Google Photos directly from your WordPress website.',
    // ],
    'allow-specific-folders' => [
        'title'       => 'Allow Specific Folders',
        'description' => 'Integrate Google Drive plugin offers a functionality to allow specific folders accessibility in the plugin. This functionality restricts unwanted access to the folders you don\'t want to share with everyone. Only the selected folders will be accessible through the plugin.',
    ],
    'media-library' => [
        'title'       => 'Google Drive Integration with Media Library',
        'description' => 'Integrating Google Drive with WordPress Media Library, allows you to use Google Drive files as media attachments directly in WordPress. This integration facilitates easy uploading, importing, and synchronizing of media content between WordPress and Google Drive, streamlining your digital asset management and enhancing your websites media capabilities.',
    ],
    'file-browser'  => [
        'title'       => 'File Browser',
        'description' => 'Display your cloud files via an interactive File Browser. The file browser can have a grid thumbnail and list view for the Google Drive files you are browsing. It’s the simplest solution to manage your cloud files easily & efficiently.',
    ],

    'file-uploader' => [
        'title'       => 'File Uploader',
        'description' => 'Integrate Google Drive features a user-friendly file uploader to upload files into the Google Drive cloud platform from your website. Users can see an upload progress bar, file name, cancel uploading action, and media preview for improved interactions.',
    ],

    'gallery'         => [
        'title'       => 'Gallery',
        'description' => 'The Photo Gallery Module feature of the plugin can display your Google Drive images on your website in a masonry grid layout with a lightbox preview. This module lets you create a stunning photo gallery and display it to your users.',
    ],
    'slider-carousel' => [
        'title'       => 'Slider Carousel',
        'description' => 'The Slider Carousel feature in our Google Drive plugin lets you create a slideshow of images or videos from your Google Drive. You can customize it with autoplay and navigation buttons to make your content more engaging and visually appealing.',
    ],

    'media-player' => [
        'title'       => 'Media Player',
        'description' => 'Play Google Drive audio and video files in a single player using the Media Player module from your website. This feature will also create a stunning playlist for all selected media files. All in all, you can save your hosting space by using this feature.',
    ],

    'shortcode-builder' => [
        'title'       => 'Shortcode Builder',
        'description' => 'Making WordPress easier for you is our main goal! That’s why we included Shortcode Builder in our Plugin. It helps create various types of modules (File Browser, File Uploader, Media Player, Photo Gallery, etc) with different configurations. After creating a module with Shortcode Builder, display it anywhere on your website.',
    ],

    'multiple-accounts' => [
        'title'       => 'Multiple Google Accounts',
        'description' => 'Linking multiple Google Accounts can be sometimes necessary for you. We provide you full freedom to link multiple Google Accounts and share files from your specific accounts.',
    ],

    'page-builder' => [
        'title'       => 'Popular Page Builder Support',
        'description' => 'We provide a wide & popular page builder supports all over the world. That means Integrate Google Drive is 100% compatible with the most popular page builders. So you are up to go with whatever page builders are you using.',
    ],

    'form' => [
        'title'       => 'Popular Forms Connect & Easy to Use',
        'description' => 'Integrate your favorite services and add advanced features with the official Form plugin integration feature. It’s time to build a powerful module for popular forms by using Integrate Google Drive plugin.',
    ],

];

?>

<section id="feature" class="integrate-google-drive-features">
    <div class="container">

        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="section-head text-center">
                    <h1>Amazing Google Drive </br> Integration <span>Features</span></h1>
                    <p>We provide the best and most productive integrations for Google Drive. You are near to
                        discovering some coolest features of Integrate Google Drive & easiest way to connect with us.
                        Join the party now!</p>
                </div>
            </div>
        </div>

        <?php
        $i = 0;
        foreach ($features as $key => $feature) {
            $is_odd = $i % 2 == 0;

            $is_integration  = in_array($key, ['page-builder', 'form', 'media-library' ,'allow-specific-folders']);
            $is_integrations = in_array($key, ['media-library', 'google-photos', 'allow-specific-folders']);

        ?>
            <div class="row feature-item align-items-center feature-<?php echo $key; ?> <?php echo ! $is_odd ? 'flex-row-reverse' : '' ?>">

                <div class="col-md-6">
                    <div class="feature-item-img  <?php echo $is_odd ? 'justify-content-start' : 'justify-content-end'; ?>">
                        <img class="img-fluid"
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/features/<?php echo $key; ?>-illustration.png"
                            alt="<?php echo $feature['title']; ?>">
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="feature-item-content text-center text-md-start">

                        <?php if (! $is_integration) { ?>
                            <img class="img-fluid <?php echo $key; ?>-icon feature-icon"
                                src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/features/<?php echo $key; ?>-icon.png"
                                alt="<?php echo $feature['title']; ?>">
                        <?php } ?>

                        <?php if ($is_integrations) { ?>
                            <div class="feature-icon-new">
                                <img class="img-fluid feature-icon"
                                    src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/features/<?php echo $key; ?>-icon.png"
                                    alt="<?php echo $feature['title']; ?>">
                                <span class="new-text">New⚡</span>
                            </div>
                        <?php } ?>

                        <h3 class="feature-title"><?php echo $feature['title']; ?></h3>
                        <?php if (wp_is_mobile()) { ?>
                            <div class="feature-item-img-mobile">
                                <img class="img-fluid"
                                    src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/features/<?php echo $key; ?>-illustration.png"
                                    alt="<?php echo $feature['title']; ?>">
                            </div>
                        <?php } ?>
                        <p class="feature-description"><?php echo $feature['description']; ?></p>

                        <?php if ('page-builder' == $key) { ?>
                            <div class="feature-integrations">
                                <span><i class="fa-solid fa-check"></i> Classic Editor</span>
                                <span><i class="fa-solid fa-check"></i> Gutenberg</span>
                                <span><i class="fa-solid fa-check"></i> Elementor</span>
                                <span><i class="fa-solid fa-check"></i> Divi Page Builder</span>
                            </div>

                        <?php } elseif ('form' == $key) { ?>
                            <div class="feature-integrations">
                                <span><i class="fa-solid fa-check"></i> Contact Form 7</span>
                                <span><i class="fa-solid fa-check"></i> WPForms</span>
                                <span><i class="fa-solid fa-check"></i> GravityForms</span>
                                <span><i class="fa-solid fa-check"></i> NinjaForms</span>
                                <span><i class="fa-solid fa-check"></i> FluentForms</span>
                                <span><i class="fa-solid fa-check"></i> FormidableForms</span>
                                <span><i class="fa-solid fa-check"></i> ElementorForms</span>
                                <span><i class="fa-solid fa-check"></i> MetForms</span>

                            </div>

                        <?php } elseif ('media-library' == $key) { ?>
                            <div class="feature-integrations">
                                <span><i class="fa-solid fa-check"></i> Google Drive as Media Attachment</span>
                                <span><i class="fa-solid fa-check"></i> Auto Cloud Sync</span>
                                <span><i class="fa-solid fa-check"></i> Upload to Google Drive</span>
                                <span><i class="fa-solid fa-check"></i> Import from Google Drive</span>
                                <span><i class="fa-solid fa-check"></i> Replace with Google Drive</span>

                            </div>

                        <?php } ?>

                        <?php if (! $is_integration && ! in_array($key, [
                            'multiple-accounts',
                            'shortcode-builder',
                            'google-photos'
                        ])) { ?>
                            <a href="/integrate-google-drive-<?php echo $key; ?>" class="feature-demo-btn">View demo</a>
                        <?php } ?>

                    </div>
                </div>
            </div>
        <?php
            $i++;
        } ?>
        <div class="row">
            <div class="col-lg-2 col-md-3 m-auto">
                <div class="integration-btn">
                    <a href="/integrate-google-drive-integrations/" class="feature-integration-btn">See All
                        Integrations</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="woocommerce-support" class="woocommerce-support">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 m-auto">
                <div class="feature-head text-center">
                    <h1>WooCommerce Support</h1>
                    <p>You can serve your downloadable product's files directly from Google Drive, and also you can let
                        your customers upload files to your Google Drive account when they purchase your products.</p>
                    <div class="vector4">
                        <img class="img-fluid"
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/ex-feature/ellipse-2.png"
                            alt="ellipse-2">
                    </div>
                </div>

            </div>
        </div>

        <div class="row">
            <div class="col-lg-9 m-auto">
                <div class="woocommerce-img text-center">
                    <img class="img-fluid"
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/support-img.png"
                        alt="support-img">
                </div>
            </div>
        </div>
    </div>
</section>