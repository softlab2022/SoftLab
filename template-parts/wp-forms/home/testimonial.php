<?php

$testimonials = [
    [
        'title'       => '“Best Radio Player Available',
        'description' => 'It works but only if you buy all of the plugins. <strong>It would be better</strong> if people stopped using open source code and dropping <strong>paywalls and tracking</strong> scripts of course we have been tracking',
        'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar12.png',
        'name'        => 'Kroffi Media',
        'designation' => 'Owner, CvsRadio1 Directory',
        'sub-title'   => '“Great Plugin, WORKING PROPERLY',
    ],

    [
        'title'       => 'IT iS A BEST OF THE BEST',
        'description' => 'Этот плагин супер. Я искал везде такойи немог найти. Спасибо разработчику. И только не останавливайтесь и развивайте это плагин дальше.',
        'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar13.png',
        'name'        => 'Aleksandr',
        'designation' => 'Owner, Radiomix',
        'sub-title'   => '“Great Plugin, WORKING PROPERLY',
    ],

    [
        'title'       => 'SUPER!!',
        'description' => 'Thanks to this plugin my website with radio stations was created! Huge number of radio stations, frequent updates. I heartily recommend!',
        'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar14.png',
        'name'        => 'Mariusz Bednarz',
        'designation' => 'owner, Moje Radio Gra!',
        'sub-title'   => '“Great Plugin, WORKING PROPERLY',
    ],
    [
        'title'       => 'Best of the Best Radio plugin on WordPress',
        'description' => 'WP Radio plugin met all my expectations. Everything works perfectly. I also want to say a special thank you to the support service. They solve the problems that have arisen very quickly and professionally (even on a weekend).',
        'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar3.png',
        'name'        => 'venetiou',
        'designation' => 'Web Developer',
        'sub-title'   => '“Great Plugin, WORKING PROPERLY',
    ],
    [
        'title'       => 'Great plugin and support',
        'description' => 'Great plugin and support Great plugin does the job even the free version of the plug-in.',
        'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar10.png',
        'name'        => 'WIMASURINAME',
        'designation' => 'Web Developer',
        'sub-title'   => '“Great Plugin, WORKING PROPERLY',
    ],
    [
        'title'       => 'WP-Radio Premium – Highly Recommended!!',
        'description' => 'WP-Radio Premium – Highly Recommended!! I bought all their plugins and they work. Excellent Service & Support!!',
        'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar11.png',
        'name'        => 'rjganda',
        'designation' => 'Web Developer',
        'sub-title'   => '“Great Plugin, WORKING PROPERLY',
    ],

];

?>
<section id="wp-forms-testmonial">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-9 m-auto">
                <div class="testmonial-head text-center">
                    <!-- <span>Recent Feedback</span>
                    <div class="imgs2">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/wp-radio/home/image-2.png" alt="image-2">
                    </div> -->
                    <h1>What People Think About Upload Fields for WPForms</h1>
                    <p>We Ensuring high-quality products is one way to help you get consumers to appreciate</p>
                </div>
            </div>
        </div>

        <div class="row">
            <?php foreach ($testimonials as $testimonial) { ?>
                <div class="col-lg-4 col-md-6">
                    <div class="test-item">
                        <div class="test-rating d-flex justify-content-between align-items-center">
                            <span><?php echo $testimonial['sub-title']; ?></span>

                            <div class="quote">
                                <i class="fa-solid fa-quote-right"></i>
                            </div>
                        </div>
                        <div class="star">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <div class="content">
                            <p><?php echo $testimonial['description']; ?></p>
                        </div>
                        <div class="test-peo d-flex align-items-center">
                            <img class="img-fluid" src="<?php echo $testimonial['image']; ?>" alt="man1" style="width: 12%;">
                            <div class="text">
                                <span><?php echo $testimonial['name']; ?></span>

                            </div>
                        </div>
                    </div>
                </div>
            <?php } ?>

        </div>

    </div>
</section>