import {useEffect} from "react"
import { NavLink } from "react-router-dom"
import styled from "@emotion/styled"

import {color_bg, color_text, color_element} from "./colors"

import fc from "../assets/logo_blackwhite.svg"

import {SmoothLink} from "./smoothlink"

const NavContainer = styled.div`
    position: sticky;
    top: 0px;
    flex: 0;
    width: 100%;
    height: 75px;
    background-color: ${color_element};
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 1;

    div.navitems {
        flex: 0;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 1500px;
        max-width: 100%;

        @media (max-width: 1500px) {
            min-width: 100%
        }
    }

    div.left {
        height: 100%;
        display: flex;
        justify-content: flex-start;

        @media (max-width: 1500px) {
            margin-left: 10px;
        }
    }

    div.right{
        margin-left: auto;
        justify-content: flex-end
    }

    nav {
        min-width: 1500px;
        display: flex;
        align-items: center;
        margin-left: 10px;
        margin-right: 10px;

        @media (max-width: 1500px) {
            min-width: 100%
        }
    }

    nav.right {
        //justify-content: flex-end;
    }

    img {
        margin-top: 5px;
        max-width: 85px;
        margin-right: 10px;
        /* background-color: red */
    }

    a {
        /* background-color: purple; */
        color: ${color_bg};
        text-decoration: none;
        font-size: 20px;
        margin-right: 20px;
        width: min-content;
    }

    @keyframes linkhover {
        from {color: ${color_bg};}
        to {color: #a7a7a7}
    }

    button:hover {
        color: #a7a7a7;
        animation-name: linkhover;
        animation-duration: 500ms;
    }

    a:hover {
        color: #a7a7a7;
        animation-name: linkhover;
        animation-duration: 500ms;
    }

    a.active{
        color: #a7a7a7;
    }

    a.active:hover{
        color: #a7a7a7;
        animation: none;

    }
`

const HamburgerButton = styled.button`
    all: unset;

    margin-right: 20px;

    i {
        color: ${color_bg};
    }
`

export function NavBar(props) {
    const {mobile, hamburgerActive, setHamburgerActive} = props

    const toggleHamburger = () => {
        setHamburgerActive(prevState => !prevState);
    }

    return (
        <NavContainer>
            <nav>
                <div className="navitems">
                    {/* <NavLink to="/"><img className="logo" src={logo} /></NavLink> */}
                    <div className="left">
                        <SmoothLink to="home" href="#"><img src={fc}></img></SmoothLink>
                    </div>
                    <div className="right">
                        {mobile ?
                            <HamburgerButton onClick={toggleHamburger}>
                                {
                                    hamburgerActive ?
                                    <i className="fa-solid fa-xmark fa-2xl"/>
                                    :
                                    <i className="fa-solid fa-bars fa-2xl"/>
                                }
                            </HamburgerButton>
                            
                            :
                            <>
                                <SmoothLink to="home" href="#home">Home</SmoothLink> 
                                <SmoothLink to="work" href="#work">Work</SmoothLink> 
                                <SmoothLink to="team" href="#team">Team</SmoothLink> 
                                <SmoothLink to="contact" href="#contact">Contact</SmoothLink>
                            </>      
                        }
                    </div> 
                    
                </div>         
            </nav>
        </NavContainer>
    )

}