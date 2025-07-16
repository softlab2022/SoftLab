<?php

$testimonials = [
	[
		'title'       => __('Works nicely', 'softlab'),
		'description' => __('We’ve been using a fairly expensive file sharing service for our website members and looking for an alternative. Integrate Google drive was easy to setup and keeps everything on our site. I had to contact support, they were responsive and addressed my concerns.', 'softlab'),
		'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar2.png',
		'name'        => __('brianray', 'softlab'),
		'designation' => '',
	],

	[
		'title'       => __('WORKS AS DESCRIBED', 'softlab'),
		'description' => __('Great support from the developer. He jumped right in and helped me get it working. Works perfectly.', 'softlab'),
		'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar1.png',
		'name'        => __('tom-pennington', 'softlab'),
		'designation' => '',
	],

	[
		'title'       => __('Best of the Best Radio plugin on WordPress', 'softlab'),
		'description' => __('Great support from the developer. He jumped right in and helped me get it working. Works perfectly.', 'softlab'),
		'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar3.png',
		'name'        => __('venetiou', 'softlab'),
		'designation' => '',
	],

	[
		'title'       => __('GREAT PLUGIN, IT CAN ALSO BE ..', 'softlab'),
		'description' => __('Such good cooperation. Instant support. I have already forgotten about such good cooperation in the world. Instant support. The company responded absolutely expressly. I have to admit that the time difference was not an obstacle. Impression that you cooperate with a large corporation. I consider the plug to be good with a light code, a great advantage. I recommend programmers.', 'softlab'),
		'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar4.png',
		'name'        => __('Joseph Robert Kozubek', 'softlab'),
		'designation' => '',
	],

	[
		'title'       => __('PERFECT!', 'softlab'),
		'description' => __('Perfect! The pro version helped me to get rid of some https problems and now everyone can hear my broadcasts!', 'softlab'),
		'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar5.png',
		'name'        => __('Per Kindwall', 'softlab'),
		'designation' => '',
	],

	[
		'title'       => __('Excellent HTTP Radio Player and awesome support!', 'softlab'),
		'description' => __('Great and easy to use Radio Player with excellent options for customizable skin including own branding. Even better is the HTTP solution for the Chrome radio stream issue – WP Military Radio Player works like a charm for HTTP radio streams across all browsers including Chrome, Edge and Opera. Awesome support and great lifetime pricing.', 'softlab'),
		'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/avatar6.png',
		'name'        => __('LakeHouse Media', 'softlab'),
		'designation' => '',
	],

	[
		'title'       => __('Most Useful Dark Mode Plugin', 'softlab'),
		'description' => __('Being a user of Dracula Dark Mode on my website made with WordPress, I can say that it is a must-have plugin for your platform. Integration of such a dark mode plugin was highly important for the improved user experience of my visitors. It helped them have a comfortable browsing environment and made it look friendly and interesting. <a target="_blank" href="https://fixthephoto.com/best-dark-mode-plugins-for-wordpress.html">Read more</a>', 'softlab'),
		'image'       => get_template_directory_uri() . '/assets/images/home/testimonial/eva-williams.png',
		'name'        => __('Eva Williams', 'softlab'),
		'designation' => __('Manager at Fixthephoto.com', 'softlab'),
	],


];

?>

<section id="testimonial" class="testimonial">
	<div class="container">

		<div class="row">
			<div class="col-lg-8 col-12  m-auto">
				<div class="section-head  text-center">
					<h2><?php _e('What our users say', 'softlab'); ?></h2>
					<p><?php _e('See, how our users all over the world are getting benefit from using our products.', 'softlab'); ?></p>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-7 col-11  m-auto">

				<div class="slider-item ">
					<div class="testimonial-support-item">
						<i class="fa-solid fa-chevron-left left"></i>
						<i class="fa-solid fa-chevron-right right"></i>
					</div>
					<div class="single-testimonial-items">

						<?php foreach ($testimonials as $testimonial) { ?>
							<div class="testimonial-item text-center">
								<div class="testimonial-rating">
									<i class="fa-solid fa-star"></i>
									<i class="fa-solid fa-star"></i>
									<i class="fa-solid fa-star"></i>
									<i class="fa-solid fa-star"></i>
									<i class="fa-solid fa-star"></i>
								</div>

								<div class="testimonial-content">
									<h4 class="testimonial-title"><?php echo $testimonial['title']; ?></h4>
									<p class="testimonial-desc"><?php echo wp_trim_words($testimonial['description'], 34, "..."); ?></p>
								</div>

								<div class="testimonial-user d-flex justify-content-center align-items-center">
									<img class="img-fluid" src="<?php echo $testimonial['image']; ?>" alt="<?php echo $testimonial['title']; ?>">
									<div class="testimonial-user-text">
										<span class="testimonial-name"><?php echo $testimonial['name']; ?></span>
										<span class="testimonial-designation"><?php echo $testimonial['designation']; ?></span>
									</div>
								</div>
							</div>
						<?php } ?>

					</div>
				</div>

			</div>
		</div>
	</div>

</section>
