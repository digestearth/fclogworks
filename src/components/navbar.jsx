import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

const NavContainer = styled.div`
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

        background-color: green;

        @media (max-width: 1000px) {
            min-width: 100%
        }
    }

    nav {
        align-items: left;
        margin-left: 10px;
        margin-right: 10px;
    }

    nav.right {
        //justify-content: flex-end;
    }

    img.logo {
        max-width: 300px;
        margin-right: 10px;
    }

    a {
        color: white;
        text-decoration: none;
        font-size: 20px;
        margin-right: 20px;
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

export function NavBar() {
    return (
        <NavContainer>
            <div>
                <nav>
                    {/* <NavLink to="/"><img className="logo" src={logo} /></NavLink> */}
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>    
                </nav>
            </div>
            
        </NavContainer>
    )

}