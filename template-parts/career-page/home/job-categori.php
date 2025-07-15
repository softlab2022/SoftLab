<?php

$job_categoris = [
    'design' => [
        'name'       => __('Design', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/career-page/design.png',
    ],
    'analyst' => [
        'name'       => __('Analyst', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/career-page/analyst.png',
    ],
    'developer' => [
        'name'       => __('Developer', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/career-page/developer.png',
    ],
    'hr' => [
        'name'       => __('HR', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/career-page/hr.png',
    ],
    'manager' => [
        'name'       => __('Manager', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/career-page/manager.png',
    ],
    'engineering' => [
        'name'       => __('Engineering', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/career-page/engineering.png',
    ],
    'marketing' => [
        'name'       => __('Marketing', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/career-page/marketing.png',
    ],
    'programmer' => [
        'name'       => __('Programmer', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/career-page/programmer.png',
    ],

];

?>



<section class="job-categori">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 m-auto">
                <div class="job-categori-head autoShow text-center">
                    <h2 class="job-categori-title"><?php _e('Explore Jobs by Category', 'softlab'); ?></h2>
                    <p class="job-categori-description"><?php _e('Find opportunities matches to your skills and interests by browsing jobs across various categories.', 'softlab'); ?></p>
                </div>
            </div>
        </div>
        <div class="row">
            <?php foreach ($job_categoris as $key => $job_categori) { ?>
                <div class="col-lg-3 col-md-6">
                    <div class="job-categori-item">
                        <img class="img-fluid" src="<?php echo $job_categori['image']; ?>" alt="<?php echo $job_categori['name']; ?>">
                        <p><?php echo $job_categori['name']; ?></p>
                    </div>
                </div>
            <?php } ?>

        </div>
    </div>
</section>