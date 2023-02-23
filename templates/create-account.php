<?php
/**
 * Template Name: Creat Account Page
 *
 */

get_header();

?>


    <section class="team-section section-padding">

        <div class="container">
            <div class="row">

                <div class="col-lg-4">
                    <div class="sec-title-wrapper">
                        <div class="section-title text-center text-lg-left no-bg">
                            <div class="sub-title">
                                <span>team</span>
                            </div>
                            <h1>Meet with our creative team</h1>
                            <p>We are a team of WordPress developers who love to build awesome products.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-team-member">
                        <div class="member-img bg-cover"
                            style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/images/home/team/israil.png')"></div>
                        <div class="member-info">
                            <h3>Israil Ahmed</h3>
                            <div class="position">
                                <h5>CEO & Founder</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-team-member">
                        <div class="member-img bg-cover"
                            style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/images/home/team/akash.png')"></div>
                        <div class="member-info">
                            <h3>Akash Ahmed</h3>
                            <div class="position">
                                <h5>Frontend Developer</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="col-lg-4 col-md-6">
                    <div class="single-team-member">
                        <div class="member-img bg-cover"
                            style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/images/home/team/ashik.png')"></div>
                        <div class="member-info">
                            <h3>Ashikur Rahaman</h3>
                            <div class="position">
                                <h5>Lead Product Designer</h5>
                            </div>
                        </div>
                    </div>
                </div> -->

                <div class="col-lg-4 col-md-6">
                    <div class="single-team-member">
                        <div class="member-img bg-cover"
                            style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/images/home/team/naziur.png')"></div>
                        <div class="member-info">
                            <h3>Naziur Rahaman</h3>
                            <div class="position">
                                <h5>Digital Marketing</h5>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-lg-4">
                    <div class=" team-butt d-flex justify-content-center align-items-center">
                        <a href="/create-account/" class="btn">Join with us</a>
                    </div>
                </div>

            </div>
        </div>
    </section>


<!---==== new pricing area ====---->
<?php

    $free_features = [
        'Embed Documents Module',
        'Download Links Module',
        'View Links Module',
        'Shortcode Builder',
        'Inline Preview',
        'Classic Editor Integrations',
        'Gutenberg Integrations',
        'Elementor Integrations',
        'Link Own Google App',
        'Full-Text Search',
        'Zip Download',
        'On Demand Assets Loading',
        'Responsive Design',
        'Multi-Language Support',
        'Share Files',
        'Custom CSS',
        'Export/ Import Data',
        'File Browser Preloader - 2 FREE',
        'Rename, Move, Copy Files & Folders',
        'Exclude Files by Names & Extensions',
        'Multiple File Download',
        'Allow others to use plugin by user roles',
        'Direct File View Link for All Users & Admins',
    ];

    $pro_features = [
        'All Free Features',
        'File Browser Module',
        'File Uploader Module',
        'Photo Gallery Module',
        'Media Player Module',
        'File Search Module',
        'Add Multiple Google Drive Accounts',
        'WooCommerce Integration',
        'Easy Digital Downloads Integration',
        'Gravity Forms Integrations',
        'Fluent Forms Integrations',
        'Formidable Forms Integrations',
        'Contact Form 7 Integrations',
        'WP Forms Integrations',
        'Ninja Forms Integrations',
        'User Private Files',
        'Automatic Private Folders',
        'Statistics & Email Report',
        'Email Notifications',
        '18+ File Browser Preloaders',
        'Appearance Color Customizations',
        'Gallery Lightbox Preview',
        'Module Size Customization',
        'Auto Synchronize Cloud Files',
    ];

?>

<section class="pricing-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 m-auto">
                    <div class="sec-title text-center">
                        <h2>Simple Pricing, Unbeatable Value</h2>
                        <span class="title">Join 20000+ User's Happy Community</span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="pricing-switcher">
                        <span class="switch-text annual">Annual</span>
                        <span class="switch"></span>
                        <span class="switch-text lifetime">Lifetime</span>
                    </div>
                </div>
            </div>
            <div class="outer-box">
                <div class="row">
                    <!-- Pricing Block -->
                    <div class="pricing-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box">

                            <div class="icon-box">
                                <div class="icon-outer">
                                    <!-- <i class="fas fa-paper-plane"> </i> -->
                                    <img class="img-fluid img" src="<?php echo get_template_directory_uri(); ?>/assets/images/home/products/integrate-google-drive-icon.png" alt="Integrate Google Drive">
                                </div>
                            </div>

                            <div class="price-box">
                                <div class="title"> Pro </div>
                                <div class="sub-title"> Most Popular Package </div>
                                    <div class="site">
                                        <div class="dropdown license-dropdown">
                                            <button class="btn-pr dropdown-toggle" type="button" id="license-dropdown"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                Single Site License
                                            </button>

                                            <ul class="dropdown-menu" aria-labelledby="license-dropdown">
                                                <li>
                                                    <a class="dropdown-item active" href="#" data-license="1">Single Site
                                                        License</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#" data-license="5">5 Sites License</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#" data-license="100">100 Sites License</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="price-text annual license-1">

                                        <div class="offer-price annual single">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$58 </p>
                                                <span class="price-dis">50%OFF</span>
                                            </div>
                                            
                                        </div>
                                        <div class="offer-price annual five">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$178 </p>
                                                <span class="price-dis">50%OFF</span>
                                            </div>
                                            
                                        </div>
                                        <div class="offer-price annual hundred">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$398 </p>
                                                <span class="price-dis">50%OFF</span>
                                            </div>
                                            
                                        </div>

                                        <span class="price-value annual single">29</span>
                                        <span class="price-value annual five">89</span>
                                        <span class="price-value annual hundred">199</span>

                                        <div class="offer-price lifetime single">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$158 </p>
                                                <span class="price-dis">50%OFF</span>
                                            </div>
                                            
                                        </div>
                                        <div class="offer-price lifetime five">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$398 </p>
                                                <span class="price-dis">50%OFF</span>
                                            </div>
                                            
                                        </div>
                                        <div class="offer-price lifetime hundred">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$998 </p>
                                                <span class="price-dis">50%OFF</span>
                                            </div>
                                            
                                        </div>

                                        <span class="price-value lifetime single">79</span>
                                        <span class="price-value lifetime five">199</span>
                                        <span class="price-value lifetime hundred">499</span>

                                        <span class="price-suffix annual">/ Per year</span>
                                        <span class="price-suffix lifetime">/ Billed once</span>
                                    </div>

                                    <span class="support-text">Priority Email Support</span>
                            </div>

                            <ul class="features">
                                <?php foreach ( $pro_features as $feature ) { ?>
                                        <li class="true"><?php echo $feature; ?></li>
						        <?php } ?>
                                <!-- <li class="true">Conference plans</li>
                                <li class="true">Free Lunch And Coffee</li>
                                <li class="true">Certificate</li>
                                <li class="false">Easy Access</li>
                                <li class="false">Free Contacts</li> -->
                            </ul>

                            <div class="btn-box">
                                <a href="#" class="theme-btn">BUY Now</a>
                            </div>

                        </div>
                    </div>

                    <!-- Pricing Block -->
                    <div class="pricing-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box">

                            <div class="icon-box">
                                <div class="icon-outer">
                                    <!-- <i class="fas fa-gem"></i> -->
                                    <img class="img-fluid img" src="<?php echo get_template_directory_uri(); ?>/assets/images/home/products/wp-radio-icon.png" alt="WP Radio">
                                </div>
                            </div>

                            <div class="price-box">
                                <div class="title">Pro</div>
                                <div class="sub-title"> Most Popular Package </div>
                                    <div class="site">
                                        <div class="dropdown license-dropdown">
                                            <button class="btn-pr dropdown-toggle" type="button" id="license-dropdown"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                Single Site License
                                            </button>

                                            <ul class="dropdown-menu" aria-labelledby="license-dropdown">
                                                <li>
                                                    <a class="dropdown-item active" href="#" data-license="1">Single Site
                                                        License</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#" data-license="5">5 Sites License</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#" data-license="100">100 Sites License</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="price-text annual license-1">

                                        <div class="offer-price annual single">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$58 </p>
                                                <span class="price-dis">50%OFF</span>
                                            </div>
                                            
                                        </div>
                                        <div class="offer-price annual five">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$178 </p>
                                                <span class="price-dis">50%OFF</span>
                                            </div>
                                            
                                        </div>
                                        <div class="offer-price annual hundred">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$398 </p>
                                                <span class="price-dis">50%OFF</span>
                                            </div>
                                            
                                        </div>

                                        <span class="price-value annual single">29</span>
                                        <span class="price-value annual five">89</span>
                                        <span class="price-value annual hundred">199</span>

                                        <div class="offer-price lifetime single">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$158 </p>
                                                <span class="price-dis">50%OFF</span>
                                            </div>
                                            
                                        </div>
                                        <div class="offer-price lifetime five">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$398 </p>
                                                <span class="price-dis">50%OFF</span>
                                            </div>
                                            
                                        </div>
                                        <div class="offer-price lifetime hundred">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$998 </p>
                                                <span class="price-dis">50%OFF</span>
                                            </div>
                                            
                                        </div>

                                        <span class="price-value lifetime single">79</span>
                                        <span class="price-value lifetime five">199</span>
                                        <span class="price-value lifetime hundred">499</span>

                                        <span class="price-suffix annual">/ Per year</span>
                                        <span class="price-suffix lifetime">/ Billed once</span>
                                    </div>

                                    <span class="support-text">Priority Email Support</span>
                            </div>

                            <ul class="features">
                                <?php foreach ( $pro_features as $feature ) { ?>
                                        <li class="true"><?php echo $feature; ?></li>
						        <?php } ?>
                                <!-- <li class="true">Conference plans</li>
                                <li class="true">Free Lunch And Coffee</li>
                                <li class="true">Certificate</li>
                                <li class="true">Easy Access</li>
                                <li class="false">Free Contacts</li> -->
                            </ul>

                            <div class="btn-box">
                                <a href="#" class="theme-btn">BUY Now</a>
                            </div>

                        </div>
                    </div>

                    <!-- Pricing Block -->
                    <div class="pricing-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box">

                            <div class="icon-box">
                                <div class="icon-outer">
                                    <!-- <i class="fas fa-rocket"></i> -->
                                    <img class="img-fluid img" src="<?php echo get_template_directory_uri(); ?>/assets/images/home/products/dracula-icon.png" alt="Dracula Drak Mode">
                                </div>
                            </div>

                            <div class="price-box">
                                <div class="title">Pro</div>
                                <div class="sub-title"> Most Popular Package </div>
                                    <div class="site">
                                        <div class="dropdown license-dropdown">
                                            <button class="btn-pr dropdown-toggle" type="button" id="license-dropdown"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                Single Site License
                                            </button>

                                            <ul class="dropdown-menu" aria-labelledby="license-dropdown">
                                                <li>
                                                    <a class="dropdown-item active" href="#" data-license="1">Single Site
                                                        License</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#" data-license="5">5 Sites License</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#" data-license="100">100 Sites License</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="price-text annual license-1">

                                        <div class="offer-price annual single">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$58 </p>
                                                <span class="price-dis">50%OFF</span>
                                            </div>
                                            
                                        </div>
                                        <div class="offer-price annual five">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$178 </p>
                                                <span class="price-dis">50%OFF</span>
                                            </div>
                                            
                                        </div>
                                        <div class="offer-price annual hundred">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$398 </p>
                                                <span class="price-dis">50%OFF</span>
                                            </div>
                                            
                                        </div>

                                        <span class="price-value annual single">29</span>
                                        <span class="price-value annual five">89</span>
                                        <span class="price-value annual hundred">199</span>

                                        <div class="offer-price lifetime single">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$158 </p>
                                                <span class="price-dis">50%OFF</span>
                                            </div>
                                            
                                        </div>
                                        <div class="offer-price lifetime five">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$398 </p>
                                                <span class="price-dis">50%OFF</span>
                                            </div>
                                            
                                        </div>
                                        <div class="offer-price lifetime hundred">
                                            <div class="price-offer d-flex justify-content-center align-items-center">
                                                <p class="price-off">$998 </p>
                                                <span class="price-dis">50%OFF</span>
                                            </div>
                                            
                                        </div>

                                        <span class="price-value lifetime single">79</span>
                                        <span class="price-value lifetime five">199</span>
                                        <span class="price-value lifetime hundred">499</span>

                                        <span class="price-suffix annual">/ Per year</span>
                                        <span class="price-suffix lifetime">/ Billed once</span>
                                    </div>

                                    <span class="support-text">Priority Email Support</span>
                            </div>

                            <ul class="features">
                                <?php foreach ( $pro_features as $feature ) { ?>
                                    <li class="true"><?php echo $feature; ?></li>
						        <?php } ?>
                                <!-- <li class="true">Conference plans</li>
                                <li class="true">Free Lunch And Coffee</li>
                                <li class="true">Certificate</li>
                                <li class="true">Easy Access</li>
                                <li class="true">Free Contacts</li> -->
                            </ul>

                            <div class="btn-box">
                                <a href="#" class="theme-btn">BUY Now</a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
</section>


<?php
get_footer();




