import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css';
import Home from './component/Home/Home';
import Qusiton from './component/Qustion/Qusiton';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
     <Home></Home>
     <Qusiton></Qusiton>
     </div>
  );
}

export default App;
