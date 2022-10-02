import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Rooms } from './components/Rooms';
import { Room } from './components/Room';
import { About } from './components/About';
import { Contacts } from './components/Contacts';

import './css/Common.css';
import './css/Home.css';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
            <Route path='/rooms' component={Rooms} />
            <Route path='/room/:number' component={Room} />
        <Route path='/contacts' component={Contacts} />
      </Layout>
    );
  }
}
