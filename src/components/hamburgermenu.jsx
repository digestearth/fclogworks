import styled from '@emotion/styled'

import {color_bg, color_text, color_element, color_subelement, color_element_accent, color_element_inset} from './colors.jsx'

import {SmoothLink} from './smoothlink.jsx'

const MenuBg = styled.div`
    position: fixed;
    right: 0;
    top: 75px;
    width: 300px;
    background-color: ${color_element_inset};
    color: ${color_text};
    display: flex;
    flex-direction: column;
    padding-bottom: 5px;

    a {
        text-decoration: none;
        color: ${color_bg};
        font-size: 20px;
        margin-left: 10px;
        width: 280px;
    }

    @keyframes buttonhover{
        from {background-color: ${color_element}; color: ${color_subelement};}
        to {background-color: ${color_subelement}; color: ${color_element};}
    }

    a:hover {
        background-color: ${color_subelement};
        color: ${color_element};
        animation-name: buttonhover;
        animation-duration: 250ms;
    }

    hr {
        all: unset;
        margin-left: 20px;
        width: 260px;
        border: 1px solid ${color_element_accent};
    }

    div {
        padding-top: 20px;
        padding-bottom: 20px;
        margin-left: 10px;
    }
`

export function HamburgerMenu() {
    return (
        <MenuBg>
            <SmoothLink to="home" href="#home"><div>Home</div></SmoothLink> 
            <hr/>
            <SmoothLink to="work" href="#work"><div>Work</div></SmoothLink> 
            <hr/>
            <SmoothLink to="team" href="#team"><div>Team</div></SmoothLink> 
            <hr/>
            <SmoothLink to="contact" href="#contact"><div>Contact</div></SmoothLink>
        </MenuBg>
    )
}