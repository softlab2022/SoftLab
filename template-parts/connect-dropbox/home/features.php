<?php

$features = [
    // 'google-photos' => [
    // 	'title'       => 'Google Photos Integration',
    // 	'description' => 'Integrating Google Photos with WordPress allows you to incorporate Google Photos media files into your WordPress site. You can display and utilize the Google Photos media library within the File Browser, Slider, Gallery modules and WordPress media library. Additionally, this integration enables users to download Google Photos directly from your WordPress website.',
    // ],
    'allow-specific-folders' => [
        'title'       => 'Allow Specific Folders',
        'description' => 'Connect Dropbox plugin offers enhanced control over your content with the Allow Specific Folders feature. This functionality lets you selectively grant access to only the folders you choose, ensuring that your private or sensitive files remain protected. By restricting plugin access to specific folders, you maintain full control over what is shared.',
    ],
    'media-library' => [
        'title'       => 'Dropbox Integration with Media Library',
        'description' => 'Integrating Dropbox with the WordPress Media Library allows you to use your Dropbox files directly as media attachments in WordPress. This seamless connection enables easy uploading, importing, and synchronization of media content between Dropbox and your WordPress site.',
    ],
    'file-browser'  => [
        'title'       => 'File Browser',
        'description' => 'Browse and manage your entire Dropbox library directly from WordPress, making file navigation and organization easy to everyone.',
    ],

    'file-uploader' => [
        'title'       => 'File Uploader',
        'description' => 'Upload files from your WordPress site to Dropbox with a simple interface to keep your cloud storage organized and synced.',
    ],

    'gallery'         => [
        'title'       => 'Gallery',
        'description' => 'Display your Dropbox images and media in a beautifully designed gallery that offers a responsive and engaging layout for visitors.',
    ],
    'slider-carousel' => [
        'title'       => 'Slider Carousel',
        'description' => 'Slider Carousel enhances user engagement and adds a dynamic visual touch to your site. Display your media in an elegant, responsive carousel slider. Perfect for showcasing images, videos, or featured content.',
    ],

    'media-player' => [
        'title'       => 'Media Player',
        'description' => 'Stream audio and video files from Dropbox directly to  your WordPress site, delivering smooth and high-quality media playback.',
    ],

    'shortcode-builder' => [
        'title'       => 'Shortcode Builder',
        'description' => 'Create and insert custom shortcodes to easily embed Dropbox content on any page or post without any coding knowledge.',
    ],

    'multiple-accounts' => [
        'title'       => 'Multiple Dropbox Accounts',
        'description' => 'Easily add, manage, and switch between multiple Dropbox accounts to access different files.',
    ],

    'page-builder' => [
        'title'       => 'Popular Page Builder Support',
        'description' => 'Automatically integrate with popular page builders like Classic Editor, Gutenberg, and Elementor for smooth content creation.',
    ],

    'form' => [
        'title'       => 'Popular Forms Integration',
        'description' => 'Connect and integrate Dropbox with popular forms like Contact Form 7, WPForms, and more to enhance your site’s functionality.',
    ],

];

?>

<section id="feature" class="connect-dropbox-features">
    <div class="container">

        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="section-head text-center">
                    <h1>Endless <span>Features</span>, Modules, and Integrations</h1>
                    <p>Packed with powerful features, flexible modules, and smart integrations, Connect Dropbox gives everything you need to take full control of your cloud content.</p>
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
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/connect-dropbox/features/<?php echo $key; ?>-illustration.png"
                            alt="<?php echo $feature['title']; ?>">
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="feature-item-content text-center text-md-start">

                        <?php if (! $is_integration) { ?>
                            <img class="img-fluid <?php echo $key; ?>-icon feature-icon"
                                src="<?php echo get_template_directory_uri(); ?>/assets/images/connect-dropbox/features/<?php echo $key; ?>-icon.png"
                                alt="<?php echo $feature['title']; ?>">
                        <?php } ?>

                        <?php if ($is_integrations) { ?>
                            <div class="feature-icon-new">
                                <img class="img-fluid feature-icon"
                                    src="<?php echo get_template_directory_uri(); ?>/assets/images/connect-dropbox/features/<?php echo $key; ?>-icon.png"
                                    alt="<?php echo $feature['title']; ?>">
                                <span class="new-text">New⚡</span>
                            </div>
                        <?php } ?>

                        <h3 class="feature-title"><?php echo $feature['title']; ?></h3>
                        <?php if (wp_is_mobile()) { ?>
                            <div class="feature-item-img-mobile">
                                <img class="img-fluid"
                                    src="<?php echo get_template_directory_uri(); ?>/assets/images/connect-dropbox/features/<?php echo $key; ?>-illustration.png"
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
                                <span><i class="fa-solid fa-check"></i> Dropbox as Media Attachment</span>
                                <span><i class="fa-solid fa-check"></i> Auto Cloud Sync</span>
                                <span><i class="fa-solid fa-check"></i> Upload to Dropbox</span>
                                <span><i class="fa-solid fa-check"></i> Import from Dropbox</span>
                                <span><i class="fa-solid fa-check"></i> Replace with Dropbox</span>

                            </div>

                        <?php } ?>

                        <?php if (! $is_integration && ! in_array($key, [
                            'multiple-accounts',
                            'shortcode-builder',
                            'google-photos'
                        ])) { ?>
                            <a href="/connect-dropbox-<?php echo $key; ?>" class="feature-demo-btn">View demo</a>
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
                    <a href="/connect-dropbox-integrations/" class="feature-integration-btn">See All
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
                    <p>Effortlessly manage and display Dropbox files within your WooCommerce store for improved product management and customer experience.</p>
                    <div class="vector4">
                        <img class="img-fluid"
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/connect-dropbox/ex-feature/ellipse-2.png"
                            alt="ellipse-2">
                    </div>
                </div>

            </div>
        </div>

        <div class="row">
            <div class="col-lg-9 m-auto">
                <div class="woocommerce-img text-center">
                    <img class="img-fluid"
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/connect-dropbox/support-img.png"
                        alt="support-img">
                </div>
            </div>
        </div>
    </div>
</section>