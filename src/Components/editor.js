import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Style from 'styled-components';
import { modules, formats } from './QuestionFrom/editorConfig';

const Editor = (props) => {
  const [text, setText] = useState('')

  const handleChange = (value) => {
    setText(value);
  }

  const submit = (e) => {
    console.log(props);
    props.postAnswer({variables: {question_id:props.questionId, answer:text}});
  }

  return (
    <>
      <ReactQuill theme="snow"
        modules={modules}
        formats={formats}
        onChange={handleChange}
      >
      </ReactQuill>
      <PostSubmitBtn onClick={submit}>
        Submit
        </PostSubmitBtn>
    </>
  );
}

export default Editor;

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
