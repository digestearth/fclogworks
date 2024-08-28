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
    
    background-color: #000000e8;

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
    }
    .embla__slide {
        flex: 0 0 100%;
        height: 100%;
        /* padding-left: var(--slide-spacing); */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    img {
        max-height: 80%;
    }

    .caption {
        height: 10%;
        width: 60%;
        /* background-color: black; */
        color: white;
        bottom: 0;

        p {
            margin: 10px;
        }
    }



    button {
        position: fixed;
        top: 5vh;
        right: 5vh;
    }
`

function PortfolioEntry(props){
    const {photo} = props
    return (
        <div className="embla__slide">
            <img src={photo.src} alt={photo.alt}/>
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
        <CarouselContainer onClick={() => setCarouselActive(false)}>
            <button onClick={() => setCarouselActive(false)}>X</button>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {Object.keys(photos).map(key=>{
                        return <PortfolioEntry key={key} photo={photos[key]}/>
                    })}
                </div>
            </div>
        </CarouselContainer>
    )
  }