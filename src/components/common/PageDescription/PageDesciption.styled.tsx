import styled from "styled-components";

interface Props {
    width: string;
    height: string;
    margin: string
    fontSize: string

}

export const PageDescription = styled.p<Props>`
 width: ${p => p.width};
 height: ${p => p.height};
 margin:${p => p.margin};
 border:none;
 white-space: wrap;
 font-size:${p => p.fontSize} ;
 overflow: hidden;
  max-height: 150px;
`