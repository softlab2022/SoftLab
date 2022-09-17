<?php

$features = [
	[
		'intro'       => 'User Account Page',
		'title'       => 'Let the users to register, login, and customize their profile',
		'description' => 'Create your own extra/custom user fields and add them to the registration/edit profile forms. Let users upload their own avatars.',
		'image'       => get_template_directory_uri() . "/assets/images/wp-radio/home/user-frontend/feature/login.png",
	],
	[
		'intro'       => 'Station Sharing',
		'title'       => 'Explore more for gain more vibe across the world',
		'description' => 'Let the users to share the station on facebook, twitter, whatsapp and also embed the radio player.',
		'image'       => get_template_directory_uri() . "/assets/images/wp-radio/home/user-frontend/feature/explore.png",
	],
	[
		'intro'       => 'Rating and Reviews',
		'title'       => 'Let the users to add rating and review for the stations',
		'description' => 'Select Edit review or Delete review and follow the on-screen steps. Read & respond to other people\'s reviews. Read other people\'s reviews.',
		'image'       => get_template_directory_uri() . "/assets/images/wp-radio/home/user-frontend/feature/rating.png",
	],
	[
		'intro'       => 'Favorite Stations',
		'title'       => 'Favorite Stations to quickly access stations that you love',
		'description' => 'Let the users to create their own favorite list of the station and able to add/ remove a station to the favorite list',
		'image'       => get_template_directory_uri() . "/assets/images/wp-radio/home/user-frontend/feature/favorite.png",
	],
	[
		'intro'       => 'Station Submission',
		'title'       => 'Let the users to request to add their own radio station to your website.',
		'description' => 'Get your own radio station for your website. Just add our plugin to your page and start playing music.',
		'image'       => get_template_directory_uri() . "/assets/images/wp-radio/home/user-frontend/feature/submission.png",
	],
	[
		'intro'       => 'Report Submission',
		'title'       => 'Let the users submit reports if any station doesn’t play.',
		'description' => 'Can’t find your favorite song on the radio? Submit a report and we’ll make sure it gets played!',
		'image'       => get_template_directory_uri() . "/assets/images/wp-radio/home/user-frontend/feature/report.png",
	],
];

?>

<section id="wp-radio-user-frontend-features">
    <div class="container">

		<?php
		$i = 0;
		foreach ( $features as $feature ) {
			$is_odd = $i % 2 == 0;
			?>
            <div class="row feature-item align-items-center">
                <div class="col-md-6 <?php echo ! $is_odd ? 'order-1' : ''; ?>">
                    <div class="feature-item-img text-center">
                        <img class="img-fluid" src="<?php echo $feature['image']; ?>"
                             alt="<?php echo $feature['intro']; ?>">
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="feature-item-content">
                        <span><?php echo $feature['intro']; ?></span>
						<div class="imgs2">
                        	<img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/wp-radio/home/image-2.png" alt="image-2">
                    	</div>
                        <h3><?php echo $feature['title']; ?></h3>
                        <p><?php echo $feature['description']; ?></p>
                    </div>
                </div>
            </div>
			<?php $i ++;
		} ?>

    </div>
</section>