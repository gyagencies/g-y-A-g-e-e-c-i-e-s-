import React, {Component} from 'react';
import './header.css';
import NavigationItem from "../../components/Navigation/NavigationItem";
import ContactModel from "../contactmodel/contactmodel";
import HamburgerIcon from '../../image_folder/Mobile/Hamburger.svg'

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            openContactModel: false
        }
    }
    triggerContactModel() {
        this.setState({ openContactModel: !this.state.openContactModel})
    }
    render (){
        return (
            <div>
                <div className="header-desktop d-none d-sm-block logo-header tab-active-scroll" id="logo-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 d-flex">
                                <div className="afs-sticker-logo align-self-center">
                                        <NavigationItem link='/' exact>
                                            <div className='home_logo'/>
                                        </NavigationItem>
                                </div>
                            </div>
                            <div className="col-sm-9 logo-section">
                                <div className="d-none d-sm-block desk-nav">
                                    <ul className="nav justify-content-end">
                                        <NavigationItem link='/'>HOME</NavigationItem>
                                        <NavigationItem link='/'>ABOUT US</NavigationItem>
                                        <NavigationItem link='/'>OUR SERVICES</NavigationItem>
                                        <NavigationItem link='/properties'>PROPERTIES</NavigationItem>
                                        <li className="nav-item">
                                            <a className="nav-link contact-cta Contact_Us" onClick={this.triggerContactModel.bind(this)}
                                               data-toggle="modal" data-target="#myModal"
                                               style={{color: 'white !important'}}>CONTACT US</a>
                                            <ContactModel show={this.state.openContactModel} closeContactModel={this.triggerContactModel.bind(this)}/>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-block d-sm-none header-mobile logo-header" id="logo-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 logo-section">
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#collapsibleNavbar">
                                    <img src={HamburgerIcon} />
                                </button>
                                &nbsp;&nbsp;
                            </div>
                            <div className="col-6 justify-content-end"
                                 style={{paddingTop: '15px', textAlign: 'right'}}>
                                <ul>
                                    <li style={{paddingTop: '5px', paddingRight: '10px'}}>
                                        <a className="nav-link contact-cta Contact_Us" onClick={this.triggerContactModel.bind(this)} style={{color: 'white'}}>
                                            CONTACT US
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row collapse navbar-collapse" id="collapsibleNavbar"
                             style={{backgroundColor: '#000'}}>
                            <ul className="navbar-nav">
                                <li className="nav-item" data-toggle="collapse" data-target="#collapsibleNavbar">
                                    <a className="nav-link home_link active-item" data-id="#logo-header"
                                       href="javascript:void(0)">HOME</a>
                                </li>
                                <li className="nav-item" data-toggle="collapse" data-target="#collapsibleNavbar">
                                    <a className="nav-link aboutus_header" data-id="#section-2"
                                       href="javascript:void(0)">ABOUT US</a>
                                </li>
                                <li className="nav-item" data-toggle="collapse" data-target="#collapsibleNavbar">
                                    <a className="nav-link feature_header" data-id="#section-3"
                                       href="javascript:void(0)">OUR SERVICES</a>
                                </li>
                                <li className="nav-item" data-toggle="collapse" data-target="#collapsibleNavbar">
                                    <a className="nav-link service_header" data-id="#section-5"
                                       href="properties.html">PROPERTIES</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;