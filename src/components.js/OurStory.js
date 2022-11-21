import React from 'react'

export default function OurStory() {
    return (
        <>
            <div className=' story-background'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 story-padding'>
                            <img src="./assets/images/story-image-1.png" className="card-img-top" alt="img-fluid" />
                        </div>
                        <div className='col-md-6 story-padding'>
                            <h2 className='story-heading-1'>Discount up to<br />
                                50% All Excursions</h2>
                            <p className='story-para-1 mt-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            <button className='story-btn'>READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='story-background-1'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 story-padding'>
                            <h2 className='story-heading-1'>January’s Promo: <br />
                                Buy 1 Get 1 Free!</h2>
                            <p className='story-para-1 mt-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            <button className='story-btn'>READ MORE</button>
                        </div>
                        <div className='col-md-6 story-padding'>
                            <img src="./assets/images/story-image-2.png" className="card-img-top" alt="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
