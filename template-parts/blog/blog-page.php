<section id="blog-page">
    <div class="container">

        <div class="row">
            <div class="col-lg-12 m-auto">
                <div class="buttons text-center">

                    <a href="/blog" alt="All categories" class="btn">All</a>

					<?php

					//list all categories
					$categories = get_categories( array(
						'orderby' => 'name',
						'order'   => 'ASC'
					) );

					foreach ( $categories as $category ) {
						printf( '<a href="%1$s" alt="%2$s" class="btn my-2">%2$s</a>', get_category_link( $category->term_id ), $category->name );
					} ?>
                   <?php
                        $search_args = array(
                            'label' => 'Search this website',
                            'placeholder' => 'Search...',
                          //'button_text' => '<i class="fa-solid fa-arrow-right"></i>',
                            //'button_text' => '<i class="fa fa-search"></i>',
                            'submit_button' => false // hide the default submit button
                        );
                        ?>
                        <div class="search_container">
                            <form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
                            <div class="search-box">
                                <input type="text" class="search-field" placeholder="<?php echo esc_attr( $search_args['placeholder'] ); ?>" value="<?php echo get_search_query(); ?>" name="s" />

                                <div class="search-btn">
                                    <i class="fa fa-search search-icon"></i>
                                </div>
                                <div class="cencel-btn">
                                        <i class="fa fa-close close-icon"></i>
                                </div>
                                <button type="submit" class="fm-search-btn"> 
                                    <i class="fa fa-search search-icon"></i>
                                </button>
                                    <!-- <i class="fa-sharp fa-regular fa-xmark close-icon"></i> -->
                            </div>
                                
                        </form>
                            
                        </div>
                      

                </div>
                
            </div>
        </div>

        <div class="row align-items-start justify-content-center">
            <div class="col-md-8">


				<?php
				$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;

				$args = array(
					'post_type'      => 'post',
					'posts_per_page' => 6,
					'paged'          => $paged
				);

				$query = new WP_Query( $args );

				if ( $query->have_posts() ) {
					while ( $query->have_posts() ) {
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
                                        <?php
                                         display_update_date(); 
                                        //echo get_the_date(); ?>
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
					echo paginate_links( array(
						'base'      => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
						'format'    => '?paged=%#%',
						'current'   => max( 1, get_query_var( 'paged' ) ),
						'total'     => $query->max_num_pages,
						'prev_text' => '<i class="fas fa-arrow-left"></i>',
						'next_text' => '<i class="fas fa-arrow-right"></i>',
					) );

					?>
                </div>

            </div>

			<?php
			// get_sidebar();
			?>

        </div>

    </div>
</section>