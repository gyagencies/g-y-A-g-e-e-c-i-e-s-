import React, {Component} from 'react';
import './header.css';
import NavigationItem from "../../components/Navigation/NavigationItem";
import ContactModel from "../contactmodel/contactmodel";
import HamburgerIcon from '../../image_folder/Mobile/Hamburger.svg'

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            openContactModel: false,
            showMobileNavbar: false
        }
    }
    triggerNavbar(){
        this.setState({showMobileNavbar: !this.state.showMobileNavbar});
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
                                <button className="navbar-toggler" type="button" onClick={this.triggerNavbar.bind(this)}>
                                    <img src={HamburgerIcon} />
                                </button>
                                &nbsp;&nbsp;
                            </div>
                            <div className="col-6 justify-content-end"
                                 style={{paddingTop: '15px', textAlign: 'right'}}>
                                <ul>
                                    <li className="nav-item">
                                        <a className="nav-link contact-cta Contact_Us" onClick={this.triggerContactModel.bind(this)}
                                           data-toggle="modal" data-target="#myModal"
                                           style={{color: 'white !important'}}>CONTACT US</a>
                                        <ContactModel show={this.state.openContactModel} closeContactModel={this.triggerContactModel.bind(this)}/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {this.state.showMobileNavbar ? (
                            <div className="row  navbar-collapse" id="collapsibleNavbar"
                                 style={{backgroundColor: '#000'}}>
                                <ul className="navbar-nav">
                                    <NavigationItem link='/'>HOME</NavigationItem>
                                    <NavigationItem link='/'>ABOUT US</NavigationItem>
                                    <NavigationItem link='/'>OUR SERVICES</NavigationItem>
                                    <NavigationItem link='/properties'>PROPERTIES</NavigationItem>
                                </ul>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;