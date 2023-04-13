import React from 'react';

import mou2 from '../../access/logo/beeswax.png';
import mou3 from '../../access/logo/mou2.png';
import mou4 from '../../access/logo/pancake.png';
import food from '../../access/img/healthy-food-product-.jpg';
import google from '../../access/img/b8ba02f93f62dae4dcbabba299052593a826db5e.webp';

const OurProduct = () => {
    return (
        <div>
            <p className='text-center text-base text-violet-800 italic mb-4 mt-28'>Why Us</p>
            <h1 className='text-4xl text-center font-bold'>Why Choose Our Products</h1>

            <div className='grid grid-cols-3 mx-20 items-center mt-6'>
                <div>
                    <div className='flex items-center gap-4 mt-6'>
                        <img src={mou4} className='w-[60px]' alt="" />
                        <div>
                            <h5 className='text-2xl my-3'>Natural Bees</h5>
                            <p className='text-sm'>Honey starts as flower nectar collected by
                                <br />
                                bees, which broken .</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-4 mt-12'>
                        <img src={mou2} className='w-[60px]' alt="" />
                        <div>
                            <h5 className='text-2xl my-3'>Flower Products</h5>
                            <p className='text-sm'>Honey starts as flower nectar collected by
                                <br />
                                bees, which broken .</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-4 mt-12'>
                        <img src={mou3} className='w-[60px]' alt="" />
                        <div>
                            <h5 className='text-2xl my-3'>Honey Comb</h5>
                            <p className='text-sm'>Honey starts as flower nectar collected by
                                <br />
                                bees, which broken .</p>
                        </div>
                    </div>
                </div>
                {/* -============ */}
                <img src={food} className='w-[350px] rounded-full' alt="" />
                {/* ================ */}
                <div>
                    <div className='flex items-center gap-4 mt-6'>
                        <img src={mou4} className='w-[60px]' alt="" />
                        <div>
                            <h5 className='text-2xl my-3'>Natural Bees</h5>
                            <p className='text-sm'>Honey starts as flower nectar collected by
                                <br />
                                bees, which broken .</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-4 mt-12'>
                        <img src={mou2} className='w-[60px]' alt="" />
                        <div>
                            <h5 className='text-2xl my-3'>Flower Products</h5>
                            <p className='text-sm'>Honey starts as flower nectar collected by
                                <br />
                                bees, which broken .</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-4 mt-12'>
                        <img src={mou3} className='w-[60px]' alt="" />
                        <div>
                            <h5 className='text-2xl my-3'>Honey Comb</h5>
                            <p className='text-sm'>Honey starts as flower nectar collected by
                                <br />
                                bees, which broken .</p>
                        </div>
                    </div>
                </div>
            </div>

            <img src={google} className='mt-12 w-[65%] mx-auto' alt="" />
        </div>
    );
};

export default OurProduct;