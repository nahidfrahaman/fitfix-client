import React from 'react';

const AddBreak = () => {
    return (
        <div>
            <div className='mt-8'>
                <h3 className='text-xl font-semibold'>Add A break</h3>
            </div>
            <div className='w-[100%] h-[100px] bg-[#EAEFF2] p-4 flex justify-evenly mt-2'>
                <div className=''>
                <button className='btn btn-circle border-t-cyan-700 '><strong>5 min</strong></button>
                   
                </div>
                <div className=''>
                <button className='btn btn-circle border-t-cyan-700 bg-blue-600 '><strong>10 min</strong></button>
                   
                </div>
                <div className=''>
                <button className='btn btn-circle border-t-cyan-700 '><strong>15 min</strong></button>
                   
                </div>
                <div className=''>
                <button className='btn btn-circle border-t-cyan-700 '><strong>20 min</strong></button>
                   
                </div>
                
            </div>
        </div>
    );
};

export default AddBreak;