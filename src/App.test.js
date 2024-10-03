import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/Main';
import { fetchAPI } from './api';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} dispatch={expect.anything()} />);
    const headingElement = screen.getByText("Book Your Table");
    expect(headingElement).toBeInTheDocument();
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

test('client side validation test', () => {
    render(<BookingForm availableTimes={[]} dispatch={expect.anything()} />);
    const errorLabelOcassion = screen.getByText("Please select an occasion*");
    expect(errorLabelOcassion);
    const errorLabelDate = screen.getByText("Please choose a date*");
    expect(errorLabelDate);
    const errorLabelTime = screen.getByText("Please choose a time*");
    expect(errorLabelTime);
    const errorLabelGuests = screen.getByText("Input number of guests between 1-10*");
    expect(errorLabelGuests);
})
