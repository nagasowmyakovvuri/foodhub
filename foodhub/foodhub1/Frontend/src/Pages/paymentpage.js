import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import payHereImage from '../images/payhere.png';
import payInCounterImage from '../images/atcounter.png';
import { Button, Container, Row } from 'react-bootstrap';
export default function PaymentPage() {
    const cardStyle = {
        boxShadow: '0 4px 16px 0 rgba(1, 1, 1, 0.7)',
        backgroundColor: 'white',
        borderRadius:'25px',
        padding:0
        // marginRight:1
    };
    const x={
        overflow:'hidden',
        backgroundColor:'darkblue',
        marginTop:50,
        paddingBottom:50,
        borderRadius:'50px',
        boxShadow: '0 4px 16px 0 rgba(1, 1, 1, 0.7)',
        // paddingRight:10,
    }
    return (
        <>
        <Container style={x}>
            <h1 className="m-5 text-danger"><u>Payment Page</u></h1>
            <Row>
                <Col md={3}></Col>
                <Col md={3}>
                <Card style={cardStyle} className='m-2'>
                    <Card.Img src={payInCounterImage}  alt="Pay Here" />
                    <Card.Body>
                        <Card.Title><Button href='/store'>AT COUNTER</Button></Card.Title>
                    </Card.Body>
                </Card>
                {/* </Col> */}
                {/* <Col sm={1}></Col> */}
                {/* <Col md={3}> */}
                </Col>
                <Col md={3}>
                <Card style={cardStyle} className='m-2'>
                    <Card.Img src={payHereImage} alt="Pay Here" />
                    <Card.Body>
                        <Card.Title><Button href='/store'>PHONE PAY</Button></Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={2}></Col>

            </Row>
            {/* </Col> */}
            {/* </CardGroup>
            </Container> */}
            
        </Container>
        </>
    );
}