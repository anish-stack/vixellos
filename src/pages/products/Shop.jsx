import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6); // Change this value to adjust items per page

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        axios.get('./data.json') 
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <>
        <Breadcrumbs title={'Our-Shop'} />
        <div className='top-products py-3'>
            <div className="container-fluid text-center mt-5">
                <div className="heading-5 mb-5" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="fw-bold font">TOP PRODUCTS OF THE DAY</h1>
                </div>
                <div className="row">
                    {currentItems.map(product => (
                        <div className='col-12 col-md-4 mb-4' key={product.id}>
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
                                    <ul className="list-unstyled">
                                        <li className="stars">
                                            {Array.from({ length: product.star }).map((_, index) => (
                                                <i key={index} className="fas fa-star"></i>
                                            ))}
                                            <span className='number-review'>({product.reviewNumber})</span>
                                        </li>
                                    </ul>
                                    <div className="prices">
                                        <p><i className="fas fa-indian-rupee-sign"></i><del>{product.mrpPrice}</del> <span className='ml-2'>{product.discount}</span></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                     <nav>
                        <ul className="pagination justify-content-center">
                            {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map((_, index) => (
                                <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                                    <button onClick={() => paginate(index + 1)} className="page-link">{index + 1}</button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </>
    

    );
}

export default Shop;
