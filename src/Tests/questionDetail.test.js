import React from 'react';
import QuestionDetail from '../Components/QuestionDetails/questionDetail'
import {
    BrowserRouter,
} from 'react-router-dom';
import {
    render,
    fireEvent
} from '@testing-library/react';
import { questionDetailObj } from '../Components/testComponentData'


test('check if questionDetail component is rendering', () => {
    render(<BrowserRouter>
        <QuestionDetail questionDetails={questionDetailObj} />
    </BrowserRouter>)
})

