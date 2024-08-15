import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

import fc from "../assets/forestcraft_outline.png"

const NavContainer = styled.div`
    position: fixed;
    flex: 0;
    width: 100%;
    height: 75px;
    background-color: #35373a;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        flex: 0;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 1500px;
        max-width: 100%;

        /* background-color: green; */

        @media (max-width: 1500px) {
            min-width: 100%
        }
    }

    nav {
        display: flex;
        align-items: center;
        margin-left: 10px;
        margin-right: 10px;
    }

    nav.right {
        //justify-content: flex-end;
    }

    img {
        max-width: 80px;
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

function SmoothLink(props) {
    const { children, href, to} = props
    return (
        <a href={href} onClick={(e) => {
            e.preventDefault()
            document.getElementById(to).scrollIntoView({ behavior: "smooth" })
        }}>
            {children}
        </a>
    )
}

export function NavBar() {
    return (
        <NavContainer>
            <div>
                <nav>
                    {/* <NavLink to="/"><img className="logo" src={logo} /></NavLink> */}
                    <SmoothLink to="home" href="#"><img src={fc}></img></SmoothLink>
                    <SmoothLink to="work" href="#work">Work</SmoothLink> 
                </nav>
            </div>
        </NavContainer>
    )

}