<section id="blog-page">
    <div class="container">

        <div class="row">
            <div class="col-lg-12 m-auto">
                <div class="buttons ">
                    <h2>Browse Categories</h2>

                    <a href="/blog" alt="All categories" class="btn active">All</a>

                    <?php

                    //list all categories
                    $categories = get_categories(array(
                        'orderby' => 'name',
                        'order'   => 'ASC'
                    ));

                    foreach ($categories as $category) {
                        printf('<a href="%1$s" alt="%2$s" class="btn my-2">%2$s</a>', get_category_link($category->term_id), $category->name);
                    } ?>


                    <!-- <div class="search_container">
                        <form role="search" method="get" class="search-form"
                            action="<?php echo esc_url(home_url('/')); ?>">

                            <div class="search-box">
                                <input type="text" class="search-field" placeholder="Search.."
                                    value="<?php echo get_search_query(); ?>" name="s" required />


                                <div class="search-btn">
                                    <i class="fa fa-search search-icon"></i>
                                </div>

                                <div class="cencel-btn">
                                    <i class="fa fa-close close-icon"></i>
                                </div>

                                <button type="submit" class="fm-search-btn">
                                    <i class="fa fa-search search-icon"></i>
                                </button>
                            </div>

                        </form>

                    </div> -->


                </div>

            </div>
        </div>

        <div class="row align-items-start justify-content-center">
            <div class="col-lg-8 col-md-7">


                <?php
                $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

                $args = array(
                    'post_type'      => 'post',
                    'posts_per_page' => 6,
                    'paged'          => $paged
                );

                $query = new WP_Query($args);

                if ($query->have_posts()) {
                    while ($query->have_posts()) {
                        $query->the_post();
                ?>
                        <div class="blog-item">
                            <div class="blog-item-image">
                                <a href="<?php the_permalink(); ?>">
                                    <img class="img-fluid" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="">
                                </a>
                            </div>

                            <div class="blog-item-content">
                                <div class="blog-item-meta">
                                    <span class="blog-item-meta-category"><?php the_category(); ?></span>
                                    <span class="blog-item-meta-date">
                                        <i class="fas fa-calendar-alt"></i>
                                        <?php echo display_update_date(); ?>
                                    </span>
                                </div>
                                <h3 class="blog-item-title">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h3>
                                <div class="blog-item-text">
                                    <p><?php the_excerpt(); ?></p>
                                </div>
                                <div class="blog-item-footer">
                                    <a href="<?php the_permalink(); ?>" class="read-more">
                                        <span>Read More</span>
                                        <i class="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                <?php
                    }
                }

                wp_reset_postdata();

                ?>

                <div class="posts-pagination">
                    <?php
                    $big = 999999999; // need an unlikely integer
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

            <?php
            // get_sidebar();

            ?>
            <!-- sidebar area -->
            <div class="col-lg-4 col-md-5">
                <div class="search-area">
                    <div class="search_containers">
                        <form role="search" method="get" class="search-forms" action="<?php echo esc_url(home_url('/')); ?>">
                            <div class="search-boxs">
                                <input type="text" class="search-fields" placeholder="Search.."
                                    value="<?php echo get_search_query(); ?>" name="s" required />

                                <input type="hidden" name="post_type" value="post">

                                <?php if (is_category()) : ?>
                                    <input type="hidden" name="cat" value="<?php echo get_query_var('cat'); ?>">
                                <?php endif; ?>

                                <?php if (is_tag()) : ?>
                                    <input type="hidden" name="tag_id" value="<?php echo get_queried_object_id(); ?>">
                                <?php endif; ?>

                                <div class="cencel-btns">
                                    <i class="fa fa-close close-icon"></i>
                                </div>

                                <button type="submit" class="fm-search-btns">
                                    <i class="fa fa-search search-icon"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="most-popular-section">
                    <h4>Most Popular</h4>
                    <?php
                    $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

                    $args = array(
                        'post_type'      => 'post',
                        'posts_per_page' => 3,
                        'paged'          => $paged
                    );

                    $query = new WP_Query($args);

                    if ($query->have_posts()) {
                        while ($query->have_posts()) {
                            $query->the_post();
                    ?>
                            <div class="blog-items">
                                <div class="blog-item-images">
                                    <a href="<?php the_permalink(); ?>">
                                        <img class="img-fluid" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="">
                                    </a>
                                </div>

                                <div class="blog-item-contents">
                                    <h3 class="blog-item-titles">
                                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                    </h3>
                                </div>
                            </div>
                    <?php
                        }
                    }

                    wp_reset_postdata();

                    ?>
                </div>
                <!-- Products -->
                <div class="sidebar-products-list">
                    <h4>Explore Our Products</h4>
                    <?php
                    $products = [
                        'integrate-google-drive'              => 'Integrate Google Drive',
                        'radio-player'                        => 'Radio Player',
                        // 'wp-radio'                         => 'WP Radio',
                        'dracula-dark-mode'                   => 'Dracula Dark Mode',
                        'essential-addons-for-contact-form-7' => 'Essential Addons for Contact Form 7',
                        'soft-accordion'                      => 'Soft Accordion',
                        // 'reader-mode'                      => 'Reader Mode',
                    ];
                    ?>

                    <div class="contact-menu-products">
                        <?php foreach ($products as $key => $title) { ?>
                            <a href="/<?php echo $key; ?>" class="product-<?php echo $key; ?>">
                                <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/products/<?php echo $key; ?>.png" alt="<?php echo $title; ?>">
                                <span><?php echo $title; ?></span>
                            </a>
                        <?php } ?>
                    </div>

                </div>
                <!-- Subscribe Now -->
                <div class="contact-sidebar text-center">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/about/mail.png" alt="mail" class="img-fluid ">
                    <h4>Join 30 thousand+ Happy Customers</h4>
                    <div class="news-letter-form">
                        <?php echo do_shortcode('[fluentform id="4"]'); ?>
                        <p>No charge. Unsubscribe anytime</p>
                    </div>
                </div>

            </div>

        </div>

    </div>
</section>