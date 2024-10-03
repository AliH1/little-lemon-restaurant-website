import React, { useReducer } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import ConfirmedBookingPage from "../pages/ConfirmedBookingPage";
import { submitAPI, fetchAPI } from '../api';

export function updateTimes(state, date){
  return {times: fetchAPI(new Date(date))};
}
export const initializeTimes = () => {
  return {times: fetchAPI(new Date())};
};


function Main(){
  const [state, dispatch] = useReducer(updateTimes, initializeTimes());

  const navigate = useNavigate();
  function submitForm (booking) {
      if (submitAPI(booking)) {
          navigate("/confirmedBooking")
      }
  }
  return(
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/booking' element={<BookingPage availableTimes={state.times} dispatch={dispatch} submit={submitForm}/>}/>
      <Route path='/confirmedBooking' element={<ConfirmedBookingPage/>} />
    </Routes>
  );
}

export default Main;