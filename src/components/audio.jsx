import React, { useEffect, useRef, useState } from "react";
// import styled from "styled-components";
// import AudioModify from "./audioModify";



const Audioo = () => {
  const audioRef = useRef();
  const [processTime, setProcessTime] = useState();

  useEffect(() => {
    if (audioRef.current && audioRef.current.currentTime) {
      console.log(audioRef.current.currentTime)
      setProcessTime(audioRef.current.currentTime);
    }
  }, [audioRef.current, processTime])

  return (
    <>
      <audio controls={true}
        ref={audioRef}
        src={"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"}
        onTimeUpdate={e => console.log("Time    " + e.currentTarget.currentTime)}
        onLoadedData={(e) => console.log("loaded   " + e.currentTarget.duration)}>
      </audio>
      <h1>{processTime}</h1>
      {/* <AudioModify processTime={processTime} ></AudioModify> */}

    </>
  );
}
export default Audioo;
