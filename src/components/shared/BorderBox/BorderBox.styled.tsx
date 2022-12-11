import styled from "styled-components";

interface Props {
  height: string,
  width: string,
  border: string
}

export const BorderBox = styled.section<Props>`
 width: ${(p) => p.width};
  height: ${(p) => p.height} ;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin:10px;
  align-items: center;
  background-color: white;
  border:${(p) => p.border};
  border-radius:20px
`