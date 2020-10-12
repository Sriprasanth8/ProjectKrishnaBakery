import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors} from "react-redux-form";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

	function RenderDish({dish}){

		return (
			<div>
			<FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Row className="dishd">
                <Col className="textcol mb-3">
                    <div>
                        <h2>{dish.name}</h2>
                    	<p>{dish.description}</p>
                    	<p><i className="fa fa-rupee h5"></i><span className="h1">{dish.price}</span><sup>  (save upto 17%)</sup></p>
                    	<p>Inclusive of all taxes</p>
                    	<Row>
	                    	<Col>
	                    		<Button className="btn btn-info mb-3">ADD TO CART</Button>
	                    	</Col>
	                    	<Col>
	                    		<Button className="btn btn-success">BUY NOW</Button>
	                    	</Col>
                    	</Row>
                    </div>
                </Col>
            </Row>
            </FadeTransform>
			</div>
		);

	}
	function RenderDishImg({dish}){

		return (
			<div>
			<FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <CardImg src={baseUrl + dish.image} alt={dish.name} />
            </FadeTransform>
			</div>
		);

	}
	function RenderHighlights({dish}){

		return (
			<div>
			<FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            	<h3>Highlights:</h3>
            	<ul>
	            	{dish.CakeFlavour ? <li>Cake Flavour : {dish.CakeFlavour}</li> : null }
	            	{dish.CakeFlavour ? <li>Type of Cake : {dish.TypeofCake}</li> : null }
	            	{dish.CakeFlavour ? <li>Type of Bread : {dish.TypeofBread}</li> : null }
	            	{dish.CakeFlavour ? <li>Type of cream : {dish.Typeofcream}</li> : null }
	            	{dish.CakeFlavour ? <li>Filling in Layers : {dish.FillingLayers}</li> : null }
	            	{dish.CakeFlavour ? <li>Toppings : {dish.Toppings}</li> : null }
            	</ul>
            </FadeTransform>
			</div>
		);

	}
	function Star({star}) {
		if(star == 1) {
			return(
				<>
				<i className="fa fa-star"></i>
				<i className="fa fa-star-o"></i>
				<i className="fa fa-star-o"></i>
				<i className="fa fa-star-o"></i>
				<i className="fa fa-star-o"></i>
				</>
			);
		}
		else if(star == 2) {
			return(
				<>
				<i className="fa fa-star"></i>
				<i className="fa fa-star"></i>
				<i className="fa fa-star-o"></i>
				<i className="fa fa-star-o"></i>
				<i className="fa fa-star-o"></i>
				</>
			);
		}
		else if(star == 3) {
			return(
				<>
				<i className="fa fa-star"></i>
				<i className="fa fa-star"></i>
				<i className="fa fa-star"></i>
				<i className="fa fa-star-o"></i>
				<i className="fa fa-star-o"></i>
				</>
			);
		}
		else if(star == 4) {
			return(
				<>
				<i className="fa fa-star"></i>
				<i className="fa fa-star"></i>
				<i className="fa fa-star"></i>
				<i className="fa fa-star"></i>
				<i className="fa fa-star-o"></i>
				</>
			);
		}
		else if(star == 5) {
			return(
				<>
				<i className="fa fa-star"></i>
				<i className="fa fa-star"></i>
				<i className="fa fa-star"></i>
				<i className="fa fa-star"></i>
				<i className="fa fa-star"></i>
				</>
			);
		}		
	}

	function RenderComments({comments, postComment, dishId}) {
		const coment = comments.map((dish) => {
			return (
				<>
				<Fade in>
					<CardBody className="comment">
						<CardTitle>-- {dish.author} , {new Intl.DateTimeFormat('en-us', {year: 'numeric', month: 'short', date:'2-digit'}).format(new Date(Date.parse(dish.date)))}</CardTitle>
						<Star star={dish.rating}/>
						<CardText>{dish.comment}</CardText>
						<hr />
					</CardBody>		
				</Fade>
				</>
			);
		});
                        
		return (
			<div>
			<Stagger in>
				<h3>Comments</h3>
				<hr />
				<ul className="list-unstyled">
					<li>{coment}</li>
				</ul>
				<CommentForm dishId={dishId} postComment={postComment} />
			</Stagger>
			</div>
		);

	}

	const DishDetail = (props) => {
		if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
		else if(props.dish != null) {
			return (
                <div className="container">
	                <div className="row">
	                    <Breadcrumb>
	                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
	                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
	                    </Breadcrumb>
	                    <div className="col-12">
	                        <h3>{props.dish.name}</h3>
	                        <hr />
	                    </div>                
	                </div>
	                <div className="row">
	                	<div className="col-12 col-md-6 mb-3">
	                		<RenderDishImg dish={props.dish} />
	                	</div>
	                    <div className="col-12 col-md-6 offset-md-6 m-0 mb-3">
	                    	<RenderDish dish={props.dish} />
	                        <RenderHighlights dish={props.dish} />
	                        <RenderComments comments={props.comments} 
	                        	postComment={props.postComment} 
	                        	dishId={props.dish.id} />
	                    </div>
	                </div>	                
                </div>
            );	
		}
		else {
			return (<div></div>);
		}
	}

export default DishDetail;

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state={
			isModelOpen: false
		}
		this.toggleModel = this.toggleModel.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	toggleModel() {
		this.setState({
			isModelOpen: !this.state.isModelOpen
		});
	}

	handleSubmit(values) {
		this.toggleModel();
		this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
	}

	render() {
		return (
			<>
				<Button outline onClick={this.toggleModel}><span className="fa fa-pencil fa-fw"></span> Submit Comment</Button>
				<Modal isOpen={this.state.isModelOpen} toggle={this.toggleModel}>
                    <ModalHeader toggle={this.toggleModel}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={{size: 12}}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:12}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
	        </>
	    );

	}
}