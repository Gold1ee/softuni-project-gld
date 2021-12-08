import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className="page-banner home-banner">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-lg-6 py-3 wow fadeInUp">
                            <h1 className="mb-4">oSynergy</h1>
                            <p className="text-lg mb-5">A Counter-Strike Global Offensive team</p>

                            <Link to="#" className="btn btn-outline border text-secondary">More Info</Link>
                            <Link to="#" className="btn btn-primary btn-split ml-2">Join our Discord <div className="fab"><img id='discord'src="./assets/img/home/discord.png"/></div></Link>
                        </div>
                        <div className="col-lg-6 py-3 wow zoomIn">
                            <div className="img-place">
                                <img src="./assets/img/home/Logo-BlckT.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-section features">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
                            <div className="d-flex flex-row">
                                <div className="img-fluid mr-3">
                                    <img src="./assets/img/icon_pattern.svg" alt="" />
                                </div>
                                <div>
                                    <h5>Provide financial advice by our advisor</h5>
                                    <p>Copywrite, blogpublic realations content translation.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
                            <div className="d-flex flex-row">
                                <div className="img-fluid mr-3">
                                    <img src="./assets/img/icon_pattern.svg" alt="" />
                                </div>
                                <div>
                                    <h5>Complete solutions for global organisations</h5>
                                    <p>Copywrite, blogpublic realations content translation.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
                            <div className="d-flex flex-row">
                                <div className="img-fluid mr-3">
                                    <img src="./assets/img/icon_pattern.svg" alt="" />
                                </div>
                                <div>
                                    <h5>Provide financial advice by our advisor</h5>
                                    <p>Copywrite, blogpublic realations content translation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 py-3 wow zoomIn">
                            <div className="img-place text-center">
                                <img src="./assets/img/bg_image_2.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 py-3 wow fadeInRight">
                            <h2 className="title-section">We're <span className="marked">Dynamic</span> Team of Creatives People</h2>
                            <div className="divider"></div>
                            <p>We provide marketing services to startups  small business to looking for partner for their digital media, design  dev lead generation communication.</p>
                            
                            <Link to="#" className="btn btn-primary">More Details</Link>
                            <Link to="#" className="btn btn-outline border ml-2">Success Stories</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-section counter-section">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-lg-4">
                            <p>Total Invest</p>
                            <h2>$<span className="number" data-number="816278"></span></h2>
                        </div>
                        <div className="col-lg-4">
                            <p>Yearly Revenue</p>
                            <h2>$<span className="number" data-number="216422"></span></h2>
                        </div>
                        <div className="col-lg-4">
                            <p>Growth Ration</p>
                            <h2><span className="number" data-number="73"></span>%</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 py-3 wow fadeInLeft">
                            <h2 className="title-section">We're <span className="marked">ready to</span> Serve you with best</h2>
                            <div className="divider"></div>
                            <p className="mb-5">We provide marketing services to startups small business to looking for partner for their digital media, design dev lead generation communication.</p>
                            <Link to="#" className="btn btn-primary">More Details</Link>
                            <Link to="#" className="btn btn-outline ml-2">See pricing</Link>
                        </div>
                        <div className="col-lg-6 py-3 wow zoomIn">
                            <div className="img-place text-center">
                                <img src="./assets/img/bg_image_3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-section">
                <div className="container">
                    <div className="text-center wow fadeInUp">
                        <div className="subhead">Why Choose Us</div>
                        <h2 className="title-section">Your <span className="marked">Comfort</span> is Our Priority</h2>
                        <div className="divider mx-auto"></div>
                    </div>

                    <div className="row mt-5 text-center">
                        <div className="col-lg-4 py-3 wow fadeInUp">
                            <div className="display-3"><span className="mai-shapes"></span></div>
                            <h5>High Performance</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit.</p>
                        </div>
                        <div className="col-lg-4 py-3 wow fadeInUp">
                            <div className="display-3"><span className="mai-shapes"></span></div>
                            <h5>Friendly Prices</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit.</p>
                        </div>
                        <div className="col-lg-4 py-3 wow fadeInUp">
                            <div className="display-3"><span className="mai-shapes"></span></div>
                            <h5>No time-confusing</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-section border-top">
                <div className="container">
                    <div className="text-center wow fadeInUp">
                        <h2 className="title-section">Pricing Plan</h2>
                        <div className="divider mx-auto"></div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-auto py-3 wow fadeInLeft">
                            <div className="card-pricing">
                                <div className="header">
                                    <div className="price-icon"><span className="mai-people"></span></div>
                                    <div className="price-title">Membership</div>
                                </div>
                                <div className="body py-3">
                                    <div className="price-tag">
                                        <span className="currency">$</span>
                                        <h2 className="display-4">30</h2>
                                        <span className="period">/monthly</span>
                                    </div>
                                    <div className="price-info">
                                        <p>Choose the plan that right for you</p>
                                    </div>
                                </div>
                                <div className="footer">
                                    <Link to="#" className="btn btn-outline rounded-pill">Choose Plan</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-auto py-3 wow fadeInUp">
                            <div className="card-pricing active">
                                <div className="header">
                                    <div className="price-labled">Best</div>
                                    <div className="price-icon"><span className="mai-business"></span></div>
                                    <div className="price-title">Dedicated</div>
                                </div>
                                <div className="body py-3">
                                    <div className="price-tag">
                                        <span className="currency">$</span>
                                        <h2 className="display-4">60</h2>
                                        <span className="period">/monthly</span>
                                    </div>
                                    <div className="price-info">
                                        <p>Choose the plan that right for you</p>
                                    </div>
                                </div>
                                <div className="footer">
                                    <Link to="#" className="btn btn-outline rounded-pill">Choose Plan</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-auto py-3 wow fadeInRight">
                            <div className="card-pricing">
                                <div className="header">
                                    <div className="price-icon"><span className="mai-rocket-outline"></span></div>
                                    <div className="price-title">Private</div>
                                </div>
                                <div className="body py-3">
                                    <div className="price-tag">
                                        <span className="currency">$</span>
                                        <h2 className="display-4">90</h2>
                                        <span className="period">/monthly</span>
                                    </div>
                                    <div className="price-info">
                                        <p>Choose the plan that right for you</p>
                                    </div>
                                </div>
                                <div className="footer">
                                    <Link to="#" className="btn btn-outline rounded-pill">Choose Plan</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="page-section bg-light">
                <div className="container">

                    <div className="owl-carousel wow fadeInUp" id="testimonials">
                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-md-6 py-3">
                                    <div className="testi-image">
                                        <img src="./assets/img/person/person_1.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6 py-3">
                                    <div className="testi-content">
                                        <p>Necessitatibus ipsum magni accusantium consequatur delectus a repudiandae nemo quisquam dolorum itaque, tenetur, esse optio eveniet beatae explicabo sapiente quo.</p>
                                        <div className="entry-footer">
                                            <strong>Melvin Platje</strong> &mdash; <span className="text-grey">CEO Slurin Group</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-md-6 py-3">
                                    <div className="testi-image">
                                        <img src="./assets/img/person/person_2.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6 py-3">
                                    <div className="testi-content">
                                        <p>Repudiandae vero assumenda sequi labore ipsum eos ducimus provident a nam vitae et, dolorum temporibus inventore quaerat consectetur quos! Animi, qui ratione?</p>
                                        <div className="entry-footer">
                                            <strong>George Burke</strong> &mdash; <span className="text-grey">CEO Letro</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="page-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 py-3 wow fadeInUp">
                            <h2 className="title-section">Get in Touch</h2>
                            <div className="divider"></div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Laborum ratione autem quidem veritatis!</p>

                            <ul className="contact-list">
                                <li>
                                    <div className="icon"><span className="mai-map"></span></div>
                                    <div className="content">123 Fake Street, New York, USA</div>
                                </li>
                                <li>
                                    <div className="icon"><span className="mai-mail"></span></div>
                                    <div className="content"><Link to="#">info@digigram.com</Link></div>
                                </li>
                                <li>
                                    <div className="icon"><span className="mai-phone-portrait"></span></div>
                                    <div className="content"><Link to="#">+00 1122 3344 55</Link></div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 py-3 wow fadeInUp">
                            <div className="subhead">Contact Us</div>
                            <h2 className="title-section">Drop Us a Line</h2>
                            <div className="divider"></div>

                            <form action="#">
                                <div className="py-2">
                                    <input type="text" className="form-control" placeholder="Full name" />
                                </div>
                                <div className="py-2">
                                    <input type="text" className="form-control" placeholder="Email" />
                                </div>
                                <div className="py-2">
                                    <textarea rows="6" className="form-control" placeholder="Enter message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary rounded-pill mt-4">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-section border-top">
                <div className="container">
                    <div className="text-center wow fadeInUp">
                        <div className="subhead">Our Blog</div>
                        <h2 className="title-section">Read our latest <span className="marked">News</span></h2>
                        <div className="divider mx-auto"></div>
                    </div>
                    <div className="row my-5 card-blog-row">
                        <div className="col-md-6 col-lg-3 py-3 wow fadeInUp">
                            <div className="card-blog">
                                <div className="header">
                                    <div className="entry-footer">
                                        <div className="post-author">Sam Newman</div>
                                        <Link to="#" className="post-date">23 Apr 2020</Link>
                                    </div>
                                </div>
                                <div className="body">
                                    <div className="post-title"><Link to="blog-single.html">What is Business Management?</Link></div>
                                </div>
                                <div className="footer">
                                    <Link to="blog-single.html">Read More <span className="mai-chevron-forward text-sm"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 py-3 wow fadeInUp">
                            <div className="card-blog">
                                <div className="header">
                                    <div className="avatar">
                                        <img src="./assets/img/person/person_1.jpg" alt="" />
                                    </div>
                                    <div className="entry-footer">
                                        <div className="post-author">Sam Newman</div>
                                        <Link to="#" className="post-date">23 Apr 2020</Link>
                                    </div>
                                </div>
                                <div className="body">
                                    <div className="post-title"><Link to="blog-single.html">What is Business Management?</Link></div>
                                    <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                </div>
                                <div className="footer">
                                    <Link to="blog-single.html">Read More <span className="mai-chevron-forward text-sm"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 py-3 wow fadeInUp">
                            <div className="card-blog">
                                <div className="header">
                                    <div className="avatar">
                                        <img src="./assets/img/person/person_2.jpg" alt="" />
                                    </div>
                                    <div className="entry-footer">
                                        <div className="post-author">Sam Newman</div>
                                        <Link to="#" className="post-date">23 Apr 2020</Link>
                                    </div>
                                </div>
                                <div className="body">
                                    <div className="post-title"><Link to="blog-single.html">What is Business Management?</Link></div>
                                    <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                </div>
                                <div className="footer">
                                    <Link to="blog-single.html">Read More <span className="mai-chevron-forward text-sm"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 py-3 wow fadeInUp">
                            <div className="card-blog">
                                <div className="header">
                                    <div className="avatar">
                                        <img src="./assets/img/person/person_3.jpg" alt="" />
                                    </div>
                                    <div className="entry-footer">
                                        <div className="post-author">Sam Newman</div>
                                        <Link to="#" className="post-date">23 Apr 2020</Link>
                                    </div>
                                </div>
                                <div className="body">
                                    <div className="post-title"><Link to="blog-single.html">What is Business Management?</Link></div>
                                    <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                </div>
                                <div className="footer">
                                    <Link to="blog-single.html">Read More <span className="mai-chevron-forward text-sm"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link to="blog.html" className="btn btn-outline-primary rounded-pill">Discover More</Link>
                    </div>
                </div>
            </div>

            <div className="page-section client-section">
                <div className="container-fluid">
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
                        <div className="item wow zoomIn">
                            <img src="./assets/img/clients/airbnb.png" alt="" />
                        </div>
                        <div className="item wow zoomIn">
                            <img src="./assets/img/clients/google.png" alt="" />
                        </div>
                        <div className="item wow zoomIn">
                            <img src="./assets/img/clients/stripe.png" alt="" />
                        </div>
                        <div className="item wow zoomIn">
                            <img src="./assets/img/clients/paypal.png" alt="" />
                        </div>
                        <div className="item wow zoomIn">
                            <img src="./assets/img/clients/mailchimp.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Home