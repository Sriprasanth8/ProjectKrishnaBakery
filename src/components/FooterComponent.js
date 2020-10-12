import React, {Component } from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
	return (
		<div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-12 col-md-4 p-1 text-center">
                    <i className="fa fa-envelope"></i>
                    <br />
                    <a href="mailto:xyz@gmail.com">xyz@gmail.com</a>
                </div>
                <div className="col-12 col-md-4 p-1 text-center">
                    <i className="fa fa-map-marker fa-lg"></i>
                    <address>
                      01, abc street,<br />
                      Gandhi road, Salem<br />
                      Tamil Nadu<br />
                    </address>
                </div>
                <div className="col-12 col-md-4 p-1 text-center">
                    <i className="fa fa-phone"></i>
                    <br />
                    <a href="tel:">+91 1234567891</a>
                </div>
            </div>
            <div className="row justify-content-center pt-2 mt-3">             
                <div className="col-12 col-md-6 text-center">
                    <p>@ Copyright 2020 Bakery</p>
                </div>
                <div className="col-12 col-md-6 text-center">
                    <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                    <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/"><i className="fa fa-linkedin"></i></a>
                    <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                    <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </div>
	);
}

export default Footer;