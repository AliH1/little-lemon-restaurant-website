import React, {useState} from "react";

function BookingForm(props){

  const [occasion, setOccasion] = useState({occasion: "", errorMessage: "Please select an occasion*",});
  const [guests, setGuests] = useState({guests: "", errorMessage: "Input number of guests between 1-10*",});
  const [date, setDate] = useState({date: "", errorMessage: "Please choose a date*",});
  const [time, setTime] = useState({time: "", errorMessage: "Please choose a time*",});

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = {occasion: occasion.occasion, guests: guests.guests, date: date.date, time: time.time};
    props.submit(booking);
  }

  function validiateDate(e){
    const today = new Date();
    const newDate = new Date(e.target.value);
    if(today > newDate)
      return "Please pick a date that hasn't elapsed";
    return "";
  }

  function validiateGuests(e){
    if(e.target.value === "")
      return "Input number of guests between 1-10*";
    if(e.target.value < 1)
      return "Number of guests cannot be lower than 1";
    if(e.target.value > 10)
      return "Maximum number of guests is 10";
    return "";
  }

  function validateOcassion(e) {
    if(e.target.value === "")
      return "Please select an occasion*";
    return "";
  }

  function validateTime(e) {
    if(e.target.value === "")
      return "Please choose a time*";
    return "";
  }

  const handleDateChange = (e) => {
    const error = validiateDate(e);
    setDate({date: e.target.value, errorMessage: error});
    props.dispatch(e.target.value);
  }

  const handleGuestsChange = (e) => {
    const error = validiateGuests(e);
    setGuests({guests: e.target.value, errorMessage: error})
  }

  const handleOccasionChange = (e) => {
    const error  = validateOcassion(e);
    setOccasion({occasion: e.target.value, errorMessage: error})
  }

  const handleTimeChange = (e) => {
    const error = validateTime(e);
    setTime({time: e.target.value, errorMessage: error})
  }

  return(
    <section className="booking-form">
      <form onSubmit={handleSubmit} className="booking-form-container">
        <h1>Book Your Table</h1>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={handleDateChange} required/>
        <label className="err-message">{date.errorMessage}</label>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" onChange={handleTimeChange} required>
          <option value="">--Select Time--</option>
          {props.availableTimes.map(time => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label className="err-message">{time.errorMessage}</label>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1-10" min="1" max="10" id="guests" onChange={handleGuestsChange}/>
        <label className="err-message">{guests.errorMessage}</label>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={handleOccasionChange} required>
            <option value="">--Select Ocassion--</option>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <label className="err-message">{occasion.errorMessage}</label>
        <button aria-label="make reservation" type="submit" className="submitBtn" disabled={!(date.errorMessage==="" && time.errorMessage==="" && occasion.errorMessage==="" && guests.errorMessage==="")}>Make Your Reservation</button>
      </form>
    </section>
  );
}

export default BookingForm;