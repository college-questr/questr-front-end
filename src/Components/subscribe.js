import React from 'react';
import Style from 'styled-components';

const follow = e => {
    e.preventDefault()
    console.log("submit");

    // call to update question following and update users watchedQuestions
    
}

const Subscribe = ({ followers }) => {
    return (
        <SubscribeContainer>
            <SubHeader>Follow this Question</SubHeader>
            <SubscribeButton onClick={follow}>Follow</SubscribeButton>
            <Following>
                <Bold>{followers} </Bold>
                People are following this question
            </Following>
        </SubscribeContainer>
    )
}

export default Subscribe;

const SubscribeContainer = Style.div`
    width: 335px;
    height: 154px;
    display:flex;
    flex-flow: column;
    justify-content:space-around;
    align-items:center;
`

const SubHeader = Style.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    border-bottom:1px solid #000000;
    color: rgba(13, 12, 12, 0.54);
`

const SubscribeButton = Style.button`    
    background: #93B2E0;
    border-radius: 3px;
    color: #FFFFFF;
    height: 37px;
    width:90%;
    transition:500ms;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    &:hover{
        border: 5px solid #93B2E0;
        cursor: pointer;
    }

`

const Following = Style.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: rgba(13, 12, 12, 0.54);
`

const Bold = Style.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`