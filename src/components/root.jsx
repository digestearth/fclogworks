import { Outlet, NavLink } from "react-router-dom";

import { NavBar } from "./navbar";
import styled from "@emotion/styled";

const MainDiv = styled.div`
    display: flex;
    justify-content: center;
    min-height: 1000px;
`

const Container = styled.div`
    width: 1000px;
    margin-bottom: 10px;
    @media (max-width: 850px) {
        width: 100%
    }
    background-color: red;
`

const Content = styled.div`
    margin-left: 10px;
    margin-right: 10px;
`

export function Root(props) {
    const { children } = props
    return (
        <>
            <NavBar />
            <MainDiv>
                <Container>
                    <Content>
                        <main>
                            {children || <Outlet/>}
                        </main>
                    </Content>
                </Container>
            </MainDiv>
            
            
        </>
    )
}