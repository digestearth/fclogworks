import styled from '@emotion/styled'

import { Separator } from './separator'
import { SectionTitle } from './sectiontitle'

import {color_bg, color_text, color_element} from './colors.jsx'

const ContactDiv = styled.div`
    height: min-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: green; */
`

const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: purple; */
    width: 60%;

    @media (max-width: 900px) {
        width: 80%;
    }

    p {
        all: unset;
        font-size: 16pt;
        margin-bottom: 20px;

        @media (max-width: 425px) {
            font-size: 14pt;
        }
    }

    h2 {
        all: unset;
        font-size: 18pt;
        margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;

        @media (max-width: 425px) {
            font-size: 16pt;
            margin-bottom: 5px;
            margin-left: 5px;
            margin-right: 5px;
        }
    }

    a {
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        font: inherit;
    }

    
`

const CardTray = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const ContactCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${color_element};
    justify-content: center;
    white-space: nowrap;
    color: white;
    
    width: min-content;
    height: 150px;
    border-radius: 10px;

    @media (max-width: 425px) {
        height: 110px;
    }
`

export function Contact() {
    return (
        <>
            <Separator/>
            <Separator/>
            <ContactDiv>
                <SectionTitle to="contact" href="#contact" content="Contact Us" color={color_text}/>
                <Separator/>
                <ContactContent>
                    <p>
                        Do you have a dream project in mind? We'd love to hear about it!<br/><br/>
                        Please reach out to us with any questions or inquiries. If you're thinking of something specific,
                        feel free to include details and photos in your email.
                    </p>
                    <Separator/>
                    <CardTray>
                        <ContactCard>
                            <h2>Tim Harris</h2>
                            <h2>Phone: <i>1-541-480-5394</i></h2>
                            <h2>Email: <a href="mailto:tim@fclogworks.com">tim@fclogworks.com</a></h2> 
                        </ContactCard>
                    </CardTray>
                </ContactContent>        
            </ContactDiv>
            <Separator/>
            <Separator/>
        </>   
    )
}