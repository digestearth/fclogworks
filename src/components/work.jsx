import { useState } from "react";
import { createPortal } from "react-dom";

import styled from "@emotion/styled";

import deck from "../assets/homepage/deck.png";
import kitchen from "../assets/homepage/kitchen.png";

import kitchen_decks from "../data/bathroom_kitchen.json"

import { EmblaCarousel } from "./emblacarousel";

const Row = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
    width: 100%;
    /* background-color: orange; */
`

const Column = styled.div`
    margin: 10px;
    flex: 1;
    min-width: 200px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* background-color: purple; */

    img {
        width: 100%;
        border-radius: 10px;
    }
` 

const DescriptionWrapper = styled.div`
    margin-left: ${props => props.left == false ? "40px" : "0"};

    h3 {
        all: unset;
        font-size: 32pt;
    }

    p {
        font-size: 14pt;
    }
`

function ImageColumn(props) {
    const {img, alt} = props;
    return (
        <Column>
            <img src={img} alt={alt} style={{width: "100%"}}/>
        </Column>   
    )
}

function DescriptionColumn(props) {
    const {setCarouselActive, title, description, link, left} = props;
    return (
        <Column>
            <DescriptionWrapper left={left}>
                <h3>{title}</h3>
                <p>{description}</p>
                <button onClick={() => setCarouselActive(true)}>Gallery</button>
            </DescriptionWrapper>
        </Column>
    )
}

export function Work(props) {
    const [carouselActive, setCarouselActive] = useState(false);
    return (
        <>
            <Row>
                <DescriptionColumn
                    setCarouselActive={setCarouselActive}
                    left={true}
                    title="Decks and Patios"
                    description="Recover and revive that once beautiful deck or patio! We can help you with all your deck and patio needs."
                    link="https://www.google.com"
                />
                <ImageColumn img={deck} alt="placeholder"/>
            </Row>
            <Row>
                <ImageColumn img={kitchen} alt="placeholder"/>
                <DescriptionColumn
                    setCarouselActive={setCarouselActive}
                    left={false}
                    title="Title"
                    description="Description"
                    link="https://www.google.com"
                />
            </Row>
            <EmblaCarousel carouselActive={carouselActive} setCarouselActive={setCarouselActive} photos={kitchen_decks}/>   
        </>
    
    )
}