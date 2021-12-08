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

                            <Link to="/about" className="btn btn-outline border text-secondary">More Info</Link>
                            <Link to="/discord" className="btn btn-primary btn-split ml-2">Join our Discord <div className="fab"><img id='discord' src="./assets/img/home/discord.png" /></div></Link>
                            
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
                    <h2 className="goals-heading">Our Goals</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
                            <div className="d-flex flex-row">
                                <div className="img-fluid mr-3">
                                    <img src="./assets/img/icon_pattern.svg" alt="" />
                                </div>
                                <div>
                                    <h5>Compete in tournaments</h5>
                                    <p>Faceit, ESEA, etc.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
                            <div className="d-flex flex-row">
                                <div className="img-fluid mr-3">
                                    <img src="./assets/img/icon_pattern.svg" alt="" />
                                </div>
                                <div>
                                    <h5>Grow as players on individual level</h5>
                                    <p>Achieve higher ranks in Faceit</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
                            <div className="d-flex flex-row">
                                <div className="img-fluid mr-3">
                                    <img src="./assets/img/icon_pattern.svg" alt="" />
                                </div>
                                <div>
                                    <h5>Have fun and enjoy the journey together</h5>
                                    <p>You always have to have fun. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-us">
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