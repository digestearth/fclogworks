import styled from "@emotion/styled"

import beach from "../assets/homepage/beach.png";

const Backdrop = styled.div`
    height: 80vh;

    img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

export function Intro(props) {
    return (
        <Backdrop>
            <img src = {beach} alt = "beach" />
            Intro
        </Backdrop>
    )
}