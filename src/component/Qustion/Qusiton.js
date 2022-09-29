import './Qusiton.css';

const Qusiton = () => {
    return (
        <div>
            <div className=' bg-[#DFF6FF]'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-[80%] mx-auto mt-5">
               <div className="collapse-title text-xl font-medium">
                  Qus:  How Does React work?
                </div>
               <div className="collapse-content"> 
            <p>tabIndex={0} ReactJS divides the UI into isolated reusable pieces of code known as components. React compiled jsx laguage by babel, React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process  </p>
           </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-[80%] mx-auto mt-5">
               <div className="collapse-title text-xl font-medium">
                  Qus:  Differece between props and state??
                </div>
               <div className="collapse-content"> 
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components </p>
           </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-[80%] mx-auto mt-5">
               <div className="collapse-title text-xl font-medium">
                  Qus: Example of Uses of useEffect without dataLoad?
                </div>
               <div className="collapse-content"> 
            <p>validating input field, live filtering, trigger animation on new array value, update paragraph list on fetched API data update  </p>
           </div>
            </div>
            </div>
        </div>
    );
};

export default Qusiton;