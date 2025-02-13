<?php

$features = [

    'drag-drop-according'  => [
        'title'       => 'Drag & Drop Accordion Sorting',
        'description' => 'Rearranging your accordion items has never been this easy! With the Drag & Drop Accordion Sorting feature, you can effortlessly organize your content with just a simple drag—no coding, no hassle. Whether you\'re fine-tuning a layout or making quick updates, this feature should be your go-to solution. Say hello to an organized design in no time!',
    ],

    'multiple-accordion-events' => [
        'title'       => 'Multiple Accordion Events (Click, Mouse Hover & Autoplay)',
        'description' => 'Want to make your accordion even more interactive? With Multiple Accordion Events, you can choose how your content unfolds—whether by a simple click, a smooth mouse hover, or an autoplay effect that flows seamlessly. This feature lets you customize your WordPress site’s user experience, offering just the right interaction to surprise your audience.',
    ],

    'color-size-position-customizations'         => [
        'title'       => 'Color, Size & Position Customizations',
        'description' => 'With color, size, and position customization, you can make your accordion truly yours! Capture every detail to match your site\'s style, whether you adjust colors to match your branding, resize for the perfect fit, or reposition for optimal layout. With these customization options, you have full creative control to transform your brand into something alive!',
    ],
    '20premium-themes' => [
        'title'       => '20+ Premium Themes',
        'description' => 'With 20+ modern premium themes & styles, you\'ll find the perfect look for your accordion in no time. Each theme is designed to be fully customizable, so you can adjust everything to match your style. Whether you\'re looking for something professional, bold, or creative, these themes have you covered.',
    ],

    'woocommerce-product-faqs' => [
        'title'       => 'WooCommerce Product FAQs',
        'description' => 'Make shopping easier for your customers with WooCommerce Product FAQs. By adding a FAQ section to each product, you can quickly address common questions and clear up any uncertainties—right on the product page. This helps your customers feel more confident in their purchase decisions while reducing the need for extra support. It’s a simple way to provide a better shopping experience, build trust, and boost conversions—all in one place!',
    ],

    'faq-schema-support' => [
        'title'       => 'FAQ Schema Support',
        'description' => 'FAQ Schema makes your FAQs shine in search results by displaying them directly in rich snippets. This helps potential customers find answers faster, boosting your click-through rates. By structuring your questions and answers with FAQ Schema, you’re not just improving user experience—you’re also giving your SEO a powerful boost.',
    ],

];

?>

<section id="feature" class="soft-accordion-features">
    <div class="container">

        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="section-head text-center">
                    <h1>Explore the standout features of <span>Soft Accordion</span></h1>
                    <!-- <p>We provide the best and most productive integrations for Google Drive. You are near to
                        discovering some coolest features of Integrate Google Drive & easiest way to connect with us.
                        Join the party now!</p> -->
                </div>
            </div>
        </div>

        <?php
        $i = 0;
        foreach ($features as $key => $feature) {
            $is_odd = $i % 2 == 0;

            $is_integration  = in_array($key, ['page-builder', 'form', 'media-library', 'allow-specific-folders']);
            $is_integrations = in_array($key, ['media-library', 'google-photos', 'allow-specific-folders']);

        ?>
            <div class="row feature-item align-items-center feature-<?php echo $key; ?> <?php echo ! $is_odd ? 'flex-row-reverse' : '' ?>">

                <div class="col-md-5">
                    <div class="feature-item-img  <?php echo $is_odd ? 'justify-content-start' : 'justify-content-end'; ?>">
                        <img class="img-fluid"
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/soft-accordion/home/feature/<?php echo $key; ?>-illustration.png"
                            alt="<?php echo $feature['title']; ?>">
                    </div>
                </div>

                <div class="col-md-7">
                    <div class="feature-item-content text-center text-md-start">

                        <?php if (! $is_integration) { ?>
                            <!-- <img class="img-fluid <?php //echo $key; 
                                                        ?>-icon feature-icon"
                                src="<?php //echo get_template_directory_uri(); 
                                        ?>/assets/images/soft-accordion/home/feature/<?php //echo $key; 
                                                                                        ?>-icon.png"
                                alt="<?php //echo $feature['title']; 
                                        ?>"> -->
                        <?php } ?>

                        <?php if ($is_integrations) { ?>
                            <!-- <div class="feature-icon-new">
                                <img class="img-fluid feature-icon"
                                    src="<?php //echo get_template_directory_uri(); 
                                            ?>/assets/images/soft-accordion/home/feature/<?php //echo $key; 
                                                                                            ?>-icon.png"
                                    alt="<?php //echo $feature['title']; 
                                            ?>">
                                <span class="new-text">New⚡</span>
                            </div> -->
                        <?php } ?>

                        <h3 class="feature-title"><?php echo $feature['title']; ?></h3>
                        <?php if (wp_is_mobile()) { ?>
                            <div class="feature-item-img-mobile">
                                <img class="img-fluid"
                                    src="<?php echo get_template_directory_uri(); ?>/assets/images/soft-accordion/home/feature/<?php echo $key; ?>-illustration.png"
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
                            <a href="#" class="feature-demo-btn">View demo</a>
                            <!-- <a href="/soft-accordion-<?php //echo $key; 
                                                            ?>" class="feature-demo-btn">View demo</a> -->
                        <?php } ?>

                    </div>
                </div>
            </div>
        <?php
            $i++;
        } ?>
        <div class="row">
            <div class="col-lg-2 col-md-3 m-auto">
                <!-- <div class="integration-btn">
                    <a href="/soft-accordion-integrations/" class="feature-integration-btn">See All
                        Integrations</a>
                </div> -->
            </div>
        </div>
    </div>
</section>