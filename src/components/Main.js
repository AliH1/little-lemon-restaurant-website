import React, { useReducer } from "react";
import {Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";

function Main(){

  function updateTimes(state, date){
    return {times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]};
  }
  const initial = {times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]}
  const [state, dispatch] = useReducer(updateTimes, initial);

  return(
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/booking' element={<BookingPage availableTimes={state.times} dispatch={dispatch}/>} />
    </Routes>
  );
}

export default Main;