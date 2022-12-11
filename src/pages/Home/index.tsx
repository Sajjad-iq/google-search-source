import React, { useEffect } from 'react'
import logo from '../../assets/images/google-logo-9831.png'
import { HomeContainer } from './Home.styled'
import { Wrapper } from '../../components/shared/Wrapper/Wrapper.styled'
import { Img } from '../../components/common/Logo/img.styled'
import { GoogleSearch } from './GoogleSearch'


export const Home = () => {

    console.log("Home")
    return (
        <HomeContainer>
            <Wrapper padding='0' borderTop='none' width='90%' height='75%'>
                <Img margin='30px' src={logo} height="auto" width='175px' />
                <GoogleSearch />
            </Wrapper>
        </HomeContainer>
    )
}
