import React, { useEffect, useRef, useState } from "react";
import { SONG } from "../constant/constant";
import Button from "./button";
import ProgressBar from "./progressbar"
import { convertSecondsIntoHMS } from '../shared/utils'

const Audioo = () => {
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
      <audio
        ref={audioRef}
        src={SONG}
        onTimeUpdate={e => handleTimeUpdate(e)}
        onLoadedData={e => handleLoadedDuration(e)}
      >
      </audio>

      <h1>  {convertedTime}  {loadedTime}</h1>
      <Button text="decrease" onClick={handleDecrease} />
      <Button text="Play" onClick={handlePlay} />
      <Button text="increase" onClick={handleIncrease} />

      <ProgressBar processedTime={updatedTime} trackDuration={trackDuration} />
    </>
  );
}
export default Audioo;
