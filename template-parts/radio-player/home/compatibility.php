<?php
$compatibilitys = [

    'shoutcast' => [
        'title'       => 'Shortcode Generator',
    ],
    'icecast' => [
        'title'       => 'Shortcode Generator',
    ],
    'radionomy' => [
        'title'       => 'Shortcode Generator',
    ],
    'airtime' => [
        'title'       => 'Shortcode Generator',
    ],
    'radio-co' => [
        'title'       => 'Shortcode Generator',
    ],
    'live-365' => [
        'title'       => 'Shortcode Generator',
    ],
    'shoutcasts' => [
        'title'       => 'Shortcode Generator',
    ],
    'radionomys' => [
        'title'       => 'Shortcode Generator',
    ],

];
?>

<section id="compat">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 m-auto">
                <div class="section-head text-center">
                    <h1>Compatibility</h1>
                    <p>Works with any mp3 or aac stream and any major radio provider.</p>
                </div>
            </div>
        </div>

        <div class="row compat-slider">
            <?php foreach ($compatibilitys as $key => $compatibility) { ?>
                <div class="col-lg-2 m-auto">
                    <div class="item-img text-center">
                        <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/compat/<?php echo $key; ?>.png" alt="">
                    </div>
                </div>
            <?php } ?>

        </div>

    </div>

</section>