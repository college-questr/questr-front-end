import React, { useState } from 'react';
import Style from 'styled-components';

const SortButtons = ({setSort}) => {

    const [options, setOptions] = useState({ sortKey: 0, value: false });

    const clickHandler = (e, choiceKey) => {
        e.preventDefault()
        setOptions({ ...options, sortKey: choiceKey, value: true });
        setSort(choiceKey);
    }

    return (
        <SortBtnContainer>
            <SortBtn
                className={options.sortKey === 0 ? 'active-sort' : ''}
                onClick={(e) => clickHandler(e, 0)}>
                Recent
            </SortBtn>
            <SortBtn
                className={options.sortKey === 1 ? 'active-sort' : ''}
                onClick={(e) => clickHandler(e, 1)}>
                Answered
            </SortBtn>
            <SortBtn
                className={options.sortKey === 2 ? 'active-sort' : ''}
                onClick={(e) => clickHandler(e, 2)}>
                Unanswered
                     </SortBtn>
            <SortBtn
                className={options.sortKey === 3 ? 'active-sort' : ''}
                onClick={(e) => clickHandler(e, 3)}>
                Most Votes
                </SortBtn>
        </SortBtnContainer>
    )
}

export default SortButtons;

const SortBtnContainer = Style.div`
    display: flex;
    flex-flow:row nowrap;
    padding-bottom: 10px;
    border-bottom:1px solid rgba(13, 12, 12, 0.54);
`

const SortBtn = Style.div`
    background: #FFFFFF;
    border: 1px solid #93B2E0;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 10px 10px 0 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: rgba(13, 12, 12, 0.54);
    padding: 5px;
    transition:500ms;

    &:hover{
        color:#FFFFFF;
        background:#93B2E0;
        cursor: pointer;
    }
`

