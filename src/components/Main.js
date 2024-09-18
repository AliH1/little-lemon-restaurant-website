import {Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";

function Main(){

  const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  return(
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/booking' element={<BookingPage availableTimes ={times}/>} />
    </Routes>
  );
}

export default Main;