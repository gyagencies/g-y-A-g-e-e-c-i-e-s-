import React from 'react';
import {NavLink} from 'react-router-dom';
import $ from "jquery";


function NavigationItem (props) {
  function scrollToView (id, navigate) {
    debugger;
    setTimeout(() => {
      if (id && navigate) {
        $('html, body').animate({
          scrollTop: $(id).offset().top
        }, 500);
      }
    })
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
