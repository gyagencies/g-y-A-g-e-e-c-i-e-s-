import React, { Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/home/home';
import Header from './containers/header/header';
import Footer from './containers/footer/footer';
import About from './containers/About/about';
import ChatRoom from './containers/chatroom/chatroom';
import Properties from './containers/properties/properties';
import PropertyDetail from './containers/properties/propertydetail';

function Routes () {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/properties" component={Properties}/>
        <Route path="/property-detail" component={PropertyDetail}/>
      </Switch>
      <Footer />
      <ChatRoom />
    </Fragment>
  )
}


export default Routes;
