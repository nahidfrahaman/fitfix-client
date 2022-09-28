import React from 'react';

const Infodetails = () => {
    return (
        <div>
            <div className='w-[100%] h-[100px] bg-[#EAEFF2] p-4 flex justify-evenly'>
                <div className=''>
                    <p><span className='text-xl font-bold'>5.5</span></p>
                    <span>Height</span>
                </div>
                <div className=''>
                    <p><span className='text-xl font-bold'>65</span>kg</p>
                    <span>Weight</span>
                </div>
                <div className=''>
                    <p><span className='text-xl font-bold'>Like</span></p>
                    <span>Cricket</span>
                </div>
                <div className=''>
                    <p><span className='text-xl font-bold'>Edu</span></p>
                    <span>Engineer</span>
                </div>
            </div>
        </div>
    );
};

export default Infodetails;