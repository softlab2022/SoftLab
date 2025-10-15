<!-- Smart Solutions start -->
<?php

$solution_features = [
    'wordpress-plugin-development' => [
        'title'       => 'Wordpress Plugin Development',
        'description' => 'Expert custom plugin development tailored to extend functionality, enhance performance, and meet specific business needs.',
    ],
    'custom-theme-development' => [
        'title'       => 'Custom Theme Development',
        'description' => 'Custom Theme Development: Crafting unique, responsive, and visually engaging themes tailored to your brand and functionality needs.',
    ],
    'custom-website-development' => [
        'title'       => 'Custom Website Development',
        'description' => 'Tailored website solutions designed to meet your business goals, combining modern design, seamless functionality, and optimal user experience.',
    ],
    'wordpress-website-maintenance' => [
        'title'       => 'WordPress Website Maintenance',
        'description' => 'Keep your website secure, updated, & optimized with our complete maintenance services.so you can focus on growing your business.',
    ],
    'create-ui-ux-design' => [
        'title'       => 'Create UI/UX Design',
        'description' => 'Crafting intuitive and visually engaging digital experiences by blending user-centered design principles with aesthetic and functional interfaces.',
    ],
    'create-graphic-design' => [
        'title'       => 'Create Graphic Design',
        'description' => 'Graphic design is the art of visual  communication, combining images, typography, and colors to convey messages, evoke emotions, and create compelling visuals for digital and print media.',
    ],
];
?>


<section id="soft-expert-smart-solution">
    <div class="container">
        <div class="row">
            <div class="col-md-8 m-auto">
                <div class="soft-expert-smart-solution-heading text-center">
                    <h2>Empowering Your Vision with Smart Solutions</h2>
                    <p>Your vision matters. We empower it with smart, reliable, and customized solutions built to unlock growth, efficiency, and long-term value.</p>
                </div>
            </div>
        </div>
        <?php
        $i = 0;
        foreach ($solution_features as $key => $feature) {
            $is_odd = $i % 2 == 0;

        ?>
            <div class="row feature-item align-items-center feature-<?php echo $key; ?> <?php echo ! $is_odd ? 'flex-row-reverse' : '' ?>">

                <div class="col-md-6">
                    <div class="feature-item-img  d-flex <?php echo $is_odd ? 'justify-content-start' : 'justify-content-end'; ?>">
                        <img class="img-fluid w-80" src="<?php echo get_template_directory_uri(); ?>/assets/images/soft-expert/smart-solution/<?php echo $key; ?>-illustration.png" alt="<?php echo $feature['title']; ?>">
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="feature-item-content text-center text-md-start">

                        <h3 class="feature-title"><?php echo $feature['title']; ?></h3>
                        <?php if (wp_is_mobile()) { ?>
                            <div class="feature-item-img-mobile">
                                <img class="img-fluid"
                                    src="<?php echo get_template_directory_uri(); ?>/assets/images/soft-expert/smart-solution/<?php echo $key; ?>-illustration.png"
                                    alt="<?php echo $feature['title']; ?>">
                            </div>
                        <?php } ?>
                        <p class="feature-description"><?php echo $feature['description']; ?></p>
                    </div>
                </div>
            </div>
        <?php
            $i++;
        } ?>
    </div>
</section>
<!-- Smart Solutions end -->