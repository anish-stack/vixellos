import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const SinglePage = () => {
    const [product, setProduct] = useState(null);
    const { id, name } = useParams();
    const [peopleViewing, setPeopleViewing] = useState(86);

    useEffect(() => {
        const interval = setInterval(() => {
            // Generate a random number between 10 and 200
            const randomPeople = Math.floor(Math.random() * (200 - 10 + 1)) + 10;
            setPeopleViewing(randomPeople);
        }, 3000); // Update every 5 seconds

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []);
    const [deliveryDate, setDeliveryDate] = useState(null);
    const [todayDate, setTodayDate] = useState(null);

    useEffect(() => {
        // Calculate today's date
        const today = new Date();
        const formattedTodayDate = today.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        setTodayDate(formattedTodayDate);

        // Get current timestamp in milliseconds
        const currentDate = Date.now();

        // Calculate a random number of milliseconds between 4 to 5 days (in milliseconds)
        const deliveryWindow = Math.floor(Math.random() * (5 * 24 * 60 * 60 * 1000 - 4 * 24 * 60 * 60 * 1000 + 1)) + 4 * 24 * 60 * 60 * 1000;

        // Calculate delivery date by adding the delivery window to current date
        const deliveryTimestamp = currentDate + deliveryWindow;

        // Convert delivery timestamp to a readable date format
        const deliveryDateObject = new Date(deliveryTimestamp);
        const formattedDeliveryDate = deliveryDateObject.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        // Update state with the formatted delivery date
        setDeliveryDate(formattedDeliveryDate);
    }, []);

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
    const handleImageClick = (index) => {
        document.querySelector('.big-img img').src = product.img[index];
    };

    return (
        <div>
            <div className='bread bg-secondarys'>
                <nav className=' px-2 py-1 ' aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Product</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{product.heading}</li>
                    </ol>
                </nav>

            </div>
            <div className="product-info">
                <div className="container">
                    <div className="col-12 col-md-12">
                        <div className="row flexc">
                            <div className="col-md-5 col-12 py-5">
                                <div className="big-img">
                                    <img src={product.img[0]} alt="" />

                                    <div className="smallimgs">
                                        {product.img.map((item, index) => (
                                            <img
                                                key={index}
                                                src={item}
                                                alt=""
                                                onClick={() => handleImageClick(index)} // Handle click event
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-7 col-12 mt55 py-5">
                                <div className="info-products font">
                                    <h1 className='heading'>{product.heading}</h1>
                                    <ul>
                                        <li className="star">
                                            {Array.from({ length: product.star }).map((_, index) => (
                                                <>

                                                    <i key={index} className="fas fa-star"></i>
                                                </>
                                            ))}
                                            <span className='number-review'> ({product.reviewNumber})Reviwes </span>
                                        </li>
                                    </ul>
                                    <div className="pric">
                                        <p className='mr'><i class="fa-solid fa-indian-rupee-sign "></i><del>{product.mrpPrice}</del> <span className='mls'>{product.discount}</span> </p>
                                    </div>
                                    <div className="person-view font">
                                        <p className='fw-bolder fs-5'><i className="fa-solid fa-eye"></i>{peopleViewing} <span className='font ml-2'>People are Viewing this right now</span></p>
                                    </div>
                                    <div className="delivery font">


                                        <p>
                                            <i className="fa-solid fa-truck"></i>Get It Between
                                            <span>{todayDate} To </span>
                                            {deliveryDate && <span> {deliveryDate}</span>}

                                        </p>

                                    </div>
                                    <div className="btns btnss mt-5 w-100 font">
                                        <Link to={`/cash-on-delivery/${product.heading}/${product.id}`}>Buy With Cash On Delivery</Link>
                                    </div>
                                    <div className="btns btnss o mt-5 w-100 font">
                                        <Link to={`/Buy-it-now/${product.heading}/${product.id}`} > <i class="fa-solid fa-cart-shopping mr"></i> Buy it Now</Link>
                                    </div>
                                </div>
                                <div className="paymentfoot">
                                    <img src={product.paymentfoot} alt="" />
                                </div>
                                <div className='mt-5'>
                                    <h3>{product.firstInfo}</h3>
                                </div>
                                <div className='mt-5'>
                                    <div className='container'>
                                        <div className='col-10'>
                                            <div className="row">
                                                <div className="col-5">
                                                    <img className='img-fluid' src={product.img[1]} />
                                                </div>
                                                <div className="col-5">
                                                    <img className='img-fluid' src={product.img[2]} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='mt-5'>
                                    <h3>{product.secondinfo}</h3>
                                </div>
                                <div className='mt-5'>
                                    <div className='container'>
                                        <div className='col-10'>
                                            <div className="row">
                                                <div className="col-5">
                                                    <img className='img-fluid' src={product.img[3]} />
                                                </div>
                                                <div className="col-5">
                                                    <img className='img-fluid' src={product.img[4]} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='mt-5'>
                                    <h3>{product.thirdinfo}</h3>
                                </div>
                                <div className='mt-5'>
                                    <h3>{product.fourthinfo}</h3>
                                </div>
                                <div className='mt-5'>
                                    <div className='container'>
                                        <div className='col-10'>
                                            <div className="row">
                                                <div className="col-5">
                                                    <img className='img-fluid' src={product.img[5]} />
                                                </div>
                                                <div className="col-5">
                                                    <img className='img-fluid' src={product.img[6]} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='mt-5'>
                                    <h3>{product.fifthInfo}</h3>
                                </div>
                                <div className='mt-5'>
                                    <div className='container'>
                                        <div className='col-10'>
                                            <div className="row">
                                                <div className="col-5">
                                                    <img className='img-fluid' src={product.img[5]} />
                                                </div>
                                                <div className="col-5">
                                                    <img className='img-fluid' src={product.img[2]} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <div className='mt-5'>
                                            <h3>{product.sevnthinfo || null}</h3>
                                            <h3>{product.eightInfo || null}</h3>

                                        </div>
                                        <div className='container'>
                                            <div className='col-10'>
                                                <div className="row ">
                                                    <div className="col-5">
                                                        <img className='img-fluid' src={product.otherImages[0]} />
                                                    </div>
                                                    <div className="col-5">
                                                        <img className='img-fluid' src={product.otherImages[1]} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Render other details of the product */}
        </div>
    );
}

export default SinglePage;
