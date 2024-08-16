
import styled from '@emotion/styled';

import { Separator } from './separator';
import { SectionTitle } from './sectiontitle';

import team from '../data/team.json';

const portrait_width = "300px";
const text_margin = "10px";

const TeamBackground = styled.div`
    min-height: 650px;
    height: fit-content;
    width: 100%;
    /* background-color: #c29d8b; */
    background-color: #525252;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const TeamContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: start;
`

const TeamPortrait = styled.div`
    width: ${portrait_width};
    margin: 10px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    /* background-color: #777777; */

    img {
        width: 100%;
    }

    div {
        width: calc(${portrait_width} - ${text_margin} - ${text_margin});
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-left: ${text_margin};
        margin-right: ${text_margin};
    }

    h2 {
        all: unset;
        font-size: 16pt;
    }

    h3 {
        all: unset;
        /* margin-left: auto; */
    }

    p {
        margin-left: 10px;
    }

    /* color: black; */
    color: white;
`

function Portrait(props) {
    const {src, name, role, bio} = props;
    return (
        <TeamPortrait>
            <img src={src} alt={name}/>
            <div>
                <h2>{name}</h2>
                <h3>{role}</h3>
            </div> 
            <p>{bio}</p>
        </TeamPortrait>
    )
}

export function Team(props) {
    return (
        <>
            <Separator/>  
            <TeamBackground>
                <SectionTitle to="team" href="#team" content="Meet the Team" color="#ffffff"/>
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