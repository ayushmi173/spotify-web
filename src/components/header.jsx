import React from "react";
import styled from "styled-components";
import logo from "../shared/images/Spotify_Logo.png";

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  margin: auto;
  max-width: 200px;
  height: 180px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("${logo}");
`;
const Header = () => {
    return (
        <>
            <ImageWrapper></ImageWrapper>
        </>
    );
};
export default Header;
