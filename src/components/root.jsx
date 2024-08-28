import { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

import { NavBar } from "./navbar";
import { FootBar } from "./footbar";
import { HamburgerMenu } from "./hamburgermenu";
import styled from "@emotion/styled";

import { Carousel } from "./emblacarousel";
import kitchen_decks from "../data/bathroom_kitchen.json";

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
    margin-right: 10px;

    main {
        display: flex;
        flex-direction: column;
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
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [carouselActive]);

    

    return (
        <>
            <NavBar mobile={mobile} hamburgerActive={hamburgerActive} setHamburgerActive={setHamburgerActive}/>
            {carouselActive ? <Carousel carouselActive={carouselActive} setCarouselActive={setCarouselActive} photos={photos}/> : null}
            {hamburgerActive ? <HamburgerMenu hamburgerActive={hamburgerActive} setHamburgerActive={setHamburgerActive}/> : <></>}
            <MainDiv>
                <Container>
                    <Content>
                        <main>
                            {children || <Outlet context={{mobile, carouselActive, setCarouselActive, setHamburgerActive}}/>}
                        </main>
                    </Content>
                </Container>
            </MainDiv>
            <FootBar />
        </>
    )
}