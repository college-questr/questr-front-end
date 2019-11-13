import React from 'react';
import Signup from '../Components/signup';
import { render, fireEvent, getByLabelText } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route } from 'react-router-dom';


test("check if signup component renders", () => {
  render(<Signup />)
})

//create test for change handlers accepting input
test("check change handlers of signup inputs", () => {
  const { getByPlaceholderText } = render(<BrowserRouter><Signup /></BrowserRouter>);

  fireEvent.change(getByPlaceholderText(/example@gmail.com/i), {
    target: {
      value: 'dj'
    }
  });

  fireEvent.change(getByPlaceholderText("password"), {
    target: {
      value: 'password'
    }
  });

  fireEvent.change(getByPlaceholderText(/Re-enter password/i), {
    target: {
      value: 'password'
    }
  });

  expect(getByPlaceholderText(/example@gmail.com/i).value).toBe("dj");
  expect(getByPlaceholderText("password").value).toBe("password");
  expect(getByPlaceholderText(/Re-enter password/i).value).toBe("password")
})

//check if text renders
test("check signup rendered texts", () => {
  const { getByText } = render(<Signup />);
  expect(getByText(/Email/i).innerHTML).toBe(" Email ");
  expect(getByText("Password").innerHTML).toBe(" Password ");
})


//create test for submit handler
// need to create this once the back end is made
