import React from 'react';

const ServiceCarousel = ({ product }) => {
    const { name, img, price, wight } = product;
    return (
        <div className='border-2 p-5 lg:pl-24 rounded-2xl'>

            <img src={img} className=' w-[200px]' alt="" />
            <h1>{name}</h1>
            <p>Price: ${price}</p>
            <p>Wigth: {wight}</p>

        </div>
    );
};

export default ServiceCarousel;