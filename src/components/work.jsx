import { useState } from "react";
import { createPortal } from "react-dom";
import { useOutletContext } from "react-router-dom";

import styled from "@emotion/styled";

import deck from "../assets/homepage/deck.png";
import kitchen from "../assets/homepage/kitchen.png";
import house from "../assets/homepage/house.png";

const Row = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
    width: 100%;
    /* background-color: orange; */

    h2 {
        all:unset;
        font-size: 32pt
    }
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
    margin-left: ${props => props.left == false ? "60px" : "0"};
    width: 80%;

    h3 {
        all: unset;
        font-size: 32pt;
        @media (max-width: 1000px) {
            font-size: 24pt;
        }
    }

    p {
        font-size: 14pt;
        @media (max-width: 1000px) {
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
            <img src={img} alt={alt} style={{width: "100%"}}/>
        </Column>   
    )
}

function DescriptionColumn(props) {
    const {setCarouselActive, title, description, left} = props;
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
    const [carouselActive, setCarouselActive] = useOutletContext();
    return (
        <>
            <Row>
                <DescriptionColumn
                    setCarouselActive={setCarouselActive}
                    left={true}
                    title="Remodel, Addition, and Construction"
                    description="A passion for building log houses from the ground up gave us a deep understanding of conventional house building techniques. We can help bring your ideas to life and make a home which is uniquely &#34;you&#34;!"
                />
                <ImageColumn img={house} alt="placeholder"/>
            </Row>
            <Row>      
                <ImageColumn img={deck} alt="placeholder"/>
                <DescriptionColumn
                    setCarouselActive={setCarouselActive}
                    left={false}
                    title="Deck, Patio, and Railing"
                    description="Recover and revive that once sturdy and dependable deck. If it's old and ragged, we can bring it back to life!"
                />
            </Row>
            <Row>
                <DescriptionColumn
                    setCarouselActive={setCarouselActive}
                    left={true}
                    title="Kitchen and Bathroom"
                    description="Bathroom or kitchen feeling old or dated? Invest in your house and build the home that fits you!"
                />
                <ImageColumn img={kitchen} alt="placeholder"/>      
            </Row>  
        </>
    )
}