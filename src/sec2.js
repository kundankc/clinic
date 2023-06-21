import React from 'react'

const Section2  = () => {
  return <>
  <section className="about section-padding" id="section_2">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <img src="./images/couple-working-from-home-together-sofa.jpg" className="about-image img-fluid" />
                        </div>

                        <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                            <div className="about-thumb">

                                <div className="section-title-wrap d-flex justify-content-end align-items-center mb-4">
                                    <h2 className="text-white me-4 mb-0">My Story</h2>

                                    <img src="images/happy-bearded-young-man.jpg" className="avatar-image img-fluid" />
                                </div>

                                <h3 className="pt-2 mb-3">a little bit about Joshua</h3>

                                <p>This one-page HTML portfolio is provided by <a href="https://templatemo.com" target="_blank">TemplateMo</a>. This layout is based on Bootstrap v5.1.3 CSS and JS libraries. Image credits go to <a href="https://unsplash.com" target="_blank">Unsplash</a> and <a href="https://freepik.com" target="_blank">FreePik</a> for /images used in this page.</p>

                                <p>You are allowed to use this template for your websites. You are not allowed to redistribute the template ZIP file on any other website. Please <a href="https://templatemo.com/contact" target="_blank">contact us</a> for more info.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="featured section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <div className="profile-thumb">
                                <div className="profile-title">
                                    <h4 className="mb-0">Information</h4>
                                </div>

                                <div className="profile-body">
                                    <p>
                                        <span className="profile-small-title">Name</span> 
                                        <span>Joshua Morgan</span>
                                    </p>

                                    <p>
                                        <span className="profile-small-title">Birthday</span> 
                                        <span>Aug 12, 1986</span>
                                    </p>

                                    <p>
                                        <span className="profile-small-title">Phone</span> 
                                         <span><a href="tel: 305-240-9671">120-240-9600</a></span>
                                    </p>

                                    <p>
                                        <span className="profile-small-title">Email</span> 
                                        <span><a href="mailto:hello@josh.design">hello@josh.design</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                            <div className="about-thumb">
                                <div className="row">
                                    <div className="col-lg-6 col-6 featured-border-bottom py-2">
                                        <strong className="featured-numbers">20+</strong>

                                        <p className="featured-text">Years of Experiences</p>
                                    </div>

                                    <div className="col-lg-6 col-6 featured-border-start featured-border-bottom ps-5 py-2">
                                        <strong className="featured-numbers">245</strong>

                                        <p className="featured-text">Happy Customers</p>
                                    </div>

                                    <div className="col-lg-6 col-6 pt-4">
                                        <strong className="featured-numbers">640</strong>

                                        <p className="featured-text">Project Finished</p>
                                    </div>

                                    <div className="col-lg-6 col-6 featured-border-start ps-5 pt-4">
                                        <strong className="featured-numbers">72+</strong>

                                        <p className="featured-text">Digital Awards</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="clients section-padding">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-12 col-12">
                            <h3 className="text-center mb-5">Companies I've had worked</h3>
                        </div>

                        <div className="col-lg-2 col-4 ms-auto clients-item-height">
                            <img src="/images/clients/cachet.svg" className="clients-image img-fluid" />
                        </div>

                        <div className="col-lg-2 col-4 clients-item-height">
                            <img src="/images/clients/guitar-center.svg" className="clients-image img-fluid" />
                        </div>

                        <div className="col-lg-2 col-4 clients-item-height">
                            <img src="/images/clients/tokico.svg" className="clients-image img-fluid" />
                        </div>

                        <div className="col-lg-2 col-4 clients-item-height">
                            <img src="/images/clients/shopify.svg" className="clients-image img-fluid" />
                        </div>

                        <div className="col-lg-2 col-4 me-auto clients-item-height">
                            <img src="/images/clients/profil-rejser.svg" className="clients-image img-fluid" />
                        </div>

                    </div>
                </div>
            </section>

  
  </>
}

export default Section2 