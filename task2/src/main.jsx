import './App.css';
import Zahologin from './components/login/Zahologin';
import Signup from './components/signup/signup';
import Footer from './components/footer/Footer';
import Home from './components/homepage/Home';
import Nav from './components/navbar/nav';
import Facility from './components/homepage/facility';
import SubNav from './components/navbar/SubNav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Leave from './components/leaveform/leaveform';
import Loginright from './components/login/loginright';
import Block from './components/blocktask/block';


function Main() {
  return (
    <div className="App">

    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/Facility' element={<Facility />}/>
            <Route exact path='/Signup' element={<Signup/>}/>
            <Route exact path='/Zahologin' element={<Zahologin/>}/>
            <Route exact path='/Leave' element={<Leave/>}/>
            <Route exact path='/Block' element={<Block/>}/>
            <Route exact path='/Loginright' element={<Loginright/>}/>
        </Routes>
    </BrowserRouter>

      
      
           

    </div>
  );
}

export default Main;
