import React from 'react';
import {NavLink} from 'react-router-dom';
import $ from "jquery";


function NavigationItem (props) {
  function scrollToView (id, navigate) {
    setTimeout(() => {
      if (id && navigate) {
        $('html, body').animate({
          scrollTop: $(id).offset().top - 65
        }, 500);
      }
    })
    debugger;
    if (props.triggerNav) {
      props.triggerNav();
    }
  }
  return (
    <li className="NavigationItem" onClick={() => scrollToView(props['targetId'], props.navigateToView)}>
      <NavLink to={props.link} exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  )
}

export default NavigationItem;
