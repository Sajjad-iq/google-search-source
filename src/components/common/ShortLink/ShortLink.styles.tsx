import styled from "styled-components";

interface Props {
    width: string;
    height: string;
    margin: string
    fontSize: string

}

export const ShortLink = styled.p<Props>`
 width: ${p => p.width};
 height: ${p => p.height};
 margin:${p => p.margin};
 border:none;
 overflow: hidden;
 white-space: nowrap;
 max-height:100px;
 font-size:${p => p.fontSize} ;
`