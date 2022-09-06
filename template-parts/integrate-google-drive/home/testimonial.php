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
		'description' => '“Great support from the developer. He jumped right in and helped me get it working. Works perfectly.”',
		'name'        => 'tom -pennington',
    ],
	[
		'description' => '“We’ve been using a fairly expensive file sharing service for our website members and looking for an alternative. Integrate Google drive was easy to setup and keeps everything on our site. I had to contact support, they were responsive and addressed my concerns.”',
		'name'        => 'brianray',
    ],
	[
		'description' => '“ Perfect, Simple, Works well, and lightning fast support”',
		'name'        => 'rindevofficial',
    ],
	[
		'description' => '“I had a problem with removing the blue frame of this plugin,tech support gave me a solution in just a few minutes just add code .igd-browser-wrap {border: none;}and problem solved”',
		'name'        => 'ANC',
    ],
	[
		'description' => '“ Fine for me, très bonne assistance, bon travail pour moi!”',
		'name'        => 'isabrie',
    ],
];

$icons = [ 'icon-green', 'icon-pink', 'icon-purple' ];

?>

<section id="testimonial" class="testimonial">
    <div class="container">

        <div class="row">
            <div class="col-md-8 m-auto text-center">
                <div class="section-head text-center">
                    <h2>What People Think About <br> <span>Integrate Google Drive</span></h2>
                    <p>We Ensuring high-quality products is one way to help you get consumers to appreciate</p>
                </div>
            </div>
        </div>

        <div class="row">
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
</section>