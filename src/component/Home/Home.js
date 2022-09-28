import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Workouts from '../Workouts/Workouts';




const Home = () => {
    const [activities, setActivities]= useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setActivities(data))
    },[])

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4 '>
            <div className="left-side col-span-3 text-cente">
               <Header></Header>
               <div className='grid gird-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8'>
               {
                activities.map(activity=> <Workouts 
                    key={activity.id}
                    activity={activity}></Workouts> )
               }
               </div>
             
            </div>
            <div className="right-side text-center bg-[#EAEFF2] shadow-2xl h-screen"> 
            
            </div>
            </div>
        </div>
    );
};

export default Home;