import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { COLORS } from '../constant/constant';


const ProgressBarWrapper = styled.input`
width:100%;
height:30px;
background-color:${COLORS.PROGRESS};
outline: none;
    transition: opacity .2s;
`;

const ProgressBar = () => {
    const progressRef = useRef(null);

    useEffect(() => {

    }, [progressRef.current])

    const handleProgressBar = (e) => {
        console.log(e.target.value)
    }

    return (
        <>
            <ProgressBarWrapper ref={progressRef} type="range" min="0" max="100" step="0.01" onChange={e => handleProgressBar(e)}>
            </ProgressBarWrapper>
            <h1>{progressRef.current}</h1>

        </>
    )
}

export default ProgressBar;
