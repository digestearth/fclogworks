import styled from "@emotion/styled"

import bg from "../assets/homepage/intro.png";
import logo from "../assets/forestcraft_outline.png";

const GridContainer = styled.div`
    height: 80vh;
    
    display: grid;
    grid-template-areas:
        "top top"
        "botleft botright";
        grid-template-columns: min-content 1fr;
        grid-template-rows: 1fr 7fr;

    img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        grid-area: 1 / 1 / 3 / 3;
    }

`

const IntroBlurb = styled.div`
    margin-left: 100px;
    grid-area: botleft;
    color: white;
    
    img {
        width: 550px;
        height: auto;
    }
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
        <GridContainer>
            <img src = {bg} alt = "landscape" />
            <IntroBlurb>
                <img src = {logo} alt = "logo" />
                <p>Locally owned general contracting services operating out of the Bend and Portland Oregon areas.
                    Expert counsel and labor for personal construction projects, from bathroom remodels to newhome construction</p>
            </IntroBlurb>
        </GridContainer>
    )
}