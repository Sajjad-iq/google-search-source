import styled from "styled-components";
import { device } from "../../../services/breackPoints";

interface Props {
   border: string,
   width: string,
   margin: string
}
export const Form = styled.form<Props>`
 width: ${(p) => p.width};
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  border: ${(p) => p.border};
  margin:${(p) => p.margin};
  border-radius: 10px;

  @media ${device.tablet} {
     width: 85%;
  };
  @media ${device.laptop} {
     width: 650px;
  };
    
`