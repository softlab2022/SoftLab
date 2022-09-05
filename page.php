<?php
/**
 * Template Name: Page (Default)
 * Description: Page template with Sidebar on the left side.
 *
 */

get_header();

the_post();
?>

    <section class="title-header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 m-auto">
                    <div class="header-content text-center">
                        <h2><?php the_title(); ?></h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="container">
        <div class="row">
            <div class="col-md-8 col-sm-12">
                <div id="post-<?php the_ID(); ?>" <?php post_class( 'content' ); ?>>
					<?php
					the_content();

					wp_link_pages(
						array(
							'before' => '<div class="page-links">' . __( 'Pages:', 'softlab' ),
							'after'  => '</div>',
						)
					);
					edit_post_link( esc_html__( 'Edit', 'softlab' ), '<span class="edit-link">', '</span>' );
					?>
                </div><!-- /#post-<?php the_ID(); ?> -->
				<?php
				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;
				?>
            </div><!-- /.col -->
			<?php
			get_sidebar();
			?>
        </div>
    </div>
<?php
get_footer();
