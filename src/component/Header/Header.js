import React from 'react';
import MYimage from '../../images/icons8-workout-64.png';

const Header = () => {
    return (
        <div>
            <div className='flex ml-16 mt-8	items-center	'>
            <img className='w-[6%] h-16' src={MYimage}alt="" />
            <h1 className='text-3xl font-bold text-cyan-700 '>FitFix</h1>
            </div>
        </div>
    );
};

export default Header;