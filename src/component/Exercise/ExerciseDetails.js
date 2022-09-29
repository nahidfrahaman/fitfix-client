import React from 'react';

const ExerciseDetails = ({time}) => {
    
    
    
   
   
    return (
        <div>
            <div className='mt-8'>
                <h3 className='text-xl font-semibold'>Exercise Details</h3>
            </div>
            <div className='w-[100%]  bg-[#EAEFF2] p-4 flex justify-evenly mt-2'>
                <p>Exercise Time</p>
                <p><span>{time}</span> min</p>
                
            </div>
            <div className='w-[100%]  bg-[#EAEFF2] p-4 flex justify-evenly mt-2'>
                <p>Break Time</p>
                <p><span>00</span> min</p>
                
            </div>
        </div>
    );
};

export default ExerciseDetails;