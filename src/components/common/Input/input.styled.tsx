import styled from "styled-components";
interface Props {
    border: string,
    borderRadius: string
}
export const INPUT = styled.input<Props>`

 width: 100%;
 padding : 8px 20px;
 border-radius: ${(p) => p.borderRadius};
 font-size: 1.4rem;
 border: ${(p) => p.border};

 &:focus{
  outline: none;
 }
`