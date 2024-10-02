import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/Main';

test('Renders the BookingForm heading and reserve table button', () => {
    render(<BookingForm availableTimes={[]} dispatch={expect.anything()} />);
    const headingElement = screen.getByText("Book Your Table");
    expect(headingElement).toBeInTheDocument();

    const reserveButton = screen.getByText("Make Your Reservation");
    expect(reserveButton);
    fireEvent.click(reserveButton);
})

test('initializeTimes function and updateTimes function test', () => {
    const expected = {times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']};
    const intialState = initializeTimes();
    const action = { type: 'action' };
    expect(intialState).toEqual(expected);
    const updatedState = updateTimes(expected, action);
    expect (updatedState).toEqual(expected);

})
