<?php

$features = [
	'Frontend Dark Mode' => [
		'dracula'    => 'Yes',
		'wpdarkmode' => 'Yes',
		'droit'      => 'Yes',
		'darkmysite' => 'Yes',
	],

	'Default Dark Mode' => [
		'dracula'    => 'Yes',
		'wpdarkmode' => 'Yes',
		'droit'      => 'Yes',
		'darkmysite' => 'Yes',
	],

	'Auto Match OS Theme' => [
		'dracula'    => 'Yes',
		'wpdarkmode' => 'Yes',
		'droit'      => 'Yes',
		'darkmysite' => 'Yes',
	],

	'Time-based Dark Mode' => [
		'dracula'    => 'Yes',
		'wpdarkmode' => 'Pro',
		'droit'      => 'Yes',
		'darkmysite' => 'Yes',
	],

	'Login & Register Page Dark Mode' => [
		'dracula'    => 'Yes',
		'wpdarkmode' => 'No',
		'droit'      => 'No',
		'darkmysite' => 'No',
	],

	'Multiple Toggle Buttons' => [
		'dracula'    => 'Yes (2 Free + 14 Pro)',
		'wpdarkmode' => 'Yes (3 Free + 16 Pro)',
		'droit'      => 'Yes (2 Free + 3 Pro)',
		'darkmysite' => 'Yes (2 Free + 5 Pro)',
	],



];

?>


<section id="compare-plans-table">
    <div class="container">
        <div class="compare-main">
            <!-- Feature List area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="compare-item">
                        <h5>Feature List</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="starter-item">
                        <div class="starter text-center">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/dracula-main-icon.png"
                                 alt="" class="img-fluid">
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="professional-item">
                        <div class="professionals text-center">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/wp-darkmode.png"
                                 alt="" class="img-fluid">
                        </div>
                    </div>

                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="professional-item">
                        <div class="professional text-center">

                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/droit.png"
                                 alt="" class="img-fluid">
                        </div>
                    </div>

                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="elite-item">
                        <div class="elite text-center">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/darkmysite.png"
                                 alt="" class="img-fluid">
                        </div>
                    </div>

                </div>
            </div>

	        <?php foreach ( $features as $key => $feature ) :

		        $image_url = get_template_directory_uri() . '/assets/images/dracula/home/compare/' . strtolower( sanitize_file_name( $key ) ) . '.png';

                ?>
                <div class="row">

                    <div class="col-lg-4 col-md-4">
                        <div class="item-content d-flex justify-content-start align-items-center">
                            <img src="<?php echo $image_url; ?>" alt="<?php echo $key; ?>" class="img-fluid">
                            <h5><?php echo esc_html( $key ); ?></h5>
                        </div>
                    </div>

			        <?php

			        $options = ['dracula', 'wpdarkmode', 'droit', 'darkmysite'];

			        foreach ( $options as $option ) :
                        $feature_key = sanitize_key( explode( ' ', $feature[ $option ] )[0] );
				        $icon_class = $feature_key . ' fa-solid fa-' . ( 'no' == $feature_key ? 'xmark' : 'check' );
				        ?>

                        <div class="col-lg-2 col-md-2">
                            <div class="item text-center d-flex justify-content-center align-items-center">
                                <i class="<?php echo esc_attr( $icon_class ); ?>"></i>
                                <span><?php echo esc_html( $feature[ $option ] ); ?></span>
                            </div>
                        </div>
			        <?php endforeach; ?>

                </div>
	        <?php endforeach; ?>



            <!-- Frontend Dark Mode area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/frontend.png"
                             alt="" class="img-fluid">
                        <h5>Frontend Dark Mode</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <!-- <div class="col-lg-3">
                    <div class="items text-center">
                        <i class="fa-solid fa-xmark"></i>
                    </div>     
                </div> -->

            </div>
            <!-- Default Dark Mode area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/default.png"
                             alt="" class="img-fluid">
                        <h5>Default Dark Mode</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>

            </div>
            <!-- OS-based color mode area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/os.png"
                             alt="" class="img-fluid">
                        <h5>OS-based color Mode</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>

            </div>
            <!-- Time-based dark mode area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/time-based.png"
                             alt="" class="img-fluid">
                        <h5>Time-based Dark Mode</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>

            </div>
            <!-- WordPress Login & Register Page Dark Mode area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/login-reg.png"
                             alt="" class="img-fluid">
                        <h5>WordPress Login & Register <br> Page Dark Mode</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>

            </div>
            <!-- Performance Mode area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/performance.png"
                             alt="" class="img-fluid">
                        <h5>Performance Mode</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>

            </div>
            <!-- Save User Choice area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/save-user.png"
                             alt="" class="img-fluid">
                        <h5>Save User Choice</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <!-- <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div> -->
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>

            </div>
            <!-- Admin Dashboard Dark Mode area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/admin.png"
                             alt="" class="img-fluid">
                        <h5>Admin Dashboard Dark Mode</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>

            </div>
            <!-- Dashboard Dark Mode for Specific User Roles area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/specific.png"
                             alt="" class="img-fluid">
                        <h5>Dashboard Dark Mode for <br> Specific User Roles</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>

            </div>
            <!-- Realtime Dark Mode Customization area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/custom-position.png"
                             alt="" class="img-fluid">
                        <h5>Realtime Dark Mode Customization</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>

            </div>
            <!-- Page-Specific Dark Mode -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/page-wish.png"
                             alt="" class="img-fluid">
                        <h5>Page-Specific Dark Mode</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">

                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>

            </div>

            <!-- Floating Dark Mode Toggle Button area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/floating.png"
                             alt="" class="img-fluid">
                        <h5>Floating Dark Mode Toggle Button</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>

            </div>

            <!-- Dark mode Switch in Menu area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/switch.png"
                             alt="" class="img-fluid">
                        <h5>Dark mode switch in the menu</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>

            </div>

            <!-- Multiple Toggle Buttons area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content item-dark-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/multiple-toggle-buttons.png"
                             alt="" class="img-fluid">
                        <h5>Multiple Toggle Buttons</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item item-dark text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes(2 Free & 14+ Pro)</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item item-dark text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes(3 Free & 16+ Pro)</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item item-dark text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes(2 Free & 3+ Pro)</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items item-dark text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-check"></i>
                        <span>Yes(2 Free & 5+ Pro)</span>
                    </div>
                </div>

            </div>

            <!-- Toggle Button Size Customization area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/toggle.png"
                             alt="" class="img-fluid">
                        <h5>Toggle Button Size Customization</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>

            </div>

            <!-- Draggable Floating Switch area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/draggable.png"
                             alt="" class="img-fluid">
                        <h5>Draggable Floating Switch</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>

            </div>

            <!-- Custom Toggle Button Builder area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/custom-toggle.png"
                             alt="" class="img-fluid">
                        <h5>Custom Toggle Button Builder</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>

            </div>
            <!-- Toggle Button Position Customization area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/custom-position.png"
                             alt="" class="img-fluid">
                        <h5>Toggle Button Position Customization</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>

            </div>
            <!-- Page Transition Animation -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/page-transition-animation.png"
                             alt="" class="img-fluid">
                        <h5>Page Transition Animation</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>

            </div>

            <!-- Darkmode Toggle Animation area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/darkmode-animation.png"
                             alt="" class="img-fluid">
                        <h5>Dark mode Toggle Animation</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>NO</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>NO</span>
                    </div>
                </div>
                <!-- <div class="col-lg-3">
                    <div class="items text-center">
                        <i class="fa-solid fa-xmark"></i>
                    </div>     
                </div> -->

            </div>

            <!-- Custom Switch Text & Color area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/custom-text-color.png"
                             alt="" class="img-fluid">
                        <h5>Custom Switch Text & Color</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <!-- <div class="col-lg-3">
                    <div class="items text-center">
                        <i class="fa-solid fa-xmark"></i>
                    </div>     
                </div> -->

            </div>

            <!-- Tooltip area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/tooltip.png"
                             alt="" class="img-fluid">
                        <h5>Tooltip</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>NO</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <!-- <div class="col-lg-3">
                    <div class="items text-center">
                        <i class="fa-solid fa-xmark"></i>
                    </div>     
                </div> -->

            </div>

            <!-- Color Adjustments area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/color-adjust.png"
                             alt="" class="img-fluid">
                        <h5>Color Adjustment</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <!-- <div class="col-lg-3">
                    <div class="items text-center">
                        <i class="fa-solid fa-xmark"></i>
                    </div>     
                </div> -->

            </div>

            <!-- Dynamic Colors area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/dynamic-colors.png"
                             alt="" class="img-fluid">
                        <h5>Dynamic Color</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <!-- <div class="col-lg-3">
                    <div class="items text-center">
                        <i class="fa-solid fa-xmark"></i>
                    </div>     
                </div> -->

            </div>

            <!-- Custom Colors area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/custom-color.png"
                             alt="" class="img-fluid">
                        <h5>Custom Colors</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <!-- <div class="col-lg-3">
                    <div class="items text-center">
                        <i class="fa-solid fa-xmark"></i>
                    </div>     
                </div> -->

            </div>

            <!-- AI Color Generator area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/ai-color-mode.png"
                             alt="" class="img-fluid">
                        <h5>AI Color Generator</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <!-- <div class="col-lg-3">
                    <div class="items text-center">
                        <i class="fa-solid fa-xmark"></i>
                    </div>     
                </div> -->

            </div>

            <!-- Dark Mode Color Presets area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content item-dark-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/presets.png"
                             alt="" class="img-fluid">
                        <h5>Dark Mode Color Presets</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item item-dark text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-check"></i>
                        <span>Yes (2 Free & 15 PRO)</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item item-dark text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes (2 Free & 11 PRO)</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item dark-item item-dark text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes (2 Free & 7 PRO)</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items item-dark text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <!-- <div class="col-lg-3">
                    <div class="items text-center">
                        <i class="fa-solid fa-xmark"></i>
                    </div>     
                </div> -->

            </div>

            <!-- Light Mode Color Presets area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content item-dark-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/presets.png"
                             alt="" class="img-fluid">
                        <h5>Light Mode Color Presets</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item item-dark text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-check"></i>
                        <span>Yes (2 Free & 15 PRO)</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item item-dark text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item dark-item item-dark text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items item-dark text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <!-- <div class="col-lg-3">
                    <div class="items text-center">
                        <i class="fa-solid fa-xmark"></i>
                    </div>     
                </div> -->

            </div>

            <!-- Dark to Light Mode area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content item-dark-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/dark-to-light.png"
                             alt="" class="img-fluid">
                        <h5>Dark to Light Mode</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro item-dark text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item item-dark text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item dark-item item-dark text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items item-dark text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <!-- <div class="col-lg-3">
                    <div class="items text-center">
                        <i class="fa-solid fa-xmark"></i>
                    </div>     
                </div> -->

            </div>

            <!-- Dark Mode Based Typography area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/typography.png"
                             alt="" class="img-fluid">
                        <h5>Dark Mode Based Typography</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <!-- <div class="col-lg-3">
                    <div class="items text-center">
                        <i class="fa-solid fa-xmark"></i>
                    </div>     
                </div> -->

            </div>

            <!-- Darken Background Images area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/background-image.png"
                             alt="" class="img-fluid">
                        <h5>Darken Background Images</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <!-- <div class="col-lg-3">
                    <div class="items text-center">
                        <i class="fa-solid fa-xmark"></i>
                    </div>     
                </div> -->

            </div>

            <!-- Low Brightness Images area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/low-brightness.png"
                             alt="" class="img-fluid">
                        <h5>Low Brightness Images</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <!-- <div class="col-lg-3">
                    <div class="items text-center">
                        <i class="fa-solid fa-xmark"></i>
                    </div>     
                </div> -->

            </div>

            <!-- Grayscale Images area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/grayscale.png"
                             alt="" class="img-fluid">
                        <h5>Grayscale Images</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <!-- <div class="col-lg-3">
                    <div class="items text-center">
                        <i class="fa-solid fa-xmark"></i>
                    </div>     
                </div> -->

            </div>

            <!-- Invert Images area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/invert.png"
                             alt="" class="img-fluid">
                        <h5>Invert Images</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>

            </div>

            <!-- Image Replacement area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/replacement.png"
                             alt="" class="img-fluid">
                        <h5>Image Replacement</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>

            </div>

            <!-- Dark mode based Image Support area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/logo-suport.png"
                             alt="" class="img-fluid">
                        <h5>Dark mode based Image Support</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>

            </div>

            <!-- Dark mode area -->
            <!-- <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/image-support.png" alt="" class="img-fluid">
                        <h5>Dark mode</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>

            </div> -->

            <!-- Dark mode based Video Support area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/video-support.png"
                             alt="" class="img-fluid">
                        <h5>Dark mode based Video Support</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>

            </div>

            <!-- Popular page builder support -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/popular-page.png"
                             alt="" class="img-fluid">
                        <h5>Popular page builder support</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>

            </div>

            <!-- Classic Editor Compatibility -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/classic-editor.png"
                             alt="" class="img-fluid">
                        <h5>Classic Editor Compatibility</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>

            </div>

            <!-- Gutenberg Editor Compatibility area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/gutenberg.png"
                             alt="" class="img-fluid">
                        <h5>Gutenberg Editor Compatibility</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>

            </div>
            <!-- Toggle Button Shortcode area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/button-shortcode.png"
                             alt="" class="img-fluid">
                        <h5>Toggle Button Shortcode</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>

            </div>
            <!-- Keyboard Shortcut area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/keybord.png"
                             alt="" class="img-fluid">
                        <h5>Keybord Shortcode</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">

                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>

            </div>
            <!-- Custom CSS support area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/custom-css.png"
                             alt="" class="img-fluid">
                        <h5>Custom CSS Support</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <!-- <div class="col-lg-3">
                    <div class="items text-center">
                        <i class="fa-solid fa-xmark"></i>
                    </div>     
                </div> -->

            </div>
            <!-- Exclude Elements area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/exclude.png"
                             alt="" class="img-fluid">
                        <h5>Excludes Elements</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>

            </div>
            <!-- Include Elements area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/include.png"
                             alt="" class="img-fluid">
                        <h5>Include Elements</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>

            </div>
            <!-- Exlcude Posts/ Pages area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/exclude.png"
                             alt="" class="img-fluid">
                        <h5>Exclude Pages & Posts</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>

            </div>

            <!-- Dark mode logo support area -->
            <!-- <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/logo-suport.png" alt="" class="img-fluid">
                        <h5>Dark mode logo support</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>  
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>  
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>  
                </div>

            </div> -->

            <!-- <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/woocommerce.png" alt="" class="img-fluid">
                        <h5>WooCommerce Compatibility</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>  
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>  
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>  
                </div>

            </div>

            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/wide-theme.png" alt="" class="img-fluid">
                        <h5>Wide Themes & Plugins Compatibility</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>  
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>  
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>  
                </div>

            </div> -->

            <!-- Usage Analytics & Email Report -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/email-report.png"
                             alt="" class="img-fluid">
                        <h5>Usage Analytics & Email Report</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <!-- <div class="col-lg-3">
                    <div class="items text-center">
                        <i class="fa-solid fa-xmark"></i>
                    </div>     
                </div> -->

            </div>

            <!-- URL Parameter -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/url-parameter.png"
                             alt="" class="img-fluid">
                        <h5>URL Parameter</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <!-- <div class="col-lg-3">
                    <div class="items text-center">
                        <i class="fa-solid fa-xmark"></i>
                    </div>     
                </div> -->

            </div>

            <!-- Tools Settings -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/tools.png"
                             alt="" class="img-fluid">
                        <h5>Tools Settings</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item pro text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Pro</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark"></i>
                        <span>No</span>
                    </div>
                </div>
                <!-- <div class="col-lg-3">
                    <div class="items text-center">
                        <i class="fa-solid fa-xmark"></i>
                    </div>     
                </div> -->

            </div>

            <!-- Works on all devices area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="item-content d-flex justify-content-start align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/dracula/home/compare/works-all-devices.png"
                             alt="" class="img-fluid">
                        <h5>Works on all devices</h5>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="item text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="items text-center d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-check"></i>
                        <span>Yes</span>
                    </div>
                </div>

            </div>

            <!-- pricing area -->
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="dracula-prices"></div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="dracula-price">
                        <div class="hedding">
                            <h6>Pricing</h6>
                            <span class="head">Annual</span>
                            <p>Pro 1 site ($19)</p>
                            <p>Pro 5 site ($39)</p>
                            <p>Ultimated ($99)</p>

                            <span class="head">Lifetime</span>
                            <p>Pro Lifetime 1 site ($39)</p>
                            <p>Lifetime 5 site ($99)</p>
                            <p>Ultimated Lifetime ($199)</p>
                            <!-- <p class="last"> </p> -->
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="wp-dark-price">
                        <div class="hedding">
                            <h6>Pricing</h6>
                            <span class="head">Annual</span>
                            <p>Pro ($39.20)</p>
                            <p>Ultimate ($59.40)</p>
                            <p></p>

                            <span class="head">Lifetime</span>
                            <p>Pro Lifetime ($124.75)</p>
                            <p>Ultimate Lifetime ($206.77)</p>
                            <p class="lst"></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="dark-site-price">
                        <div class="hedding">
                            <h6>Pricing</h6>
                            <span class="head">Annual</span>

                            <p>Pro ($35)</p>
                            <p>Premium 1 site ($59) </p>
                            <p>Unlimited sites ($99)</p>

                            <span class="head">Lifetime</span>

                            <p>Pro ($59)</p>
                            <p>Premium 1 site ($99)</p>
                            <p>Unlimited sites ($149)</p>
                            <p class="lasts"></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="droit-price">
                        <div class="hedding">
                            <h6>Pricing</h6>
                            <span class="head">Annual</span>
                            <p>Personal ($15),</p>
                            <p>Professional ($29)</p>
                            <p>Agency ($49)</p>

                            <span class="head">Lifetime</span>
                            <p>Personal ($25)</p>
                            <p>Professional ($49)</p>
                            <p>Agency ($69)</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>


        <div class="row">
            <div class="col-lg-12 m-auto">
                <div class="update-date text-center">
                    <span>Last Modified : October 03, 2023</span>
                </div>
            </div>
        </div>
    </div>
</section>