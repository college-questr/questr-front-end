import React from 'react';
import SearchBar from '../Components/search';
import {
    BrowserRouter,
} from 'react-router-dom';
import {
    render,
    fireEvent
} from '@testing-library/react';


test("check if SearchBar component renders", () => {
    render(<SearchBar />);
})

test("check change handlers of search if it accepts input", () => {
  const { getByPlaceholderText } = render(<BrowserRouter><SearchBar /></BrowserRouter>);

  fireEvent.change(getByPlaceholderText("Search Questr"), {
    target: {
      value: 'get dat money'
    }
  });

    expect(getByPlaceholderText("Search Questr").value).toBe("get dat money");
})