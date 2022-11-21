import React from 'react'

export default function Menu() {
    return (
        <div className='container'>
            <h2 className='heading-menu'>LET'S GO</h2>
            <p className='para-menu'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                <div className="col">
                    <div className="card h-100">
                        <img src="./assets/images/menu-image-1.png" className="card-img-top" alt="..." />
                        <div className="card-body card-background">
                            <h5 className="card-title card-heading">Lorem ipsum</h5>
                            <p className="card-text card-para">Lorem ipsum dolor sit amet,
                                consectetur  adipisicing...
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./assets/images/menu-image-2.png" className="card-img-top" alt="..." />
                        <div className="card-body card-background">
                            <h5 className="card-title card-heading">Lorem ipsum</h5>
                            <p className="card-text card-para">Lorem ipsum dolor sit amet,
                                consectetur  adipisicing...
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="./assets/images/menu-image-3.png" className="card-img-top" alt="..." />
                        <div className="card-body card-background">
                            <h5 className="card-title card-heading">Lorem ipsum</h5>
                            <p className="card-text card-para">Lorem ipsum dolor sit amet,
                                consectetur  adipisicing...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mb-5'>
            <button className='menu-btn'>SHOW MORE</button>
            </div>
        </div>
    )
}
