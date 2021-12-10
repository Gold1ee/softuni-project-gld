import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div class="page-section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 py-3">
                            <div class="img-fluid text-center">
                                <img src="../assets/img/bg_image_2.png" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6 py-3 pr-lg-5">
                            <h2 class="title-section">We're a <span className="marked">Dynamic</span> Team of international players</h2>
                            <div class="divider"></div>
                            <p>Although different we work together to achieve results in every aspect.</p>
                           

                        </div>
                    </div>
                </div>
            </div>
            <div id="team-info-about">
                <div className="page-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 py-3 wow fadeInLeft">
                                <h2 className="title-section">We're <span className="marked">ready to</span> answer your quesitons</h2>
                                <div className="divider"></div>
                                <p className="mb-5">We provide a forum where you can ask anything about the game.</p>
                                <Link to="/blog" className="btn btn-primary">Blog</Link>
                        
                            </div>
                            <div className="col-lg-6 py-3 wow zoomIn">
                                <div className="img-place text-center">
                                    <img src="./assets/img/bg_image_3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="page-section bg-light">
                <div class="container">

                    <div class="owl-carousel" id="testimonials">
                        <div class="item">
                            <div class="row align-items-center">
                                <div class="col-md-6 py-3">
                                    <div class="testi-image">
                                        <img src="../assets/img/person/person_1.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="col-md-6 py-3">
                                    <div class="testi-content">
                                        <p>Necessitatibus ipsum magni accusantium consequatur delectus a repudiandae nemo quisquam dolorum itaque, tenetur, esse optio eveniet beatae explicabo sapiente quo.</p>
                                        <div class="entry-footer">
                                            <strong>Melvin Platje</strong> &mdash; <span class="text-grey">CEO Slurin Group</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="row align-items-center">
                                <div class="col-md-6 py-3">
                                    <div class="testi-image">
                                        <img src="../assets/img/person/person_2.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="col-md-6 py-3">
                                    <div class="testi-content">
                                        <p>Repudiandae vero assumenda sequi labore ipsum eos ducimus provident a nam vitae et, dolorum temporibus inventore quaerat consectetur quos! Animi, qui ratione?</p>
                                        <div class="entry-footer">
                                            <strong>George Burke</strong> &mdash; <span class="text-grey">CEO Letro</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="page-section client-section">
                <div class="container-fluid">
                    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
                        <div class="item">
                            <img src="../assets/img/clients/airbnb.png" alt="" />
                        </div>
                        <div class="item">
                            <img src="../assets/img/clients/google.png" alt="" />
                        </div>
                        <div class="item">
                            <img src="../assets/img/clients/stripe.png" alt="" />
                        </div>
                        <div class="item">
                            <img src="../assets/img/clients/paypal.png" alt="" />
                        </div>
                        <div class="item">
                            <img src="../assets/img/clients/mailchimp.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About