import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Fetured = () => {
    useEffect(()=>{
    
        AOS.init();
    
    }) 
  return (
    <section class="py-3 py-md-5  py-xl-8 bg-light">
    <div class="container" data-aos="flip-up">
        <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                <h2 class="display-5 mb-4 mb-md-5 orangess fw-bolder font text-center">Featured</h2>
                <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
            </div>
        </div>
    </div>

    <div class="container">
        <article>
            <div class="card">
                <div class="row g-0">
                    <div data-aos="fade-left" class="col-12 col-md-6 order-1 order-md-0 d-flex align-items-center">
                        <div class="card-body p-md-4 p-xl-6 p-xxl-9">
                            <div class="entry-header mb-3">
                                <ul class="entry-meta list-unstyled d-flex mb-4">
                                    <li>
                                        <a class="d-inline-flex px-2 py-1  oranges text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2 text-decoration-none"
                                            href="#!">Solar Desk Panel Light</a>
                                    </li>
                                </ul>
                                <h2 class="card-title entry-title display-3 fw-bold mb-4 lh-1">
                                    <a class="link-dark text-decoration-none" href="#!">Elevate your outdoor space with Relax Company's
                                        <span class="oranges"> Solar LED Porch Wall Lights-stylish, </span>efficient, and hassle-free!!</a>
                                </h2>
                            </div>
                            <p class="card-text entry-summary text-secondary mb-4">
                                Bask in solar light's eco-glow, illuminating desks and rooftops, <span
                                    class="oranges">transforming spaces with sustainable brilliance.</span>
                                Illuminate your world sustainably!
                            </p>
                            <div class="details">
                                <p class="name">Solar Led Step Lights Outdoor Decorative Garden</p>
                                <ul class="stars ">
                                    <li><i class="ri-star-fill"></i></li>
                                    <li><i class="ri-star-fill"></i></li>
                                    <li><i class="ri-star-fill"></i></li>
                                    <li><i class="ri-star-fill"></i></li>
                                    <li><i class="ri-star-fill"></i></li>
                                    <li class="review-number">(52)</li>

                                </ul>
                                <div class="price">
                                    <del>Rs 2999</del>
                                    <p>Rs 1499</p>
                                </div>
                                <div class="card-button">
                                    <a href={`/single-product/Elevate%20your%20outdoor%20space%20with%20Relax%20Company's%20Solar%20LED%20Porch%20Wall%20Lights-stylish,%20efficient,%20and%20hassle-free!%20/2`}>Buy On Cash On Delivery</a>
                                </div>
                            </div>
           
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1200" class="col-12 col-md-6 d-flex">
                        <img class="img-fluid rounded-end object-fit-cover" loading="lazy"
                            src="https://i.ibb.co/W6rNVr6/image.png" alt="Entrepreneurship"/>
                    </div>
                </div>
            </div>
        </article>
    </div>
</section>  )
}

export default Fetured