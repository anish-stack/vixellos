import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
const HomeProductSlider = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        AOS.init();
    }, [])
    const [slidesPerView, setSlidesPerView] = useState('1');
    const handleResize = () => {
        const windowWidth = window.innerWidth;
    
        // Adjust slidesPerView based on window width
        if (windowWidth < 400) {
          setSlidesPerView(1);
          console.log(slidesPerView)
        } else if (windowWidth >= 400 && windowWidth < 768) {
          setSlidesPerView(1);
        } else {
          setSlidesPerView(3);
        }
      };
    
      useEffect(() => {
        handleResize(); // Set initial slidesPerView value
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    useEffect(() => {
        axios.get('./data.json') 
            .then(response => {
                // Assuming the response data is an array of products
                setProducts(response.data);
                console.log(response)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='top-products py-3'>
            <div className="container-fluid text-center mt-5 h-100">
                <div className="heading-5 mb-5">
                    <h1 className="fw-bold font" data-aos="fade-up" data-aos-duration="1000" > TOP PRODUCTS OF THE DAY</h1>
                </div>
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={30}
                    
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {products.map(product => (
                        <SwiperSlide key={product.id}>
                            <a href={`/single-product/${product.heading}/${product.id}`} className='card-bags'>
                                <div className="tag">{product.discountpercentage}%</div>
                                <div className="img">
                                    <img src={product.img[0]} alt="" />
                                </div>
                                <div className="btns font">
                                    <Link>Buy With Cash On Delivery</Link>
                                </div>
                                <div className="info font">
                                    <h3>{product.heading}</h3>

                                    <ul>
                                        <li className="stars">
                                            {Array.from({ length: product.star }).map((_, index) => (
                                                <>

                                                    <i key={index} className="fas fa-star"></i>
                                                </>
                                            ))}
                                            <span className='number-review'> ({product.reviewNumber}) </span>
                                        </li>
                                    </ul>
                                    <div className="prices">
                                        <p><i class="fa-solid fa-indian-rupee-sign"></i><del>{product.mrpPrice}</del> <span className='ml-2'>{product.discount}</span> </p>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
        </div>
    );
}

export default HomeProductSlider;
