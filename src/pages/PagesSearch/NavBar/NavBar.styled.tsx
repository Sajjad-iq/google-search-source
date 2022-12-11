import styled from "styled-components";
import { device } from "../../../services/breackPoints";

interface Props {
  height: string,
  width: string,
  padding: string
}

export const NavBarStyled = styled.nav<Props>`
 width: ${(p) => p.width};
 height: ${(p) => p.height} ;
 display: flex;
 justify-content: flex-start;
 flex-direction: row;
 align-items: center;
 padding:${(p) => p.padding};

  @media ${device.laptop} {
     width: 650px;
  };
`