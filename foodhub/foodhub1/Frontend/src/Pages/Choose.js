// import { Button, Card, Container } from "react-bootstrap";
// import CardGroup from "react-bootstrap/CardGroup";
import eat from "../images/eatin.png";
import takeout from "../images/takeout.png";
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Container, Row } from 'react-bootstrap';
const handlecardfooter = () => {
    window.location.href = '/categories';
}
function Choose() {
    const cardStyle = {
        boxShadow: '0 4px 16px 0 rgba(1, 1, 1, 0.7)',
        backgroundColor: 'white',
        borderRadius: '0px',
        padding: 0
        // marginRight:1
    };
    const x = {
        overflow: 'hidden',
        backgroundColor: 'darkblue',
        marginTop: 50,
        paddingBottom: 50,
        borderRadius: '50px',
        boxShadow: '0 4px 16px 0 rgba(1, 1, 1, 0.7)',
        // paddingRight:10,
    }
    return (
        <>

            <Container style={x}>
             <h1 className="m-5 text-danger"><u>Choose Your First Step!</u></h1>
            <Row>
                 <Col md={3}></Col>
               <Col md={3}>
                 <Card style={cardStyle} className='m-2'>
                            <Card.Header variant="primary" style={{ fontSize: 17, fontWeight: 500, userSelect: 'none' }}>Eat Your Fav Delicious Food Here!</Card.Header>
                    <Card.Img src={eat} alt="Pay Here" />
                     <Card.Body>
                                {/* //                         <Card.Title><Button href='/store'>AT COUNTER</Button></Card.Title> */}
                     </Card.Body>
                            <Card.Footer style={{ fontWeight: 500, backgroundColor: 'orange' }} onClick={handlecardfooter}><h1>Eat IN</h1></Card.Footer>
                 </Card>
                {/* </Col> */}
                {/* <Col sm={1}></Col> */}
                {/* <Col md={3}> */}
               </Col>
               <Col md={3}>
                 <Card style={cardStyle} className='m-2'>
                            <Card.Header style={{ fontSize: 17, fontWeight: 500, userSelect: 'none' }}>Take the food to Eat with your Loved Ones</Card.Header>
                    <Card.Img src={takeout} alt="Pay Here" />
                    <Card.Body>
                                {/* //                         <Card.Title><Button href='/store'>PHONE PAY</Button></Card.Title> */}
                    </Card.Body>
                            <Card.Footer style={{ fontWeight: 500, backgroundColor: 'green' }} onClick={handlecardfooter}><h1>Take Out</h1></Card.Footer>

                 </Card>
                 </Col>
                 <Col md={2}></Col>

             </Row>
             {/* </Col> */}
             {/* </CardGroup>
//             </Container> */}

         </Container>


        </>

    );
}
export default Choose;



// export default function PaymentPage() {
//     const cardStyle = {
//         boxShadow: '0 4px 16px 0 rgba(1, 1, 1, 0.7)',
//         backgroundColor: 'white',
//         borderRadius:'25px',
//         padding:0
//         // marginRight:1
//     };
//     const x={
//         overflow:'hidden',
//         backgroundColor:'darkblue',
//         marginTop:50,
//         paddingBottom:50,
//         borderRadius:'50px',
//         boxShadow: '0 4px 16px 0 rgba(1, 1, 1, 0.7)',
//         // paddingRight:10,
//     }
//     const containerStyle = {
//         // display: 'flex',
//         // flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         // minHeight: '100vh',
//         backgroundColor: 'white',
//     };

//     return (
//         <>
//         <Container style={x}>
//             <h1 className="m-5 text-danger"><u>Payment Page</u></h1>
//             <Row>
//                 <Col md={3}></Col>
//                 <Col md={3}>
//                 <Card style={cardStyle} className='m-2'>
//                     <Card.Img src={payInCounterImage}  alt="Pay Here" />
//                     <Card.Body>
//                         <Card.Title><Button href='/store'>AT COUNTER</Button></Card.Title>
//                     </Card.Body>
//                 </Card>
//                 {/* </Col> */}
//                 {/* <Col sm={1}></Col> */}
//                 {/* <Col md={3}> */}
//                 </Col>
//                 <Col md={3}>
//                 <Card style={cardStyle} className='m-2'>
//                     <Card.Img src={payHereImage} alt="Pay Here" />
//                     <Card.Body>
//                         <Card.Title><Button href='/store'>PHONE PAY</Button></Card.Title>
//                     </Card.Body>
//                 </Card>
//                 </Col>
//                 <Col md={2}></Col>

//             </Row>
//             {/* </Col> */}
//             {/* </CardGroup>
//             </Container> */}

//         </Container>
//         </>
//     );
// }



















// <div>
//     <div className="container-fluid bg-dark">
//         {/* <h1>Where Will be your eating Today?</h1> */}
//         <CardGroup style={{ backgroundColor: "#170e52", marginLeft: '4%', marginRight: '4%', paddingBottom: '15%' }} >
//             {/* <Card.Header>Where will be Your Eating Today</Card.Header> */}
//             {/* <h1> Where will be Your Eating Today</h1> */}
//             <Card style={{ width: '30%', marginLeft: '20%', marginTop: '8%' }} border="dark">
//                 {/* <Card style={{width:350, marginLeft:250, marginTop:100}} border="primary"> */}
//                 <Card.Header variant="primary" style={{ fontSize: 17, fontWeight: 500, userSelect: 'none' }}>Eat Your Fav Delicious Food Here!</Card.Header>
//                 <Card.Img variant="top" src={eat} width={150} height={200} />
//                 <Card.Footer style={{ fontWeight: 500, backgroundColor: 'orange' }} onClick={handlecardfooter}><h1>Eat IN</h1></Card.Footer>
//             </Card>
//             <Card style={{ width: '30%', marginLeft: '4%', marginRight: '10%', marginTop: '8%' }}>
//                 {/* <Card style={{width:300, marginLeft:50, marginRight:200,marginTop:100}}> */}
//                 <Card.Header style={{ fontSize: 17, fontWeight: 500, userSelect: 'none' }}>Take the food to Eat with your Loved Ones</Card.Header>
//                 <Card.Img src={takeout} width={150} height={200} variant="top" />
//                 {/* <Card.Body>
//                             <Card style={{width:300}}>
//                                 <Card.Header>Parcel</Card.Header>
//                                 <Card.Body></Card.Body>
//                             </Card>
                        
//                         </Card.Body> */}
//                 <Card.Footer style={{ fontWeight: 500, backgroundColor: 'green' }} onClick={handlecardfooter}><h1>Take Out</h1></Card.Footer>

//             </Card>
//         </CardGroup>
//     </div>
//     <style>
//         {
//             `
//                         *{
//                             userSelect:'none';
//                         }
//                     `
//         }
//     </style>
// </div>