import React from "react";
import { useContext } from "react";
import { useState } from "react";
import categories from "./catdata";
import { useEffect } from "react";
import { Shopcontext } from "./shop-context";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {useNavigate } from "react-router-dom";
import { Button, Container, Row } from 'react-bootstrap';
import axios from "axios";
export default function Store() {
    const navigate =useNavigate();
    const { cartitems, checkout, updateItemcount } = useContext(Shopcontext);
    const [pickeditems, setPickedItems] = useState([]);
    const [details, validation] = useState({
        email:'',
        otp:'',
    });
    useEffect(() => {
        const updatedPickedItems = [];
        for (let i = 1; i < categories.length + 1; i++) {
            // console.log(i);

            if (cartitems[i] > 0) {
                let info = categories.find((product) => product.id === i);
                let obj = {
                    title: info.title,
                    quantity: cartitems[i],
                    price: info.price,
                    total: info.price * cartitems[i]
                }
                updatedPickedItems.push(obj);
            }
        }
        setPickedItems(updatedPickedItems);
    }, [cartitems]);

    const handlesubmit = () => {
        updateItemcount(1, 0);
        console.log("cart in store", cartitems);
        console.log(pickeditems, "picked");
        pickeditems.length > 0 ? axios.post('http://localhost:6969/additems', pickeditems)
            .then((res) => { console.log(res.data); alert("success");checkout(); navigate('/home'); })
            .catch((error) => {
                console.error('Error:', error);
            })
            : alert("add some items");


    }
    const cardStyle = {
        boxShadow: '0 4px 16px 0 rgba(1, 1, 1, 0.7)',
        backgroundColor: 'white',
        borderRadius: '25px',
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
    const requestotp = (e) => {
        e.preventDefault();
        // if (email === "") {
        //     alert("enter valid email adress!")
        // }
        // else {
            // alert(email);
            const value=details.email;
            axios.post('http://localhost:6969/reqotp', {value})
                .then((res) => { console.log(res.data)  })
                .catch((error) => {
                    // console.error('Error:', error);
                })
        // }
    }

    const verify=()=>{
        
        axios.post('http://localhost:6969/verify',details)
        .then((res)=>{
            // if(Number(res.data)===Number(details.otp))
            // {
            //     alert("payment successfull");
            //     navigate('/home');
            // }
            // else{
            //     alert("else block" ,res.data);
            // }
            if(res.status===200)
            {
                alert("Payment successfulll")
                handlesubmit();
               
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (


        <>
            <Container style={x}>
                <h1 className="m-5 text-danger"><u>Payment Page</u></h1>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                    <Card style={cardStyle} className='m-2'>
                                <Card.Body>
                                    <form onSubmit={requestotp} className="text-center">
                                    <div className="form-group">
                                        <input
                                        type="email"
                                        className="form-control" // input fileda align
                                        placeholder="Your email"
                                        value={details.email}
                                        onChange={(e) => validation({ ...details, email: e.target.value })}
                                        />
                                    </div>
                                    <Button type="submit" className="btn btn-primary mt-2">Request OTP</Button>
                                    <div className="form-group mt-3">
                                        <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter OTP"
                                        value={details.otp}
                                        onChange={(e) => validation({ ...details, otp: e.target.value })}
                                        />
                                    </div>
                                    <Button onClick={verify} className="btn btn-primary mt-2">OTP Validation</Button>
                                    </form>
                                </Card.Body>
                                </Card>
                        {/* </Col> */}
                        {/* <Col sm={1}></Col> */}
                        {/* <Col md={3}> */}
                    </Col>
                    <Col md={1}>
                    </Col>
                    <Col md={1}></Col>

                </Row>
                {/* </Col> */}
                {/* </CardGroup>
            </Container> */}

            </Container>

            {/* <Button onClick={handlesubmit} style={{ align: "center" }}>Submit</Button> */}


        </>
    )






}






// <Card style={cardStyle} className='m-2'>
//                             {/* <Card.Img src={payInCounterImage}  alt="Pay Here" /> */}
//                             <Card.Body>
//                                 <form onSubmit={requestotp}>
//                                     <input
//                                         type="email"
//                                         placeholder="Your email"
//                                         value={details.emailemail}
//                                         onChange={(e) => validation({...details,email:e.target.value})}
//                                     />
//                                      <Button type="submit">Request Otp</Button>
//                                    <br></br>
//                                     <input
//                                         type="text"
//                                         placeholder="enter Otp"
//                                         value={details.otp}
//                                         onChange={(e)=>validation({...details,otp:e.target.value})}
//                                     />
                                    
//                                     <Button onClick={verify}>Otp Validation</Button>
//                                 </form>
                               
//                                 {/* <Card.Footer><Button onClick={verify}>Otp Validation</Button></Card.Footer> */}
//                             </Card.Body>
//                         </Card>