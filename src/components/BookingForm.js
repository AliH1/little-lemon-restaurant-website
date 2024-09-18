import React, {useState} from "react";

function BookingForm(props){

  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTime] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
    props.dispatch(e.target.value);
  }

  return(
    <section className="booking-form">
      <form onsubmit={handleSubmit} className="booking-form-container">
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={handleDateChange} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " onChange={(e) => setTime(e.target.value)}>
          {props.availableTimes.map(time => (
            <opition key={time}>{time}</opition>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => setGuests(e.target.value)}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={(e) => setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" className="submitBtn"/>
      </form>
    </section>
  );
}

export default BookingForm;