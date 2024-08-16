import styled from '@emotion/styled'

export function SmoothLink(props) {
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