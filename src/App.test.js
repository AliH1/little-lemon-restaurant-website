import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/Main';
import { fetchAPI } from './api';

test('Renders the BookingForm heading and reserve table button', () => {
    render(<BookingForm availableTimes={[]} dispatch={expect.anything()} />);
    const headingElement = screen.getByText("Book Your Table");
    expect(headingElement).toBeInTheDocument();

    const reserveButton = screen.getByText("Make Your Reservation");
    expect(reserveButton);
    fireEvent.click(reserveButton);
})

test('initializeTimes function and updateTimes function test', () => {
    //intilizeTimes test
    const intialState = initializeTimes();
    const expectedIntial = {times: fetchAPI(new Date())};
    expect(intialState).toEqual(expectedIntial);

    //updateTimes test
    const updatedState = updateTimes(intialState, new Date('2024-11-02'));
    expect(updatedState).not.toEqual(intialState);

})
