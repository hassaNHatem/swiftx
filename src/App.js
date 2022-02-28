import './App.css';
import { Navbar  } from './Navbar/Navbar';
import { Products } from './products/Products';

function App() {
  return (
    <div className="App container">
      <Navbar></Navbar>
      <Products></Products>
    </div>
  );
}

export default App;
