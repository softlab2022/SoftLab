<?php
/**
 * The Template for displaying Archive pages.
 */

get_header();

if ( have_posts() ) :
	?>

    <section class="title-header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 m-auto">
                    <div class="header-content text-center">
						<?php the_archive_title( '<h1 class="header-title">', '</h1>' ); ?>

						<?php the_archive_description( ); ?>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="archive-area">
        <div class="container">
            <div class="row">
				<?php
				while ( have_posts() ) :
					the_post();

					/**
					 * Include the Post-Format-specific template for the content.
					 * If you want to overload this in a child theme then include a file
					 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
					 */
					get_template_part( 'template-parts/content', 'index' ); // Post format: content-index.php
				endwhile;
				?>
            </div>
        </div>
    </section>
<?php
endif;

wp_reset_postdata(); // End of the loop.

get_footer();
