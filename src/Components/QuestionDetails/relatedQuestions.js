import React from 'react';
import style from 'styled-components';

const RelatedQuestion = (props) => {
    return (
        <>
            <Question>{props.questiionTitle}</Question>
            <NumAnswers>{props.answerCount}</NumAnswers>
        </>
    )
}


const Question = Style.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #3A76CF;
`

const NumAnswers = Style.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
`