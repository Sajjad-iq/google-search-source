import styled from "styled-components";

interface Props {
    width: string;
    height: string;
    margin: string
}

export const Img = styled.img<Props>`
 width: ${p => p.width};
 height: ${p => p.height};
 background-size: contain;
 margin:${p => p.margin};
border-radius: 5px;
`