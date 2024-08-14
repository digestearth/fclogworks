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
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    background-color: #000000d7;

    .embla {
        height: 100%;
        width: 90%;
        overflow: hidden;
        --slide-spacing: 5rem;
    }
    .embla__container {
        touch-action: pan-y pinch-zoom;
        display: flex;
        margin-left: calc(var(--slide-spacing) * -1);
    }
    .embla__slide {
        flex: 0 0 auto;

        max-height: 75vh;

        min-width: 0;
        max-width: 90%;
        padding-left: var(--slide-spacing);
        img {
            max-width: 100%;

            max-height: 75vh;
            min-height: 100%;
        }
    }

    button {
        position: fixed;
        top: 5vh;
        right: 5vh;
    }
    
`

export function EmblaCarousel(props) {
    const {carouselActive, setCarouselActive, photos} = props
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    useEffect(() => {
        if (emblaApi) {
        console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])
  
    return (
        <CarouselContainer>
            <button onClick={() => setCarouselActive(false)}>X</button>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {Object.keys(photos).map(key=>{
                        return <div key={key} className="embla__slide"><img src={photos[key].src} alt={photos[key].alt}></img></div>
                    })}
                </div>
            </div>
        </CarouselContainer>
    )
  }