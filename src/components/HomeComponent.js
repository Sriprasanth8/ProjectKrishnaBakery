import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Container, Row, Col} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import Header from "./HeaderComponent";

function RenderCard({item, isLoading, errMess}) {
    
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else 
        return(
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Row>
                    <Col md="5">
                        <CardImg src={baseUrl + item.image} alt={item.name} />
                    </Col>
                    <Col md="7" className="textcol">
                        <div className="text-center">
                            <h2>{item.name}</h2>
                                {item.designation ? <h4>{item.designation}</h4> : null }
                            <p>{item.description}</p>
                        </div>
                    </Col>
                </Row>
            </FadeTransform>
        );

}
function RenderCardInv({item, isLoading, errMess}) {
    
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else 
        return(
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Row>
                    <Col md="7" className="textcol">
                        <div className="text-center">
                            <h2>{item.name}</h2>
                                {item.designation ? <h4>{item.designation}</h4> : null }
                            <p>{item.description}</p>  
                        </div>
                    </Col>
                    <Col md="5">
                        <CardImg src={baseUrl + item.image} alt={item.name} />
                    </Col>
                </Row>
            </FadeTransform>
        );

}

function Home(props) {
    return(
    <>
        <Header />
        <Container className="mt-3 mb-3">
                <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}  />
                <div className="mobileview1">
                    <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />
                </div>
                <div className="mobileview2">
                    <RenderCardInv item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />
                </div>
                <RenderCard item={props.leader} isLoading={props.leaderLoading} errMess={props.leaderErrMess} />
        </Container>
    </>
    );
}

export default Home;