import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../shared/images/Spotify_Logo.png";


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
  &:hover{
    animation: ${shake} 3s linear infinite;
}
`;
const Header = () => {
    return (
        <>
            <ImageWrapper></ImageWrapper>
        </>
    );
};
export default Header;
