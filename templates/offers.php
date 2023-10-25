<?php

/**
 * Template Name: Halloween Offers page
 *
 */

get_header();


?>

    <section class="halloween-offers" id="halloween-offers">
        <div class="container">

            <div class="row">
                <div class="col-lg-8 col-md-7 m-auto">
                    <div class="halloween-sec text-center">
                        <img class="img-fluid"
                             src="<?php echo get_template_directory_uri(); ?>/assets/images/halloween-img.png"/>
                    </div>
                    <div class="col-lg-6 m-auto">
                        <!-- Banner Countdown -->
                        <div class="banner-countdown">
                            <div class="timer"></div>
                            <div class="timer-labels">
                                <span>Days</span>
                                <span>Hours</span>
                                <span>Mins</span>
                                <span>Secs</span>
                            </div>
                        </div>
                        <div class="promo-code-sec text-center">
                            <span class="sub-text">Use the Promo Code</span>
                            <span class="promo-text">HALLOWEEN2023</span>
                            <img class="img-fluid kc"
                                 src="<?php echo get_template_directory_uri(); ?>/assets/images/kc.png"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section id="halloween-offers-main">
        <div class="container">
            <div class="row">

                <div class="col-lg-4 col-md-6 m-auto ">
                    <div class="offer-item">
                        <div class="offer-icon">
                            <img class="img-fluid"
                                 src="<?php echo get_template_directory_uri(); ?>/assets/images/home/products/integrate-google-drive-icon.png"
                                 alt="integrate-google-drive-icon">
                        </div>
                        <div class="offer-off">
                            <span>Up to</span>
                            <p>85%</p>
                            <span>off</span>
                        </div>
                        <div class="offer-content">
                            <h5>Integrate Google Drive</h5>
                            <p>Browse, Upload, Download, Embed, Play, Share, Gallery, and Manage Your Google Drive Files
                                Into Your WordPress Site</p>
                        </div>
                        <div class="offer-price">
                            <p>Starting Form</p>
                            <h6>29.00</h6>
                        </div>
                        <div class="offer-button">
                            <a href="/integrate-google-drive-pricing">
                                Get Now
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 m-auto ">
                    <div class="offer-item offer-item-radio-player">
                        <div class="offer-icon">
                            <img class="img-fluid"
                                 src="<?php echo get_template_directory_uri(); ?>/assets/images/home/products/radio-icon.png"
                                 alt="radio-icon">
                        </div>
                        <div class="offer-off">
                            <span>Up to</span>
                            <p>85%</p>
                            <span>off</span>
                        </div>
                        <div class="offer-content">
                            <h5>Radio Player</h5>
                            <p>A simple, easy to use, user-friendly and fully customizable web radio player for
                                WordPress. </p>
                        </div>
                        <div class="offer-price">
                            <p>Starting Form</p>
                            <h6>29.00</h6>
                        </div>
                        <div class="offer-button">
                            <a href="/radio-player-pricing">
                                Get Now
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 me-auto ">
                    <div class="offer-item offer-item-dark-mode">
                        <div class="offer-icon">
                            <img class="img-fluid"
                                 src="<?php echo get_template_directory_uri(); ?>/assets/images/home/products/dracula-icon.png"
                                 alt="dracula-icon">
                        </div>
                        <div class="offer-off">
                            <span>Up to</span>
                            <p>85%</p>
                            <span>off</span>
                        </div>
                        <div class="offer-content">
                            <h5>Dracula Dark Mode</h5>
                            <p>Dracula Dark Mode helps to create a stunning eye-pleasing dark for your WordPress
                                website </p>
                        </div>
                        <div class="offer-price">
                            <p>Starting Form</p>
                            <h6>15.00</h6>
                        </div>
                        <div class="offer-button">
                            <a href="/dracula-dark-mode-pricing">
                                Get Now
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

<?php
get_footer();
