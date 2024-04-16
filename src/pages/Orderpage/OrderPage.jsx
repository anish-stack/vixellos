import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

import './order.css'
const OrderPage = () => {
    const [product, setProduct] = useState(null);
    const { name, id } = useParams()

    useEffect(() => {
        let searchUrl = '/data.json';

        if (id) {
            // If ID is present in URL parameters, search by ID
            searchUrl += `?id=${id}`;
        } else if (name) {
            // If name is present in URL parameters, search by name
            searchUrl += `?name=${name}`;
        } else {
            console.log('No ID or name provided in URL parameters');
            return;
        }

        // Fetch data using Axios from data.json with search query
        axios.get(searchUrl)
            .then(response => {
                // Assuming the response data is an array of products
                const foundProduct = response.data[0];
                if (foundProduct) {
                    setProduct(foundProduct);
                    console.log("first", foundProduct)
                } else {
                    console.log(`Product with ID or name ${id || name} not found`);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id, name]);

    if (!product) {
        // Render loading state or error message
        return <div>Loading...</div>;
    }
    return (
        <section className="order-form m-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 mx-auto text-center px-4">
                        <h1 className='oranges'>Fill This Form To Complete Your Order</h1>
                    </div>
                </div>
                <div className="row  pt-4">
                    <div className="col-12 order-1 col-md-6 mx-auto">
                        <div className="row order-1 mx-4">
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label className="order-form-label">First Name</label>
                                    <input type="text" className="form-control order-form-input" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label className="order-form-label">Last Name</label>
                                    <input type="text" className="form-control order-form-input" />
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3 mx-4">
                            <div className="col-12">
                                <div className="form-group">
                                    <label className="order-form-label">Type of thing you want to order</label>
                                    <input type="text" value={name} className="form-control order-form-input" />
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3 mx-4">
                            <div className="col-12">
                                <div className="form-group">
                                    <label className="order-form-label">Payment Type</label>
                                    <input type="text" value={"Cash On Delivery"} contentEditable="false" className="form-control order-form-input" />
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3 mx-4">
                            <div className="col-12">
                                <div className="form-group">
                                    <label className="order-form-label">Address</label>
                                    <input type="text" className="form-control order-form-input" placeholder="Street Address" />
                                    <input type="text" className="form-control order-form-input mt-2" placeholder="Street Address Line 2" />
                                    <input type="text" className="form-control order-form-input mt-2" placeholder="City" />
                                    <input type="text" className="form-control order-form-input mt-2" placeholder="Region" />
                                    <input type="text" className="form-control order-form-input mt-2" placeholder="Postal / Zip Code" />
                                    <input type="text" className="form-control order-form-input mt-2" placeholder="Country" />
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3 mx-4">
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">I Agree With All Terms & Conditions</label>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3 mx-4">
                            <div className="col-12">
                                <button type="button" id="btnSubmit" className="btn btn-primary orangess d-block mx-auto btn-submit">Submit</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 mx-auto">
                        <div className="img">
                            <img src={product.img[1]} alt="" />
                            <h5>{product.heading}</h5>
                            <h2>Rs{product.discount}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OrderPage