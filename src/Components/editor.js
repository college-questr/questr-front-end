import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Style from 'styled-components';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    }
  }

  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

   handleChange = (value) => {
      this.setState({
        text: value
      })
      this.props.changeHandler(value);
      console.log(this.state)
    }

    submit = (e) => {
      e.preventDefault();
      //send parsed state text to api
      console.log('submit');
    }


  render() {
    return (
      <>
        <ReactQuill theme="snow"
          modules={this.modules}
          formats={this.formats}
          onChange={this.handleChange}
        >
        </ReactQuill>
        <PostSubmitBtn onClick={this.submit}>
          Submit
        </PostSubmitBtn>
        </>
    );
  }
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
