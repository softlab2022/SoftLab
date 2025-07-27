<?php

$features = [
	'friendly-environment'     => [
		'title'       => 'Friendly Environment',
		'description' => 'A friendly environment that boosts your productivity to its peak potential.',
		'image'       => get_template_directory_uri() . '/assets/images/career-page/friendly-environment.png',
	],
	'competitive-salary' => [
		'title'       => 'Competitive Salary',
		'description' => 'Enjoy a compensation package ensuring you feel valued and rewarded for your creative work.',
		'image'       => get_template_directory_uri() . '/assets/images/career-page/competitive-salary.png',
	],
	'performance-bonus'  => [
		'title'       => 'Performance Bonus',
		'description' => 'Be recognized and rewarded for your outstanding contributions with performance-based bonuses to celebrate your achievements.',
		'image'       => get_template_directory_uri() . '/assets/images/career-page/performance-bonus.png',
	],
	'special-bonuses'  => [
		'title'       => 'Special Bonuses',
		'description' => 'Achieve additional rewards through special bonuses for exceptional efforts, milestones, and contributions beyond regular performance.',
		'image'       => get_template_directory_uri() . '/assets/images/career-page/special-bonuses.png',
	],
	'annual-tour'       => [
		'title'       => 'Annual Tour',
		'description' => 'Experience team bonding and relaxation with an exciting annual tour to create new memories together',
		'image'       => get_template_directory_uri() . '/assets/images/career-page/annual-tour.png',
	],

	'carry-forward-leave' => [
		'title'       => 'Carry Forward Leave',
		'description' => 'Enjoy the flexibility to carry forward unused leave to the next year, giving you greater control over your time off when you need it most.',
		'image'       => get_template_directory_uri() . '/assets/images/career-page/carry-forward-leave.png',
	],
	'open-communication' => [
		'title'       => 'Open Communication',
		'description' => 'We value transparency and ensure everyone’s ideas, feedback, and concerns are heard and respected.',
		'image'       => get_template_directory_uri() . '/assets/images/career-page/open-communication.png',
	],
	'carrom-board' => [
		'title'       => 'Carrom Board',
		'description' => 'Unwind and connect with colleagues over a friendly game of carrom, adding fun and relaxation to your workday.',
		'image'       => get_template_directory_uri() . '/assets/images/career-page/carrom-board.png',
	],
	'unlimited-tea-coffee' => [
		'title'       => 'Unlimited Tea, Coffee',
		'description' => 'Enjoy unlimited tea and coffee to keep you refreshed and energized throughout the day.',
		'image'       => get_template_directory_uri() . '/assets/images/career-page/unlimited-tea-coffee.png',
	],

];

?>

<section id="feature">
    <div class="container">

        <div class="feature-vector">
            <img class="img-fluid"
                 src="<?php echo get_template_directory_uri(); ?>/assets/images/home/features/vector2.png">
        </div>

        <div class="row">
            <div class="col-lg-7 m-auto">
                <div class="feature-head autoShow text-center">
                    <h2 class="feature-title"><?php _e('Benefits of Joining Our Creative Team', 'softlab'); ?></h2>
                    <p class="feature-description"><?php _e('Discover SoftLab’s benefits, where creativity is valued, and your skills are elevated to the next level.', 'softlab'); ?></p>
                </div>
            </div>
        </div>

        <div class="row">
			<?php foreach ( $features as $key => $feature ) { ?>
                <div class="col-lg-4 col-md-6 m-auto">
                    <div class="feature-item autoShow text-center feature-<?php echo $key; ?>">
                        <div class="feat-icon">
                            <img class="img-fluid" src="<?php echo $feature['image']; ?>"
                                 alt="<?php echo $feature['title']; ?>">
                        </div>
                        <div class="feat-content">
                            <h3><?php echo $feature['title']; ?></h3>
                            <p><?php echo $feature['description']; ?></p>
                        </div>
                    </div>
                </div>
			<?php } ?>
        </div>

    </div>

    <div class="feature-vector1">
        <img class="img-fluid"
             src="<?php echo get_template_directory_uri(); ?>/assets/images/home/features/vector3.png">
    </div>
</section>