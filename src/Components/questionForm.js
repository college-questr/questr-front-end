import React, { useState, useEffect } from 'react';
import { buttonColor, mainFont, loginButtonText } from './Styles/variables';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Style from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { POST_QUESTION } from '../graphQL/mutations'
import MainNav from './Nav/mainNav';


const QuestionForm = () => {

  const [question, setQuestion] = useState("")
  const [editorText, setEditorText] = useState("")
  const [post, setPost] = useState({ question: "", editorText: "" })
  const [postQuestion, { data, error }] = useMutation(POST_QUESTION);

  const modules = {
    toolbar: [
      // [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };


  const formats = [
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'link', 'image'
  ];

  const editorHandleChange = (value) => {
    setEditorText(value)
  }


  const onChangeHandler = event => {
    setQuestion(event.target.value);
  }

  const combineField = () => {
    setPost({ ...post, question, editorText })
  }

  useEffect(() => {
    combineField();
  }, [editorText, question])

  const submitHandler = (e) => {
    //some api call
    e.preventDefault();
    postQuestion({ variables: { questionTitle: post.question, questionBody: post.editorText, votes: 0 } })
  }

  console.log(data)

  return (
    <div>
      <MainNav />
      <div className="question-container">
        <div className="main-content">
          <h1 className="h1-form">Ask a question and join the community</h1>
          <form className="question-form" onSubmit={submitHandler}>

            <label htmlFor="question-title">Question Title</label>
            <input
              type="text"
              name="question-title"
              className="question-input"
              onChange={onChangeHandler}
            />

            {/* <Editor changeHandler={SetTextEditorContent}/> */}
            <ReactQuill theme="snow"
              modules={modules}
              formats={formats}
              onChange={editorHandleChange}
            >
            </ReactQuill>
            <PostSubmitBtn>
              Submit
        </PostSubmitBtn>

          </form>
        </div>

        <div className="side-content">
          <h1>How to ask</h1>
          <h2>Ask questions about your homework</h2>

          <ul>
            <li>The title should be in the form of a question</li>
            <li>Provide sufficient details</li>
            <li>Be clear and concise</li>
            <li>Once your question is posted, it is public.
              Third parties may maintain public or private archives of the content on this site.
              With this in mind, be sure to remove private data, security content,
            or any other sensitive information from your question before posting it.</li>
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
const PostSubmitBtn = Style.button`
  width: 311px;
  height: 37px;
  background: #93B2E0;
  border-radius: 3px;
  color:white;
  transition:500ms;
  text-decoration:none

  &:hover{
      border: 5px solid #93B2E0;
      cursor:pointer;

  }
`

export default (QuestionForm);