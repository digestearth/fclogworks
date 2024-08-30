import { useOutletContext } from 'react-router-dom';
import styled from '@emotion/styled'

function galleryButtonClicked(index, setCarouselActive) {
    setCarouselActive(true);
    // setHamburgerActive(false);
    // setPhotos(photoArray);
    console.log("Gallery button clicked: ", index);
}

const GalleryContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    display: flex;
    justify-content: center;
    background-color: #75b975;
    flex-wrap: wrap;
`

const GalleryCard = styled.button`
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	outline: inherit;

    width: 300px;
    height: 300px;
    background-color: #7a8ff7;
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
    const {photo, setCarouselActive, index} = props
    return (
        <GalleryCard onClick={() => galleryButtonClicked(index, setCarouselActive)}>
            <img src={photo.thumb} alt={photo.alt}/>
        </GalleryCard>
    )
}

export function Gallery(props) {
    const {photos} = props;
    const {setCarouselActive} = useOutletContext();
    return (
        <>
        Title
        Description
        <GalleryContainer>
            {Object.keys(photos).map((key, index)=>{
                return <GalleryButton key={key} index={index} photo={photos[key]} setCarouselActive={setCarouselActive}/>
            })}
        </GalleryContainer>
        </>
        
    )
}