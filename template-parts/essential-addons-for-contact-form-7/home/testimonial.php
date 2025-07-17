<?php
$testimonials = [
    [
        'title'       => '"Amazing plugin, Great support"',
        'description' => '“Just bought this plugin as it had a feature we needed that the other plugins didn’t have by default (multiple image choice selection). Even if at the beginning there seemed to be a bug with the conditional logic field and the multiple image choice, the support team quickly came to our help and fixed the problem. Since this a new plugin, I can only imagine that it will get even better with time. I recommend this plugin – we also did a little bit of CSS/JS customization and everything was smooth.”',
        'name'        => 'althausstudios',
    ],
    [
        'title'       => '"Top Plugin, Top Team"',
        'description' => '“Precise, rapid and punctual technical assistance.
        A small bug had cropped up, and Prince and his team fixed it in less than 24 hours.
        Recommended plugin, I personally use the premium lifetime version: TOP!!!”',
        'name'        => 'Enzo Mele',
    ],
    [
        'title'       => '"Excellent Plugin for WordPress"',
        'description' => '“We are running a team of volunteers, and we have a shared Google Drive account for our resources. Some volunteers are in gmail and some not. The Integrate Google Drive plugin has allowed ALL members of our group to have access to our shared drives in Google Drive regardless of them having a gmail account or not. It’s been a tremendous boost of productivity to the whole team. Thank you!”',
        'name'        => 'raularregui',
    ],
    [
        'title'       => '"Great and working 100%"',
        'description' => '“I was looking for a plugin to intergrade with any cloud storage platform that would allow me to connect to my cloud platform to be able to insert files for download using Easy Digital Downloads. I tried all of the plugins I could find to do this but all failed until i came across your Integrate Google Drive (PRO).

        Your plugin is the greatest, works perfectly and is so easy to install and setup.
        
        Well done Guys”',
        'name'        => 'shane701029 ',
    ],
    [
        'title'       => '"Amazing Plugin! Amazing Support!"',
        'description' => '“Im reveiewing their Intergrate google drive plugin. So well designed and really does everything promised. I found a few bugs and they immeditly fixed them . Can not say good enough things about these guys obviously care about their work and more importantly their customers. Highly recommended”',
        'name'        => 'taoistman ',
    ],
    [
        'title'       => '"Very good"',
        'description' => '“Very happy with the plugin. Easy set up, painless connection, quickly solved my problem (giving users individual access to Drive folders via the website.) Had a small hangup from not reading the directions and plugin owner responded within a few hours and helpful fix. Would recommend.”',
        'name'        => 'williamsuttle78',
    ],
    [
        'title'       => '"Awesome Plugin for Receiving <br> Customer Files"',
        'description' => '“Our company has been using Box.com and its upload widget for many years to receive customer files through our web site, but we have become less and less satisfied with their service. I thought, why don’t we use the Google Drive space we are already paying for, and have customers upload to that? But how do we facilitate allowing customers to upload through our web site? Enter Integrate Google Drive. This is a fantastic plugin that just simply works! We also set up a Zapier action that sends us an email every time a new file is uploaded to our Google Drive. Perfect solution!”',
        'name'        => 'nedcook',
    ],
    [
        'title'       => '"Great support"',
        'description' => '“I’ve been using the plugin for a month now and it does a great job of placing our Google Drive files on our WordPress site. Submitted a quick question to the support team and had an answer in just a few hours. Great support!”',
        'name'        => 'stpaulfresno ',
    ],
    [
        'title'       => '"Integrate Google Drive is Excellent"',
        'description' => 'The plugin is amazing. It is so easy to use and allows me to keep all files on Google Drive instead of my Media folder in WordPress. I totally recommend this product.',
        'image'       => get_template_directory_uri() . '/assets/images/dracula/home/testimonial/man1.png',
        'images'       => get_template_directory_uri() . '/assets/images/dracula/home/testimonial/group.png',
        'name'        => 'twolsey ',
        'designation' => 'Web Developer',
    ],

];

$icons = ['icon-green', 'icon-pink', 'icon-purple'];

?>

<section id="testimonial" class="testimonials">
    <div class="container">

        <div class="row">
            <div class="col-lg-10 m-auto text-center">
                <div class="section-head text-center">
                    <h2>What People Think About Our Products<span></span></h2>
                    <p>We Ensuring high-quality products is one way to help you get consumers to appreciate</p>
                </div>
            </div>
        </div>

        <div class="row">

            <div class="testimonial">
                <div class="arrows">
                    <i class="fa-solid fa-chevron-left left"></i>
                    <i class="fa-solid fa-chevron-right right"></i>
                </div>
                <div class="testimonial-items-cf7">

                    <?php foreach ($testimonials as $testimonial) { ?>
                        <div class="col-md-3 m-auto">
                            <div class="testimonial-item">
                                <div class="testi-head d-flex justify-content-between align-items-center">

                                    <div class="title-name">
                                        <h3><?php echo $testimonial['title']; ?></h3>
                                        <div class="star d-flex  align-items-center">
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
                                    <div class="icon <?php echo $icons[array_rand($icons)]; ?>">
                                    <i class="fa-solid fa-quote-left"></i>
                                    </div>
                                </div>

                                <p><?php echo $testimonial['description']; ?></p>

                                <div class="testimonial-user d-flex align-items-center">
                                    <i class="fa-solid fa-user"></i>
                                    <span><?php echo $testimonial['name']; ?></span>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>

    </div>
</section>