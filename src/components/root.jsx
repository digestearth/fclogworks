import { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

import { NavBar } from "./navbar";
import styled from "@emotion/styled";

import { EmblaCarousel } from "./emblacarousel";
import kitchen_decks from "../data/bathroom_kitchen.json";

const MainDiv = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    min-height: 1000px;
`

const Container = styled.div`
    margin-top: 75px;
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

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 920px)");
    
        const handleMediaChange = (event) => {
            setMobile(event.matches);
        };
    
        mediaQuery.addEventListener('change', handleMediaChange);
    
        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, []);

    return (
        <>
            {carouselActive ? <EmblaCarousel carouselActive={carouselActive} setCarouselActive={setCarouselActive} photos={kitchen_decks}/> : null}
            <NavBar />
            <MainDiv>
                <Container>
                    <Content>
                        <main>
                            {children || <Outlet context={{mobile, carouselActive, setCarouselActive}}/>}
                        </main>
                    </Content>
                </Container>
            </MainDiv>
            
            
        </>
    )
}