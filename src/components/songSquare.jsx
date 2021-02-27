import React from "react";
import styled from "styled-components";
import { COLORS } from "../constant/constant";

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 400px;
  width: 300px;
  color:${COLORS.BACKGROUND};
  background-image: url(${props => props.background});
  justify-content: space-around;
`;

const ContainerTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
  font-family: "sans-serif";
  color: ${COLORS.WHITE};
`;

const ArtistName = styled.span`
font-size:16px;
font-weight:500;
font-family: "sans-serif";
color:${COLORS.WHITE};
`;

const ReleaseDate = styled.span`
font-size:16px;
font-weight:500;
color:${COLORS.WHITE};
`;

const SongSquare = ({ title, imageUrl, artistName, releaseDate }) => {
  return (
    <>
      <ContainerWrapper background={imageUrl}>
        <ContainerTitle>{title}</ContainerTitle>
        <ArtistName>{artistName}</ArtistName>
        <ReleaseDate>{releaseDate}</ReleaseDate>
      </ContainerWrapper>
    </>
  );
};

export default SongSquare;
