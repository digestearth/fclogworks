import React, {useEffect, useState} from 'react';

import styled from '@emotion/styled';

import  useEmblaCarousel  from 'embla-carousel-react';

import deck from "../assets/homepage/deck.png";
import kitchen from "../assets/homepage/kitchen.png";
import test from "../assets/bathroom_kitchen/bathroom_a_1.png";

const CarouselContainer = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: #000000d6;

    .embla {
        overflow: hidden;
       height: 100%;
        /* --slide-spacing: 2rem; */
    }
    .embla__container {
        touch-action: pan-y pinch-zoom;
        display: flex;
        /* margin-left: calc(var(--slide-spacing) * -1); */
        height: 100%;
        width: 100%;
        margin-top: auto;
    }
    .embla__slide {
        flex: 0 0 100%;
        height: 100%;
        /* padding-left: var(--slide-spacing); */
        display: grid;
        grid-template-rows: auto 1fr auto;
        object-fit: contain;
        /* flex-direction: column;
        justify-content: flex-end;
        align-items: center; */
    }

    .header {
        height: 100px;
    }

    .photo {
        min-height: 100%;
        max-height: 100%;
        width: auto;
        display: flex;
        justify-content: center;
        /* background-color: green; */

        img {
            max-height: 100%;
        }
    }


    .caption {
        height: 100px;
        width: 100%;
        background-image: linear-gradient(0deg, rgba(0,0,0,1), rgba(0,0,0,0.3) 99%);
        color: white;
        bottom: 0;
        display: flex;
        justify-content: center;

        p {
            width: 60%;
            margin: 10px;
            margin-top: 15px;
        }
    }

    button.exit {
        padding: 0;
        margin: 0;
        border: none;
        background: none;
        outline: none;

        /* font: inherit; */
        position: fixed;
        color: white;
        top: 20px;
        right: 40px;
    }

    button.exit:hover {
        cursor: pointer;
    }
`

function PortfolioEntry(props){
    const {photo} = props
    return (
        <div className="embla__slide">
            <div className="header"/>
            <div className="photo"><img src={photo.src} alt={photo.alt}/></div>
            <div className="caption"><p>{photo.desc}</p></div>
            {/* <div className = "portfolio_item">
                <div className = "photo">
                    <img src={photo.src} alt={photo.alt}/>
                </div>
                <div className = "caption"><p>{photo.desc}</p></div>
            </div> */}
            
        </div>
    )
}

export function Carousel(props) {
    const {carouselActive, setCarouselActive, photos} = props
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    useEffect(() => {
        if (emblaApi) {
        console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])
  
    return (
        <>
            <CarouselContainer>
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        {Object.keys(photos).map(key=>{
                            return <PortfolioEntry key={key} photo={photos[key]}/>
                        })}
                    </div>
                    <button className="exit" onClick={() => setCarouselActive(false)}>
                        <i className="fa-solid fa-xmark fa-2xl"></i>
                    </button>
                </div>
            </CarouselContainer>
        </>
        // <CarouselContainer onClick={() => setCarouselActive(false)}>
        
    )
  }