import React, { useState } from "react";
// import { Navbar ,Nav } from "react-bootstrap";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardImg, Container, Nav, NavLink, Navbar } from 'react-bootstrap';
import categories from "./catdata";
import "../index.css";
import image3 from "../images/4.jpg";
import MyVerticallyCenteredModal from "./navbars";
import { Shopcontext } from "./shop-context";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import SideNav, {
  Toggle,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
function Comp() {
  const [isVisible, setIsVisible] = useState(false); // for side bar
  const [data, setData] = useState(categories); // for filter thourh category
  const [searchname, setval] = useState('');   // for filter thoru item
  const [additem, selection] = useState([]) // particular display item on click buy 
  const [imin, setvis] = useState(false); // cart visiblet
  const {updateItemcount,cartitems,Itemcount,getTotalCartAmount}= useContext(Shopcontext);
  const navigate = useNavigate();
  // const [count, setcount] = useState(0);
  const [modalShow, setModalShow] = React.useState(false);
  // category wise
  const filterResult = (cat) => {
    // category wise
    const result = categories.filter((values) => {
      return values.category.toLowerCase().includes(cat.toLowerCase());
    });
    setData(result);
  };
  // item wise
  const searchclick = () => {
    const indiv = categories.filter((values) => {
      return values.title.toLowerCase().includes(searchname.toLowerCase());

    })
    setData(indiv);
  }
  // setting cart 
  const handleselection = (values) => {
    // setcount(0);
    selection(values)
    setvis(true);
    setModalShow(true);
   
  }

  const handleupp=()=>{
    updateItemcount(1,0);
    navigate('/cart');
  }
  // toggle
  return (
    <>
      
      {/* horiz nav st */}
      <Navbar bg='dark' data-bs-theme='dark' fixed="top">
        <Container>
          {/* <img src={image4} width={40} height={40}/> */}
          <Navbar.Brand >  Categories</Navbar.Brand>
          <Nav>
            <NavLink to="/cart" onClick={handleupp}>  Cart <i class="fa-solid fa-cart-shopping fa-lg"></i></NavLink>
          </Nav>
        </Container>
      </Navbar>
      {/* horiz nav ends */}
      <h1 className="text-center text-info mt-5 mb-2">categories</h1>
      <input onChange={(eve) => {
        const value = eve.target.value;
        setval(value);
        // filterResult(value);
        searchclick();
      }} />
      <Button onClick={searchclick} variant="success" style={{ blockSize: 40, textAlign: "center" }}>search</Button>
      <div className="container mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-2">
            {/* side nav starts */}
            <SideNav expanded={isVisible} style={{ marginTop: 55 }}>
              <SideNav.Toggle onClick={() => setIsVisible(!isVisible)} />
              <SideNav.Nav defaultSelected="ALL">
                <NavItem eventKey="ALL">
                  <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
                  </NavIcon>
                  <NavText onClick={() => setData(categories)}>ALL</NavText>
                </NavItem>
                <NavItem eventKey="VEG ITEMS">
                  <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
                  </NavIcon>
                  <NavText onClick={() => filterResult("veg")}>VEG ITEMS</NavText>
                </NavItem>
                <NavItem eventKey="NON VEG ITEMS">
                  <NavIcon>
                    <i
                      className="fa fa-fw fa-line-chart"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText onClick={() => filterResult("nonveg")}>NON VEG ITEMS</NavText>
                </NavItem>
                <NavItem eventKey="COOL DRINKS">
                  <NavIcon>
                    <i
                      className="fa fa-fw fa-line-chart"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText onClick={() => filterResult("drinks")}>DRINKS</NavText>
                </NavItem>
              </SideNav.Nav>
            </SideNav>
            {/* side nav ends */}
            {/* gallery items stt */}
          </div>
          <div className="col-md-10">
            <div className="row">
              {
                data.map((values,index) => {
                  const { id, title, price, category, image } = values;
                  return (
                    <>
                      <div key={index} className="col-md-4 mb-3 ">
                        <Card className="carddim ">
                          <Card.Img variant="top" src={image} alt="fb" />
                          <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                            </Card.Text>
                            <Card.Footer>Price {price}</Card.Footer>
                            <Button variant="dark" onClick={() => handleselection(values)} style={{ blockSize: 40, width: 140, marginTop: 20 }}>ADD To Cart</Button>
                          </Card.Body>
                        </Card>
                      </div>
                    </>
                  )
                })}
              {/* gallety item ends */}
              {/* special card  optional*/ } 
              {/* <div class="card mb-3" style={{ maxWidth: '250px', visibility: imin ? "visible" : "hidden" }} >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={additem.image} class="img-fluid rounded-start" alt="..." />
                    <h5 class="card-footer">{additem.title}</h5>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <div className="row">
                        <div className="col">
                          <Button onClick={() => count > 0 ? setcount(count - 1) : setcount(0)}>-</Button>
                          <p>{count}</p>
                          <Button onClick={() => setcount(count + 1)}>+</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* special card ends */}
            </div>
          </div>
          {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}
      <MyVerticallyCenteredModal
    show={modalShow}
    onHide={() => {setModalShow(false);  } }
    dataaa={additem}
  />
        </div>
      </div>
      <div className="sticky-bottom">
        {/* <p></p> */}
        <Button variant="primary">Item Count : {Itemcount()} TOtal Price : Rs.{getTotalCartAmount()}</Button>
      </div>
    </>

  )
}
export default Comp;