import React, { useEffect, useState } from 'react'
import './Header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SearchBar from '../SerachBar/SearchBar';
const Header = () => {
    const [Image,setImage] = useState(false)
    const Location  = window.location.pathname
    useEffect(()=>{
        if(Location === "/"){
            setImage(true)
        }
        AOS.init();

    }) 
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        console.log("hell")
    };

  return (
    <div className={`header position-relative  ${Image ? 'hero-banner':''} `}>
    <div className="top-header position-relative zindex">
        <div className="px-2 py-1 bg-dark text-center container-fluid">
            <h3 className="text-white fs-6 ">😍 OVER 100,000 HAPPY CUSTOMERS - THANK YOU 😍</h3>
        </div>
    </div>
    <header className="">
        <nav className="navbar position-relative zindex bg fixed navbar-expand-lg px-2 py-4 navbar-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <a className="   " href="/">Befikar <span
                        className="active">Shopping</span></a>
                        <form className="d-lg-none gap-2">
                            <i onClick={toggleSearch}className="ri-search-line fs-4"></i>
                            {/* <i  className="ri-shopping-cart-line fs-4"></i> */}
                        </form>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/shop">Shop</a>
                        </li>
                  
                        <li className="nav-item">
                            <a className="nav-link " href="/about" tabindex="-1" aria-="true">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/testimonial" tabindex="-1"
                                aria-="true">Testinomial</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/contact" tabindex="-1"
                                aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                    <form className="d-none d-lg-flex gap-2">
                        <i onClick={toggleSearch}  className="ri-search-line fs-4"></i>
                        {/* <i  className="ri-shopping-cart-line  fs-4"></i> */}
                    </form>
                </div>
            </div>
            {isSearchOpen && <SearchBar onClose={toggleSearch} />}
        </nav>
        {Image ? (
            <div className="position-absolute down h-100 w-100 z-9 text-white">
            <div className="conatiner hero-head ">
                <h1 data-aos="fade-up" data-aos-duration="1000">WELCOME TO</h1>
                <h2 data-aos="fade-left"  className=" text-uppercase">Befikar <span >Shopping</span> </h2>
                <p  data-aos="fade-right" className=" text-uppercase text-center">DON'T WAIT LONG, IT'S ALWAYS THE BEST TIME FOR THE BEST
                    ACTION</p>
                <div className="btn-group w-100 d-block text-center ">
                    <a href="shop.html" className="btn orangess ">Shop Now</a>
                    
                </div>
            </div>
        </div>
        ):null}
        
    </header>
    
</div>
  )
}

export default Header