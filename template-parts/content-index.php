<?php
/**
 * The template for displaying content in the index.php template.
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'col-sm-8' ); ?>>
	<div class="card mb-5 p-2 border-0 ">
		<header class="card-body">
			
		
			<?php
				if ( 'post' === get_post_type() ) :
			?>
				<div class="card-text entry-meta">
					<?php
						//softlab_article_posted_on();

						// $num_comments = get_comments_number();
						// if ( comments_open() && $num_comments >= 1 ) :
						// 	echo ' <a href="' . get_comments_link() . '" class="badge badge-pill badge-secondary float-end" title="' . esc_attr( sprintf( _n( '%s Comment', '%s Comments', $num_comments, 'softlab' ), $num_comments ) ) . '">' . $num_comments . '</a>';
						// endif;
					?>
				</div><!-- /.entry-meta -->
			<?php
				endif;
			?>
		</header>
		<div class="card-body">
			<div class="card-text entry-content">
				<?php
					if ( has_post_thumbnail() ) :
						echo '<div class="post-thumbnail"><a href="'.esc_url(get_the_permalink()).'"> ' . get_the_post_thumbnail( get_the_ID(), 'large' ) . '</a></div>';
					endif;
					?>
					<div class="undated-date justify-content-between">
					<span class="blog-item-meta-category"><?php the_category(); ?></span>
						<span class="blog-item-meta-date">
							<i class="fas fa-calendar-alt"></i>
							<?php echo display_update_date(); ?>
					</span>
				</div>
				<h2 class="card-title">

					<a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'softlab' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a>
					</h2>
					<?php

					if ( is_search() ) :
						the_excerpt();
					else :
						echo wp_trim_words( get_the_content(), 40, '...' );
					endif;
				?>
				<?php wp_link_pages( array( 'before' => '<div class="page-link"><span>' . esc_html__( 'Pages:', 'softlab' ) . '</span>', 'after' => '</div>' ) ); ?>
			</div><!-- /.card-text -->
			<footer class="entry-meta">
				<a href="<?php echo get_the_permalink(); ?>" class="btn btn-outline-secondary "><?php esc_html_e( 'Read More', 'softlab' ); ?> <i class="fas fa-arrow-right ms-2"></i></a>
			</footer><!-- /.entry-meta -->
		</div><!-- /.card-body -->
	</div><!-- /.col -->
</article><!-- /#post-<?php the_ID(); ?> -->
