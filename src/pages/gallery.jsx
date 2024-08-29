import styled from '@emotion/styled'

const GalleryContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 80%;

    display: flex;
    background-color: #75b975;   
`

const Gallerycard = styled.div`
    width: 200px;
    height: 200px;
    background-color: #7a8ff7;
    margin: 10px;
`

export function Gallery(props) {

    return (
        <GalleryContainer>
            <h1>Gallery</h1>
        </GalleryContainer>
    )
}