<?php
/**
 * The template for displaying content in the single.php template.
 *
 */
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

    <header class="title-header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 m-auto">
                    <div class="header-content text-center">
                        <h1 class="entry-title"><?php the_title(); ?></h1>
                        <div class="entry-meta">
							<?php softlab_article_posted_on(); ?>
                        </div>

						<?php
						if ( has_post_thumbnail() ) {
							echo '<div class="post-thumbnail">' . get_the_post_thumbnail( get_the_ID(), 'large' ) . '</div>';
						}
						?>
                    </div>
                </div>
            </div>
        </div>
    </header>


    <div class="container">
        <div class="row">
            <div class="entry-content">
				<?php

				the_content();

				wp_link_pages( array(
					'before' => '<div class="page-link"><span>' . esc_html__( 'Pages:', 'softlab' ) . '</span>',
					'after'  => '</div>'
				) );
				?>
            </div>

			<?php

			if ( comments_open() || get_comments_number() ) {
				comments_template();
			}

			?>

        </div>

	    <?php
	    edit_post_link( __( 'Edit', 'softlab' ), '<span class="edit-link">', '</span>' );
	    ?>
    </div>

</article>
