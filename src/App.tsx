import { useEffect, useState } from 'react'
import './frontend/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './frontend/components/Header';
import Routers from './Routers';
function App() {
  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const { data } = await list()
  //     console.log(data);
  //     setProducts(data);
  //   }
  //   getProducts();
  // }, [])
  return (
    <div className="App">
      <Routers></Routers>
    </div>
    
  )
}

export default App
