import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useOutletContext } from "react-router-dom";
import styled from "@emotion/styled";

import chevron_down from "../assets/icons/chevron_down.svg";

import { Separator } from "./separator";
import { SmoothLink } from "./smoothlink";

import deck from "../assets/homepage/deck.png";
import kitchen from "../assets/homepage/kitchen.png";
import house from "../assets/homepage/house.png";

const WorkDiv = styled.div`
    scroll-margin-top: 80px;

    hr {
        width: 70%;
    }
`

const Row = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
    min-width: 100%;
    /* background-color: orange; */

    h2 {
        all:unset;
        font-size: 32pt
    }
`

const Column = styled.div`
    margin: 10px;
    flex: 1;
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* background-color: purple; */

    img {
        width: 100%;
        border-radius: 10px;
    }

    @media (max-width: 650px) {
        min-width: 90%;
    }
` 

const DescriptionWrapper = styled.div`
    margin-left: ${props => props.left == false ? "60px" : "0"};
    width: 80%;
    display: flex;
    flex-direction: column;

    @media (max-width: 920px) {
        width: 100%;
        margin-left: 20px;
        margin-right: 20px;
    }

    h3 {
        all: unset;
        font-size: 32pt;

        @media (max-width: 1100px) {
            font-size: 28pt;
        }
    }

    p {
        font-size: 14pt;

        @media (max-width: 1100px) {
            font-size: 12pt;
        }
    }

    @keyframes buttonhover{
        from {background-color: #5c5c5c; color: white; border: white 2px solid;}
        to {background-color: white; color: black; border: none;}
    }

    button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        width: 200px;
        height: 75px;
        
        border: white 2px solid;

        @media (max-width: 920px) {
            width: 100%;
        }
    }

    button:hover {
        animation-name: buttonhover;
        animation-duration: 250ms;
        background-color: white;
        color: black;
        border: none;
    }
`

function ImageColumn(props) {
    const {img, alt} = props;
    return (
        <Column>
            <img src={img} alt={alt}/>
        </Column>   
    )
}

const BannerRow = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-areas: "left right";
    grid-template-columns: 1fr 1fr;

    @media (max-width: 1500px) {
        margin-left: 20px;
        margin-right: 20px;
    }
    img {
        width: 100%;
        min-width: 600px;
        border-radius: 10px;

    }
`

const BannerLeft = styled.div`
    grid-area: "left";
`
const BannerRight = styled.div`
    grid-area: "right";
`

function WorkBanner(props) {
    const {setCarouselActive, orientation, title, description, img, alt} = props;
    if (orientation == 'left') {
        return (
            <BannerRow>
                <BannerLeft>
                    <DescriptionWrapper left={true}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <button onClick={() => setCarouselActive(true)}>Gallery</button>
                    </DescriptionWrapper> 
                </BannerLeft>
                <BannerRight>
                    <img src={img} alt={alt}/>
                </BannerRight>
            </BannerRow>
        )
    } else if (orientation == 'right') {
        return (
            <BannerRow>
                <BannerLeft>
                    <img src={img} alt={alt}/>
                </BannerLeft>
                <BannerRight>
                    <DescriptionWrapper left={false}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <button onClick={() => setCarouselActive(true)}>Gallery</button>
                    </DescriptionWrapper>    
                </BannerRight>
            </BannerRow>
        )
    } else if (orientation == 'stacked') {
        return (
            <>
                <Row>
                    <ImageColumn img={img} alt={alt}/>
                </Row>
                <Row>
                    <DescriptionWrapper left={true}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <button onClick={() => setCarouselActive(true)}>Gallery</button>
                    </DescriptionWrapper>        
                </Row>
            </>         
        )
    }
}

const Title = styled.div`
    a {
        text-decoration: none;
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        font: inherit;
    }

    a:hover {
        /* opacity: 0.9; */
    }
    font-size: 38pt;
    width: 100%;
    display: flex;
    justify-content: center;

    scroll-margin-top: 80px;

    h1 {
        all: unset;
        margin-left: 30px;
        margin-right: 30px;
        color: #ffffff69;
    }

    i {
        color: #ffffff69;
    }
`

export function Work(props) {
    const {mobile, carouselActive, setCarouselActive} = useOutletContext();

    return (
        <>
            <WorkDiv>
                <Separator/>
                    <Title id ="work">
                        <SmoothLink to="work" href="#work">
                            <i class="fa-solid fa-chevron-down fa-2xs"/><h1>Our Work</h1><i class="fa-solid fa-chevron-down fa-2xs"/>
                        </SmoothLink>
                    </Title>
                <WorkBanner
                    setCarouselActive={setCarouselActive}
                    img = {house}
                    orientation ={mobile ? "stacked" : "left"}
                    title = "Exterior Additions"
                    description = "A passion for building log houses from the ground up gave us a deep understanding of conventional house building techniques. We can help bring your ideas to life and make a home which is uniquely &#34;you&#34;!"  
                />
                <Separator/>
                <WorkBanner
                    setCarouselActive={setCarouselActive}
                    orientation ={mobile ? "stacked" : "right"}
                    img = {deck}
                    title = "Decks and Patios"
                    description = "Recover and revive that once sturdy and dependable deck. If it's old and ragged, we can bring it back to life!"   
                />
                <Separator/>
                <WorkBanner
                    setCarouselActive={setCarouselActive}
                    orientation ={mobile ? "stacked" : "left"}
                    img = {kitchen}
                    title = "Kitchens and Bathrooms"
                    description = "Bathroom or kitchen feeling old or dated? Invest in your house and build the home that fits you!"
                />
            </WorkDiv>
            
        </>
    )
}