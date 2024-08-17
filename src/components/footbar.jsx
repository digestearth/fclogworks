import styled from '@emotion/styled'

import {color_element} from './colors.jsx'

const FootbarDiv = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${color_element};
`

export function FootBar() {
    return (
        <FootbarDiv/>
    )
}