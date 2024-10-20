import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import styled from '@emotion/styled'

import { Carousel } from "../components/emblacarousel";

import {color_element, color_subelement} from '../components/colors.jsx'

const GalleryTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;

    display: flex;
    justify-content: center;
    h1 {
        all: unset;
        font-size: 2rem;
    }
`

const GalleryContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    /* background-color: ${color_subelement}; */
    flex-wrap: wrap;
`

const GalleryCard = styled.button`
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	outline: inherit;

    width: 280px;
    height: 280px;
    background-color: ${color_element};
    margin: 10px;
    overflow: hidden;
    border-radius: 10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
    }

    &:hover img {
        transform: scale(1.1);
    }
`

function GalleryButton(props) {
    const {photo, setCarouselActive, setPhotoIndex, index} = props
    return (
        <GalleryCard onClick={() => {
            setCarouselActive(true);
            setPhotoIndex(index);
            console.log("Gallery button clicked: ", index);
        }}>
            <img src={photo.thumb} alt={photo.alt}/>
        </GalleryCard>
    )
}

export function Gallery(props) {
    const {title, photos} = props;
    const {carouselActive, setCarouselActive} = useOutletContext();
    const [photoIndex, setPhotoIndex] = useState(0);
    return (
        <>
            <GalleryTitle>
                <h1>{title}</h1>
            </GalleryTitle>
            <GalleryContainer>
                {Object.keys(photos).map((key, index)=>{
                    return <GalleryButton key={key} index={index} photo={photos[key]} setCarouselActive={setCarouselActive} setPhotoIndex={setPhotoIndex}/>
                })}
            </GalleryContainer>
            {carouselActive ? <Carousel carouselActive={carouselActive} setCarouselActive={setCarouselActive} photos={photos} photoIndex={photoIndex}/> : null}
        </>
        
    )
}