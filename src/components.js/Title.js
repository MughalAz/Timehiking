import React from 'react'

export default function Title() {
    return (
        <div className='title'>
            <h2 className='title-heading text-center'>Title Here</h2>
            <p className='title-para mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
            <div className='input-btn mt-5'>
            <input type='text' className='title-input' placeholder='Your Email'/>
            <button type='button' className='title-btn'>SUBSCRIBE</button>
            </div>
        </div>
    )
}
