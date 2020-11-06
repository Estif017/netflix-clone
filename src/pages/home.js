import React from 'react'
import AccordionContainer from '../containers/Accordion'
import FooterContainer from '../containers/Footer'
import JumbotronContainer from '../containers/Jumbotron'

export default function Home() {
    return (
        <>
            <JumbotronContainer/>
            <FooterContainer/>
            <AccordionContainer/>
        </>
    )
}
