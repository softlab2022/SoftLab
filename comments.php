<?php
/**
 * The template for displaying Comments.
 */

/**
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}

?>
<div id="comments">
	<?php

	if ( comments_open() && ! have_comments() ) {
		?>
        <h2 id="comments-title">
			<?php
			esc_html_e( 'No Comments yet!', 'softlab' );
			?>
        </h2>
		<?php
	}

	if ( have_comments() ) {
		?>
        <h2 id="comments-title">
			<?php
			$comments_number = get_comments_number();
			if ( '1' === $comments_number ) {
				printf( _x( 'One Reply to &ldquo;%s&rdquo;', 'comments title', 'softlab' ), get_the_title() );
			} else {
				printf(
				/* translators: 1: number of comments, 2: post title */
					_nx(
						'%1$s Reply to &ldquo;%2$s&rdquo;',
						'%1$s Replies to &ldquo;%2$s&rdquo;',
						$comments_number,
						'comments title',
						'softlab'
					),
					number_format_i18n( $comments_number ),
					get_the_title()
				);
			}
			?>
        </h2>

		<?php
		if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) {
			?>
            <nav id="comment-nav-above">
                <h1 class="assistive-text"><?php esc_html_e( 'Comment navigation', 'softlab' ); ?></h1>
                <div class="nav-previous"><?php previous_comments_link( __( '&larr; Older Comments', 'softlab' ) ); ?></div>
                <div class="nav-next"><?php next_comments_link( __( 'Newer Comments &rarr;', 'softlab' ) ); ?></div>
            </nav>
		<?php } ?>

        <ol class="commentlist">
			<?php
			/**
			 * Loop through and list the comments. Tell wp_list_comments()
			 * to use theme_comment() to format the comments.
			 * If you want to overload this in a child theme then you can
			 * define theme_comment() and that will be used instead.
			 * See theme_comment() in my-theme/functions.php for more.
			 */
			wp_list_comments( array( 'callback' => 'softlab_comment' ) );
			?>
        </ol>

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) { ?>
            <nav id="comment-nav-below">
                <h1 class="assistive-text"><?php esc_html_e( 'Comment navigation', 'softlab' ); ?></h1>
                <div class="nav-previous"><?php previous_comments_link( __( '&larr; Older Comments', 'softlab' ) ); ?></div>
                <div class="nav-next"><?php next_comments_link( __( 'Newer Comments &rarr;', 'softlab' ) ); ?></div>
            </nav>
		<?php } elseif ( ! comments_open() && ! is_page() && post_type_supports( get_post_type(), 'comments' ) ) { ?>
            <h2 id="comments-title" class="nocomments"><?php esc_html_e( 'Comments are closed.', 'softlab' ); ?></h2>
			<?php
		}
	}
	?>

    <h2 id="comments-title">Leave a reply</h2>
	<?php

	// Show Comment Form (customized in functions.php).
	comment_form();
	?>
</div><!-- /#comments -->
