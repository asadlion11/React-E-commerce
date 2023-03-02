import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Cart from './pages/cart';    
const App = () => {
    const [cart, setCart] = useState(2);
    return (
           <div className="container">
                <Header cart = {cart} setCart = {setCart}/> 
                <Routes>
                    <Route path ='/' element ={<Home />} />
                    <Route path = '/about' element = {<About />}/>
                    <Route path = '/contact' element = {<Contact />}/>
                    <Route path = '/cart' element = {<Cart setCart = {setCart}/>} />
                </Routes>  
           </div>       
    );
};
export default App;