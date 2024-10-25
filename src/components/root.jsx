import { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

import { NavBar } from "./navbar";
import { FootBar } from "./footbar";
import { HamburgerMenu } from "./hamburgermenu";
import styled from "@emotion/styled";

const MainDiv = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    min-height: 1000px;
`

const Container = styled.div`
    /* margin-top: 75px; */
    height: 100%;
    width: 1500px;
    margin-bottom: 10px;
    @media (max-width: 1500px) {
        width: 100%
    }
    /* background-color: red; */
`

const Content = styled.div`
    height: 100%;
    width: 100%;

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export function Root(props) {
    const { children } = props
    const [carouselActive, setCarouselActive] = useState(false);

    const [mobile, setMobile] = useState(window.matchMedia("(max-width: 920px)").matches);
    const [hamburgerActive, setHamburgerActive] = useState(false);

    const [photos, setPhotos] = useState([]);

    //Handle media changing
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 920px)");
    
        const handleMediaChange = (event) => {
            setMobile(event.matches);1
            setHamburgerActive(false);
        };
    
        mediaQuery.addEventListener('change', handleMediaChange);
    
        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, []);

    // Add or remove scrolling when carousel is active
    useEffect(() => {
        if (carouselActive) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflowY = 'scroll';
        } else {
            document.documentElement.style.overflow = 'auto';
            document.body.style.overflowY = 'auto';
        }
    }, [carouselActive]);

    

    return (
        <>
            <NavBar mobile={mobile} hamburgerActive={hamburgerActive} setHamburgerActive={setHamburgerActive}/>
            {hamburgerActive ? <HamburgerMenu hamburgerActive={hamburgerActive} setHamburgerActive={setHamburgerActive}/> : <></>}
            <MainDiv>
                <Content>
                    <main>
                        {children || <Outlet context={{mobile, carouselActive, setCarouselActive, setHamburgerActive}}/>}
                    </main>
                </Content>
            </MainDiv>
            <FootBar />
        </>
    )
}