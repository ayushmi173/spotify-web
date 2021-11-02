import React from "react";
import styled, { keyframes } from "styled-components";
import { COLORS } from "../constant/constant";
import { useDispatch } from 'react-redux';

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const SongSquareWrapper = styled.span`
  display: inline-block;
  margin: 20px;
  height: 300px;
  width: 200px;
  &:hover{
    opacity:0.8;
    cursor: pointer;
    animation: ${shake} 3s linear infinite;
  }
 `;

const ContainerWrapper = styled.div`
  height: 200px;
  width: 200px;
  color: ${COLORS.BACKGROUND};
  background-image: url(${(props) => props.background});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50%;
`;

const TrackTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  font-family: "sans-serif";
  text-align: center;
  color: ${COLORS.WHITE};
  padding: 20px 10px 10px 10px;
`;

const ArtistName = styled.span`
  font-size: 14px;
  font-weight: 600;
  font-family: "sans-serif";
  color: ${COLORS.BACKGROUND};
`;

const TrackDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const SongSquare = ({ title, imageUrl, artistName, url, generatedMusicId }) => {
  const dispatch = useDispatch();
  const handleSongSquare = () => {
    dispatch({ type: "SET_SQUARE_PLAY", isSongSquareClicked: true, musicId: generatedMusicId, trackUrl: url, trackTitle: title })
  }
  return (
    <>
      <SongSquareWrapper>
        <ContainerWrapper background={imageUrl} onClick={handleSongSquare}></ContainerWrapper>
        <TrackTitle>{title}</TrackTitle>
        <TrackDetailsWrapper>
          <ArtistName>{artistName}</ArtistName>
        </TrackDetailsWrapper>
      </SongSquareWrapper>
    </>
  );
};

export default SongSquare;