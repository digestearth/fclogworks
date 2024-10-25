import { useEffect } from "react";
import styled from "@emotion/styled";
import {Intro} from "../components/intro";
import {Projects} from "../components/projects";
import {Team} from "../components/team";
import {Contact} from "../components/contact";

const Container = styled.div`
    /* margin-top: 75px; */
    height: 100%;
    margin-bottom: 10px;
    width: 1500px;
    @media (max-width: 1500px) {
        width: 100%
    }
    /* background-color: red; */
`


export function HomePage() {
  useEffect(() => {
    const anchor = document.getElementById(window.location.hash.substring(1));
    if (anchor) {
      anchor.scrollIntoView();
    }
  }, []);
  return (
    <>
      <Intro />
      <Container>
        <Projects />
        <Team/>
        <Contact/>
      </Container>
    </>
  )
}
