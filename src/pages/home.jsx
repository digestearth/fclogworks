import { useEffect } from "react";
import {Intro} from "../components/intro";
import {Work} from "../components/work";
import {Team} from "../components/team";
import {Contact} from "../components/contact";


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
      <Work />
      <Team/>
      <Contact/>
    </>
  )
}
