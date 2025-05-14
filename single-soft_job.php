<?php

/**
 * The Template for displaying all soft custom single posts.
 *
 */


get_header();
$softlab_custom_post_meta_fields = get_post_meta(get_the_ID(), 'softlab_custom_post_meta_fields', true) ?: [];
?>


<section class="job-header">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 m-auto">
                <div class="job-title text-center">
                    <h1 class="">We are Looking for <?php the_title(); ?></h1>
                </div>

            </div>
        </div>

    </div>
</section>
<section class="job-header-details-main">
    <div class="container header-details-main">
        <div class="row">
            <div class="col-lg-12 m-auto">
                <div class="job-details-head">
                    <div class="title-details">
                        <div class="details-image">
                            <?php
                            // Access the first element of the array
                            $custom_fields = $softlab_custom_post_meta_fields[0] ?? null;

                            if (!empty($custom_fields['image'])): ?>
                                <img class="img-fluid" src="<?php echo esc_url($custom_fields['image']); ?>" alt="Job Image">
                            <?php else: ?>
                                <img class="img-fluid" src="path/to/default-image.jpg" alt="Default Image">
                                <!-- Replace 'path/to/default-image.jpg' with a real fallback image URL -->
                            <?php endif; ?>
                        </div>
                        <div class="job-title">
                            <h4><?php the_title(); ?></h4>
                            <span>
                                <?php

                                if (!empty($custom_fields['title'])) {
                                    echo esc_html($custom_fields['title']);
                                } else {
                                    echo 'Full Time';
                                }
                                ?>
                            </span>

                        </div>
                    </div>
                    <div class="job-details-head-button">
                        <a href="#apply-now-section">Apply now</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-4">
                <div class="our-team-image">

                    <?php
                    $image_url = get_post_meta(get_the_ID(), 'softlab_image_about_image', true);

                    if (!empty($image_url)) {
                        echo '<img src="' . esc_url($image_url) . '" alt="Uploaded Image" style="max-width:100%; height:auto;">';
                    } else {
                        echo '<img src="' . get_template_directory_uri() . '/assets/images/career-page/career-single-page/image.png" class="img-fluid" alt="Default Image">';
                    }
                    ?>
                </div>
            </div>
            <div class="col-lg-8 col-md-8">
                <div class="our-team-content">
                    <h3 class="">Join Our Team as a Talented <?php the_title(); ?></h3>
                    <p>
                        <?php
                        $our_team_description = get_post_meta(get_the_ID(), 'softlab_custom_post_meta_field_our_team_description', true);
                        if (!empty($our_team_description)) {
                            echo nl2br(esc_html($our_team_description)); // Convert newlines to <br> tags for better display
                        } else {
                            echo 'We are seeking a talented and experienced WordPress Developer to join our dynamic team. As a WordPress Developer, you will be responsible for creating, designing, and maintaining websites and applications using WordPress. 

                            You will work closely with our design and content teams to ensure that our websites are visually appealing, user-friendly, and optimized for performance.

                            If you are passionate about WordPress development and eager to contribute to exciting projects, we would love to hear from you. Apply now and join our team!';
                        }
                        ?>
                    </p>
                </div>
            </div>
        </div>

    </div>
</section>

<section class="our-team-about">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-8">
                <!-- About Us -->
                <div class="about-us-main">
                    <h3>
                        <?php
                        $our_team_title = get_post_meta(get_the_ID(), 'softlab_custom_post_meta_field_our_team_about_title', true);
                        if (!empty($our_team_title)) {
                            echo nl2br(esc_html($our_team_title)); // Convert newlines to <br> tags for better display
                        } else {
                            echo 'About Us';
                        }
                        ?>
                    </h3>
                    <p>
                        <?php
                        $our_team_description = get_post_meta(get_the_ID(), 'softlab_custom_post_meta_field_our_team_about_description', true);
                        if (!empty($our_team_description)) {
                            echo nl2br(esc_html($our_team_description)); // Convert newlines to <br> tags for better display
                        } else {
                            echo 'SoftLab is a leading-edge software company specializing in innovative WordPress Plugins and SaaS products that empower businesses to thrive worldwide. Our focus is on efficiency, scalability, and creating meaningful impact for our clients. We proudly serve 100,000+ customers across 160+ countries, helping businesses achieve their goals with our solutions.

                                At SoftLab learning and growth are at the heart of everything we do. With a strong focus on quality assurance, we leverage cutting-edge tools, automation, and rigorous testing methodologies to ensure our solutions meet the highest standards. If you’re passionate about delivering seamless user experiences, streamlining processes through automation, and solving challenges with precision, we’d love to welcome you to the SoftLab family!';
                        }
                        ?>

                    </p>
                </div>
                <!-- Job Responsibility -->
                <div class="about-us-main">
                    <h3>
                        <?php
                        $our_team_description = get_post_meta(get_the_ID(), 'softlab_custom_job_responsibility_title', true);
                        if (!empty($our_team_description)) {
                            echo nl2br(esc_html($our_team_description)); // Convert newlines to <br> tags for better display
                        } else {
                            echo 'Job Responsibility';
                        }
                        ?>
                    </h3>


                    <?php
                    $our_team_description = get_post_meta(get_the_ID(), 'softlab_custom_job_responsibility_description', true);

                    if (!empty($our_team_description)) {
                        // Display each line as a list item
                        echo '<ul>';
                        foreach (explode("\n", $our_team_description) as $line) {
                            echo '<li>' . esc_html($line) . '</li>';
                        }
                        echo '</ul>';
                    } else {
                        echo '<ul>
                        <li>Create and Maintain Test Plans, Test Cases, and Test Metrics in TDD and BDD approaches.</li>
                        <li>Strong knowledge of JavaScript, and version control like GitHub, and GitLab.</li>
                        <li>Proficiency in working with one or more test automation frameworks: Playwright, Selenium, Cucumber, Appium, and relevant JavaScript test frameworks such as CodeceptJS, CyPress, and Jest.</li>
                        <li>Knowledge of building automation from scratch using any one of the helpers such as Webdriver, Puppeteer.</li>
                        <li>Understanding of test Methodologies (regression, functional, unit, integration, code coverage, API, etc.).</li>
                        <li>Ability to learn and explore technologies with minimal supervision.</li>
                        </ul>';
                    }
                    ?>

                </div>
                <!-- job Requirements -->
                <div class="about-us-main">
                    <h3>
                        <?php
                        $our_team_description = get_post_meta(get_the_ID(), 'softlab_custom_job_requirements_title', true);
                        if (!empty($our_team_description)) {
                            echo nl2br(esc_html($our_team_description)); // Convert newlines to <br> tags for better display
                        } else {
                            echo 'Requirements';
                        }
                        ?>
                    </h3>


                    <?php
                    $our_team_description = get_post_meta(get_the_ID(), 'softlab_custom_job_requirements_description', true);

                    if (!empty($our_team_description)) {
                        // Display each line as a list item
                        echo '<ul>';
                        foreach (explode("\n", $our_team_description) as $line) {
                            echo '<li>' . esc_html($line) . '</li>';
                        }
                        echo '</ul>';
                    } else {
                        echo '<ul>
                        <li>Proven Experience in understanding automation test frameworks for product features and API .</li>
                        <li>Experience on Playwright (we use it here), Selenium, CodeceptJS, Cypress, Appium</li>
                        <li>Ability to write Playwright scripts for web application testing.</li>
                        <li>Strong understanding of web technologies, including HTML, CSS, and JavaScript.</li>
                        <li>Knowledge of DOM (Document Object Model) manipulation for testing purposes.</li>
                        <li>Proficiency in programming languages commonly used with Playwright, such as JavaScript, and TypeScript.</li>
                        <li>Capability to write and maintain automated test scripts using these languages.</li>
                        <li>Proven experience of Web testing and API Testing</li>
                        <li>You must be familiar with WordPress and have experience in testing WordPress plugins.</li>
                        <li>Exposure to Git, CICD, Postman API Tools</li>
                        <li>Curiosity and desire to learn and grow skills. 📖</li>
                        <li>Sense of humor 😉</li>
                        <li>Hard worker and passionate – we are growing super FAST 🚀</li>
                        </ul>';
                    }
                    ?>

                </div>
                <!-- job Good to Have -->
                <div class="about-us-main">
                    <h3>
                        <?php
                        $our_team_description = get_post_meta(get_the_ID(), 'softlab_custom_job_good_have_title', true);
                        if (!empty($our_team_description)) {
                            echo nl2br(esc_html($our_team_description)); // Convert newlines to <br> tags for better display
                        } else {
                            echo 'Good to Have';
                        }
                        ?>
                    </h3>


                    <?php
                    $our_team_description = get_post_meta(get_the_ID(), 'softlab_custom_job_good_have_description', true);

                    if (!empty($our_team_description)) {
                        // Display each line as a list item
                        echo '<ul>';
                        foreach (explode("\n", $our_team_description) as $line) {
                            echo '<li>' . esc_html($line) . '</li>';
                        }
                        echo '</ul>';
                    } else {
                        echo '<ul>
                        <li>Experience in managing SaaS-Based products</li>
                        <li>Load test, Security test</li>
                        <li>Very good with testing-related concepts</li>
                        <li>Ability to document and troubleshoot errors</li>
                        <li>Excellent communication skills.</li>
                        <li>Analytical mind and problem-solving aptitude</li>
                        <li>Familiarity with Agile Methodology, Cucumber BDD.</li>
                        </ul>';
                    }
                    ?>

                </div>
                <!-- job Perks & Benefits -->
                <div class="about-us-main">
                    <h3>
                        <?php
                        $our_team_description = get_post_meta(get_the_ID(), 'softlab_custom_job_perks_benefits_title', true);
                        if (!empty($our_team_description)) {
                            echo nl2br(esc_html($our_team_description)); // Convert newlines to <br> tags for better display
                        } else {
                            echo 'Perks & Benefits 🎁';
                        }
                        ?>
                    </h3>


                    <?php
                    $our_team_description = get_post_meta(get_the_ID(), 'softlab_custom_job_perks_benefits_description', true);

                    if (!empty($our_team_description)) {
                        // Display each line as a list item
                        echo '<ul>';
                        foreach (explode("\n", $our_team_description) as $line) {
                            echo '<li>' . esc_html($line) . '</li>';
                        }
                        echo '</ul>';
                    } else {
                        echo '<ul>
                        <li>Work in a flat organization where your voice is always heard.</li>
                        <li>Provident fund & Gratuity.</li>
                        <li>Medical fund & having corporate deals with multiple hospitals.</li>
                        <li>Festival bonus: 2 (yearly)</li>
                        <li>Performance & Referral bonus.</li>
                        <li>Marriage bonus and leave.</li>
                        <li>Parental bonus and leave.</li>
                        <li>Casual, sick, annual & bereavement leave.</li>
                        <li>Yearly annual & family tour.</li>
                        <li>Quarterly team outings.</li>
                        <li>Carry forward leave.</li>
                        <li>Lunch facilities: Fully subsidized.</li>
                        <li>Unlimited tea, coffee, snacks and fruits.</li>
                        <li>Monthly Gym allowance.</li>
                        <li>Table Tennis.</li>
                        <li>Knowledge sharing session.</li>
                        <li>Training and learning materials to improve skills.</li>
                        <li>Last but not the least, WorldClass Work Environment. 😎</li>
                    
                        </ul>';
                    }
                    ?>

                </div>
                <!-- Our Statement -->
                <!-- <div class="about-us-main">
                    <h3>
                        <?php
                        // $our_team_title = get_post_meta(get_the_ID(), 'softlab_custom_post_meta_field_our_statement_title', true);
                        // if (!empty($our_team_title)) {
                        //     echo nl2br(esc_html($our_team_title)); // Convert newlines to <br> tags for better display
                        // } else {
                        //     echo 'Our Statement';
                        // }
                        ?>
                    </h3>
                    <p>
                        <?php
                        // $our_team_description = get_post_meta(get_the_ID(), 'softlab_custom_post_meta_field_our_statement_description', true);
                        // if (!empty($our_team_description)) {
                        //     echo nl2br(esc_html($our_team_description)); // Convert newlines to <br> tags for better display
                        // } else {
                        //     echo 'At SoftLab, we strive to create a workplace where happiness is not just a value but a way of life. Our mission is to foster an environment that empowers employees, encourages innovation, and celebrates individual contributions. We are deeply committed to being a company that people are proud to work for, offering a culture that values inclusivity, transparency, and mutual respect.

                        //     As champions of diversity, equity, and inclusion, we believe that everyone deserves an equal opportunity to thrive. SoftLab welcomes individuals from all backgrounds and walks of life, ensuring that our team reflects the diverse world we serve. 

                        //     Join us at SoftLab, where we combine purpose with passion to create not just a company, but a community driven by happiness, equality, and excellence.';
                        // }
                        ?>

                    </p>
                </div> -->
                <!-- Apply Now Area -->
                <div class="apply-now-button" id="apply-now-section">
                    <a href="javascript:void(0);" id="apply-now-btn">Apply now</a>
                </div>
                <div class="career-form" style="display: none;">
                    <h5>Submit Your Application</h5>
                    <?php
                    $custom_fields = $softlab_custom_post_meta_fields[0] ?? null;
                    if (!empty($custom_fields['shortcode'])) {
                        echo do_shortcode($custom_fields['shortcode']);
                    } else {
                        echo '<p>Form not found.</p>';
                    }
                    ?>
                </div>

                <script>
                    // Wait for the DOM to fully load
                    document.addEventListener("DOMContentLoaded", function() {
                        const applyNowBtn = document.getElementById("apply-now-btn");
                        const careerForm = document.querySelector(".career-form");

                        // Add click event listener
                        applyNowBtn.addEventListener("click", function() {
                            if (careerForm.style.display === "none") {
                                careerForm.style.display = "block"; // Show the form
                            } else {
                                careerForm.style.display = "none"; // Hide the form
                            }
                        });
                    });
                </script>

            </div>
            <div class="col-lg-4 col-md-4">
                <div class="sidebar-main">
                    <h5>Job Summary:</h5>

                    <div class="sidebar-item">
                        <!-- <i class="fa-solid fa-location-dot"></i> -->
                        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/career-page/career-single-page/carbon_location-filled.png" class=" img-fluid">
                        <div class="item-content">
                            <h6>Location</h6>
                            <span>Maktob More, Radhanagar, Pabna
                                6600, Bangladesh</span>
                        </div>
                    </div>

                    <div class="sidebar-item">
                        <!-- <i class="fa-solid fa-briefcase"></i> -->
                        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/career-page/career-single-page/job-type.svg" class=" img-fluid">
                        <div class="item-content">
                            <h6>Job Type</h6>
                            <span><?php

                                if (!empty($custom_fields['title'])) {
                                    echo esc_html($custom_fields['title']);
                                } else {
                                    echo 'Full Time';
                                }
                                ?></span>
                        </div>
                    </div>

                    <div class="sidebar-item">
                        <!-- <i class="fa-solid fa-calendar-days"></i> -->
                        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/career-page/career-single-page/application-deadline.png" class=" img-fluid">
                        <div class="item-content">
                            <?php
                            function display_deadline_date($post_id)
                            {
                                $deadline_date = get_post_meta($post_id, 'soft_job_expiration_date', true);
                                if ($deadline_date) {
                                    return date('F j, Y', strtotime($deadline_date));
                                }
                                return 'February 6, 2025';
                            }
                            ?>
                            <h6>Application Deadline</h6>
                            <span><?php echo display_deadline_date(get_the_ID()); ?></span>
                        </div>
                    </div>

                    <div class="sidebar-item">
                        <!-- <i class="fa-solid fa-calendar-days"></i> -->
                        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/career-page/career-single-page/lets-icons_date-range-fill.png" class=" img-fluid">
                        <div class="item-content">
                            <?php
                            // Function to display the time elapsed since the deadline
                            function display_time_since_deadline($post_id)
                            {
                                $deadline_date = get_post_meta($post_id, 'soft_job_expiration_date', true);
                                if ($deadline_date) {
                                    $time_elapsed = human_time_diff(strtotime($deadline_date), current_time('timestamp'));
                                    return $time_elapsed . ' ago';
                                }
                                return 'Posted: 1 week ago';
                            }
                            ?>
                            <h6>Date Posted</h6>
                            <span>Posted: <span><?php echo display_time_since_deadline(get_the_ID()); ?></span></span>
                        </div>
                    </div>

                    <div class="sidebar-item">
                        <!-- <i class="fa-solid fa-user-check"></i> -->
                        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/career-page/career-single-page/experience.png" class=" img-fluid">
                        <div class="item-content">
                            <h6>Experience</h6>
                            <span><?php
                                $our_team_experience = get_post_meta(get_the_ID(), 'softlab_custom_post_meta_field_experience', true);
                                if (!empty($our_team_experience)) {
                                    echo nl2br(esc_html($our_team_experience)); // Convert newlines to <br> tags for better display
                                } else {
                                    echo 'Experience: 2 Years';
                                }
                                ?></span>

                        </div>
                    </div>

                    <div class="sidebar-item">
                        <!-- <i class="fa-solid fa-clock"></i> -->
                        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/career-page/career-single-page/mingcute_time-fill.png" class=" img-fluid">
                        <div class="item-content">
                            <h6>Working Hours</h6>
                            <span>9:00 AM – 6:00 PM</span>
                        </div>
                    </div>

                    <div class="sidebar-item">
                        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/career-page/career-single-page/working-days.png" class=" img-fluid">
                        <div class="item-content">
                            <h6>Working Days</h6>
                            <span>Weekly: 5 days.</span>
                            <span>Weekend: Friday, Saturday.</span>
                        </div>
                    </div>

                    <div class="sidebar-item">
                        <!-- <i class="fa-solid fa-money-check"></i> -->
                        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/career-page/career-single-page/fluent_payment-48-filled.png" class=" img-fluid">
                        <div class="item-content">
                            <h6>Salary</h6>
                            <span><?php
                                $our_team_salary = get_post_meta(get_the_ID(), 'softlab_custom_post_meta_field_salary', true);
                                if (!empty($our_team_salary)) {
                                    echo nl2br(esc_html($our_team_salary)); // Convert newlines to <br> tags for better display
                                } else {
                                    echo 'TK. 35,000 - 50,000 BDT (Depends on Skill and Experience)';
                                }
                                ?></span>
                        </div>
                    </div>

                    <div class="sidebar-item">
                        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/career-page/career-single-page/frame.png" class=" img-fluid">
                        <div class="item-content">
                            <h6>Salary Review</h6>
                            <span>Yearly</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>


<?php
get_footer();
