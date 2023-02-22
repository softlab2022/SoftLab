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


    <section class="pricing-section">
        <div class="container">
            <div class="sec-title text-center">
                <span class="title">Get plan</span>
                <h2>Choose a Plan</h2>
            </div>

            <div class="outer-box">
                <div class="row">
                    <!-- Pricing Block -->
                    <div class="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div class="inner-box">
                            <div class="icon-box">
                                <div class="icon-outer"><i class="fas fa-paper-plane"></i></div>
                            </div>
                            <div class="price-box">
                                <div class="title"> Day Pass</div>
                                <h4 class="price">$35.99</h4>
                            </div>
                            <ul class="features">
                                <li class="true">Conference plans</li>
                                <li class="true">Free Lunch And Coffee</li>
                                <li class="true">Certificate</li>
                                <li class="false">Easy Access</li>
                                <li class="false">Free Contacts</li>
                            </ul>
                            <div class="btn-box">
                                <a href="#" class="theme-btn">BUY plan</a>
                            </div>
                        </div>
                    </div>

                    <!-- Pricing Block -->
                    <div class="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                        <div class="inner-box">
                            <div class="icon-box">
                                <div class="icon-outer"><i class="fas fa-gem"></i></div>
                            </div>
                            <div class="price-box">
                                <div class="title">Full Pass</div>
                                <h4 class="price">$99.99</h4>
                            </div>
                            <ul class="features">
                                <li class="true">Conference plans</li>
                                <li class="true">Free Lunch And Coffee</li>
                                <li class="true">Certificate</li>
                                <li class="true">Easy Access</li>
                                <li class="false">Free Contacts</li>
                            </ul>
                            <div class="btn-box">
                                <a href="https://codepen.io/anupkumar92" class="theme-btn">BUY plan</a>
                            </div>
                        </div>
                    </div>

                    <!-- Pricing Block -->
                    <div class="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                        <div class="inner-box">
                            <div class="icon-box">
                                <div class="icon-outer"><i class="fas fa-rocket"></i></div>
                            </div>
                            <div class="price-box">
                                <div class="title">Group Pass</div>
                                <h4 class="price">$199.99</h4>
                            </div>
                            <ul class="features">
                                <li class="true">Conference plans</li>
                                <li class="true">Free Lunch And Coffee</li>
                                <li class="true">Certificate</li>
                                <li class="true">Easy Access</li>
                                <li class="true">Free Contacts</li>
                            </ul>
                            <div class="btn-box">
                                <a href="https://codepen.io/anupkumar92" class="theme-btn">BUY plan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



<?php
get_footer();




