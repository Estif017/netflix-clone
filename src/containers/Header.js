import React from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'


export default function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo src='../../images/misc/netflix-logo.svg' alt="Netflix"/>
                <Header.ButtonLink to={ROUTES.SIGNIN}>SignIn</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}
