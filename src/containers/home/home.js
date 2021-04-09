import React, {Component} from 'react';
import './home.css';
import NavigationItem from "../../components/Navigation/NavigationItem";

class Home extends Component {
    render (){
        return (
                <div>
                    <div className="section1" id="section1">
                        <div className="container">
                            <div className="line2 d-block d-sm-none">
                            </div>
                            <div className="line1">"Join with us for <b><i>Information</i></b> and <b><i>Inspiration</i></b>"</div>

                            <div className="row section1-main" id="contact-section">
                                <div className="col-sm-4 col-4 email_us">
                                    <a href="mailto:contact@gyagencies.com">
                                        <div className="icon">
                                            <div className='email_icon'/>
                                        </div>
                                        <div className="heading">EMAIL US</div>
                                        <div className="contact">contact@gyagencies.com</div>
                                    </a>
                                </div>
                                <div className="col-sm-4 col-4 call_us">
                                    <a href="tel:+91-9985556775">
                                        <div class="icon">
                                            <div className='phone_icon'/>
                                        </div>
                                        <div class="heading">CALL US</div>
                                        <div class="contact">+91-9985556775</div>
                                        <div class="contact">+91-9985556776</div>
                                    </a>
                                </div>
                                <div class="col-sm-4 col-4 support">
                                    <div class="icon">
                                        <div className='support_icon'/>
                                    </div>
                                    <div class="heading">SUPPORT</div>
                                    <div class="contact">Chat with us</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-2 tab-active-scroll" id="section-2">
                        <div className="container">
                            <div className="row flex-direction ipad-row-riverse">
                                <div className="col-sm-7 col-12 about-us-left">
                                    <div className="heading d-none d-sm-block">ABOUT US</div>
                                    <div className="about_us_text">
                                        <b>Welcome to GY Agencies,</b><br />
                                        As a property portal, we're passionate about helping people find their perfect
                                        homes and open plots.
                                        In addition, we provide Real Estate Industry with an unparalleled brand-building
                                        and marketing platform <br />
                                        with powerful opportunities to connect with home and open plots buyers searching
                                        for property online.
                                    </div>
                                    <div className="learn-more">
                                        <NavigationItem link="/about">
                                            <button className="afs-button">
                                                LEARN MORE
                                            </button>
                                        </NavigationItem>
                                    </div>
                                </div>
                                <div className="col-sm-5 col-12 about-us-right">
                                    <div className="about_image float-right" width="100%" />
                                </div>
                                <div className="mobile-about-heading d-sm-none" id="mobile-about-heading">
                                    <span>ABOUT US</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="section-3 tab-active-scroll" id="section-3">
                        <div className="container">
                            <div className="heading text-center">OUR SERVICES</div>
                            <div id="services">
                                <div>
                                    <ul>
                                        <li>Agents</li>
                                        <li>Builders</li>
                                        <li>Architects</li>
                                        <li>Interior Decorators</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>Building Contractors</li>
                                        <li>Property Consultants</li>
                                        <li>Vaastu Consultants</li>
                                        <li>Home Inspection</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Home;