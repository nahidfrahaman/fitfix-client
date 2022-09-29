import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AddBreak from '../AddBreak/AddBreak';
import ExerciseDetails from '../Exercise/ExerciseDetails';
import Header from '../Header/Header';
import Info from '../Info/Info';
import Infodetails from '../InfoDetails/Infodetails';
import Workouts from '../Workouts/Workouts';


const Home = () => {
    const [activities, setActivities]= useState([])
    const [time , setTime]= useState(0)
    const [addBreakTime, setAddBreakTime]=useState(0);
    


    

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setActivities(data))
    },[])

    const handleEvent=(newtime)=>{
        setTime(time + newtime);
         }
    
         
   const handleAddBreak=(breaktime)=>{
        const isExist= localStorage.getItem("breakTime")
        console.log(isExist)
         if (isExist){
            setAddBreakTime(isExist)
            localStorage.setItem("breakTime", breaktime)
            setAddBreakTime(breaktime)
            console.log(isExist)
        }
        else{
            localStorage.setItem("breakTime", breaktime)
            setAddBreakTime(breaktime)
        }
  }
  useEffect(()=>{
    const olddata= localStorage.getItem("breakTime")
    setAddBreakTime(olddata)
 },[])
  
 const firetost=()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
 }
     
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
            <div className="left-side col-span-3 text-cente">
               <Header></Header>
               <div className='grid gird-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 m-8'>
               {
                activities.map(activity=> <Workouts 
                    handleEvent={handleEvent}
                    key={activity.id}
                    activity={activity}></Workouts> )
               }
               
               </div>
             </div>
             {/* lest site start */}
            <div className="right-side p-4 bg-[#DFF6FF] shadow-2xl h-screen" data-aos="zoom-in" data-aos-duration="4000"> 
            <Info></Info>
            <Infodetails></Infodetails>
            <AddBreak handleAddBreak={handleAddBreak}></AddBreak>
            <ExerciseDetails 
            addBreakTime={addBreakTime}
            time={time}></ExerciseDetails>
            <button onClick={firetost} className='btn w-[96%] mt-8 bg-blue-500'> Activity Completed</button>
            
            
            
            </div>
            </div>
        </div>
    );
};

export default Home;