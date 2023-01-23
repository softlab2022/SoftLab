<?php
$testimonials = [
	[
		'description' => '“I was looking for a simple solution that can improve readers user experience. This Reader Mode plugin gave me couple of stunning facilities in one package. So far it is working superb on my website. Looking forward to more features in the future.”',
		'name'        => 'Patricia',
    ],
	[
		'description' => '“Reader Mode is a real helping plugin I have ever discovered. I wanted to allow my visitors having both translation feature and Text-to-Speech feature in a go. This plugin gave me more than that what I needed.”',
		'name'        => 'monjesbudistas',
    ],
	[
		'description' => '“Great & amazing creation by the developer team. Super easy interactions for website owners. I loved the easy customization options of this plugin and have bunch of necessary features included. I will give it a 5 stars for sure!”',
		'name'        => 'isola81',
    ],
    [
		'description' => '“Works smoothly! So far haven not found any bugs or issues. The support is awesome and on time. In a package I have got Text-to-Speech, Translation, Progress Bar, Printing Ability, and what not. Will be using this for years or so.”',
		'name'        => 'tom -pennington',
    ],
	
];

$icons = [ 'icon-green', 'icon-pink', 'icon-purple' ];

?>

<section id="testimonial" class="testimonial">
    <div class="container">

        <div class="row">
            <div class=" col-lg-12 col-md-8 m-auto text-center">
                <div class="section-title">
                    <h2>Our happy customers Feedback</h2>
                    <p>Check out the testimonials from users who are already using Read mode plugin</p>
                </div>
            </div>
        </div>

        <div class="row align-items-center justify-content-center">
                
            <div class="testimonial">
                <div class="arrows">
                        <i class= "fa-solid fa-chevron-left left"></i>
                        <i class= "fa-solid fa-chevron-right right"></i>
                    </div>
                <div class="testimonial-items ">
                
                    <?php foreach ( $testimonials as $testimonial ) { ?>
                        <div class="col-md-3 m-auto">
                            <div class="testimonial-item text-center">
                                <div class="icon <?php echo $icons[ array_rand( $icons ) ]; ?>">
                                    <i class="fa-solid fa-quote-left"></i>
                                </div>
                                <p><?php echo $testimonial['description']; ?></p>

                                <div class="testimonial-user d-flex align-items-center justify-content-center">
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