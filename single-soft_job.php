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
                                    echo 'no text show';
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

            <div class="row">
                <div class="col-lg-4">
                    <div class="our-team-image">
                        <!-- <img src="<?php //echo get_template_directory_uri(); 
                                        ?>/assets/images/career-page/career-single-page/image.png" class=" img-fluid"> -->
                        <?php
                        $image_url = get_post_meta(get_the_ID(), 'softlab_image_about_image', true);

                        if (!empty($image_url)) {
                            echo '<img src="' . esc_url($image_url) . '" alt="Uploaded Image" style="max-width:100%; height:auto;">';
                        } else {
                            echo 'No image show';
                        }
                        ?>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="our-team-content">
                        <h3 class="">Join Our Team as a Talented <?php the_title(); ?></h3>
                        <p>
                            <?php
                            $our_team_description = get_post_meta(get_the_ID(), 'softlab_custom_post_meta_field_our_team_description', true);
                            if (!empty($our_team_description)) {
                                echo nl2br(esc_html($our_team_description)); // Convert newlines to <br> tags for better display
                            } else {
                                echo 'No text to show';
                            }
                            ?>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="our-team-about">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <!-- About Us -->
                <div class="about-us-main">
                    <h3>
                        <?php
                        $our_team_title = get_post_meta(get_the_ID(), 'softlab_custom_post_meta_field_our_team_about_title', true);
                        if (!empty($our_team_title)) {
                            echo nl2br(esc_html($our_team_title)); // Convert newlines to <br> tags for better display
                        } else {
                            echo 'No title show';
                        }
                        ?>
                    </h3>
                    <p>
                        <?php
                        $our_team_description = get_post_meta(get_the_ID(), 'softlab_custom_post_meta_field_our_team_about_description', true);
                        if (!empty($our_team_description)) {
                            echo nl2br(esc_html($our_team_description)); // Convert newlines to <br> tags for better display
                        } else {
                            echo 'No description show';
                        }
                        ?>

                    </p>
                </div>
                <div class="about-us-main">
                    <h3>
                        <?php
                        $our_team_description = get_post_meta(get_the_ID(), 'softlab_custom_job_responsibility_title', true);
                        if (!empty($our_team_description)) {
                            echo nl2br(esc_html($our_team_description)); // Convert newlines to <br> tags for better display
                        } else {
                            echo 'No title show';
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
                        echo '<p>No description available</p>';
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
                            echo 'No title show';
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
                        echo '<p>No description available</p>';
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
                            echo 'No title show';
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
                        echo '<p>No description available</p>';
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
                            echo 'No title show';
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
                        echo '<p>No description available</p>';
                    }
                    ?>

                </div>
                <!-- Our Statement -->
                <div class="about-us-main">
                    <h3>
                        <?php
                        $our_team_title = get_post_meta(get_the_ID(), 'softlab_custom_post_meta_field_our_statement_title', true);
                        if (!empty($our_team_title)) {
                            echo nl2br(esc_html($our_team_title)); // Convert newlines to <br> tags for better display
                        } else {
                            echo 'No title show';
                        }
                        ?>
                    </h3>
                    <p>
                        <?php
                        $our_team_description = get_post_meta(get_the_ID(), 'softlab_custom_post_meta_field_our_statement_description', true);
                        if (!empty($our_team_description)) {
                            echo nl2br(esc_html($our_team_description)); // Convert newlines to <br> tags for better display
                        } else {
                            echo 'No description show';
                        }
                        ?>

                    </p>
                </div>
                <!-- Application Deadline -->
                <div class="deadline">
                    <?php
                    function display_deadline_date($post_id)
                    {
                        $deadline_date = get_post_meta($post_id, 'soft_job_expiration_date', true);
                        if ($deadline_date) {
                            return date('F j, Y', strtotime($deadline_date));
                        }
                        return 'No deadline date set.';
                    }
                    ?>
                    <h5>Application Deadline: <span><?php echo display_deadline_date(get_the_ID()); ?></span></h5>
                </div>
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
            <div class="col-lg-4">
                <div class="sidebar-main">
                    <h5>Job Summary:</h5>
                    <div class="sidebar-item">
                        <i class="fa-solid fa-location-dot"></i>
                        <div class="item-content">
                            <span>Location</span>
                            <h6>Maktob More, Radhanagar, Pabna
                                6600, Bangladesh</h6>
                        </div>
                    </div>
                    <div class="sidebar-item">
                        <i class="fa-solid fa-briefcase"></i>
                        <div class="item-content">
                            <span>Job Type</span>
                            <h6><?php

                                if (!empty($custom_fields['title'])) {
                                    echo esc_html($custom_fields['title']);
                                } else {
                                    echo 'no text show';
                                }
                                ?></h6>
                        </div>
                    </div>
                    <div class="sidebar-item">
                        <i class="fa-solid fa-calendar-days"></i>
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
                                return 'No deadline date set.';
                            }
                            ?>
                            <span>Date Posted</span>
                            <h6>Posted: <span><?php echo display_time_since_deadline(get_the_ID()); ?></span></h6>
                        </div>
                    </div>
                    <div class="sidebar-item">
                        <!-- <i class="fa-solid fa-user-check"></i> -->
                        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/career-page/career-single-page/experience.png" class=" img-fluid">
                        <div class="item-content">
                            <span>Experience</span>
                            <h6><?php
                                $our_team_experience = get_post_meta(get_the_ID(), 'softlab_custom_post_meta_field_experience', true);
                                if (!empty($our_team_experience)) {
                                    echo nl2br(esc_html($our_team_experience)); // Convert newlines to <br> tags for better display
                                } else {
                                    echo 'No experience show';
                                }
                                ?></h6>

                        </div>
                    </div>
                    <div class="sidebar-item">
                        <i class="fa-solid fa-clock"></i>
                        <div class="item-content">
                            <span>Working Hours</span>
                            <h6>9:00 AM – 6:00 PM</h6>
                        </div>
                    </div>
                    <div class="sidebar-item">
                        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/career-page/career-single-page/working-days.png" class=" img-fluid">
                        <div class="item-content">
                            <span>Working Days</span>
                            <h6>Weekly: 5 days.</h6>
                            <h6>Weekend: Friday, Saturday.</h6>
                        </div>
                    </div>
                    <div class="sidebar-item">
                        <i class="fa-solid fa-money-check"></i>
                        <div class="item-content">
                            <span>Salary</span>
                            <h6><?php
                                $our_team_salary = get_post_meta(get_the_ID(), 'softlab_custom_post_meta_field_salary', true);
                                if (!empty($our_team_salary)) {
                                    echo nl2br(esc_html($our_team_salary)); // Convert newlines to <br> tags for better display
                                } else {
                                    echo 'No salary show';
                                }
                                ?></h6>
                        </div>
                    </div>
                    <div class="sidebar-item">
                        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/career-page/career-single-page/frame.png" class=" img-fluid">
                        <div class="item-content">
                            <span>Salary Review</span>
                            <h6>Yearly</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>


            <div class="container section-item">
                <div class="entry-content">
                    <?php
                    if (has_post_thumbnail()) {
                        echo '<div class="post-thumbnail">' . get_the_post_thumbnail(get_the_ID(), 'large') . '</div>';
                    }
                    the_content();

                    wp_link_pages(array(
                        'before' => '<div class="page-link"><span>' . __('Pages:', 'softlab') . '</span>',
                        'after'  => '</div>',
                    ));
                    ?>
                </div>

                <?php
                if (comments_open() || get_comments_number()) {
                    comments_template();
                }
                ?>
            </div>
        <?php endwhile;
    else : ?>
        <p><?php _e('No content found', 'softlab'); ?></p>
    <?php endif; ?>
</article>

<?php
get_footer();
