import styled from "styled-components";

interface Props {
  width: string;
  height: string;
  margin: string,
  fontSize: string

}

export const Alink = styled.a<Props>`
 width: ${p => p.width};
 height: ${p => p.height};
 margin:${p => p.margin};
 border:none;
 text-decoration: none;
 font-size:${p => p.fontSize} ;
 overflow: hidden;
  max-height: 60px; 
`