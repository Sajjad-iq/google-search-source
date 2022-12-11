import React from 'react'
import { Small_Img } from '../../components/common/Small_img/Small_img.styled'
import { SearchPagesWrapper } from '../../components/shared/SearchPagesWrapper/SearchPagesWrapper.styled'
import googleLogo from "../../assets/images/google-logo-9831.png"
import { InputSection } from './InputSection'
import { NavBar } from './NavBar'
import { useLocation } from 'react-router-dom'
import { BorderBox } from '../../components/shared/BorderBox/BorderBox.styled'

export const PagesSearch = () => {

    const Location = useLocation()

    return (
        <SearchPagesWrapper display={Location.pathname === "/" || Location.pathname === "/PopUp" ? "none" : "flex"} width='100%' height='fit-content' padding='0' >
            <Small_Img src={googleLogo} width='125px' height='auto' margin='20px 0 0 0' />
            <InputSection />
            <NavBar />
        </SearchPagesWrapper>
    )
}
