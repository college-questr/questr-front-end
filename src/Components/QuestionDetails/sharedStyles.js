import Style from 'styled-components';

export const DetailsContainer = Style.div `
    max-width: 823px;
    display:flex;
    flex-flow: column nowrap;
    justify-content:space-between;
    margin-left:20px;
 `

export const Vote = Style.div `
    display:flex;
    flex-flow: column wrap;
    justify-content:center;
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

export const MessageBody = Style.div `
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    min-height:100px;
    display:flex;
    flex-flow:column;
    justify-content:space-between;
    min-width:90%;
    
    color: #000000;

    margin: 30px 0px 40px 30px;

`


export const Tags = Style.div `
    display:flex;
    flex-flow: row wrap;
`

export const Tag = Style.button `
    background: #93B2E0;
    border: 1px  solid #93B2E0;
    border-radius: 3px;
    max-width:150px;
    width: inherit;
    height: 28px;
    color:white;
    margin-right:20px;
    margin:0px 20px 10px 0px;
    transition:1s
    font-size:1rem;
    

    &:hover{
        border: 3px solid #93B2E0;
        cursor:pointer;
    }
`

export const Stamp = Style.div `
    text-align: right;
    margin:20px 0 0 0;
`


export const Arrow = Style.img `

transition:500ms;
    &:hover{
        cursor:pointer;
        margin:10px 0;
    }
`