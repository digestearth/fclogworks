import styled from '@emotion/styled';

import { SmoothLink } from './smoothlink';

const TitleDiv = styled.div`
    a {
        text-decoration: none;
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        font: inherit;
        cursor: pointer;
    }

    a:hover {
        /* opacity: 0.9; */
    }
    font-size: 38pt;
    width: 100%;
    display: flex;
    justify-content: center;

    scroll-margin-top: 80px;

    h1 {
        all: unset;
        margin-left: 30px;
        margin-right: 30px;
        color: ${props => props.color};
    }

    i {
        color: ${props => props.color};
    }
`

export function SectionTitle(props) {
    const {to, href, content, color} = props;
    return (
        <TitleDiv id = {to} color={color}>
            <SmoothLink to={to} href={href}>
                <i className="fa-solid fa-chevron-down fa-2xs"/><h1>{content}</h1><i className="fa-solid fa-chevron-down fa-2xs"/>
            </SmoothLink>
        </TitleDiv>
    )
}