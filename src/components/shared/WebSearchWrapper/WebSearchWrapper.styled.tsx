import styled from "styled-components";
import { device } from "../../../services/breackPoints";

interface Props {
    height: string,
    width: string,
    borderTop: string
    padding: string
}

export const WebSearchWrapper = styled.section<Props>`
 width: ${(p) => p.width};
 height: ${(p) => p.height} ;
 display: flex;
 justify-content: flex-start;
 flex-direction: column;
 align-items: center;
 border-top:${(p) => p.borderTop};
 padding:${(p) => p.padding};

  @media ${device.tablet} {
     width: 90%;
  };

   @media ${device.laptop} {
     width: 70%;
  };
`