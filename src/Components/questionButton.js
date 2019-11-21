import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const QuestionButton = () => {


  return (
    <div className="question-container">
      <Button>
        <Link to="/add-question">ask a question</Link>
      </Button>
    </div>
  )
}

const Button = Styled.button`
  width: 148px;
  height: 45px;
  background: #93B2E0;
  border-radius: 5px;
  border: none
  transition:500ms;
  text-decoration:none
  &:hover{
      border: 5px solid #93B2E0;
      cursor:pointer;
  }

  a{
    color: #fff;
    text-decoration: none;

    &:hover{
      color: #fff;
    }

    &:focus{outline: none;}
  }
`

export default QuestionButton;