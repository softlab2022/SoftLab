<?php
$testimonials = [
	[
		'description' => '“Works fast, quick help. I had a problem with removing the blue frame of this plugin,tech support gave me a solution in just a few minutes just add code .igd-browser-wrap { border: none; } and problem solved”',
		'name'        => 'Patricia',
    ],
	[
		'description' => '“Looking for a solution that would integrate Google Drive with our website we found this solution with a wide span of functionalities. It covers almost all of our needs in one single plugin and it’s very will conctructed”',
		'name'        => 'monjesbudistas',
    ],
	[
		'description' => '“Works well and fast support. Our users are very happy with the functionality and usablity and from the amdin point of view is very intituive and flexible.The support we have received is very good and it also delivers upgrades regularly what is great.Keep the work coming!!”',
		'name'        => 'isola81',
    ],
    [
		'description' => '“Im reveiewing their Intergrate google drive plugin. So well designed and really does everything promised. I found a few bugs and they immeditly fixed them . Can not say good enough things about these guys obviously care about their work and more importantly their customers. Highly recommended”',
		'name'        => 'taoistman ',
    ],
	[
		'description' => '“We’ve been using a fairly expensive file sharing service for our website members and looking for an alternative. Integrate Google drive was easy to setup and keeps everything on our site. I had to contact support, they were responsive and addressed my concerns.”',
		'name'        => 'brianray',
    ],
	[
		'description' => '“Very happy with the plugin. Easy set up, painless connection, quickly solved my problem (giving users individual access to Drive folders via the website.) Had a small hangup from not reading the directions and plugin owner responded within a few hours and helpful fix. Would recommend.”',
		'name'        => 'williamsuttle78',
    ],
	[
		'description' => '“Our company has been using Box.com and its upload widget for many years to receive customer files through our web site, but we have become less and less satisfied with their service. I thought, why don’t we use the Google Drive space we are already paying for, and have customers upload to that? But how do we facilitate allowing customers to upload through our web site? Enter Integrate Google Drive. This is a fantastic plugin that just simply works! We also set up a Zapier action that sends us an email every time a new file is uploaded to our Google Drive. Perfect solution!”',
		'name'        => 'nedcook',
    ],
	[
		'description' => '“I tried several plugins to access our Google drive. Main reason so far was displaying the gallery without need to copy files to webserver. This plugin made me finally think, there is still someone to know his job. Simple activation, and, more important for me: very simple usage.

        I’ve got minor issue with the gallery and it was fixed promptly in few hours and released for me. So really looking forward investigating new features!”',
		'name'        => 'mesysel ',
    ],
];

$icons = [ 'icon-green', 'icon-pink', 'icon-purple' ];

?>

<section id="testimonial" class="testimonial">
    <div class="container">

        <div class="row">
            <div class="col-lg-8 m-auto text-center">
                <div class="section-head text-center">
                    <h2>What People Think About<br><span>Integrate Google Drive</span></h2>
                    <p>We Ensuring high-quality products is one way to help you get consumers to appreciate</p>
                </div>
            </div>
        </div>

        <div class="row">
                
            <div class="testimonial">
                <div class="arrows">
                        <i class= "fa-solid fa-chevron-left left"></i>
                        <i class= "fa-solid fa-chevron-right right"></i>
                    </div>
                <div class="testimonial-items">
                
                    <?php foreach ( $testimonials as $testimonial ) { ?>
                        <div class="col-md-3 m-auto">
                            <div class="testimonial-item">
                                <div class="icon <?php echo $icons[ array_rand( $icons ) ]; ?>">
                                    <i class="fa-solid fa-quote-left"></i>
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