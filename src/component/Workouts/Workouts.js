import React from 'react';
import Workout from '../Workout/Workout';
const Workouts = ({activity,handleEvent}) => {
    const {name, img, time, discription}=activity
    
    
    return (
        <div>
            <div>
                <Workout 
                handleEvent={handleEvent}
                discription={discription}
                time={time}
                img={img}
                name={name}></Workout>
            </div>
        </div>
    );
};

export default Workouts;