<?php

$testimonials = [
	[
		'title'       => '“Best Radio Player Available',
		'description' => 'It works but only if you buy all of the plugins. <strong>It would be better</strong> if people stopped using open source code and dropping <strong>paywalls and tracking</strong> scripts of course we have been tracking',
		'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar12.png',
		'name'        => 'Kroffi Media',
	],

	[
		'title'       => 'IT iS A BEST OF THE BEST',
		'description' => 'Этот плагин супер. Я искал везде такойи немог найти. Спасибо разработчику. И только не останавливайтесь и развивайте это плагин дальше.',
		'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar13.png',
		'name'        => 'Aleksandr',
	],

	[
		'title'       => 'SUPER!!',
		'description' => 'Thanks to this plugin my website with radio stations was created! Huge number of radio stations, frequent updates. I heartily recommend!',
		'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar14.png',
		'name'        => 'Mariusz Bednarz',
	],
	[
		'title'       => 'Best of the Best Radio plugin on WordPress',
		'description' => 'WP Radio plugin met all my expectations. Everything works perfectly. I also want to say a special thank you to the support service. They solve the problems that have arisen very quickly and professionally (even on a weekend).',
		'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar3.png',
		'name'        => 'venetiou',
	],
	[
		'title'       => 'Great plugin and support',
		'description' => 'Great plugin and support Great plugin does the job even the free version of the plug-in.',
		'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar10.png',
		'name'        => 'WIMASURINAME',
	],
	[
		'title'       => 'WP-Radio Premium – Highly Recommended!!',
		'description' => 'WP-Radio Premium – Highly Recommended!! I bought all their plugins and they work. Excellent Service & Support!!',
		'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar11.png',
		'name'        => 'rjganda',
	],

];

?>
<section id="testimonial">
    <div class="container">
        <div class="row">
            <div class="col-md-8 m-auto">
                <div class="section-header text-center">
                    <h2>What People Think About <span>WP Radio</span></h2>
                    <p>We Ensuring high-quality products is one way to help you get consumers to appreciate</p>
                </div>
            </div>
        </div>

        <div class="row" data-masonry='{"percentPosition": true }'>
			<?php foreach ( $testimonials as $testimonial ) { ?>
                <div class="col-lg-4 col-md-6">
                    <div class="testimonial-item">
                        <div class="testimonial-rating d-flex justify-content-between align-items-center">
                            <div class="star">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                        class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                        class="fa-solid fa-star"></i>
                            </div>
                            <div class="quote">
                                <i class="fa-solid fa-quote-right"></i>
                            </div>
                        </div>
                        <div class="content">
                            <p><?php echo $testimonial['description']; ?></p>
                        </div>
                        <div class="testimonial-person d-flex align-items-center">
                            <img class="img-fluid" src="<?php echo $testimonial['image']; ?>" alt="man1"
                                 style="width: 12%;">
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