<?php

$testimonials = [
	[
		'title'       => '“Best Radio Player Available',
		'description' => 'We spent several days reviewing the available Wordpress radio players for streaming and this was by far the best one available that could work on every Wordpress theme. Highly recommended!”',
		'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar7.png',
		'name'        => 'Collabo',
		'designation' => 'Web Developer',
	],

	[
		'title'       => '#1 Radio Player Plugin',
		'description' => 'This plugin works as advertised! Most importantly the support team was very responsive to my emails and helped me figure out why my stream URL didn’t worked and provided a solution.',
		'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar8.png',
		'name'        => 'tom-pennington',
		'designation' => 'Web Developer',
	],

	[
		'title'       => 'PERFECT!',
		'description' => 'Perfect! The pro version helped me to get rid of some https problems and now everyone can hear my broadcasts!',
		'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar5.png',
		'name'        => 'Per Kindwall',
		'designation' => 'Web Developer',
	],
	[
		'title'       => 'PERFECTO, FUNCIONA MUY BIEN!',
		'description' => 'Merece la pena la versión pro, funciona de maravilla!',
		'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar9.png',
		'name'        => 'CentroWebs S.C.',
		'designation' => 'Web Developer',
	],

];

?>
<section id="testimonial">
    <div class="container">

        <div class="row">
            <div class="col-lg-10 m-auto">
                <div class="test-head text-center">
                    <h2>What Customers Say about <span>Radio Player</span></h2>
                    <p>We asked our customers for feedback about the Radio Player and they say</p>
                </div>
            </div>
        </div>

        <div class="row">
			<?php foreach ( $testimonials as $testimonial ) { ?>
                <div class="col-lg-6 col-md-6">

                    <div class="test-item">
                        <div class="testimonial-header d-flex justify-content-between">
                            <h6><?php echo $testimonial['title']; ?></h6>
                            <span><i class="fa-solid fa-quote-right"></i></span>
                        </div>
                        <div class="rating">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                    class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                    class="fa-solid fa-star"></i>
                        </div>
                        <div class="testimonial-content">
                            <p> <?php echo $testimonial['description']; ?></p>
                            <h5><img class="img-fluid" src="<?php echo $testimonial['image']; ?>" alt="test-img"
                                     style="width: 7%;"><?php echo $testimonial['name']; ?></h5>
                        </div>
                    </div>
                </div>
			<?php } ?>
        </div>


    </div>
</section>