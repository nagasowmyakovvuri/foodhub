import './App.css';
// import  Button  from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageSlider from './Pages/Homepage';
import Choose from './Pages/Choose';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dialogg from './Pages/navbars';
// import Categories from './Pages/Categories';
import Comp from './Pages/Categories';
import { ShopcontextProvider } from './Pages/shop-context';
import Addtocart from './Pages/Addtocart';
import CartItem from './Pages/CartItem';
import PaymentPage from './Pages/paymentpage';
import Store from './Pages/Store';
function App() {
  return (
    <div className='App'>
     
      <BrowserRouter>
      <ShopcontextProvider>
        <Routes>
          <Route path='/' element={<ImageSlider/>} />                    
          <Route path='/home' element={<ImageSlider/>} /> 
          <Route path='/choose' element={<Choose/>}/>
          <Route path='/categories'element={<Comp/>}/>
          <Route path='/dialog' element={<Dialogg/>}/>
          <Route path='/cart' element={<Addtocart/>}/>
          <Route path='cartitem' element={<CartItem/>}/>
          <Route path='/paypage' element={<PaymentPage/>}/>
          <Route path='store' element={<Store/>}/>
          {/* <Route  path ='/home' element={<ImageSlider/>}/> */}
        </Routes>
        </ShopcontextProvider>
      </BrowserRouter>
      
      
    </div>
  );
}
export default App;
