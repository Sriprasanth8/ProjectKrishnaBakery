import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Col, Row, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const minLength = (len) => (val) => (val) && (val.length >=3);
const maxLength = (len) => (val) => !(val) || (val.length <=15);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)

class Contact extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.resetFeedbackForm();
        this.props.postFeedback(values);      
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 mb-3">
                        <h5>Map of our Location</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2283.1068212731043!2d78.14192092184165!3d11.660511278010095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf0392058d68b%3A0x872baa2d32e7ed2e!2zMTHCsDM5JzQyLjciTiA3OMKwMDgnMjYuMiJF!5e0!3m2!1sen!2sin!4v1596430311684!5m2!1sen!2sin" width="cover" height="auto" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content feedbackcontainer">
                    <div className="col-12">
                        <h3>Send your Feedback</h3>
                    </div>
                    <div className="col-12">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>Firts Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" name="firstname" id="firstname" placeholder="FirstName"                                         
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3),maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minLength: "Must be greater then 3 char",
                                            maxLength: "Must be lesser than 15 char",
                                        }}
                                    />
                               </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" name="lastname" id="lastname" placeholder="LastName"                                          
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3),maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minLength: "Must be greater then 3 char",
                                            maxLength: "Must be lesser than 15 char",
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" name="telnum" id="telnum" placeholder="Tel. Num"                                          
                                        className="form-control"
                                         validators={{
                                            required, minLength: minLength(3),maxLength: maxLength(15), isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minLength: "Must contain atleat 3 numbers",
                                            maxLength: "Must contain atmost 15 numbers",
                                            isNumber: "Must enter only numbers"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email ID</Label>
                                <Col md={10}>
                                    <Control.text model=".email" name="email" id="email" placeholder="@gmail.com" 
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                    /> 
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            validEmail: "Ivalid emaid address"
                                        }}
                                    />                                   
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input" />{' '}
                                            <strong>May we cantact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType" 
                                    className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" name="message" id="message" rows="12" 
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}} >
                                    <Button type="submit" color="primary" >SEND FEEDBACK</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    } 
}

export default Contact;