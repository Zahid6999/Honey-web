import React from 'react';

const ServiceCarousel = ({ product }) => {
    const { name, img, price, wight } = product;
    return (
        <div className='border-2 p-5  w-[350px] rounded-2xl'>

            <img src={img} className=' w-[200px] h-[200px] px-2 py-4' alt="" />
            <h1 className='text-2xl font-bold'>{name}</h1>
            <p className='text-orange-500 py-2 font-semibold'>Price: ${price}</p>
            <p className='italic'>Wight: {wight}</p>

        </div>
    );
};

export default ServiceCarousel;