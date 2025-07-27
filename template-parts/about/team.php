<?php

$team_members = [
    'israil' => [
        'name'       => __('Israil Ahmed', 'softlab'),
        'degination' => __('CEO & Founder', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/home/team/israil1.png',
    ],
    'akash' => [
        'name'       => __('Md Akash Ahmed', 'softlab'),
        'degination' => __('Frontend Developer', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/home/team/akash3.png',
    ],
    'naziur' => [
        'name'       => __('Md. Naziur Rahman', 'softlab'),
        'degination' => __('Digital Marketing Executive', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/home/team/naziur.png',
    ],
    'rezoan' => [
        'name'       => __('Rezoan Khan', 'softlab'),
        'degination' => __('UI/UX Designer', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/home/team/rezoan1.png',
    ],
    'monzur_alam' => [
        'name'       => __('Monzur Alam', 'softlab'),
        'degination' => __('Software Engineer', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/home/team/monzur-alam.png',
    ],
    'sazzad_hossain' => [
        'name'       => __('Sazzad Hossain', 'softlab'),
        'degination' => __('Jr. Support Engineer', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/home/team/Sazzad-Hossain.png',
    ],
    'zubayer_ahamad' => [
        'name'       => __('Sazzad Hossain', 'softlab'),
        'degination' => __('Jr. Support Engineer', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/home/team/Zubayer-Ahamad.png',
    ],

];

?>



<section class="teams">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="teamWrapper">
                    <div class="heades text-center" style="margin-bottom: 120px;">
                        <h1><?php _e('Meet with Our Creative Team', 'softlab'); ?></h1>
                        <p><?php _e('We are a team of WordPress developers who love to build awesome teams.', 'softlab'); ?></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <?php foreach ($team_members as $key => $team) {
                
                ?>
                <div class="col-lg-3 col-md-6 teams-items">
                    <div class="teamcol team-<?php echo $key; ?>">
                        <div class="teamcolinner">
                            <div class="avatar">
                                <img class="teams-icon img-fluid" src="<?php echo $team['image']; ?>" alt="<?php echo $team['name']; ?>">
                            </div>
                            <div class="membar-info">
                                <div class="member-name">
                                    <h2><?php echo $team['name']; ?></h2>
                                    <p><?php echo $team['degination']; ?></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            <?php } ?>

        </div>
    </div>
</section>