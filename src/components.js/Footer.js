import React from 'react'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h3 className='footer-heading'>Title Here</h3>
                        <p className='footer-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim. </p>
                        <div className='d-flex social text-center'>
                        <div className='social-1'><i class="fab fa-instagram" style={{color: '#7f7770'}}></i></div>
                            <div className='social-1'><i class="fab fa-facebook-f" style={{color: '#7f7770'}}></i></div>
                            <div className='social-1'><i class="fab fa-twitter" style={{color: '#7f7770'}}></i></div>
                            <div className='social-1'><i class="fab fa-whatsapp" style={{color: '#7f7770'}}></i></div>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <h3 className='footer-heading'>About</h3>
                        <h5 className='footer-heading-2'>Histry</h5>
                        <h5 className='footer-heading-2'>Our Team</h5>
                        <h5 className='footer-heading-2'>Brand Guidelines</h5>
                        <h5 className='footer-heading-2'>Terms & Condition</h5>
                        <h5 className='footer-heading-2'>Privacy Policy</h5>
                    </div>
                    <div className='col-md-2'>
                        <h3 className='footer-heading'>Services</h3>
                        <h5 className='footer-heading-2'>How to Order</h5>
                        <h5 className='footer-heading-2'>Our Product</h5>
                        <h5 className='footer-heading-2'>Order Status</h5>
                        <h5 className='footer-heading-2'>Promo</h5>
                        <h5 className='footer-heading-2'>Payment Method</h5>
                    </div>
                    <div className='col-md-2'>
                        <h3 className='footer-heading'>Others</h3>
                        <h5 className='footer-heading-2'>Contact Us</h5>
                        <h5 className='footer-heading-2'>Help</h5>
                        <h5 className='footer-heading-2'>Privacy</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
