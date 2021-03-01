import React, { useEffect } from "react";
import styled from "styled-components";
import SongSquare from "./songSquare";
import { newReleaseTrack } from "../store/action";
import Header from './header';
import { useDispatch, useSelector } from 'react-redux';
import GlobalStyle from '../globalCss';
import Audio from './audio';
import { v1 as uuidv1 } from 'uuid';
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
            {Object.values(trackReleases).map((item) => {
                const musicId = uuidv1();
                const x = item.images;
                if (x.length > 0) {
                    console.log("call")
                    return (
                        <SongSquare key={musicId} musicId={musicId} title={item.name}
                            artistName={item.artists[0].name} imageUrl={item.images[1].url}
                        />
                    )
                }
                else {
                    return
                }
            })}
        </SongWrapper>

    </>;
};
export default ReleaseList;

