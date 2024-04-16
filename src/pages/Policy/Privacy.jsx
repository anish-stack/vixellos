import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'

const Privacy = () => {
  return (
    <div className="container-fluid contact py-5">
        <Breadcrumbs title={'Privacy Policy'}  />
    <div className=" py-5">
        <div className="p-5 bg-light rounded">
            <div className="row g-4">
                <div className="col-12">
                    <div className="text-start mx-auto">
                        <h2>Privacy Policy</h2>

                        <p>This Privacy Policy outlines how [Your Company Name] ("we", "our", "us") collects, uses, and protects your personal information when you use our website [YourWebsite.com] (the "Service").</p>
                        
                        <h3>1. Information We Collect</h3>
                        <p>We collect personal information such as name, email address, mailing address, phone number, and payment information when provided voluntarily by users.</p>
                        
                        <h3>2. How We Use Your Information</h3>
                        <p>We use your information to:</p>
                        <ul>
                            <li>Process and fulfill orders</li>
                            <li>Provide customer support</li>
                            <li>Communicate with you about products, services, and promotions</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                        
                        <h3>3. Information Sharing</h3>
                        <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except for:</p>
                        <ul>
                            <li>Service providers who assist us in operating our website, conducting our business, or servicing you, provided that they agree to keep your information confidential.</li>
                            <li>Legal requirements or to protect our rights, property, or safety.</li>
                        </ul>
                        
                        <h3>4. Data Security</h3>
                        <p>We implement security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your information.</p>
                        
                        <h3>5. Cookies</h3>
                        <p>We use cookies to:</p>
                        <ul>
                            <li>Understand and save user preferences for future visits</li>
                            <li>Compile aggregate data about site traffic and site interactions to offer better site experiences and tools in the future</li>
                        </ul>
                        <p>You can choose to disable cookies through your browser settings. However, disabling cookies may affect the functionality of certain parts of the website.</p>
                        
                        <h3>6. Third-Party Links</h3>
                        <p>Our website may contain links to third-party websites. These third-party sites have separate and independent privacy policies. We have no responsibility or liability for the content and activities of these linked sites.</p>
                        
                        <h3>7. Changes to This Policy</h3>
                        <p>We reserve the right to update or change our Privacy Policy at any time. Any changes will be posted on this page with an updated date.</p>
                        
                        <h3>8. Contact Us</h3>
                        <p>If you have any questions or concerns about our Privacy Policy, please contact us at [contact@yourcompany.com].</p>
                        
                        <p><em>Last updated: 26-March-2024</em></p>
                        
                    </div>
                </div>
            </div>

        </div>

    </div>
</div>  )
}

export default Privacy