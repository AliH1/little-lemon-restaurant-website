import Nav from "../components/Nav";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";


function BookingPage(props){
    return(
        <>
          <Nav/>
          <main>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submit={props.submit}/>
          </main>
          <Footer/>
        </>
    );
}

export default BookingPage;