import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody, Form, FormGroup, Button, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class CNavBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isNavModal: false
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	toggleModal() {
		this.setState({
			isNavModal: !this.state.isNavModal
		})
	}

	handleLogin(event) {
		this.toggleModal();
		alert("username : "+this.username.value+"password : "+this.password.value+"remember : "+this.remember.checked);
		event.preventDefault();
	}

	render() {
		return (
			<>
			<Navbar light expand="md">
	  			<div className="container">
					<NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.png" height="30" width="41"
                            alt="Ristorante Con Fusion" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
	  				<Collapse isOpen={this.state.isNavOpen} navbar>
	  				<Nav navbar className="text-center">
	  					<NavItem>
	  						<NavLink className="nav-link" to="/home">Home</NavLink>
	  					</NavItem>
	  					<NavItem>
	  						<NavLink className="nav-link" to="/menu">Menu</NavLink>
	  					</NavItem>
	  					<NavItem>
	  						<NavLink className="nav-link" to="/aboutus">Aboutus</NavLink>
	  					</NavItem>
	  					<NavItem>
	  						<NavLink className="nav-link" to="/contact">Contact</NavLink>
	  					</NavItem>
	  				</Nav>
	  				<Nav className="ml-auto text-center" navbar>
	  					<NavItem>
	  						<Button outline onClick={this.toggleModal} className="mr-3">
	  						<span className="fa fa-sign-in"></span>Login
	  						</Button>
	  					</NavItem>
	  					<NavItem>
	  						<Button>
	  							<span><i className="fa fa-shopping-cart"></i></span>
	  						</Button>
	  					</NavItem>
	  				</Nav>
	  				</Collapse>
	  			</div>
	  		</Navbar>
	  		<Modal isOpen={this.state.isNavModal} toggle={this.toggleModal} >
	  			<ModalHeader toggle={this.toggleModal} >Login</ModalHeader>
	  			<ModalBody>
		  			<Form onSubmit={this.handleLogin}>
		  				<FormGroup>
		  					<Label htmlFor="username">Username</Label>
		  					<Input type="text" name="username" 
		  						innerRef={(input) => this.username = input} />
		  				</FormGroup>
		  				<FormGroup>
		  					<Label htmlFor="upassword">password</Label>
		  					<Input type="password" name="pwd" 
		  						innerRef={(input) => this.password = input} />
		  				</FormGroup>
		  				<FormGroup check>
		  					<Label check>
		  						<Input type="checkbox" name="remember" 
		  							innerRef={(input) => this.remember = input} />
		  						Remember Me
		  					</Label>
		  				</FormGroup>
		  				<Button type="submit" value="submit" color="primary">Login</Button>
		  			</Form>
		  		</ModalBody>
	  		</Modal>
			</>
		);
	}
}

export default CNavBar;