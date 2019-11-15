import React, {
    useState,
    useEffect
} from 'react';
import {
    DetailsContainer,
    QuestionTitle,
    QuestionBody,
    QuestionContainer,
    Stamp,
    Vote,
    Tags,
    Tag,
    AnswerContainer,
    SingleAnswer,
    AnswerHeader,
    Arrow
} from './styles'
import Down from '../../Img/downArr.png';
import Up from '../../Img/upArrow.png';

const QuestionView = ({ questionDetails }) => {

    return (
        <DetailsContainer >
            <QuestionTitle>{questionDetails.questionHeader}</QuestionTitle>
            <QuestionContainer>
                <Vote>
                    <Arrow src={Up} />
                    {questionDetails.votes}
                    <Arrow src={Down} />
                </Vote>
                <QuestionBody>
                    {questionDetails.questionBody}
                    <Tags>
                        {questionDetails.tags.map(el => <Tag>{el}</Tag>)}
                    </Tags>
                    <Stamp>
                        Question by {questionDetails.user}
                        <br />
                        {questionDetails.createdAt}
                    </Stamp>
                </QuestionBody>
            </QuestionContainer>

            <DetailsContainer>
                <AnswerHeader>{questionDetails.answers.length} Answers</AnswerHeader>
                <AnswerContainer>
                    {questionDetails.answers.map(el => {
                        return (
                            <SingleAnswer>
                                <Vote>
                                    <Arrow src={Up} />
                                    {el.votes}
                                    <Arrow src={Down} />
                                </Vote>
                                <QuestionBody>
                                    {el.answer}
                                    <Stamp>
                                        Answered by {el.answeredBy}
                                        <br />
                                        {el.createdAt}
                                    </Stamp>
                                </QuestionBody>
                            </SingleAnswer>
                        )
                    })}

                </AnswerContainer>
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
