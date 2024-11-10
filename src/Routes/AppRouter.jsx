import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import LoadingScreen from '../pages/LoadingScreen';
import Login from '../pages/Login';
import Signin from '../pages/Signin';
import BuyPage from '../pages/BuyPage';
import Nasrolah from '../pages/menu/Nasrolah';
import Khamenei from '../pages/menu/Khamenei';
import Vadehsadgh1 from '../pages/menu/Vadehsadgh1';
import Vadehsadgeh2 from '../pages/menu/Vadehsadgeh2';
import Tahlilvabarsi from '../pages/menu/Tahlilvabarsi';
import Tahlilshort from '../pages/menu/tahlilshort';
import Tahlilmid from '../pages/menu/tahlilmid';
import Tahlillong from '../pages/menu/Tahlillong';

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LoadingScreen />} />
            <Route path='/homepage' element={<Homepage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/singin' element={<Signin />} />
            <Route path='/shop' element={< BuyPage />} />
            <Route path='/khamenei' element={< Khamenei />} />
            <Route path='/nasroalah' element={< Nasrolah />} />
            <Route path='/vade-sadege1' element={< Vadehsadgh1 />} />
            <Route path='/vade-sadege2' element={< Vadehsadgeh2 />} />
            <Route path='/tahlilvabaresi' element={< Tahlilvabarsi />} />
            <Route path='/tahlilkotah' element={< Tahlilshort />} />
            <Route path='/tahlilmediom' element={< Tahlilmid />} />
            <Route path='/tahlillong' element={< Tahlillong />} />
        </Routes>
    </Router>
  )
}

export default AppRouter