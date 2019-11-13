import React from 'react';
import LoginNav from '../Components/Nav/loginNav';
import {BrowserRouter, MemoryRouter, Route} from 'react-router-dom';
import {
    render,
    fireEvent
} from '@testing-library/react';

test('check if nav is rendering', () => {
    render(<BrowserRouter><LoginNav /></BrowserRouter>)
})

test('check if button changes when passed props page=signup', () => {
    const { getByText } = render(<BrowserRouter><LoginNav page='signup' /></BrowserRouter>);
    expect(getByText(/Login/i).innerHTML).toBe("Login");
})

test('check if button renders Sign up when loginNav has no props', () => {
    const { getByText } = render(<BrowserRouter><LoginNav /></BrowserRouter>);
    expect(getByText(/Sign up/i).innerHTML).toBe("Sign Up");
})

test('check if router NavLink is working on login and signup page', () => {
    const { getByText } = render(<BrowserRouter><LoginNav /></BrowserRouter>);
    fireEvent.click(getByText(/Sign Up/i));
    expect(window.location.pathname).toBe("/signup")
    
    setTimeout(() => {
        fireEvent.click(getByText(/Login/i));
        expect(window.location.pathname).toBe("/login")
    },2000);


})