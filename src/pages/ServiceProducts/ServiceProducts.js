import React, { useEffect, useState } from 'react';
import ServiceCarousel from './ServiceCarousel';

const ServiceProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('ServiceProducts.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [])
    return (
        <div className=' grid grid-cols-3 gap-8 lg:mx-40 mt-32'>
            {
                products.map(product => <ServiceCarousel
                    key={product._id}
                    product={product}
                >

                </ServiceCarousel>)
            }
        </div>
    );
};

export default ServiceProducts;