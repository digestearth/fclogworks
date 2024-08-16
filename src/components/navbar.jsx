import {useEffect} from "react"
import { NavLink } from "react-router-dom"
import styled from "@emotion/styled"


import fc from "../assets/forestcraft_outline.png"

import {SmoothLink} from "./smoothlink"

const NavContainer = styled.div`
    position: fixed;
    flex: 0;
    width: 100%;
    height: 75px;
    background-color: #35373a;
    display: flex;
    align-items: center;
    justify-content: center;

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
        max-width: 85px;
        margin-right: 10px;
        /* background-color: red */
    }

    a {
        /* background-color: purple; */
        color: white;
        text-decoration: none;
        font-size: 20px;
        margin-right: 20px;
        width: min-content;
    }

    @keyframes linkhover {
        from {color: white;}
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

const Hamburger = styled.button`
    all: unset;

    margin-right: 20px;
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
                            <Hamburger onClick={toggleHamburger}>
                                {
                                    hamburgerActive ?
                                    <i className="fa-solid fa-xmark fa-2xl"/>
                                    :
                                    <i className="fa-solid fa-bars fa-2xl"/>
                                }
                            </Hamburger>
                            
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