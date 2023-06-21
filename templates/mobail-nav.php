<div class="mobail-nav">
    <button class="nav-btn open-btn">
        <i class="fa-solid fa-bars"></i>
    </button>
    <div class="mobail nav-balck">

        <button class="nav-btn close-btn">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <p><br></p>
        <a class="navbar-brand brand-mobail-nav" href="<?php echo esc_url(home_url()); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>" rel="home">

            <img class="img-fluid main-logo" src="<?php echo get_template_directory_uri(); ?>/assets/images/gigas-logo-dark-350-1.png" alt="main-logo">
        </a>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet modi, sit cupiditate similique culpa iste explicabo veniam? Fugiat, iste aspernatur.</p>

        <div id="navbar" class="collapse navbar-collapse">
            <?php
            wp_nav_menu(
                array(
                    'theme_location' => 'main-menu',
                    'container'      => '',
                    'menu_class'     => 'navbar-nav ms-auto',
                    'fallback_cb'    => 'WP_Bootstrap_Navwalker::fallback',
                    'walker'         => new WP_Bootstrap_Navwalker(),
                )
            );
            ?>

            <a class="nav-link btn text-white view-products-btn" href="/account/"><i class="fa-sharp fa-solid fa-user"></i> My account</a>

        </div><!-- /.navbar-collapse -->

    </div>
</div>