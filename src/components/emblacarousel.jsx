import React, {useEffect} from 'react';

import styled from '@emotion/styled';

import  useEmblaCarousel  from 'embla-carousel-react';

import deck from "../assets/homepage/deck.png";
import kitchen from "../assets/homepage/kitchen.png";
import test from "../assets/bathroom_kitchen/bathroom_a_1.png";

const CarouselContainer = styled.div`

    .embla {
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
        max-height: 750px;
        min-width: 0;
        max-width: 90%;
        padding-left: var(--slide-spacing);
        img {
            max-height: 750px;
        }
        
    }
`

export function EmblaCarousel(props) {
    const {photos} = props
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    useEffect(() => {
        if (emblaApi) {
        console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])
  
    return (
        <CarouselContainer>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {Object.keys(photos).map(key=>{
                        return <div className="embla__slide"><img src={photos[key].src} alt={photos[key].alt}></img></div>
                    })}
                </div>
            </div>
        </CarouselContainer>
    )
  }