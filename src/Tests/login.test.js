import React from 'react';
import Login from '../Components/login';
import { render,fireEvent } from '@testing-library/react';

test("check if login component renders", () => {
    render(<Login />)
})

//create test for change handlers accepting input
test("check change handlers of login inputs", () => {
    const {getByPlaceholderText}  = render(<Login />);

    fireEvent.change(getByPlaceholderText(/example@gmail.com/i), {
        target: {
            value: 'kim'
        }
    });

    fireEvent.change(getByPlaceholderText(/password/i), {
        target: {
            value: 'password'
        }
    });

    expect(getByPlaceholderText(/example@gmail.com/i).value).toBe("kim");
    expect(getByPlaceholderText(/password/i).value).toBe("password");
})

//check if text renders
test("check login rendered texts", () => {
    const {getByText}  = render(<Login />);
    expect(getByText(/Email/i).innerHTML).toBe(" Email ");
    expect(getByText(/Password/i).innerHTML).toBe(" Password ");
})


//create test for submit handler
// need to create this once the back end is made
