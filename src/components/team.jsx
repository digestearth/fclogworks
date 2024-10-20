
import styled from '@emotion/styled';

import { Separator } from './separator';
import { SectionTitle } from './sectiontitle';

import {color_bg, color_text, color_element, color_subelement} from './colors.jsx'

import team from '../data/team.json';

const TeamBackground = styled.div`
    min-height: 650px;
    height: fit-content;
    width: 100%;
    /* background-color: #c29d8b; */
    background-color: ${color_subelement};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`

const TeamContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: start;
`

const TeamPortrait = styled.div`
    width: 300px;

    margin: 10px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 10px;

    @media (max-width: 680px) {
        width: 200px;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
    }

    img {
        width: 100%;
    }

    div {
        width: 280px;

        
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-left: 5px;
        margin-right: 10px;
        
        @media (max-width: 680px) {
            width: 180px;
        }
    }

    h2 {
        all: unset;
        font-size: 14pt;
    }

    h3 {
        all: unset;
        /* margin-left: auto; */
    }

    p {
        margin-left: 10px;
    }

    /* color: black; */
    color: ${color_text};
`

function Portrait(props) {
    const portrait_width = "300px";
    const text_margin = "10px";
    const {src, name, role, bio} = props;
    return (
        <TeamPortrait>
            <img src={src} alt={name}/>
            <div>
                <h2>{name}</h2>
                <h3>{role}</h3>
            </div> 
        </TeamPortrait>
    )
}

export function Team(props) {
    return (
        <>
            <Separator/>  
            <Separator/>  
            <TeamBackground>
                <SectionTitle to="team" href="#team" content="Meet the Team" color={color_text}/>
                <TeamContainer>
                    {Object.keys(team).map((key) => {
                        return (
                            <Portrait
                                key={key}
                                src={team[key].src}
                                name={team[key].name}
                                role={team[key].role}
                                bio={team[key].bio}
                            />
                        )
                    })}
                </TeamContainer>
            </TeamBackground>
        </>
    )
}