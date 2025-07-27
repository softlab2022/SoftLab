<?php

$compatibilitys = [
    'jupiter' => [
        'name'       => __('Jupiter', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/dracula/home/compatibility/jupiter.png',
    ],
    'avada' => [
        'name'       => __('Avada', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/dracula/home/compatibility/avada.png',
    ],
    'newspaper' => [
        'name'       => __('Newspaper', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/dracula/home/compatibility/newspaper.png',
    ],
    'jannah' => [
        'name'       => __('jannah', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/dracula/home/compatibility/jannah.png',
    ],
    'woodmart' => [
        'name'       => __('woodmart', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/dracula/home/compatibility/woodmart.png',
    ],
    'eduma' => [
        'name'       => __('eduma', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/dracula/home/compatibility/eduma.png',
    ],
    'news12paper' => [
        'name'       => __('news12paper', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/dracula/home/compatibility/news12paper.png',
    ],
    'rehub' => [
        'name'       => __('rehub', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/dracula/home/compatibility/rehub.png',
    ],
    'astra' => [
        'name'       => __('astra', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/dracula/home/compatibility/astra.png',
    ],
    'wp-residence' => [
        'name'       => __('wp-residence', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/dracula/home/compatibility/wp-residence.png',
    ],

];

?>


<section id="compatibility">
    <div class="container compatibility">
        <div class="row">
            <div class="col-lg-7 m-auto">
                <div class="section-head text-center">
                    <h1><?php _e('Wide Compatibility', 'softlab'); ?></h1>
                    <p><?php _e('Let\'s explore which features are absolute you can add to stand out and give even more value', 'softlab'); ?></p>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <?php foreach ($compatibilitys as $key => $compatibility) { ?>
            <div class="col-lg-2 col-md-6 col-6">
                <div class="compat-img text-center <?php echo $key; ?>">
                    <img class="img-fluid" src="<?php echo $compatibility['image']; ?>" alt="<?php echo $compatibility['name']; ?>">
                </div>
            </div>
            <?php } ?>
        </div>

    </div>
</section>