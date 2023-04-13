import React from 'react';
import logo1 from '../../access/logo/honey1.png';
import logo2 from '../../access/logo/honey-2.png';
import logo3 from '../../access/logo/honey-spoon.png';
import logo4 from '../../access/logo/honey-4.png';

const Services = () => {
    return (
        <div className='mt-[120px] bg-orange-50'>
            <p className='text-center text-base text-violet-800 italic mb-28 pt-3'>Our Services</p>

            <div className='grid grid-cols-4 lg:ml-[120px]'>
                <div className=' w-[280px] h-[200px] border rounded-3xl mb-4 bg-white'>
                    <img src={logo1} className='w-[70px] mb-12 ml-6 mt-3' alt="honey1" />
                    <h4 className='text-2xl font-bold ml-6'>Honey Production</h4>
                </div>
                <div className=' w-[280px] h-[200px] border rounded-3xl mb-4 bg-white'>
                    <img src={logo2} className='w-[70px] mb-12 ml-6 mt-3' alt="honey1" />
                    <h4 className='text-2xl font-bold ml-4'>Beekeeping Classes</h4>
                </div>
                <div className=' w-[280px] h-[200px] border rounded-3xl mb-4 bg-white'>
                    <img src={logo3} className='w-[70px] mb-12 ml-6 mt-3' alt="honey1" />
                    <h4 className='text-2xl font-bold ml-6'>Swarm Removal</h4>
                </div>
                <div className=' w-[280px] h-[200px] border rounded-3xl mb-4 bg-white'>
                    <img src={logo4} className='w-[70px] mb-12 ml-6 mt-3' alt="honey1" />
                    <h4 className='text-2xl font-bold ml-6'>Honey Shop</h4>
                </div>
            </div>
            <button className="mt-16 btn btn-primary lg:ml-[45%] py-7 px-12">See More</button>
        </div>
    );
};

export default Services;