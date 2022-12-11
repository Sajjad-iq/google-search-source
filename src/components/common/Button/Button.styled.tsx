import styled from "styled-components";

interface Props {
    width: string;
    height: string;
    margin: string
}

export const Button = styled.button<Props>`
 width: ${p => p.width};
 height: ${p => p.height};
 padding: 10px;
 margin:${p => p.margin};
 background:none;
 border:none
`