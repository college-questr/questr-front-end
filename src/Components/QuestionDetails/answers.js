import React from 'react';
import Style from 'styled-components';
import {
    MessageBody,
    Stamp,
    Vote,
    Arrow
} from './sharedStyles'
import Down from '../../Img/downArr.png';
import Up from '../../Img/upArrow.png';

const Answers = ({answers}) => {

    return (
        <>
            <AnswerHeader>{answers.length} Answers</AnswerHeader>
            <AnswerContainer>
                {answers.map(el => {
                    return (
                        <SingleAnswer>
                            <Vote>
                                <Arrow src={Up} />
                                {el.votes}
                                <Arrow src={Down} />
                            </Vote>
                            <MessageBody>
                                {el.answer}
                                <Stamp>
                                    Answered by {el.answeredBy}
                                    <br />
                                    {el.createdAt}
                                </Stamp>
                            </MessageBody>
                        </SingleAnswer>
                    )
                })}
            </AnswerContainer>

        </>
    )
}


export default Answers;

const AnswerContainer = Style.div`
    display:flex;
    flex-flow:row wrap;
      max-width: 823px;
    display:flex;
    flex-flow: column nowrap;
    justify-content:space-between;
    margin-left:20px;

 `

const SingleAnswer = Style.div`
    display: flex;
    flew-flow: row wrap;
    border-bottom: 1px solid #D3D0D0;

 `

const AnswerHeader = Style.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    border-bottom: 1px solid #D3D0D0;
    color: rgba(0, 0, 0, 0.54);
`