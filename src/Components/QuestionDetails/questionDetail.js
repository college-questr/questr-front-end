import React, {
    useState,
    useEffect
} from 'react';
import {
    DetailsContainer,
    MessageBody,
    Stamp,
    Vote,
    Tags,
    Tag,
    Arrow
} from './sharedStyles'
import Answers from './answers'
import Style from 'styled-components';
import Down from '../../Img/downArr.png';
import Up from '../../Img/upArrow.png';
import Star from '../../Img/Star.png'
import ReactHtmlParser from 'react-html-parser';

const QuestionView = ({ questionDetails }) => {
    console.log(questionDetails)
    return (
        <DetailsContainer >
            <QuestionTitle>
                {questionDetails.question.questionTitle && questionDetails.question.questionTitle}
            </QuestionTitle>
            <QuestionContainer>
                <Vote>
                    <Arrow src={Up} />
                    {questionDetails.question.votes}
                    <Arrow src={Down} />
                </Vote>
                <MessageBody>
                    {ReactHtmlParser(questionDetails.question.questionBody)}
                    {questionDetails.question.tag &&
                        <Tags>
                        {questionDetails.question.tag.map(el => <Tag>{el.tag}</Tag>)}
                        </Tags>
                    }
                    
                    <Stamp>
                        Question by {"questionDetails.user"}
                        <br />
                        {questionDetails.question.createdAt}
                    </Stamp>
                </MessageBody>
            </QuestionContainer>

            <DetailsContainer>
                
                <Answers answers={questionDetails.question.answer} />
            </DetailsContainer>
        </DetailsContainer>
    )
}

export default QuestionView;

const QuestionContainer = Style.div`
    display:flex;
    flex-flow:row nowrap;
 `

const QuestionTitle = Style.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    margin-top:15px;
    color: rgba(0, 0, 0, 0.54);
    padding-bottom:15px;
    border-bottom: 1px solid #D3D0D0;
`

