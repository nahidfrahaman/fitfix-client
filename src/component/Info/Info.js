import React from 'react';
import MyImage from '../../images/img_20210831_120918_110-removebg-preview.png';

const Info = () => {
    return (
        <div>
        <div className="avatar mt-3 my-10  flex ">
          <div className="w-20 rounded-full ring  ">
          <img src={MyImage} alt='/' />
         </div>
         <strong className='ml-4 inline-block'>Mir  Nahid</strong>
         <span className='block'> Kushtia , Bangladesh</span>
       </div>
        </div>
    );
};

export default Info;