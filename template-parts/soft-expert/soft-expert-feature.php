<!-- Why Choose SoftExpert start -->
<?php

$features = [
    'trusted-service'     => [
        'title'       => __('Trusted Service', 'softlab'),
        'description' => __('Proven track record of delivering high-quality solutions that clients rely on.', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/soft-expert/service/trusted-service.png',
    ],
    'innovative-solutions' => [
        'title'       => __('Innovative Solutions', 'softlab'),
        'description' => __('Cutting-edge technology and creative approaches to solve business challenges.', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/soft-expert/service/innovative-solutions.png',
    ],
    'clear-communication'  => [
        'title'       => __('Clear Communication', 'softlab'),
        'description' => __('Transparent and consistent updates throughout the project lifecycle.', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/soft-expert/service/clear-communication.png',
    ],
    'industry-expertise'  => [
        'title'       => __('Industry Expertise', 'softlab'),
        'description' => __('Our team leverages extensive cross-industry experience to create customized strategies that drive tangible outcomes.', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/soft-expert/service/industry-expertise.png',
    ],
    'complete-project-control'       => [
        'title'       => __('Complete Project Control', 'softlab'),
        'description' => __('tay informed at every stage with full visibility over progress, deadlines, and deliverables.', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/soft-expert/service/complete-project-control.png',
    ],

    'on-time-delivery' => [
        'title'       => __('On-Time Delivery', 'softlab'),
        'description' => __('Commitment to meeting deadlines without compromising quality.', 'softlab'),
        'image'       => get_template_directory_uri() . '/assets/images/soft-expert/service/on-time-delivery.png',
    ],

];

?>

<section id="soft-expert-feature">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="soft-expert-feature-heading text-center">
                    <h2>Why Choose SoftExpert</h2>
                    <p>SoftExpert delivers smart solutions backed by trusted expertise, driving results that truly make a difference for your business.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <?php foreach ($features as $key => $feature) { ?>
                <div class="col-lg-4 col-md-6 m-auto">
                    <div class="feature-item  text-center feature-<?php echo $key; ?>">
                        <div class="feat-icon">
                            <img class="img-fluid" src="<?php echo $feature['image']; ?>" alt="<?php echo $feature['title']; ?>">
                        </div>
                        <div class="feat-content">
                            <h3><?php echo $feature['title']; ?></h3>
                            <p><?php echo $feature['description']; ?></p>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>
</section>
<!-- Why Choose SoftExpert end -->