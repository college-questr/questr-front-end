import React from 'react';
import Style from 'styled-components';
import {footerTextColor} from './Styles/variables';

const Footer = () => {
    return (
        <FooterContainer>
            <p>© 2019 Questr,  All Rights Reserved.</p>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = Style.div`
    width: 100%;
    height: 66px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18 px;
    line-height: 21 px;
    text-align: center;
    background: rgba(58, 118, 207, 0.49);
    position:absolute;
    bottom:0;
    display:flex;
    flex-flow:column nowrap;
    justify-content: center;
    color:${footerTextColor};
`