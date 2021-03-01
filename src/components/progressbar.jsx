import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { getProcessedRange, skippedProcess } from '../shared/utils'

const ProgressBarWrapper = styled.input`
width:100%;
height:30px;
outline: none;
cursor: progress;
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

    const handleChange = (e) => {
        const skippedPercentage = e.currentTarget.value;
        props.setUpdatedTime(skippedProcess(trackDuration, skippedPercentage));
    }

    return (
        <>
            <ProgressBarWrapper ref={progressRef} type="range" min="0" max="100" defaultValue="0" step="0.01" onChange={e => handleChange(e)}>
            </ProgressBarWrapper>
        </>
    )
}

export default ProgressBar;
