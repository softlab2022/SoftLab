<?php
/**
 * Template Name: Creat Account Page
 *
 */

get_header();

?>

    <section class="title-header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 m-auto">
                    <div class="header-content text-center">
                        <h2>Join Us</h2>
                        <p>We are a team of WordPress developers who love to build awesome products.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="creat-account">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 m-auto">
                    <div class="login-page">
                        <div class="form">
                            <form class="register-form">
                            <input type="text" placeholder="User Name"/>
                            <input type="password" placeholder="Password"/>
                            <input type="email" placeholder="Email Address"/>
                            <button>create</button>
                            <p class="message">Already registered? <a href="#">Sign In</a></p>
                            </form>
                            <form class="login-form">
                            <input type="text" placeholder="User Name"/>
                            <input type="password" placeholder="Password"/>
                            <button>login</button>
                            <p class="message">Not registered? <a href="#">Create an account</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <section id="tab">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 m-auto">
                    <div class="tabs">
                    
                        <input type="radio" id="tab1" name="tab-control" checked>
                        <input type="radio" id="tab2" name="tab-control">
                        <input type="radio" id="tab3" name="tab-control">  
                        <input type="radio" id="tab4" name="tab-control">
                        <input type="radio" id="tab5" name="tab-control">
                        <ul>
                            <li title="Integrate Google Drive"><label for="tab1" role="button"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/f-integrate-google-drive.png" alt="" class="img-fluid"><span>Integrate Google Drive</span></label></li>

                            <li title="Radio Player"><label for="tab2" role="button"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/footer-radio.png" alt="" class="img-fluid"><span>Radio Player</span></label></li>
                            
                            <li title="WP Radio"><label for="tab3" role="button"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/f-wp-radio.png" alt="" class="img-fluid"><span>WP Radio</span></label></li>  

                            <li title="Dracula Dark Mode"><label for="tab4" role="button"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula-icon.png" alt="" class="img-fluid"><span>Dracula Dark Mode</span></label></li>

                            <li title="Reader Mode"><label for="tab5" role="button"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/reader-mode.png" alt="" class="img-fluid"><span>Reader Mode</span></label></li>
                        </ul>
                    
                        <div class="slider"><div class="indicator"></div></div>
                        <div class="content">
                            <section>
                                <h2>Integrate Google Drive</h2>
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <img class="img-fluid w-75 w-md-100" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/hero-image.png" alt="Integrate Google Drive">
                                    </div>
                                    <div class="col-lg-6">
                                        <p>Integrate Google Drive is the most advanced plugin to access your important Google Drive files & folders directly on your WordPress website. Even if you have zero knowledge of coding, you are up to using the plugin without any difficulties or hassle. Browse, manage, embed, display, upload, download, search, play, and share almost everything to your WordPress website that you were doing inside of your Google Drive.</p>
                                    </div>
                                </div>
                                
                            </section>
                                
                            <section>
                                <h2>Radio Player</h2>
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <img class="img-fluid w-75 w-md-100" src="<?php echo get_template_directory_uri(); ?>/assets/images/radio-player/radio-img.png" alt="radio-img">
                                    </div>
                                    <div class="col-lg-6">
                                        <p>A simple, easy to use, user-friendly and fully customizable web radio player for WordPress. You can play any live mp3, Shoutcast, iceCast, and any audio stream in your WordPress website.</p>
                                    </div>
                                </div>
                            </section>
                                
                            <section>
                                <h2>WP Radio</h2>
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                    <img class="img-fluid w-75 w-md-100" src="<?php echo get_template_directory_uri(); ?>/assets/images/wp-radio/home/head.png" alt="head">
                                    </div>
                                    <div class="col-lg-6">
                                        <p>WP Radio is a worldwide online radio stations directory plugin for WordPress. You can easily create a full-featured online radio directory website with the WP Radio plugin.</p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2>Dracula Dark Mode</h2>
                                <div class="row align-items-center">
                                    
                                    <div class="col-lg-6">
                                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/hero-dark.png" class="dracula-hero-image img-fluid w-75 w-md-100 ">
                                    </div>
                                    <div class="col-lg-6">
                                        <p>Dark Mode helps to create a stunning eye-pleasing dark version for your WordPress website easily and effectively</p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2>Reader Mode</h2>
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <img class="img-fluid w-75 w-md-100" src="<?php echo get_template_directory_uri(); ?>/assets/images/reader-mode/home/features/reader-mode.png">
                                    </div>
                                    <div class="col-lg-6">
                                        <p>Reader Mode Plugin adds a distraction-free reading experience for your WordPress website by stripping away clutter and unnecessary elements from the article or post content. To achieve better readability, accessibility, and easy operations for your readers Reader Mode can be a handy choice.</p>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>


    <section id="magic-card">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 m-auto">
                    <div class="text-effect">
                        <h1 class="neon" data-text="Md Akash Ahmed" contenteditable>Md Akash Ahmed</h1>
                        <div class="gradient"></div>
                        <div class="spotlight"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="animation-button">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 m-auto">
                    <h1>Animation Buttons</h1>
                    <div class="frame">
                        <div class="row">
                            <div class="col-lg-2 m-auto">
                                <a class="custom-btn btn-1">Read More</a>
                            </div>
                            <div class="col-lg-2 m-auto">
                                <a class="custom-btn btn-2">Read More</a>
                            </div>
                            <div class="col-lg-2 m-auto">
                                <a class="custom-btn btn-3"><span>Read More</span></a>
                            </div>
                            <div class="col-lg-2 m-auto">
                                <a class="custom-btn btn-4"><span>Read More</span></a>
                            </div>
                            <div class="col-lg-2 m-auto">
                                <a class="custom-btn btn-5"><span>Read More</span></a>
                            </div>
                            <div class="col-lg-2 m-auto">
                                <a class="custom-btn btn-6">Read More</a>
                            </div>
                            <div class="col-lg-2">
                                <a class="custom-btn btn-7">Read More</a>
                            </div>
                            <div class="col-lg-2">
                                <a class="custom-btn btn-8">Read More</a>
                            </div>
                            <div class="col-lg-2">
                                <a class="custom-btn btn-9">Read More</a>
                            </div>
                            <div class="col-lg-2">
                                <a class="custom-btn btn-10">Read More</a>
                            </div>
                            <div class="col-lg-2">
                                <a class="custom-btn btn-11">Read More</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="our-team">
        <div class="container">

            <div class="row">
                <div class="col-lg-8 m-auto">
                    <div class="section-head text-center">
                        <h1>Meet With Our Creative Team</h1>
                        <p>We are a team of WordPress developers who love to build awesome products.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="our-team">
                        <div class="picture">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/home/team/israil.png" alt="" class="img-fluid ">
                        </div>
                        <div class="team-content">
                        <h3 class="name">Israil Ahmed</h3>
                        <h4 class="title">CEO & Founder</h4>
                        </div>
                        <ul class="social">
                            <li><a href="#"  aria-hidden="true"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"  aria-hidden="true"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"  aria-hidden="true"><i class="fa-brands fa-instagram"></i></i></a></li>
                            <li><a href="#"  aria-hidden="true"><i class="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="our-team">
                        <div class="picture">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/home/team/akash.png" alt="" class="img-fluid ">
                        </div>
                        <div class="team-content">
                        <h3 class="name">Akash Ahmed</h3>
                        <h4 class="title">Frontend Developer</h4>
                        </div>
                        <ul class="social">
                            <li><a href="#"  aria-hidden="true"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"  aria-hidden="true"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"  aria-hidden="true"><i class="fa-brands fa-instagram"></i></i></a></li>
                            <li><a href="#"  aria-hidden="true"><i class="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="our-team">
                        <div class="picture">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/home/team/naziur.png" alt="" class="img-fluid ">

                        </div>
                        <div class="team-content">
                            <h3 class="name">Naziur Rahaman</h3>
                            <h4 class="title">Digital Marketing</h4>
                        </div>
                        <ul class="social">
                            <li><a href="#"  aria-hidden="true"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"  aria-hidden="true"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"  aria-hidden="true"><i class="fa-brands fa-instagram"></i></i></a></li>
                            <li><a href="#"  aria-hidden="true"><i class="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="our-team">
                        <div class="picture">
                        <img class="img-fluid" src="https://picsum.photos/130/130?image=836">
                        <!-- <img src="<?php echo get_template_directory_uri(); ?>/assets/images/home/team/ashik.png" alt="" class="img-fluid "> -->

                        </div>
                        <div class="team-content">
                        <h3 class="name">Ashikur Rahaman</h3>
                        <h4 class="title">UI & UX Designer</h4>
                        </div>
                        <ul class="social">
                            <li><a href="#"  aria-hidden="true"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"  aria-hidden="true"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"  aria-hidden="true"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"  aria-hidden="true"><i class="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    </section>
    
    <section class="video-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 m-auto">
                    <div class="search">
                        <input type="text" class="input" placeholder="Search...">
                        <button class="search-btn">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <div class="video-play-btn ripple">
                        <a href="#" class="play-btn"> <i class="fa fa-play"></i></a>
                    </div>
                </div>
            </div>
        </div>
            
    </section>

    <section id="testmonial-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 m-auto">
                    <div class="testmonial-container">
                        <div class="progress-bar"></div>
                        <div class="fas fa-quote-right fa-quote"></div>
                        <div class="fas fa-quote-left fa-quote"></div>
                        <h5 class="test-title">Works nicely</h5>
                        <p class="testmonial-content">
                            We’ve been using a fairly expensive file sharing service for our website members and looking for an alternative. Integrate Google drive was easy to setup and keeps everything on our site. I had to contact support, they were responsive and addressed my concerns.
                        </p>
                        <div class="user">
                            <img class="img-fluid user-image" src="https://picsum.photos/130/130?image=836">
                            <div class="user-details">
                                <h4 class="username">brianray</h4>
                                <p class="role">marketing</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

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


<section id="cuont">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 m-auto">
                
                        <div class="CountDown-box">
                            <!-- <h1> CountDown To Birthday <i class="fas fa-leaf"></i></h1> -->
                            <div class="countDown-number">
                                <div class="counDown-day Neumorphism">
                                    <span id="days"></span>
                                    Day
                                    <div class="progress" id="day_progress"></div>
                                </div>
                                <div class="counDown-hour Neumorphism">
                                    <span id="hours"></span>
                                    Hour
                                    <div class="progress" id="hour_progress"></div>
                                </div>
                                <div class="counDown-minutes Neumorphism">
                                    <span id="minutes"></span>
                                    Min
                                    <div class="progress" id="minute_progress"></div>
                                </div>
                                <div class="counDown-minutes Neumorphism">
                                    <span id="seconds"></span>
                                    Sec
                                    <div class="progress" id="second_progress"></div>
                                </div>
                            </div>
                        </div>
                    
            </div>
        </div>
    </div>
</section>
        

<!-- <section id="slide">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="video-container" id="video-container">
                    <div class="playback-animation" id="playback-animation">
                        <svg class="playback-icons">
                        <use class="hidden" href="#play-icon"></use>
                        <use href="#pause"></use>
                        </svg>
                    </div>

                    <video controls class="video" id="video" preload="metadata">
                        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"></source>
                    </video>

                    <div class="video-controls hidden" id="video-controls">
                        <div class="video-progress">
                        <progress id="progress-bar" value="0" min="0"></progress>
                        <input class="seek" id="seek" value="0" min="0" type="range" step="1">
                        <div class="seek-tooltip" id="seek-tooltip">00:00</div>
                        </div>

                        <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play (k)" id="play">
                            <svg class="playback-icons">
                                <use href="#play-icon"></use>
                                <use class="hidden" href="#pause"></use>
                            </svg>
                            </button>

                            <div class="volume-controls">
                            <button data-title="Mute (m)" class="volume-button" id="volume-button">
                                <svg>
                                <use class="hidden" href="#volume-mute"></use>
                                <use class="hidden" href="#volume-low"></use>
                                <use href="#volume-high"></use>
                                </svg>
                            </button>

                            <input class="volume" id="volume" value="1"
                            data-mute="0.5" type="range" max="1" min="0" step="0.01">
                            </div>

                            <div class="time">
                            <time id="time-elapsed">00:00</time>
                            <span> / </span>
                            <time id="duration">00:00</time>
                            </div>
                        </div>

                        <div class="right-controls">
                            <button data-title="PIP (p)" class="pip-button" id="pip-button">
                            <svg>
                                <use href="#pip"></use>
                            </svg>
                            </button>
                            <button data-title="Full screen (f)" class="fullscreen-button" id="fullscreen-button">
                            <svg>
                                <use href="#fullscreen"></use>
                                <use href="#fullscreen-exit" class="hidden"></use>
                            </svg>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> -->


<section id="audi">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="glow">
                    
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="screen">
                    <div class="screen__content">
                        <form class="login">
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="text" class="login__input" required="" placeholder="User name / Email">
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input type="password" class="login__input" required="" placeholder="Password">
                            </div>
                            <button class="button login__submit">
                                <span class="button__text">Log In Now</span>
                                <i class="button__icon fas fa-chevron-right"></i>
                            </button>				
                        </form>
                        <div class="social-login">
                            <h3>log in via</h3>
                            <div class="social-icons">
                                <a href="#" class="social-login__icon fab fa-instagram"></a>
                                <a href="#" class="social-login__icon fab fa-facebook"></a>
                                <a href="#" class="social-login__icon fab fa-twitter"></a>
                            </div>
                        </div>
                    </div>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>		
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>		
                </div>
            </div>

            <div class="col-lg-6 m-auto">
                <div class="chekbox1 text-center">
                    <input type="checkbox" id="s5" />
                    <label class="slider-v3" for="s5"></label>
                    
                    <input type="checkbox" id="s6" checked="" />
                    <label class="slider-v3" for="s6"></label>
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


    <!-- <section id="animate-nav">
        <div class="container">
            
            <div class="row">
                <div class="col-lg-9 m-auto">
                    <div class="accordion"> 
    
                        <a href="#" class="accordion-toggle">Hover for height animate</a>
                        <div class="accordion-content">
                            <div class="accordion-inner"> 
                                <p>For animate the "height" of element with CSS Transitions you need use "max-height".</p>
                                <p>If use the "height: auto", the effect not works. Is necessary some value for the CSS create a CSS animate, and you can use "max-height" with a great value for emulate this effect.</p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    
                    <div class="loader loader--style6" title="5">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                            <rect x="0" y="13" width="4" height="5" fill="#333">
                            <animate attributeName="height" attributeType="XML"
                                values="5;21;5" 
                                begin="0s" dur="0.6s" repeatCount="indefinite" />
                            <animate attributeName="y" attributeType="XML"
                                values="13; 5; 13"
                                begin="0s" dur="0.6s" repeatCount="indefinite" />
                            </rect>
                            <rect x="10" y="13" width="4" height="5" fill="#333">
                            <animate attributeName="height" attributeType="XML"
                                values="5;21;5" 
                                begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                            <animate attributeName="y" attributeType="XML"
                                values="13; 5; 13"
                                begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                            </rect>
                            <rect x="20" y="13" width="4" height="5" fill="#333">
                            <animate attributeName="height" attributeType="XML"
                                values="5;21;5" 
                                begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                            <animate attributeName="y" attributeType="XML"
                                values="13; 5; 13"
                                begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                            </rect>
                        </svg>
                    </div>

                </div>
            

               <div class="row">
                <div class="col-lg-6 m-auto">
                    <div class="filters">
                        <div id="containers">
                            <span id="text1"></span>
                            <span id="text2"></span>
                        </div>
                    </div>
                </div>-->
                <!-- <div class="col-lg-6 m-auto">
                    <div id="dark-light-container">
                        <div class="black-container">
                            <button class="button animated" data-filter-color="#00a1ff57"><span>🐭 Mouse Over</span></button>
                        </div>
                        <a href="/products">
                            <button class="button animated" data-filter-color="#00a1ff57"><span>View Products</span></button>
                        </a>
                    </div>
                </div>
            </div> 

        </div>


    </section> -->


<?php
get_footer();




