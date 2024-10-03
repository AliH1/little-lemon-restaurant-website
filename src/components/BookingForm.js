import React, {useState} from "react";

function BookingForm(props){

  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = {occasion: occasion, guests: guests, date: date, time: time};
    props.submit(booking);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
    props.dispatch(e.target.value);
  }

  return(
    <section className="booking-form">
      <form onSubmit={handleSubmit} className="booking-form-container">
        <h1>Book Your Table</h1>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={handleDateChange} required/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" onChange={(e) => setTime(e.target.value)} required>
          <option value="">--Select Time--</option>
          {props.availableTimes.map(time => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => setGuests(e.target.value)}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={(e) => setOccasion(e.target.value)} required>
            <option value="">--Select Ocassion--</option>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <button aria-label="make reservation" type="submit" className="submitBtn">Make Your Reservation</button>
      </form>
    </section>
  );
}

export default BookingForm;