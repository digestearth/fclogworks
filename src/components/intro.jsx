import styled from "@emotion/styled"

import {color_bg, color_text, color_element} from './colors.jsx'

import bg from "../assets/homepage/intro.png";
import logo from "../assets/logo_blackwhite.svg";

const GridContainer = styled.div`
    scroll-margin-top: 80px;
    height: 710px;
    width: 100%;

    display: grid;
    grid-template-areas:
        "topleft topright"
        "botleft botright";
    grid-template-columns: min-content 1fr;
    grid-template-rows: 1fr 4fr;

    

    @media (max-width: 1100px) {
        height: 600px;
    }

    @media (max-width: 650px) {
        grid-template-columns: 1fr 0fr;
        grid-template-rows: 0fr 1fr;
        max-width: 100%;
    }

    img.background {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        grid-area: 1 / 1 / 3 / 3;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
`

const FcLogo = styled.div`
    grid-area: topleft;

    display: flex;

    width: 450px;
    margin-top: 50px;
    margin-left: 100px;
    margin-right: 100px;


    /* background-color: orange; */

    @media (max-width: 650px) {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }

    img.logo{
        width: 100%;
        height: auto;
        grid-area: "topleft";
        
        /* background-color: red; */
        @media (max-width: 650px) {
            width: 300px;
            margin-left: 20px;
        }
    }
`

const IntroBlurb = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    color: white;
    /* background-color: purple; */
    grid-area: botleft;
    
    h1 {
        font-size: 24pt;
    }
    p {
        font-weight: bold;
        font-size: 16pt;
    }

    @media (max-width: 650px) {
        margin-left: 25px;
        margin-right: 25px;
    }
`

export function Intro(props) {
    return (
        <>
            <GridContainer id="home">
                <img className="background" src = {bg} alt = "landscape" />
                <FcLogo>
                    <img className="logo" src = {logo} alt = "logo" />
                </FcLogo>
                <IntroBlurb>   
                    <p>Locally owned general contracting services operating out of the Bend and Portland Oregon areas.
                        Expert counsel and labor for personal construction projects, from bathroom remodels to new homes.</p>
                </IntroBlurb>
            </GridContainer>
        </>
        
    )
}