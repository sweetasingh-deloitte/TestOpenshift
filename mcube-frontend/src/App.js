import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateTrip from './components/CreateTrip/CreateTrip';
import AllTrip from './components/AllTrip/AllTrip';
import DriverDetails from './components/DriverPage/DriverDetails';
import MyVehicle from './components/MyVehicle/MyVehicle';
import Login from './components/Login/Login';

function App() {
  return ( 
    <Router>
    {/* <div className="App"> */}
     <Topbar/>
     <div className='container1'>
     <Sidebar/>
    
     <div className='others'>
     
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/login" element={<Login/> }  />
     <Route path="/createTrip" element={<CreateTrip/>} />
     <Route path="/allTrip" element={<AllTrip/>} />
     <Route path="/driverDetail" element={<DriverDetails/>} />
     <Route path="/myVehicle" element={<MyVehicle/>} />

     
     <Route path="*" element={<Home />} />
     
     
     
     </Routes>
     </div>
     </div>
    
    {/* </div> */}
    </Router>
  );
}

export default App;