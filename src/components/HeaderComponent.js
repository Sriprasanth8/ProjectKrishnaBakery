import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {

	render() {
		return (
			<>
	  		<Jumbotron>
		  		<div className="container">
		  			<div className="row row-header">
			  			<div className="col-12 text-center ">
					  		<div className="companyname">
					  			<h1>Welcome to the taste of world</h1>
					  		</div>
			  			</div>
		  			</div>
		  		</div>
	  		</Jumbotron>
			</>
		);
	}
}

export default Header;