import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
      return (
          <div className="app-wrapper">
            <NavMenu />
            {this.props.children}
            <Footer />
      </div>
    );
  }
}
