import React from 'react';
import Signup from '../Components/signup';
import { render, fireEvent } from '@testing-library/react';

test("check if signup component renders", () => {
  render(<Signup />)
})

//create test for change handlers accepting input
test("check change handlers of signup inputs", () => {
  const { getByPlaceholderText } = render(<Signup />);

  fireEvent.change(getByPlaceholderText(/example@gmail.com/i), {
    target: {
      value: 'dj'
    }
  });

  fireEvent.change(getByPlaceholderText(/password/i), {
    target: {
      value: 'password'
    }
  });

  expect(getByPlaceholderText(/example@gmail.com/i).value).toBe("dj");
  expect(getByPlaceholderText(/password/i).value).toBe("password");
})

//check if text renders
test("check signup rendered texts", () => {
  const { getByText, findAllByText } = render(<Signup />);
  expect(getByText(/Email/i).innerHTML).toBe(" Email ");
  expect(findAllByText(/Password/i).innerHTML).toBe(" Password ");
  expect(getByText(/Signup/i).innerHTML).toBe("Signup");
})


//create test for submit handler
// need to create this once the back end is made
