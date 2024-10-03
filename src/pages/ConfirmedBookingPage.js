import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

function ConfirmedBooking(){
    return(
        <>
          <Nav/>
          <main className="confirm-booking-container">
            <h1>Your booking has been confirmed</h1>
            <Link to="/">
              <button aria-label="return to homepage">Return To HomePage</button>
            </Link>
          </main>
          <Footer/>
        </>
    );
}

export default ConfirmedBooking;