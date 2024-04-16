import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './glass.css'
// Import Swiper styles
import 'swiper/css';

import AOS from 'aos';
import 'aos/dist/aos.css';
// import required modules
const Testinomial = () => {
    useEffect(()=>{
    
        AOS.init();
    
    }) 
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
    return (
        <section className='py-3 mb-5'>
            <div  data-aos="zoom-in" class="row d-flex justify-content-center">
                <div class="col-md-10 col-xl-8 text-center">
                    <h3 class="mb-4 font fw-bolder fs-1">Testimonials</h3>
                    <p class="mb-4 fs-1 orangess pb-2 mb-md-5 pb-md-0">
                      Here Our Awsome Reviews For Our Products
                    </p>
                </div>
            </div>

            <div class="row text-center">
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={30}
                   
                  
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div class="glass"  data-aos="fade-up" >
                            <div class="d-flex justify-content-center mb-4">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                    class="rounded-circle shadow-1-strong" width="150" height="150" />
                            </div>
                            <h5 class="mb-3">Maria Smantha</h5>
                            <h6 class="text-primary mb-3">Web Developer</h6>
                            <p class="px-xl-3">
                                <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                                tenetur.
                            </p>
                            <ul class="list-unstyled d-flex justify-content-center mb-0">
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star-half-alt fa-sm text-warning"></i>
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="glass"  data-aos="fade-up" data-aos-duration="1200" >
                            <div class="d-flex justify-content-center mb-4">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                    class="rounded-circle shadow-1-strong" width="150" height="150" />
                            </div>
                            <h5 class="mb-3">Lisa Cudrow</h5>
                            <h6 class="text-primary mb-3">Graphic Designer</h6>
                            <p class="px-xl-3">
                                <i class="fas fa-quote-left pe-2"></i>Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.
                            </p>
                            <ul class="list-unstyled d-flex justify-content-center mb-0">
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div class="glass"  data-aos="fade-up" data-aos-duration="1400" >
                            <div class="d-flex justify-content-center mb-4">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                    class="rounded-circle shadow-1-strong" width="150" height="150" />
                            </div>
                            <h5 class="mb-3">John Smith</h5>
                            <h6 class="text-primary mb-3">Marketing Specialist</h6>
                            <p class="px-xl-3">
                                <i class="fas fa-quote-left pe-2"></i>At vero eos et accusamus et iusto odio
                                dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
                            </p>
                            <ul class="list-unstyled d-flex justify-content-center mb-0">
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="far fa-star fa-sm text-warning"></i>
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="glass"  data-aos="fade-up" >
                            <div class="d-flex justify-content-center mb-4">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                    class="rounded-circle shadow-1-strong" width="150" height="150" />
                            </div>
                            <h5 class="mb-3">Maria Smantha</h5>
                            <h6 class="text-primary mb-3">Web Developer</h6>
                            <p class="px-xl-3">
                                <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                                tenetur.
                            </p>
                            <ul class="list-unstyled d-flex justify-content-center mb-0">
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star-half-alt fa-sm text-warning"></i>
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="glass"  data-aos="fade-up" >
                            <div class="d-flex justify-content-center mb-4">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                    class="rounded-circle shadow-1-strong" width="150" height="150" />
                            </div>
                            <h5 class="mb-3">Lisa Cudrow</h5>
                            <h6 class="text-primary mb-3">Graphic Designer</h6>
                            <p class="px-xl-3">
                                <i class="fas fa-quote-left pe-2"></i>Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.
                            </p>
                            <ul class="list-unstyled d-flex justify-content-center mb-0">
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div class="glass"  data-aos="fade-up" >
                            <div class="d-flex justify-content-center mb-4">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                    class="rounded-circle shadow-1-strong" width="150" height="150" />
                            </div>
                            <h5 class="mb-3">John Smith</h5>
                            <h6 class="text-primary mb-3">Marketing Specialist</h6>
                            <p class="px-xl-3">
                                <i class="fas fa-quote-left pe-2"></i>At vero eos et accusamus et iusto odio
                                dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
                            </p>
                            <ul class="list-unstyled d-flex justify-content-center mb-0">
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i class="far fa-star fa-sm text-warning"></i>
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                </Swiper>


            </div>
        </section>)
}

export default Testinomial