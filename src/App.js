import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom';
// import {useState} from 'react';
// import { Toaster } from 'react-hot-toast';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Cart from './pages/cart';    
const App = () => {
    // const [cart, setCart] = useState(2);
    return (
           <div className="container">
                {/* <Toaster /> */}
                <ToastContainer/>
                <Header/>
                <Routes>
                    <Route path ='/' element ={<Home />} />
                    <Route path = '/about' element = {<About />}/>
                    <Route path = '/contact' element = {<Contact />}/>
                    <Route path = '/cart' element = {<Cart /> }/>
                </Routes>  
           </div>       
    );
};
export default App;