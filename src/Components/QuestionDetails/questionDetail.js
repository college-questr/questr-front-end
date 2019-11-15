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

const QuestionView = ({ questionDetails }) => {

    return (
        <DetailsContainer >
            <QuestionTitle>
                {questionDetails.questionHeader}
            </QuestionTitle>
            <QuestionContainer>
                <Vote>
                    <Arrow src={Up} />
                    {questionDetails.votes}
                    <Arrow src={Down} />
                </Vote>
                <MessageBody>
                    {questionDetails.questionBody}
                    <Tags>
                        {questionDetails.tags.map(el => <Tag>{el}</Tag>)}
                    </Tags>
                    <Stamp>
                        Question by {questionDetails.user}
                        <br />
                        {questionDetails.createdAt}
                    </Stamp>
                </MessageBody>
            </QuestionContainer>

            <DetailsContainer>
                <Answers answers={questionDetails.answers} />
            </DetailsContainer>
        </DetailsContainer>
    )
}

export default QuestionView;

/**
 *
 * expected props
 *
{
     question_id: 1,
     questionHeader: 'some question',
     questionBody: 'some body'
     votes:0,
     user:'',
     createdAt:'date'
     answers:
     [
         {
            answer_id: "some integer",
            answeredBy: "some user",
            answer: "some answer",
            createdAt:'date'
            votes:3

        },
        {
            answer_id: "some integer",
            answeredBy: "some user",
            answer: "some answer"
            createdAt:'date'
            votes:3
        }
     ]
 }
 */


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

