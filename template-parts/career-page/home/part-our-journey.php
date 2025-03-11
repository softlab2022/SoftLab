<section class="part-our-journey">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="job-categori-head autoShow text-center">
                    <h2 class="job-categori-title">Do You Want to be Part of Our Journey?</h2>
                    <p class="job-categori-description">Be a part of our exciting journey and contribute to shaping the future together. Let’s achieve greatness as a team!</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="part-our-journey-item">
    <div class="container">
        <div class="row">
            <?php
            $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

            $args = array(
                'post_type'      => 'soft_job',
                'posts_per_page' => 8,
                'paged'          => $paged,
                'orderby'        => 'id',
                'order'          => 'ASC',
                'meta_query'     => array(
                    array(
                        'key'     => 'soft_job_expiration_date',
                        'value'   => date('Y-m-d'),
                        'compare' => '>=',
                        'type'    => 'DATE',
                    ),
                ),
            );

            $query = new WP_Query($args);

            if ($query->have_posts()) {
                while ($query->have_posts()) {
                    $query->the_post();
                    $softlab_custom_post_meta_fields = get_post_meta(get_the_ID(), 'softlab_custom_post_meta_fields', true) ?: [];

                    if (!empty($softlab_custom_post_meta_fields)) {
                        foreach ($softlab_custom_post_meta_fields as $index => $field) {
            ?>
                            <div class="col-lg-3 col-md-6 ">
                                <div class="journey-item">
                                    <div class="journey-item-img">
                                        <a href="<?php the_permalink(); ?>">
                                            <img class="img-fluid" src="<?php echo !empty($field['image']) ? esc_url($field['image']) : ''; ?>" alt="Image">
                                        </a>
                                    </div>

                                    <h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
                                    <div class="date-time">
                                        <span><?php echo !empty($field['title']) ? esc_html($field['title']) : 'Full Time'; ?></span>
                                        <span><?php echo !empty($field['description']) ? esc_html($field['description']) : 'In House'; ?></span>
                                    </div>
                                    <?php
                                    // Display expiration date
                                    $expiration_date = get_post_meta(get_the_ID(), 'soft_job_expiration_date', true);
                                    if ($expiration_date) {
                                        echo '<p class="expiration-date">Expires on: <span>' . date('F j, Y', strtotime($expiration_date)) . '</span></p>';
                                    }
                                    ?>
                                    <a href="<?php the_permalink(); ?>" class="read-more">
                                        <span>More Details</span>
                                        <i class="fas fa-arrow-right"></i>
                                    </a>
                                    
                                </div>
                            </div>
            <?php
                        }
                    }
                }
            } else {
                echo '<div class="col-12"><p>No Job post found.</p></div>';
            }

            wp_reset_postdata();
            ?>
            <div class="posts-pagination">
                <?php
                $big = 999999999;
                echo paginate_links(array(
                    'base'      => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
                    'format'    => '?paged=%#%',
                    'current'   => max(1, get_query_var('paged')),
                    'total'     => $query->max_num_pages,
                    'prev_text' => '<i class="fas fa-arrow-left"></i>',
                    'next_text' => '<i class="fas fa-arrow-right"></i>',
                ));
                ?>
            </div>
        </div>
    </div>
</section>