<?php

$testimonials = [
	[
		'title'       => 'Works perfect! Great and super fast support!',
		'description' => 'Once I found streams that worked with the player, they work flawlessly! I do love how easy it is to add the links, even though some streams are more difficult to obtain (proprietary stations, etc). In any case, I love this!',
		'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar.png',
		'name'        => 'Worshiplive',
		'designation' => 'Web Developer',
	]
];

?>

<section id="testimonial">
    <div class="container">

        <div class="row">
            <div class="col-lg-8 col-8  m-auto">
                <div class="testimonial-head text-center">
                    <h2>What our customer says</h2>
                    <p>See, how our users all over the world are getting benefit from using our products.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-7 col-11 m-auto">

                <div class="testimonial-support-item">
                    <i class="fa-solid fa-chevron-left left"></i>
                    <i class="fa-solid fa-chevron-right right"></i>
                </div>

				<?php foreach ( $testimonials as $testimonial ) { ?>
                    <div class="testimonial-item">

                        <div class="people-think-item text-center">
                            <div class="people-think-icon">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>

                            <div class="people-think-content">
                                <h4 class="testimonial-title"><?php echo $testimonial['title']; ?></h4>
                                <p class="testimonial-desc"><?php echo $testimonial['description']; ?></p>
                            </div>

                            <div class="people-think-info d-flex justify-content-center align-items-center">
                                <div class="people-img">
                                    <img class="img-fluid" src="<?php echo $testimonial['image']; ?>"
                                         alt="<?php echo $testimonial['title']; ?>">
                                </div>
                                <div class="people-text">
                                    <h4 class="testimonial-name"><?php echo $testimonial['name']; ?></h4>
                                    <p class="testimonial-designation"><?php echo $testimonial['designation']; ?></p>
                                </div>
                            </div>
                        </div>

                    </div>
				<?php } ?>

            </div>
        </div>
    </div>

</section>