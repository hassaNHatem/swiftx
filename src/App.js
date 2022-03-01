import './App.css';
import { CardModal } from './cart/CardModal';
import { Navbar  } from './Navbar/Navbar';
import { Products } from './products/Products';

function App() {
  return (
    <>
    <div className='overlay'></div>
    <div className="App container">
      <Navbar></Navbar>
      <Products></Products>
      <CardModal></CardModal>
    </div>
    </>
  );
}

export default App;
