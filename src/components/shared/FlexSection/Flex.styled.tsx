import styled from "styled-components";

interface Props {
  height: string,
  width: string,
  flexDirection: string,
  margin: string,
  padding: string
}

export const FlexSection = styled.section<Props>`
 width: ${(p) => p.width};
  height: ${(p) => p.height} ;
  display: flex;
  justify-content: center;
  flex-direction: ${(p) => p.flexDirection};
  margin:${(p) => p.margin};
  align-items: center;
  padding:${(p) => p.padding};
  background-color: white;
  flex-wrap: wrap;

`