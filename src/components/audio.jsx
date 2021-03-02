import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
import playButton from '../shared/images/play-button.svg';
import pauseButton from '../shared/images/pause-button.svg';
import rewind from '../shared/images/rewind.svg';
import forward from '../shared/images/fast-forward.svg';
import ProgressBar from "./progressbar"
import { convertSecondsIntoHMS } from '../shared/utils'
import { COLORS } from "../constant/constant";

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
font-weight:900;
`;

const LoadedTimeWrapper = styled.span`
font-size:1em;
font-weight:900;
`;

const ProcessedTimeWrapper = styled.span`
display:flex;
flex-direction:row;
justify-content:space-between;
`;

const PlayButtonWrapper = styled.span`
height:40px;
width:50px;
background-image:url('${(props) => props.playing ? pauseButton : playButton}');
background-repeat:no-repeat;
background-size: contain;
cursor: pointer;
&:hover{
  transition: transform 0.3s linear;
  transform: translateY(-5px);
}
`;

const IncreaseBtnWrapper = styled.span`
height:40px;
width:50px;
background-image:url('${forward}');
background-repeat:no-repeat;
background-size: contain;
cursor: pointer;
&:hover{
  transition: transform 0.3s linear;
  transform: translateX(5px);
}
`;

const DescreaseBtnWrapper = styled.span`
height:40px;
width:50px;
background-image:url('${rewind}');
background-repeat:no-repeat;
background-size: contain;
cursor: pointer;
&:hover{
  transition: transform 0.3s linear;
  transform: translateX(-5px);
}
`;

const TrackControlWrapper = styled.span`
display:flex;
justify-content:center;
flex-direction:row;
margin-top:-10px;
`;

const TrackTitleWrapper = styled.span`
  display: flex;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  font-family: "sans-serif";
  text-align: center;
  color: ${COLORS.WHITE};
`;

const Audio = (props) => {

  const audioRef = useRef();
  const [updatedTime, setUpdatedTime] = useState(0);
  const [trackDuration, setTrackDuration] = useState(0);
  const [loadedTime, setLoadedTime] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [convertedTime, setConvertedTime] = useState("00:00");
  const isSquarePlay = useSelector((state) => state.isSquareplay);
  const musicId = useSelector(state => state.musicId);
  const trackTitle = useSelector(state => state.trackTitle);

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

  useEffect(() => {
    if (isSquarePlay) {
      play();
      setIsPlaying(true);
      audioRef.current.currentTime = 0;
      setUpdatedTime(0);
    }
  }, [isSquarePlay, musicId]);

  function play() {
    audioRef.current.play();
  }
  function pause() {
    audioRef.current.pause();
  }

  const handlePlay = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    }
    else if (!isPlaying) {
      play();
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

  const handleUpdate = (updatedValue) => {
    setUpdatedTime(updatedValue);
    audioRef.current.currentTime = updatedValue;
  }

  return (
    <>
      <Wrapper>
        <audio
          ref={audioRef}
          src={props.trackUrl}
          onTimeUpdate={e => handleTimeUpdate(e)}
          onLoadedData={e => handleLoadedDuration(e)}
        />
        {isSquarePlay ? (
          <TrackTitleWrapper>{trackTitle}</TrackTitleWrapper>
        ) : <></>}
        {isSquarePlay ?
          (<ProgressBar
            processedTime={updatedTime}
            trackDuration={trackDuration}
            setUpdatedTime={(updatedValue) => handleUpdate(updatedValue)} />)
          : <></>}
        {isSquarePlay ?
          (
            <ProcessedTimeWrapper>
              <ConvertedTimeWrapper>{convertedTime}</ConvertedTimeWrapper>
              <LoadedTimeWrapper>{loadedTime}</LoadedTimeWrapper>
            </ProcessedTimeWrapper>
          )
          : <></>}
        {isSquarePlay ?
          (<TrackControlWrapper>
            <DescreaseBtnWrapper onClick={handleDecrease}></DescreaseBtnWrapper>
            <PlayButtonWrapper playing={isPlaying} onClick={handlePlay}></PlayButtonWrapper>
            <IncreaseBtnWrapper onClick={handleIncrease}></IncreaseBtnWrapper>
          </TrackControlWrapper>)
          : <></>}
      </Wrapper>
    </>
  );
}
export default Audio;
