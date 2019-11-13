import React, { useState, useEffect } from 'react';
import { buttonColor, bgColor, borderColor, labelColor, mainFont, loginButtonText } from './Styles/variables'
import Style from 'styled-components';

const QuestionForm = () => {


  return (
    <div className="question-container">
      <div className="main-content">
        <h1 className="h1-form">Ask a question and join the community</h1>
        <form className="question-form">
          <label htmlFor="question-title">Question Title</label>
          <input
            type="text"
            name="question-title"
            className="question-input"
          />

          <textarea className="text-area" name="question" rows="20" cols="30" />

          <SubmitButton type='submit'>Submit</SubmitButton>
        </form>
      </div>

      <div className="side-content">
        <h1>How to ask</h1>
        <h2>Ask questions about your homework</h2>

        <ul>
          <li>The title should be in the form of a question</li>
          <li>Provide sufficient details</li>
          <li>Be clear and concise</li>
          <li>lorem ipsem</li>
        </ul>

        <div className="tag-container">
          <h3>Tags</h3>
          <div className="tags">
            <button>Tag</button>
            <button>Tag</button>
            <button>Tag</button>
          </div>
        </div>
      </div>
    </div>
  )

}

const SubmitButton = Style.button`
    margin: 10px 0 0 0;
    width: 145.84px;
    height: 37px;
    background: ${buttonColor};
    border: 5px solid ${buttonColor};
    box-sizing: border-box;
    border-radius: .2rem;
    font-family: ${mainFont};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: ${loginButtonText};
    transition: 1s;

    &:hover{
        cursor:pointer;
        border: 2px solid #4169E1;
    }
`

export default QuestionForm;