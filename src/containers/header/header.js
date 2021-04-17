import React, {useState,Fragment} from 'react';
import './header.css';
import NavigationItem from "../../components/Navigation/NavigationItem";
import ContactModel from "../contactmodel/contactmodel";
import HamburgerIcon from '../../image_folder/Mobile/Hamburger.svg';

function Header() {

  const headerModelNavState = {
    openContactModel: false,
    showMobileNavbar: false
  };
  const [modelNavState, setHeaderModelNavState] = useState(headerModelNavState);

  function triggerNavbar () {
    setHeaderModelNavState(
      {
        ...modelNavState,
          showMobileNavbar : ! modelNavState.showMobileNavbar
      }
    )
  }

  function triggerContactModel () {
    setHeaderModelNavState(
      {
        ...modelNavState,
        openContactModel : ! modelNavState.openContactModel
      }
    )
  }

  return (
    <Fragment>
      <div className="header-desktop d-none d-sm-block logo-header tab-active-scroll" id="logo-header">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 d-flex">
              <div className="afs-sticker-logo align-self-center">
                <NavigationItem link='/' exact targetId="#section1" navigateToView={true}>
                  <div className='home_logo'/>
                </NavigationItem>
              </div>
            </div>
            <div className="col-sm-9 logo-section">
              <div className="d-none d-sm-block desk-nav">
                <ul className="nav justify-content-end">
                  <NavigationItem link='/' targetId="#section1" navigateToView={true}>
                    HOME
                  </NavigationItem>
                  <NavigationItem link='/' targetId="#section-2" navigateToView={true}>
                    ABOUT US
                  </NavigationItem>
                  <NavigationItem link='/' targetId="#section-3" navigateToView={true}>
                    OUR SERVICES
                  </NavigationItem>
                  <NavigationItem link='/properties' navigateToView={false}>PROPERTIES</NavigationItem>
                  <li className="nav-item">
                    <a className="nav-link contact-cta Contact_Us" onClick={triggerContactModel}
                       data-toggle="modal" data-target="#myModal"
                       style={{color: 'white !important'}}>CONTACT US</a>
                    <ContactModel show={modelNavState.openContactModel} closeContactModel={triggerContactModel}/>
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
              <button className="navbar-toggler" type="button" onClick={triggerNavbar}>
                <img src={HamburgerIcon} />
              </button>
              &nbsp;&nbsp;
            </div>
            <div className="col-6 justify-content-end"
                 style={{paddingTop: '15px', textAlign: '-webkit-right'}}>
              <ul>
                <li className="nav-item">
                  <a className="nav-link contact-cta Contact_Us" onClick={triggerContactModel}
                     data-toggle="modal" data-target="#myModal"
                     style={{color: 'white !important'}}>CONTACT US</a>
                  <ContactModel show={modelNavState.openContactModel} closeContactModel={triggerContactModel}/>
                </li>
              </ul>
            </div>
          </div>
          {modelNavState.showMobileNavbar ? (
            <div className="row  navbar-collapse" id="collapsibleNavbar"
                 style={{backgroundColor: '#000'}}>
              <ul className="navbar-nav">
                <NavigationItem link='/' targetId="#section1" navigateToView={true} triggerNav={triggerNavbar}>HOME</NavigationItem>
                <NavigationItem link='/' targetId="#section-2" navigateToView={true} triggerNav={triggerNavbar}>ABOUT US</NavigationItem>
                <NavigationItem link='/' targetId="#section-3" navigateToView={true} triggerNav={triggerNavbar}>OUR SERVICES</NavigationItem>
                <NavigationItem link='/properties' navigateToView={false} triggerNav={triggerNavbar}>PROPERTIES</NavigationItem>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
