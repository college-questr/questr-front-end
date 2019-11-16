import React from 'react';
import Subscribe from '../Components/subscribe'
import {
    BrowserRouter,
} from 'react-router-dom';
import {
    render,
    fireEvent
} from '@testing-library/react';
import {
    questionDetailObj
} from '../Components/testComponentData'
import { exportAllDeclaration } from '@babel/types';

test('check if Subscribe component is rendering', () => {
    render(<BrowserRouter>
        <Subscribe questionDetails={questionDetailObj} />
    </BrowserRouter>)
})

test('Subscribe button working', () => {
    const {getByText} = render(<BrowserRouter>
        <Subscribe questionDetails={questionDetailObj} />
    </BrowserRouter>)

    fireEvent.click(getByText("Follow"));

    // check if number is working
})