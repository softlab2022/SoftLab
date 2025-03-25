<section class="contact-form-7-templates-hero">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="contact-form-7-templates-content text-center">
                    <h1>Contact Form 7 Templates</h1>
                    <p>Discover customizable Contact Form 7 templates to automate your form creation process. Easily design, modify, and optimize forms for better user engagement and conversions</p>

                    <div class="contact-form-7-templates-search-wrap">
                        <form id="contact-form-7-templates-search-form" class="contact-form-7-templates-search-form">
                            <div class="contact-form-7-templates-search-field-wrap">
                                <input name="s" id="search-keyword" class="contact-form-7-templates-search-field" autocomplete="off" type="text" placeholder="Search Preferred Form Templates">

                                <div class="contact-form-7-templates-search-loader">
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <style>
                                            .spinner_OSmW {
                                                transform-origin: center;
                                                animation: spinner_T6mA .75s step-end infinite
                                            }

                                            @keyframes spinner_T6mA {
                                                8.3% {
                                                    transform: rotate(30deg)
                                                }

                                                16.6% {
                                                    transform: rotate(60deg)
                                                }

                                                25% {
                                                    transform: rotate(90deg)
                                                }

                                                33.3% {
                                                    transform: rotate(120deg)
                                                }

                                                41.6% {
                                                    transform: rotate(150deg)
                                                }

                                                50% {
                                                    transform: rotate(180deg)
                                                }

                                                58.3% {
                                                    transform: rotate(210deg)
                                                }

                                                66.6% {
                                                    transform: rotate(240deg)
                                                }

                                                75% {
                                                    transform: rotate(270deg)
                                                }

                                                83.3% {
                                                    transform: rotate(300deg)
                                                }

                                                91.6% {
                                                    transform: rotate(330deg)
                                                }

                                                100% {
                                                    transform: rotate(360deg)
                                                }
                                            }
                                        </style>
                                        <g class="spinner_OSmW">
                                            <rect x="11" y="1" width="2" height="5" opacity=".14" />
                                            <rect x="11" y="1" width="2" height="5" transform="rotate(30 12 12)" opacity=".29" />
                                            <rect x="11" y="1" width="2" height="5" transform="rotate(60 12 12)" opacity=".43" />
                                            <rect x="11" y="1" width="2" height="5" transform="rotate(90 12 12)" opacity=".57" />
                                            <rect x="11" y="1" width="2" height="5" transform="rotate(120 12 12)" opacity=".71" />
                                            <rect x="11" y="1" width="2" height="5" transform="rotate(150 12 12)" opacity=".86" />
                                            <rect x="11" y="1" width="2" height="5" transform="rotate(180 12 12)" />
                                        </g>
                                    </svg>
                                </div>

                                <div class="contact-form-7-templates-search-close">
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <style>
                                            .close_1q1x {
                                                fill: none;
                                                stroke: currentColor;
                                                stroke-linecap: round;
                                                stroke-linejoin: round;
                                                stroke-width: 2px
                                            }
                                        </style>
                                        <path class="close_1q1x" d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>

                            <button class="contact-form-7-templates-btn contact-form-7-templates-search-submit" data-bs-toggle="tooltip" data-bs-placement="top" title="Search">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <g>
                                            <circle cx="11.7666" cy="11.7666" r="8.98856" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M18.0183 18.4851L21.5423 22" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </g>
                                </svg>
                            </button>

                            <div class="contact-form-7-templates-search-results-wrap">
                                <div class="contact-form-7-templates-search-results"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="all-from-templates">
    <div class="container">
        <div class="row">
            <!-- Left Sidebar - Categories -->
            <div class="col-lg-3 col-md-4">
                <div class="category-list">
                    <h2>Categories</h2>
                    <?php
                    // Get all main categories (parent categories)
                    $main_categories = get_terms(array(
                        'taxonomy'   => 'form_category',
                        'parent'     => 0,
                        'hide_empty' => false,
                        'orderby'    => 'name',
                        'order'      => 'ASC',
                    ));

                    if (!empty($main_categories) && !is_wp_error($main_categories)) :
                        $first_category = true; // Flag to identify the first category
                        foreach ($main_categories as $main_category) :
                    ?>
                            <div class="main-category ">

                                <h3 class="active-list">
                                    <a href="javascript:void(0);" class="category-title <?php echo $first_category ? 'active' : ''; ?>" data-category-id="<?php echo esc_attr($main_category->term_id); ?>">
                                        <?php echo esc_html($main_category->name); ?>
                                        <div class="items">
                                            <span class="docs-count"><?php echo esc_html($main_category->count); ?></span>
                                            <i class="fa-solid fa-angle-up"></i>
                                        </div>
                                    </a>

                                </h3>

                                <?php
                                // Get subcategories of the main category
                                $sub_categories = get_terms(array(
                                    'taxonomy'   => 'form_category',
                                    'parent'     => $main_category->term_id,
                                    'hide_empty' => false,
                                ));

                                if (!empty($sub_categories) && !is_wp_error($sub_categories)) :
                                ?>
                                    <ul class="sub-category-list">
                                        <?php foreach ($sub_categories as $sub_category) : ?>
                                            <li>
                                                <a href="javascript:void(0);" class="category-filter" data-category="<?php echo esc_attr($sub_category->slug); ?>">
                                                    <?php echo esc_html($sub_category->name); ?>
                                                </a>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                <?php endif; ?>

                                <div class="docs-list">
                                    <?php
                                    // Get posts related to the main category
                                    $args = array(
                                        'post_type'      => 'form',
                                        'posts_per_page' => -1,
                                        'orderby'        => 'title',
                                        'order'          => 'ASC',
                                        'tax_query'      => array(
                                            array(
                                                'taxonomy'         => 'form_category',
                                                'field'            => 'term_id',
                                                'terms'            => $main_category->term_id,
                                                'include_children' => true,
                                            ),
                                        ),
                                    );

                                    $query = new WP_Query($args);

                                    if ($query->have_posts()) :
                                        while ($query->have_posts()) : $query->the_post();
                                    ?>
                                            <a href="javascript:void(0);" class="docs-list-item" data-post-id="<?php the_ID(); ?>">
                                                <span class="form-doc-title"><?php the_title(); ?></span>
                                            </a>
                                        <?php endwhile; ?>
                                        <?php wp_reset_postdata(); ?>
                                    <?php else : ?>
                                        <p>No posts found in this category.</p>
                                    <?php endif; ?>
                                </div>
                            </div>
                        <?php
                            $first_category = false; // Reset the flag after the first category
                        endforeach;
                    else : ?>
                        <p>No categories found.</p>
                    <?php endif; ?>
                </div>
            </div>

            <!-- Right Side - Forms Under Categories -->
            <div class="col-lg-9 col-md-8">
                <h2 id="category-title"><?php echo !empty($main_categories) ? esc_html($main_categories[0]->name) : 'No Category'; ?></h2>

                <div class="row" id="form-content">
                    <?php
                    // Display posts from the first category by default
                    if (!empty($main_categories) && !is_wp_error($main_categories)) :
                        $first_category_id = $main_categories[0]->term_id;

                        $args = array(
                            'post_type'      => 'form',
                            'posts_per_page' => 30,
                            'orderby'        => 'title',
                            'order'          => 'ASC',
                            'tax_query'      => array(
                                array(
                                    'taxonomy'         => 'form_category',
                                    'field'            => 'term_id',
                                    'terms'            => $first_category_id,
                                    'include_children' => true,
                                ),
                            ),
                        );

                        $query = new WP_Query($args);

                        if ($query->have_posts()) :
                            while ($query->have_posts()) : $query->the_post();
                    ?>
                                <div class="col-lg-4 col-md-6">
                                    <div class="main-item">
                                        <div class="item-img">
                                            <img class="img-fluid" src="<?php echo get_the_post_thumbnail_url() ?: 'https://via.placeholder.com/150'; ?>" alt="<?php the_title_attribute(); ?>">
                                            <div class="item-button">
                                                <div class="buttons-group">
                                                    <a href="<?php the_permalink(); ?>" class="button1"  target="_blank"><i class="fa-solid fa-eye"></i> View Demo</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item-content">
                                            <h4><?php the_title(); ?></h4>
                                            <p><?php the_excerpt(); ?></p>

                                        </div>

                                    </div>
                                </div>
                    <?php
                            endwhile;
                            wp_reset_postdata();
                        else :
                            echo '<div class="col-12"><p>No posts found in this category.</p></div>';
                        endif;
                    endif;
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
    // search
    (function($) {
        const app = {
            init: function() {

            },

            ready: function() {

                console.log('ready');

                let timer;
            //     $('.contact-form-7-templates-search-field').on('keyup', function () {
            //     clearTimeout(timer);

            //     timer = setTimeout(function () {
            //         app.handleSearch();
            //     }, 700);
            // });
                $('.contact-form-7-templates-search-field').on('keyup', app.handleSearch);

                $('.contact-form-7-templates-search-form').on('submit', function(e) {
                    e.preventDefault();
                    app.handleSearch();
                });

                $('.contact-form-7-templates-category-select').on('change', app.handleSearch);
                $('.contact-form-7-templates-search-close').on('click', app.handleSearchClose);

                $(document).on('load', app.handleCategoryList());
            },

            handleSearch: function() {
                let search = $('.contact-form-7-templates-search-field').val().trim();
                
                // change search title
                $('#search-keyword').on('keyup', function() {
                    $('#category-title').html('Search Result');
                });
                if (search.length < 3) {
                    return;
                }

                const category = $('.contact-form-7-templates-category-select').val();


                setTimeout(function() {
                    $.ajax({
                        url: '<?php echo admin_url('admin-ajax.php'); ?>',
                        type: 'POST',
                        dataType: 'json',
                        data: {
                            action: 'contact_form_7_templates_search',
                            search: search,
                            category: category
                        },
                        beforeSend: function() {
                            $('.contact-form-7-templates-search-loader').addClass('active');
                        },
                        success: function(response) {
                            if (response.success) {
                                $('.contact-form-7-templates-search-results-wrap').addClass('active');
                                $('#form-content').html(response.data);
                            } else {
                                $('#form-content').html('<div class="col-12"><p>No results found</p></div>');
                            }
                        },
                        complete: function() {
                            $('.contact-form-7-templates-search-loader').removeClass('active');
                            $('.contact-form-7-templates-search-close').addClass('active');
                        },
                        error: function(xhr, status, error) {
                            console.error('Search request failed:', error);
                        }
                    });
                }, 50);
            },

            handleSearchClose: function() {
                $('.contact-form-7-templates-search-results-wrap').removeClass('active');
                $('#form-content').html('');
                $('.contact-form-7-templates-search-field').val('');
                $('.contact-form-7-templates-search-close').removeClass('active');
                const currentCategoryTitle = $('.category-title.active').text().replace(/[0-9]/g, '');
                $('#category-title').html(currentCategoryTitle);

                // Reload posts from the currently active category
                const categoryId = $('.category-title.active').data('category-id');
                fetch('<?php echo esc_url(admin_url('admin-ajax.php')); ?>', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: `action=get_category_posts&category_id=${categoryId}`
                    })
                    .then(response => response.text())
                    .then(data => {
                        $('#form-content').html(data);
                    })
                    .catch(error => console.error('Error:', error));
            },

            handleCategoryList: function() {
                const categoryTitles = document.querySelectorAll('.category-title');
                const docListItems = document.querySelectorAll('.docs-list-item');
                const formContentContainer = document.getElementById('form-content');
                const categoryTitleElement = document.getElementById('category-title');

                // Automatically open the first category
                const firstCategoryTitle = document.querySelector('.category-title.active');
                if (firstCategoryTitle) {
                    firstCategoryTitle.parentElement.nextElementSibling.style.height = 'auto';
                }

                // Handle category title click
                categoryTitles.forEach(categoryTitle => {
                    categoryTitle.addEventListener('click', function(e) {
                        e.preventDefault();

                        const currentCategoryTitle = this.textContent.replace(/[0-9]/g, '');

                        // Close all categories first
                        document.querySelectorAll('.docs-list').forEach(list => {
                            list.style.height = '0';
                        });

                        document.querySelectorAll('.category-title').forEach(title => {
                            title.classList.remove('active');
                        });

                        // Open the clicked category
                        this.classList.add('active');
                        const docsList = this.parentElement.nextElementSibling;
                        if (docsList) {
                            docsList.style.height = 'auto';
                        }

                        const categoryId = this.dataset.categoryId;

                        fetch('<?php echo esc_url(admin_url('admin-ajax.php')); ?>', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                },
                                body: `action=get_category_posts&category_id=${categoryId}`
                            })
                            .then(response => response.text())
                            .then(data => {
                                if (formContentContainer) {
                                    formContentContainer.innerHTML = data;
                                }
                                if (categoryTitleElement) {
                                    categoryTitleElement.textContent = currentCategoryTitle;
                                }
                            })
                            .catch(error => console.error('Error:', error));
                    });
                });

                // Handle document list item click
                docListItems.forEach(item => {
                    item.addEventListener('click', function(e) {
                        e.preventDefault();

                        docListItems.forEach(item => item.classList.remove('active'));
                        this.classList.add('active');

                        const postId = this.dataset.postId;

                        fetch('<?php echo esc_url(admin_url('admin-ajax.php')); ?>', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                },
                                body: `action=get_form_content&post_id=${postId}`
                            })
                            .then(response => response.text())
                            .then(data => {
                                if (formContentContainer) {
                                    formContentContainer.innerHTML = data;
                                }
                            })
                            .catch(error => console.error('Error:', error));
                    });
                });
            }
        };

        app.init();

        $(document).ready(app.ready);
    })(jQuery);
</script>