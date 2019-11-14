import Style from 'styled-components';

export const DetailsContainer = Style.div `
    width: 823px;
    display:flex;
    flex-flow: column nowrap;
    justify-content:space-between;
    margin-left:20px;
 `

export const QuestionContainer = Style.div `
    display:flex;
    flex-flow:row nowrap;
 `

export const Vote = Style.div `
    width: 29px;
    height: 121px;
    margin:30px 0px 0px 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;

`

export const QuestionBody = Style.div `
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;


    color: #000000;

    margin: 30px 0px 40px 30px;

`

export const QuestionTitle = Style.h1 `
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

export const Tags = Style.div `
    display:flex;
    flex-flow: row wrap;
`

export const Tag = Style.button `
    background: #93B2E0;
    border: 1px  solid #93B2E0;
    border-radius: 3px;
    width: 77.55px;
    height: 28px;
    color:white;
    margin-right:20px;
    margin:40px 20px 40px 0px;
`

export const Stamp = Style.div `
    text-align: right;

`

export const AnswerContainer = Style.div `
    display:flex;
    flex-flow:row wrap;

 `

export const SingleAnswer = Style.div `
    display: flex;
    flew-flow: row wrap;
 `

export const AnswerHeader = Style.h1 `
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    border-bottom: 1px solid #D3D0D0;
    color: rgba(0, 0, 0, 0.54);
`