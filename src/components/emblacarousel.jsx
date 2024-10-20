import React, {useEffect, useState, useCallback} from 'react';

import styled from '@emotion/styled';

import  useEmblaCarousel  from 'embla-carousel-react';

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

    z-index: 2;

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
        height: 75px;
        width: 100%;
        /* background-image: linear-gradient(rgba(0,0,0,1)40%, rgba(0,0,0,0.0)); */
        background-color: black;
    }

    .photo {
        min-height: 10px;
        max-height: 100%;
        
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
        margin-right: 5px;
        /* background-color: green; */

        img {
            max-height: 100%;
            /* min-height: 500px; */
            max-width: 100%;
            
            
        }
    }


    .caption {
        height: 100px;
        width: 100vw;
        /* background-image: linear-gradient(0deg, rgba(0,0,0,1)70%, rgba(0,0,0,0.0)); */
        background-color: black;
        color: white;
        bottom: 0;
        display: flex;
        justify-content: center;

        @media (max-width: 920px) {
            height: 125px;
        }

        p {
            font-size: 1rem;
            width: 60%;
            margin: 10px;
            margin-top: 25px;

            @media (max-width: 1200px) {
                width: 80%;
            }

            @media (max-width: 920px) {
                width: 95%;
                margin-bottom: 10px;
                font-size: 0.9rem;
            }
        }
    }

    button {
        padding: 0;
        margin: 0;
        border: none;
        background: none;
        outline: none;
        color: white;
    }

    button.exit {
        position: fixed;
        top: 25px;
        right: 40px;
    }

    button.exit:hover {
        cursor: pointer;
    }

    .left {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .right {
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button.embla__prev {
        color: #ffffffab;
        i {
            font-size: 50px;
        }
    }

    button.embla__prev:hover {
        color: #ffffffe2;
        cursor: pointer;
    }

    button.embla__next {
        color: #ffffffab;
        i {
            font-size: 50px;
        }
    }

    button.embla__next:hover {
        color: #ffffffe2;
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
    const {setCarouselActive, photos, photoIndex} = props
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex: photoIndex })

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi, photoIndex])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
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
                    
                    <div className="left">
                        <button className="embla__prev" onClick={scrollPrev}><i className="fa-solid fa-circle-arrow-left"/></button>
                    </div>
                    <div className="right">
                        <button className="embla__next" onClick={scrollNext}><i className="fa-solid fa-circle-arrow-right"/></button>
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