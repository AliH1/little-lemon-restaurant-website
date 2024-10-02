import React, { useReducer } from "react";
import {Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";

export function updateTimes(state, action){
  return {times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]};
}
export const initializeTimes = () => {
  return {times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]};
};

function Main(){
  const [state, dispatch] = useReducer(updateTimes, initializeTimes());

  return(
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/booking' element={<BookingPage availableTimes={state.times} dispatch={dispatch}/>} />
    </Routes>
  );
}

export default Main;