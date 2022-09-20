import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
      return (
          <header className="header">
            <Navbar className="navbar-expand-sm box-shadow" light sticky="top">
          <Container>
                    <NavbarBrand className="text-light">Супер отель</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-column" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav">
                            <NavItem>
                                <NavLink tag={Link} className="text-light" to="/">Главная</NavLink>
                            </NavItem>
                            <NavItem className="border_left">
                                <NavLink tag={Link} className="text-light" to="/about">Об отеле</NavLink>
                            </NavItem>
                            <NavItem className="border_left">
                                <NavLink tag={Link} className="text-light" to="/rooms">Номера</NavLink>
                            </NavItem>
                            <NavItem className="border_left">
                                <NavLink tag={Link} className="text-light" to="/contacts">Контакты</NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
