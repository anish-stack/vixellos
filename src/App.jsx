
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import SinglePage from './pages/SinglePage/SinglePage'
import Footer from './components/Footer/Footer'
import OrderPage from './pages/Orderpage/OrderPage'
import { useEffect } from 'react'
import HomeProductSlider from './pages/products/HomeProductSlider';
import About from './pages/About/About';
import Testinomial from './components/Testinomial/Testinomial';
import Contact from './pages/Contact/Contact';
import Contacts from './pages/Contact/Contacts';
import TestinomialCopy from './components/Testinomial/Testinomialcopy';
import Shop from './pages/products/Shop';
import Buyit from './pages/Orderpage/BuyIt';
import Privacy from './pages/Policy/Privacy';
import Terms from './pages/Policy/Terms';
function App() {
  useEffect(()=>{
    
    AOS.init();

}) 
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/single-product/:name/:id' element={<SinglePage/>} />
    <Route path='/cash-on-delivery/:name/:id' element={<OrderPage/>} />
    <Route path='/Buy-it-now/:name/:id' element={<Buyit/>} />
    <Route path='/shop' element={<Shop/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/testimonial' element={<TestinomialCopy/>} />
    <Route path='/contact' element={<Contacts/>} />
    <Route path='/privacy-policy' element={<Privacy/>} />
    <Route path='/Term-condiation' element={<Terms/>} />




    




   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
