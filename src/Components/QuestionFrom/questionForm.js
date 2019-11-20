import React, { useState, useEffect } from 'react';
import { buttonColor, mainFont, loginButtonText } from '../Styles/variables';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Style from 'styled-components';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { POST_QUESTION, POST_TAG } from '../../graphQL/mutations';
import { GET_TAGS } from '../../graphQL/queries';
import { Dropdown, Input } from 'semantic-ui-react';
import { modules, formats } from './editorConfig';
import { classOption } from './options';


const QuestionForm = () => {

  const [question, setQuestion] = useState("")
  const [editorText, setEditorText] = useState("")
  const [post, setPost] = useState({ question: "", editorText: "" })
  const [postQuestion, { data, error, loading }] = useMutation(POST_QUESTION);
  const [postTag, tagStatus] = useMutation(POST_TAG)
  const tagsData = useQuery(GET_TAGS);


  const [misc, setMisc] = useState({
    class: "",
    instructor: "",
    tags: []
  })


  const onChangeMisc = (e) => {
    setMisc({ ...misc, [e.target.name]: e.target.value })
  }

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

    //if question is posted then attach tags
    if (validateQuestion()) {
      const tagArray = [misc.class, misc.instructor, ...misc.tags];
      tagArray.map(el => postTag({ variables: { tag: el, question_id: data.addQuestion.id } }));
    }


  }, [editorText, question, tagsData.loading, misc, loading, data])

  /**
   * sends a post request to graphql
   */
  const submitHandler = (e) => {
    e.preventDefault();
    postQuestion(
      {
        variables: {
          questionTitle: post.question,
          questionBody: post.editorText
        }
      })

  }

  /**
   * this get all the tag options and adds it to the drop down
   */
  const getMultiSelectOpt = () => {
    let tagOption = [];
    let count = 0;
    if (!tagsData.loading) {
      tagOption = tagsData.data.tags.map(el => {
        return {
          key: `${el.__typename}- ${count++}`, text: el.tag, value: el.tag
        }
      })
    }
    return tagOption
  }

  /**
   * validates when question successfuly posted
   */
  const validateQuestion = () => data !== undefined;

  return (
    <div className="question-container">
      <div className="main-content">
        <h1 className="h1-form">Ask a question and join the community</h1>
        <form className="question-form" onSubmit={submitHandler}>
          <div className="width-controller">
            <Dropdown
              placeholder='Class'
              fluid
              search
              selection
              onChange={(e) => setMisc({ ...misc, class: e.target.textContent })}
              options={classOption}

            />
          </div>
          <label htmlFor="question-title" />
          <input
            type="text"
            name="question-title"
            className="question-input"
            placeholder="Question Title"
            onChange={onChangeHandler}
          />

          {/* <Editor changeHandler={SetTextEditorContent}/> */}
          <ReactQuill theme="snow"
            modules={modules}
            formats={formats}
            onChange={editorHandleChange}
          >
          </ReactQuill>

          <div className="buttons">
            <div className="left">
              <Dropdown key='000001'
                placeholder='Tags'
                fluid
                multiple
                search
                selection
                clearable
                options={getMultiSelectOpt()}
                onChange={(e) => setMisc({ ...misc, tags: [...misc.tags, e.target.textContent] })}

              />
              <Input
                placeholder='Instructor (optional)'
                onChange={(e) => setMisc({ ...misc, instructor: e.target.value })}
              />
            </div>
            <div className='right'></div>

            <PostSubmitBtn type="submit">Post</PostSubmitBtn>
          </div>


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
  width: 148px;
height: 37px;
  background: #93B2E0;
  border-radius: 2px;
  color:white;
  transition:500ms;
  text-decoration:none

  &:hover{
      border: 5px solid #93B2E0;
      cursor:pointer;

  }
`

export default (QuestionForm);