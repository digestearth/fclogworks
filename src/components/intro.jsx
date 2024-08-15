import styled from "@emotion/styled"

import bg from "../assets/homepage/intro.png";
import logo from "../assets/forestcraft_outline.png";

const GridContainer = styled.div`
    scroll-margin-top: 80px;
    height: 610px;
    width: 100%;

    display: grid;
    grid-template-areas:
        "topleft topright"
        "botleft botright";
    grid-template-columns: min-content 1fr;
    grid-template-rows: 1fr 4fr;

    img.background {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        grid-area: 1 / 1 / 3 / 3;
    }

    img.logo{
        width: 450px;
        height: auto;
        grid-area: "topleft";
        /* background-color: red; */
    }
`

const FcLogo = styled.div`
    grid-area: topleft;
    margin-top: 10px;
    margin-left: 100px;
`

const IntroBlurb = styled.div`
    margin-left: 100px;
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
                        Expert counsel and labor for personal construction projects, from bathroom remodels to newhome construction</p>
                </IntroBlurb>
            </GridContainer>
        </>
        
    )
}