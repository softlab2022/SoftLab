<?php
$testimonials = [
    'intranet17' => [
        'title'       => '"Just what we need"',
        'description' => '“We have looked high and low for a document library plug-in that offers a folder interface and easy uploads/downloads. We’re really excited to incorporate it into our site!”',
        'name'        => 'intranet17',
    ],
    'enzo-mele' => [
        'title'       => '"Top Plugin, Top Team"',
        'description' => '“Precise, rapid and punctual technical assistance.
        A small bug had cropped up, and Prince and his team fixed it in less than 24 hours.
        Recommended plugin, I personally use the premium lifetime version: TOP!!!”',
        'name'        => 'Enzo Mele',
    ],
    'raularregui' => [
        'title'       => '"Excellent Plugin for WordPress"',
        'description' => '“We are running a team of volunteers, and we have a shared Google Drive account for our resources. Some volunteers are in gmail and some not. The Integrate Google Drive plugin has allowed ALL members of our group to have access to our shared drives in Google Drive regardless of them having a gmail account or not. It’s been a tremendous boost of productivity to the whole team. Thank you!”',
        'name'        => 'raularregui',
    ],
    'shane701029' => [
        'title'       => '"Great and working 100%"',
        'description' => '“I was looking for a plugin to intergrade with any cloud storage platform that would allow me to connect to my cloud platform to be able to insert files for download using Easy Digital Downloads. I tried all of the plugins I could find to do this but all failed until i came across your Integrate Google Drive (PRO).

        Your plugin is the greatest, works perfectly and is so easy to install and setup.
        
        Well done Guys”',
        'name'        => 'shane701029 ',
    ],
    'taoistman' => [
        'title'       => '"Amazing Plugin! Amazing Support!"',
        'description' => '“Im reveiewing their Intergrate google drive plugin. So well designed and really does everything promised. I found a few bugs and they immeditly fixed them . Can not say good enough things about these guys obviously care about their work and more importantly their customers. Highly recommended”',
        'name'        => 'taoistman ',
    ],
    'williamsuttle78' => [
        'title'       => '"Very good"',
        'description' => '“Very happy with the plugin. Easy set up, painless connection, quickly solved my problem (giving users individual access to Drive folders via the website.) Had a small hangup from not reading the directions and plugin owner responded within a few hours and helpful fix. Would recommend.”',
        'name'        => 'williamsuttle78',
    ],

];

$icons = ['icon-green', 'icon-pink', 'icon-purple'];

 
?>

<section id="eacf7-testimonial" class="eacf7-testimonials">
    <div class="container">

        <div class="row align-items-center">
            <div class="col-lg-6 col-md-8 col-7">
                <div class="section-head">
                    <p>Testimonials</p>
                    <h2>What our clients say about us.</h2>
                </div>
            </div>
            <div class="col-lg-6 col-md-4 col-5">
                <div class="eacf7-arrows">
                    <span class="eacf7-left"><i class="fa-solid fa-chevron-left "></i> Previous</span>
                    <span class="eacf7-right">Next <i class="fa-solid fa-chevron-right "></i></span>


                </div>
            </div>
        </div>

        <div class="row">

            <div class="eacf7-testimonial">

                <div class="eacf7-testimonial-items">

                    <?php foreach ($testimonials as $key => $testimonial) { ?>
                        <div class="col-md-3 m-auto">
                            <div class="eacf7-testimonial-item">
                                <div class="eacf7-testi-head text-center">

                                    <div class="title-name text-center">
                                        <!-- <i class="fa-solid fa-user"></i> -->
                                        <img class="img-fluid"
                                            src="<?php echo get_template_directory_uri(); ?>/assets/images/cf7-extended/preview/<?php echo $key; ?>.png"
                                            alt="<?php $testimonial['name']; ?>">
                                        <h3><?php echo $testimonial['name']; ?></h3>
                                        <div class="star">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <div class="review">
                                                <span>5.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p><?php echo $testimonial['description']; ?></p>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>

    </div>
</section>