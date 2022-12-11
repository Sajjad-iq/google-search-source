import React from 'react'
import { NavBarStyled } from './NavBar.styled'
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <NavBarStyled width='100%' height='fit-content' padding='5px'>
            <NavLink className={"nav-link"} to={"/WebSearch"}>Web</NavLink>
            <NavLink className={"nav-link"} to={"/ImagesSearch"}>Images</NavLink>
            <NavLink className={"nav-link"} to={"/PupUp"}>News</NavLink>
        </NavBarStyled>
    )
}
