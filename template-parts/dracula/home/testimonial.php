<?php

$testimonials = [
    [
        'title'       => 'it’s working!',
        'description' => 'Yes, simply put, the plugin works and I’m very happy. I’m using it with Blocksy theme and elementor plugin.best dark mode plugin, best team, thanks SoftLap! I also use your other plugins, reader mode, it’s very good too.',
        'image'       => get_template_directory_uri() . '/assets/images/dracula/home/testimonial/man1.png',
        'images'       => get_template_directory_uri() . '/assets/images/dracula/home/testimonial/group.png',
        'names'        => 'hipertale',
        'designation' => 'Web Developer',
    ],

    [
        'title'       => 'Absolutely the Best😍!!!',
        'description' => 'I tried so many plugins with high ratings but, none of the plugins didn’t work on my site. And those plugins slow down my site entirely. But finally, I found your plugin and I thought to give it a try. Voila, the dark mode, and my website works perfectly. Thank you so much for developing this plugin and best of luck😇.',
        'image'       => get_template_directory_uri() . '/assets/images/dracula/home/testimonial/man2.png',
        'images'       => get_template_directory_uri() . '/assets/images/dracula/home/testimonial/group.png',
        'names'        => 'Tharusha Induwara ',
        'designation' => 'Web Developer',
    ],

    [
        'title'       => 'Yes it’s a Revolutionary',
        'description' => 'It’s a great start and the plugin is full of lots of features as well as nice user experience. Best of luck. Wishing from the heart.',
        'image'       => get_template_directory_uri() . '/assets/images/dracula/home/testimonial/man3.png',
        'images'       => get_template_directory_uri() . '/assets/images/dracula/home/testimonial/group.png',
        'names'        => 'DarkMySite',
        'designation' => 'Web Developer',
    ],


];

?>


<section id="testimonial">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="section-head text-center">
                    <h1>What People Think About Our <span>Dark Mode</span> solution </h1>
                    <p>We Ensuring high-quality products is one way to help you get consumers to appreciate</p>
                </div>
            </div>
        </div>

        <div class="row">
            <?php foreach ($testimonials as $testimonial) { ?>
                <div class="col-lg-4">
                    <div class="testi-main">
                        <div class="testi-head d-flex justify-content-between align-items-center">
                            <img class="img-fluid man-img" src="<?php echo $testimonial['image']; ?>" alt="<?php echo $testimonial['title']; ?>">
                            <div class="name">
                                <div class="star d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <div class="review">
                                        <span>5.00</span>
                                    </div>
                                </div>
                                <h3><?php echo $testimonial['names']; ?></h3>
                            </div>
                            <img class="img-fluid" src="<?php echo $testimonial['images']; ?>" alt="<?php echo $testimonial['title']; ?>">
                        </div>
                        <div class="content">
                            <h3><?php echo $testimonial['title']; ?></h3>
                            <p><?php echo $testimonial['description']; ?></p>
                        </div>
                    </div>
                </div>
            <?php } ?>

        </div>

    </div>
</section>