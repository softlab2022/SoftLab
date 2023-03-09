<?php 

/*
Template Name: Affiliates area
*/

get_header();

?>

 <!--affiliate banner area_--->
    <section class="page-banner">
        
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h1>Affiliate Area</h1>  
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> 
                </div>
            </div>
        </div>
        </section>

        <!--affiliate area_--->
        <div class="affiliate-contact-area py-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="card">
                            
                            <div class="card-body">
                                <form action="http://test.local/affiliate-contact/" id="datasend" class="needs-validation" novalidate >

                                    <div class="my-4">
                                        <label for="Aemail"> Email Address *</label>
                                        <input type="email" id="email" placeholder="Your Email" class="form-control"  value="" required>
                                        
                                        <div class="msg"></div>
                                    </div>

                                    <div class="my-4">
                                        <label for="name">Full name *</label>
                                        <input type="text" id="name" placeholder="Name" class="form-control" value="" required>
                                        <div class="msg"></div>
                                    </div>
                                    
                                    <div class="my-4">
                                        <label for="pemail">PayPal account email address *</label>
                                        <input type="email" id="pemail" placeholder="Payment Email" class="form-control" value="" required>
                                        <div class="msg"></div>
                                    </div>

                                    <div class="my-4">
                                        <label for="website">Where are going to promote the pluign? *</label>
                                        <input type="text" id="website" placeholder="Website" class="form-control" required >
                                        <div class="msg"></div>
                                        <p>Enter the domain of your website or other website from where you plan to promote the plugin</p>
                                     </div>

                                <div class="my-4">
                                    <label for="">Promotion methods</label>

                                    <div class="d-flex align-items-center checkb">

                                    <input type="checkbox" id="media" class="me-2  mt-1 label-color" value=[] required>
                                    
                                    <label for="media" class="">Social media(Facebook , Twitter etc.. )</label>

                                    </div>
                                        

                                        <div class="d-flex align-items-center mt-1">
                                            <input type="checkbox" id="app" class="me-2 mt-1 label-color" value="[]" required>
                                        
                                            <label for="app" class="">Mobile apps</label>
                                        </div>
                                        
                                    </div>
                                    <div class="msg"></div>  
                                    <div class="my-4">
                                        <label for="socialsite">Website, Email, social media statistics (optionals);</label>
                                        <textarea name="" class="form-control" id="socialsite" cols="30"  rows="5"></textarea>
                                        <div class="msg"></div>
                                        <p class="mt-2">Please feel free to provide any relevent website or social media statistics e.g monthly unique site visits, Number of email subscriber followers (we will keep this information confidential) </p>
                                    </div>

                                    <div class="my-4">
                                        <label for="site">How will you promote us? *</label>
                                        <textarea name="" class="form-control" id="site" cols="30" rows="5" required ></textarea>
                                        <div class="msg"></div>
                                        <p class="mt-2">Please provide details on how you intend to promote integrate Google Drive (Please be specific as possible)</p>
                                    </div>

                                    <div class="my-4">
                                        <input type="checkbox" id="agree">
                                        
                                        <label for="agree" class="ms-2">I agree to the <a href="#">Referrer Program </a>terms & conditions</label>
                                        <div class="msg"></div>
                                    </div>
                                   
                                    <div class="my-4">
                                    <input type="submit" id="submit" class=" btn-button form-control" value="Register">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--ctp section-->
        <!-- <div class="cta-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="cta-banner home-cta">
                            <div class="sub-cta">
                                <h2>Subscribe to get product updates</h2>
                                <p>Get exclusive updates on discounts, product updates, WordPress news &amp; tips</p>
                            </div>
                            
                            <form action="">
                                <input type="text" name="email" placeholder="Email address">
                                <button type="submit"><span class="icon icon-sent">subscribe</span></button>
                            </form>
                        </div> 
                    </div>
                </div>
            </div>
        </div> -->
        <!--//ctp section-->


<?php
get_footer();