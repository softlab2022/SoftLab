<?php
$testimonials = [
	[
		'description' => '“Works fast, quick help. I had a problem with removing the blue frame of this plugin,tech support gave me a solution in just a few minutes just add code .igd-browser-wrap { border: none; } and problem solved”',
		'name'        => 'Patricia',
	]
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