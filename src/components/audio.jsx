import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import { COLORS, SONG } from "../constant/constant";
import playButton from '../shared/images/play-button.svg';
import rewind from '../shared/images/rewind.svg';
import forward from '../shared/images/fast-forward.svg';
import ProgressBar from "./progressbar"
import { convertSecondsIntoHMS } from '../shared/utils'

const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin:auto;
position:sticky;
width:700px;
margin-bottom:20px;
`;

const ConvertedTimeWrapper = styled.span`
font-size:1em;
font-weight:800px;
`;

const LoadedTimeWrapper = styled.span`
font-size:1em;
font-weight:800px;
`;

const ProcessedTimeWrapper = styled.span`
display:flex;
flex-direction:row;
justify-content:space-between;
`;

const PlayButtonWrapper = styled.span`
height:40px;
width:50px;
background-image:url('${playButton}');
background-repeat:no-repeat;
background-size: contain;
&:hover{
  transition: transform 0.3s ease-in-out;
  transform: translateY(-5px);
}
`;

const IncreaseBtnWrapper = styled.span`
height:40px;
width:50px;
background-image:url('${forward}');
background-repeat:no-repeat;
background-size: contain;
&:hover{
  transition: transform 0.3s ease-in-out;
  transform: translateX(5px);
}
`;

const DescreaseBtnWrapper = styled.span`
height:40px;
width:50px;
background-image:url('${rewind}');
background-repeat:no-repeat;
background-size: contain;
&:hover{
  transition: transform 0.3s ease-in-out;
  transform: translateX(-5px);
}
`;

const TrackControlWrapper = styled.span`
display:flex;
justify-content:space-around;
flex-direction:row;
`;

const Audio = () => {
  const audioRef = useRef();
  const [updatedTime, setUpdatedTime] = useState(0);
  const [trackDuration, setTrackDuration] = useState(0);
  const [loadedTime, setLoadedTime] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [convertedTime, setConvertedTime] = useState("00:00");

  useEffect(() => {
    setIsPlaying(isPlaying);
  }, [isPlaying]);

  useEffect(() => {
    setLoadedTime(loadedTime);
    setTrackDuration(trackDuration);
  }, [loadedTime, trackDuration]);

  useEffect(() => {
    setUpdatedTime(updatedTime);
  }, [updatedTime]);

  useEffect(() => {
    setConvertedTime(convertedTime);
  }, [convertedTime]);

  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    else if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true)
    }
  }

  const handleIncrease = () => {
    audioRef.current.currentTime += 10;
  }

  const handleDecrease = () => {
    audioRef.current.currentTime -= 10;
  }

  const handleLoadedDuration = (e) => {
    setTrackDuration(e.currentTarget.duration);
    setLoadedTime(convertSecondsIntoHMS(e.currentTarget.duration));
  }

  const handleTimeUpdate = (e) => {
    setConvertedTime(convertSecondsIntoHMS(e.currentTarget.currentTime));
    setUpdatedTime(e.currentTarget.currentTime)
  }


  return (
    <>
      <Wrapper>
        <ProgressBar processedTime={updatedTime} trackDuration={trackDuration} />
        <audio
          ref={audioRef}
          src={SONG}
          onTimeUpdate={e => handleTimeUpdate(e)}
          onLoadedData={e => handleLoadedDuration(e)}
        >
        </audio>
        <ProcessedTimeWrapper>
          <ConvertedTimeWrapper>{convertedTime}</ConvertedTimeWrapper>
          <LoadedTimeWrapper>{loadedTime}</LoadedTimeWrapper>
        </ProcessedTimeWrapper>
        <TrackControlWrapper>
          <DescreaseBtnWrapper onClick={handleDecrease}></DescreaseBtnWrapper>
          <PlayButtonWrapper onClick={handlePlay}></PlayButtonWrapper>
          <IncreaseBtnWrapper onClick={handleIncrease}></IncreaseBtnWrapper>
        </TrackControlWrapper>
      </Wrapper>



    </>
  );
}
export default Audio;
