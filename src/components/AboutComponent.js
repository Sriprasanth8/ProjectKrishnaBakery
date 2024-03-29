import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const Leader = ({ leader }) => {
    return (
        <Media className="row leader-item mb-3">
            <Media left className="col-2 text-center">
                <Media object className="img-fluid" src={baseUrl + leader.image} alt={leader.name} />
            </Media>
            <Media body className="col-10">
                <Media heading>
                    {leader.name}
                </Media>
                <p>{leader.designation}</p>
                <p>{leader.description}</p>
            </Media>
        </Media>
    )
}

const RenderLeaders = ({ leaders, isLoading, errMess }) => {
    if (isLoading) {
        return(
            <Loading />
        );
    } else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    } else {
        return (
            <Stagger in>
                {
                    leaders.leaders.map((leader) => {
                        return (
                            <Fade in>
                                <Leader leader={leader}/>
                            </Fade>
                        );
                    })
                }
            </Stagger>
        )
    }
}

function About(props) {

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <RenderLeaders 
                        leaders={props.leaders}
                        isLoading={props.leaderLoading}
                        errMess={props.leaderErrMess} />
                </div>
            </div>
        </div>
    );
}

export default About; 