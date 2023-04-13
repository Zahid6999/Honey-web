import React from 'react';
import banner from '../../access/img/honey3jpg.jpg';
import { TbSquareChevronsRight } from 'react-icons/tb';
import Services from '../Services/Services';
import OurProduct from '../OurProduct/OurProduct';
import ServiceProducts from '../ServiceProducts/ServiceProducts';

const Home = () => {
    return (
        <div>
            <div className='flex gap-4 items-center mx-9 bg-slate-100 mt-6'>
                <div className='w-1/2 '>
                    <h1 className='text-6xl font-bold  mb-5 ml-9'>Natural Organic <br /> Homemade Honey</h1>
                    <p className='text-sm ml-9 mb-8'>We collect the best varieties of honey to bring health to your home!Honey is
                        <br />
                        a sweet and viscous substance made by several bees
                    </p>
                    <div className='flex items-center gap-2 ml-9'>
                        <TbSquareChevronsRight className='text-2xl text-orange-700 rounded-md' />
                        <p className='font-semibold'>Promotes burn and wound healing</p>
                    </div>
                    <div className='flex items-center gap-2 ml-9 mt-3'>
                        <TbSquareChevronsRight className='text-2xl text-orange-700 rounded-md' />
                        <p className='font-semibold'>May help suppress coughing in children</p>
                    </div>
                    <div className='flex items-center gap-2 ml-14 mt-8'>
                        <button className='btn btn-primary font-bold'>Contact Us</button>
                        <button className='btn btn-secondary ml-6 font-bold'>Shop Now</button>
                    </div>
                </div>
                <img src={banner} className='w-1/2' alt="" />
            </div>

            {/* ---------------------================ */}
            <Services />
            <OurProduct />
            <ServiceProducts />
        </div>
    );
};

export default Home;