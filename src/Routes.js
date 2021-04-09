import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/home/home';
import Header from './containers/header/header';
import Footer from './containers/footer/footer';
import About from './containers/About/about';
import ChatRoom from './containers/chatroom/chatroom';
import Properties from './containers/properties/properties';

class Routes extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/properties" component={Properties}/>
                </Switch>
                <Footer />
                <ChatRoom />
        </div>
    );
    }
}

export default Routes;
