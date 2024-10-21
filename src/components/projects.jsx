import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useOutletContext } from "react-router-dom";
import styled from "@emotion/styled";

import { Separator } from "./separator.jsx";
import {SectionTitle} from "./sectiontitle.jsx";

import {color_bg, color_text, color_element} from './colors.jsx'

import deck from "../assets/photos/homepage/deck.png";
import kitchen from "../assets/photos/homepage/kitchen.png";
import house from "../assets/photos/homepage/house.png";
import bar from "../assets/photos/homepage/bar.png";

import home_additions from "../data/home_additions.json";
import kitchens_bathrooms from "../data/bathrooms_kitchens.json";
import decks_patios from "../data/decks_patios.json";


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
        from {background-color: ${color_bg}; color: ${color_text}; border: ${color_text} 2px solid;}
        to {background-color: ${color_text}; color: ${color_bg};}
    }

    a {
        text-decoration: none;
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        font: inherit;
        cursor: pointer;


        width: 200px;
        height: 75px;

        display: flex;
        justify-content: center;
        align-items: center;
        
        border: ${color_text} 2px solid;

        @media (max-width: 920px) {
            width: 100%;
        }
    }

    a:hover {
        animation-name: buttonhover;
        animation-duration: 250ms;
        background-color: ${color_text};
        color: ${color_bg};
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

function galleryButtonClicked(props) {
    const {setHamburgerActive} = props;
    setHamburgerActive(false);
    window.history.pushState(null, '', `#projects`)
    console.log("Gallery button clicked");
}

function WorkBanner(props) {
    const {orientation, title, description, img, alt, href} = props;
    if (orientation == 'left') {
        return (
            <BannerRow>
                <BannerLeft>
                    <DescriptionWrapper left={true}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a onClick={()=>galleryButtonClicked(props)} href={href}>Gallery</a>
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
                        <a onClick={()=>galleryButtonClicked(props)} href={href}>Gallery</a>
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
                        <a onClick={()=>galleryButtonClicked(props)} href={href}>Gallery</a>
                    </DescriptionWrapper>        
                </Row>
            </>         
        )
    }
}

export function Projects(props) {
    const {mobile, setHamburgerActive} = useOutletContext();

    return (
        <>
            <WorkDiv>
                <Separator/>
                <SectionTitle to="projects" href="#projects" content="Our Projects" color={color_text}/>
                <WorkBanner
                    href="/gallery/additions"
                    setHamburgerActive={setHamburgerActive}
                    img = {house}
                    orientation ={mobile ? "stacked" : "left"}
                    title = "Home Additions"
                    description = "A passion for building log houses from the ground up gave us a deep understanding of conventional house building techniques. We can help bring your ideas to life and make a home which is uniquely &#34;you&#34;!"  
                />
                <Separator/>
                <WorkBanner
                    href="/gallery/decks-patios"
                    setHamburgerActive={setHamburgerActive}
                    orientation ={mobile ? "stacked" : "right"}
                    img = {deck}
                    title = "Decks and Patios"
                    description = "Recover and revive that once sturdy and dependable deck. If it's old and ragged, we can bring it back to life!"   
                />
                <Separator/>
                <WorkBanner
                    href="/gallery/kitchens-bathrooms"
                    setHamburgerActive={setHamburgerActive}
                    orientation ={mobile ? "stacked" : "left"}
                    img = {kitchen}
                    title = "Kitchens and Bathrooms"
                    description = "Bathroom or kitchen feeling old or dated? Invest in your house and build the home that fits you!"
                />
                <Separator/>
                <WorkBanner
                    href="/gallery/custom"
                    setHamburgerActive={setHamburgerActive}
                    orientation ={mobile ? "stacked" : "right"}
                    img = {bar}
                    title = "Custom Work"
                    description = "We specialize in handcrafted, custom work. If you want to make something truly unique, we can help you!"
                />
            </WorkDiv>
            
        </>
    )
}