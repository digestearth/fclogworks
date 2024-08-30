import styled from '@emotion/styled'

import { NavLink } from 'react-router-dom'

export function SmoothLink(props) {
    const { children, href, to, setHamburgerActive} = props

    if (window.location.pathname !== '/') {
        return (
            <a href={`/#${to}`}>
                {children}
            </a>
        )
    } else {
        return (
            <a onClick={(e) => {
                e.preventDefault()
                document.getElementById(to).scrollIntoView({ behavior: "smooth" })
                window.history.pushState(null, '', `#${to}`)
                // if (setHamburgerActive) {
                //     setHamburgerActive(false)
                // }
            }}>
                {children}
            </a>
        )  
    }   
}