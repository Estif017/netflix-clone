import React from 'react'
import { Features, OptForm } from '../components'
import AccordionContainer from '../containers/Accordion'
import FooterContainer from '../containers/Footer'
import HeaderContainer from '../containers/Header'
import JumbotronContainer from '../containers/Jumbotron'

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Features>
                    <Features.Title>Unlimited films,tv programms and more.</Features.Title>
                    <Features.SubTitle>Watch anywhere cancle any time.</Features.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email Address" />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to watch? Enter your email to create or restart
                        your membership.</OptForm.Text>
                    </OptForm>
                </Features>
            </HeaderContainer>
            <JumbotronContainer/>
            <AccordionContainer/>
            <FooterContainer/>
        </>
    )
}
