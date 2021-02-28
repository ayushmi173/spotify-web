import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { COLORS } from '../constant/constant';
import { getProcessedRange } from '../shared/utils'

const ProgressBarWrapper = styled.input`
width:100%;
height:30px;
background-color:${COLORS.PROGRESS};
outline: none;
transition: opacity .2s;
`;

const ProgressBar = (props) => {
    const { processedTime, trackDuration } = props;
    const progressRef = useRef(null);

    useEffect(() => {
        if (isNaN()) {
            progressRef.current.value = getProcessedRange(processedTime, trackDuration)
        }
    }, [processedTime, trackDuration])

    return (
        <>
            <ProgressBarWrapper ref={progressRef} type="range" min="0" max="100" defaultValue="0" step="0.01">
            </ProgressBarWrapper>
        </>
    )
}

export default ProgressBar;
