import React from "react";
import styled from "styled-components";
import { COLORS } from "../constant/constant";
import { useDispatch } from 'react-redux';

const SongSquareWrapper = styled.span`
  display: inline-block;
  margin: 20px;
  height: 300px;
  width: 200px;
   &:hover{
    opacity:0.7;
    cursor: pointer;
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

const SongSquare = ({ musicId, title, imageUrl, artistName }) => {
  const dispatch = useDispatch();
  const handleSongSquare = () => {
    dispatch({ type: "SET_SQUARE_PLAY", isSongSquareClicked: true, musicId: musicId })
  }

  return (
    <>
      {  console.log("Caalll")}
      <SongSquareWrapper key={musicId} onClick={handleSongSquare}></SongSquareWrapper>
      <SongSquareWrapper >
        <ContainerWrapper background={imageUrl}></ContainerWrapper>
        <TrackTitle>{title}</TrackTitle>
        <TrackDetailsWrapper>
          <ArtistName>{artistName}</ArtistName>
        </TrackDetailsWrapper>
      </SongSquareWrapper>
    </>
  );
};

export default SongSquare;
