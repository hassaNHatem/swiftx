import './App.css';
import { CardModal } from './cart/CardModal';
import { Navbar  } from './Navbar/Navbar';
import { Products } from './products/Products';
import {Product} from './product/Product'
import { Cart } from './cart/Cart';

function App() {
  return (
    <>
    {/* <div className='overlay'></div> */}
    <div className="App container">
      <Navbar></Navbar>
      <Cart></Cart>
      {/* <Product></Product> */}
      {/* <Products></Products>
      <CardModal></CardModal> */}
    </div>
    </>
  );
}

export default App;
