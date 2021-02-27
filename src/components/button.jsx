import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../constant/constant';

const ButtonWrapper = styled.button`
height:40px;
width:70px;
text-align:center;
background-color: ${COLORS.BACKGROUND};
color:${COLORS.TEXT};
`;

const Button = (props) => {
    return (
        <>
            <ButtonWrapper className="button" onClick={props.onClick}>
                {props.text}
            </ButtonWrapper>
        </>)
}

export default Button;