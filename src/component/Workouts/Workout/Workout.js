import React from 'react';

const Workout = ({name, img , time ,discription}) => {
    console.log(img)
    return (
        <div>
            <div className="flex flex-col  card w-[100%] lg:h-96 bg-[#EAEFF2] shadow-2xl rounded lg:relative ">
             <figure className="px-10 pt-10">
               <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl text-red-600">{name}</h2>
             <p>{discription}</p>
       <div className="card-actions">
             <p>Time required: {time} min</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mt-8 lg:absolute bottom-2 left-20">Add to list</button>
        </div>
  </div>
</div>
        </div>
    );
};

export default Workout;