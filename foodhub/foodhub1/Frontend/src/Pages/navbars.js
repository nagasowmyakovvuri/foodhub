import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Shopcontext } from './shop-context';
import { useEffect } from 'react';
function MyVerticallyCenteredModal(props) {

  const data = props.dataaa;
  const { updateItemcount, cartitems } = useContext(Shopcontext);



  // if(Number.isNaN(data.id))
  // {
  //   console.log("invalid id");
  // }
 
  // if (Number.isNaN(cartitems[data.id])) {
  //   console.log("NAN " + data.id);
  //   cartitems[data.id] = 0;
  // }
  //  else{
  //   console.log("valid");
  // }
  let x=cartitems[data.id];
  useEffect(()=>{
      setcount(x);
  },[x])
  // if(Number.isNaN(x))
  // {
  //   console.log("gowtham");
  // }
  // else{
  //   console.log("venkat");
  // }
  console.log("my id is: ", data.id, "values is",x);
  const [count, setcount] = useState(x);
  useEffect(() => {
    if (Number.isNaN(count)) {
      console.log("gowtham");
    } else {
      console.log("venkat", count);
    }
  }, [count]);
  // console.log(data.length);
  // console.log("intial count %d",count);
  const handleclose = () => {
    props.onHide();
    setcount(0);
  }
  const updatecart = (id, freq) => {
    if (Number.isNaN(cartitems[id])) {
      cartitems[id] = 0;
    }
    // console.log(cartitems[id])
    // setcount((prevCount) => prevCount + freq);
    freq=freq-cartitems[id];
    updateItemcount(id,freq);
    // console.log("after",cartitems[id])
    props.onHide();
    // setcount(0);
  }
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Choose Quantity
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{data.title}</h4>
        <img src={data.image} width={100} height={100} alt="dv" />
        <Button onClick={() => count > 0 ? setcount(count - 1) : setcount(0)} style={{ display: 'inline-block', margin: 5 }}>-</Button>
        <p style={{ display: 'inline-block' }}>
          {count}
        </p>
        <Button onClick={() => setcount(count + 1)} style={{ display: 'inline-block', margin: 5 }}>+</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => updatecart(data.id, count)}>Confirm</Button>
        <Button onClick={handleclose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;