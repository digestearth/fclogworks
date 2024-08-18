import styled from '@emotion/styled'

export function SmoothLink(props) {
    const { children, href, to, setHamburgerActive} = props
    return (
        <a href={href} onClick={(e) => {
            e.preventDefault()
            document.getElementById(to).scrollIntoView({ behavior: "smooth" })
            // if (setHamburgerActive) {
            //     setHamburgerActive(false)
            // }
        }}>
            {children}
        </a>
    )
}