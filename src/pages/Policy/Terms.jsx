import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'

const Terms = () => {
    return (
        <div className="container-fluid contact py-5">
            <Breadcrumbs title={'Term & Shipping'} />
            <div className="container-fluid contact py-5">
                <div className=" py-5">
                    <div className="p-5 bg-light rounded">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="text-start mx-auto">
                                    <h1 className="text-primary">Term & Shipping</h1>
                                    <h2>Shipping Policy for Befikar Shopping</h2>
                                    <p><em>Last Updated: 14-12-2023</em></p>

                                    <p>Thank you for shopping with <b>Befikar Shopping</b>. This Shipping Policy provides information about our shipping practices, delivery times, and related details.</p>

                                    <ul>
                                        <li><b>Order Processing:</b>
                                            <p>Orders are typically processed within 1-2 business days from the date of purchase. However, processing times may vary during peak seasons or promotions.</p>
                                        </li>

                                        <li><b>Shipping Methods:</b>
                                            <p>We offer the following shipping methods:</p>
                                            <ul>
                                                <li><b>Standard Shipping:</b> Estimated delivery within 5-7 business days.</li>
                                                <li><b>Express Shipping:</b> Estimated delivery within 2-3 business days.</li>
                                            </ul>
                                            <p>Please note that delivery times are estimates and may vary based on your location and other factors.</p>
                                        </li>

                                        <li><b>Shipping Costs:</b>
                                            <p>Shipping costs are calculated based on the weight of the items, the shipping method selected, and the destination. The shipping costs will be displayed during the checkout process.</p>
                                        </li>

                                        <li><b>International Shipping:</b>
                                            <p>We currently offer international shipping to select countries. International shipping costs and delivery times may vary. Customers are responsible for any customs duties or taxes imposed by the destination country.</p>
                                        </li>

                                        <li><b>Order Tracking:</b>
                                            <p>Once your order has shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to monitor the status and location of your package.</p>
                                        </li>

                                        <li><b>Shipping Delays:</b>
                                            <p>While we strive to meet the estimated delivery times, external factors such as weather conditions, customs delays, or carrier issues may cause delays. Befikar Shopping is not responsible for any such delays.</p>
                                        </li>

                                        <li><b>Address Accuracy:</b>
                                            <p>It is the responsibility of the customer to provide accurate shipping information. Please ensure that your shipping address is complete and correct to avoid delivery issues.</p>
                                        </li>

                                        <li><b>Lost or Stolen Packages:</b>
                                            <p>Befikar Shopping is not responsible for lost or stolen packages. If you believe your package is lost or stolen, please contact the carrier directly.</p>
                                        </li>

                                        <li><b>Contact Information:</b>
                                            <p>For any questions or concerns regarding shipping, please contact our customer support.</p>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Terms