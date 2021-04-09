import React, {Component} from 'react';

class About extends Component {
    componentWillMount() {
        window.scrollTo(0, 0)
    }

    render (){
        return (
            <div>
                <div className="" id="about-us-more" style={{clear: 'both'}}>
                    <div className="container">
                        <div>
                            <h2>
                                <i>Who we are</i>
                            </h2>
                        </div>

                        <br />
                            <div>
                                <h3>Welcome to GY Agencies,<br />
                                    one stop solution for all property needs...</h3>
                            </div>
                            <br />
                                <div style={{fontFamily: 'proximaNovaSemiBold', fontSize: '24px'}}>

                                </div>
                                <br />
                                    <div className="abt-content">
                                        As a property portal, we're passionate about helping people find their perfect
                                        homes and open plots.
                                        In addition, we provide Real Estate Industry with an unparalleled brand-building
                                        and marketing platform, with powerful opportunities to connect with home and
                                        open plots buyers searching for property online.
                                        <br /><br />
                                            We're dedicated to making sure that we're available wherever property
                                            hunters are,
                                            and whenever they need us,
                                            which is why we have desktop and mobile website available for all major
                                            platforms and Social Media.
                                            <br /><br />
                                                With the Kunrool market being our home base, expansion is a key focus
                                                for our business.
                                                With competitive property portals now in market our footprint continues
                                                to expand into new and exciting position.

                                                <br /><br />
                                                    And if you're passionate about helping others to find their perfect
                                                    homes through technology,
                                                    why not join our dynamic team and work for us?
                                                    <br /><br />
                                                        If you're passionate about technology and being part of
                                                        something that matters,
                                                        we're always looking for talented and innovative individuals to
                                                        join our team.
                                                        If you're interested, we'd love to meet you.
                                    </div>
                                    <br />
                                        <div>
                                            <h2 className="our-vision">Our Vision:</h2>
                                            <div className="abt-content">
                                                <b>GY Agencies</b> Vision is “Leveraging the most emergent technologies
                                                and social media strategies, The Agency envisions itself as more than
                                                just a real estate brokerage; it is a lifestyle company committed to
                                                informing and connecting global communities.”
                                            </div>
                                        </div>
                                        <br /><br />
                                            <div>
                                                <h2 className="our-vision">Our Mission:</h2>
                                                <div className="abt-content">
                                                    <b>GY Agencies</b> Our Mission is to modernize and progress the
                                                    experience of buying and selling real estate by cultivating a spirit
                                                    of collaboration, innovation, and integrity.<br />
                                                    “The Agency fosters a culture of partnership in which all clients
                                                    and listings are represented in a cooperative environment by all its
                                                    agents, thereby ensuring its clients and listings have the
                                                    competitive edge.”
                                                </div>
                                            </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default About;