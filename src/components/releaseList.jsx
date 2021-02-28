import React, { useEffect } from "react";
import styled from "styled-components";
import SongSquare from "./songSquare";
import { newReleaseTrack } from "../store/action";
import Header from './header';
import { useDispatch, useSelector } from 'react-redux';
import GlobalStyle from '../globalCss';
import Audio from './audio';
import { StickyContainer, Sticky } from 'react-sticky';

const SongWrapper = styled.div`
display:flex;
justify-content:space-evenly;
flex-wrap:wrap;
`;

const ReleaseList = () => {
    const dispatch = useDispatch();
    const trackReleases = useSelector(state => state.entities.releases);
    const isLogin = useSelector(state => state.isLogin)

    useEffect(() => {
        if (isLogin) {
            dispatch(newReleaseTrack())
        }
    }, [])

    return <>
        <GlobalStyle />
        <Header />
        <Audio />
        <SongWrapper>
            {Object.values(trackReleases).map((item, index) => {
                return (
                    <SongSquare key={index} title={item.name}
                        artistName={item.artists[0].name} imageUrl={item.images[1].url}
                        releaseDate={item.release_date} />
                )
            })}
        </SongWrapper>

    </>;
};
export default ReleaseList;
