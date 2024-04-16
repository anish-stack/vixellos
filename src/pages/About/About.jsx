import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'

const About = () => {
    return (
        <div>
            <Breadcrumbs title={"About Us"} />
            <div className="container-fluid banner  ">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="py-4">
                                <h1 className="display-3 text-white">About Us - Befikar Shopping</h1>
                                <p className="fw-normal display-3 text-dark mb-4">in Our Store</p>
                                <p className="mb-4 text-dark">Welcome to Befikar Shopping, where convenience meets quality. We offer an extensive selection of products across various categories at unbeatable prices, ensuring that you can shop with confidence and ease. Our platform is designed to provide a seamless shopping experience, with user-friendly features and reliable delivery service. At Befikar, customer satisfaction is our top priority, and we go the extra mile to exceed your expectations. Whether you're looking for electronics, fashion, groceries, or home essentials, Befikar has you covered. Join us and experience the joy of stress-free shopping, where you can shop without worries and live life befikar (without worries).</p>

                                <a href="/shop"
                                    className="bg-warning btn border-2 border-white rounded-pill text-dark py-3 px-5">BUY</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <img src="https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?w=1060&t=st=1713244155~exp=1713244755~hmac=862b0f0381063642c83e9db797cd917c81d58a584c2d3440a339888b8913a6c2" className="img-fluid w-100 rounded" alt="" />
                                <div className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
                                    style={{ width: '140px', height: '140px', top: 0, left: 0 }}>
                                    <h1 style={{ fontSize: '100px' }}>1</h1>
                                    <div className="d-flex flex-column">
                                        <span className="h2 mb-0">50$</span>
                                        <span className="h4 text-muted mb-0">kg</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About