import styled from "styled-components";

interface Props {
    height: string,
    width: string,
    padding: string,
    display: string;
}

export const SearchPagesWrapper = styled.section<Props>`
 width: ${(p) => p.width};
 height: ${(p) => p.height} ;
 display: ${(p) => p.display};
 justify-content: flex-start;
 flex-direction: column;
 align-items: center;
 padding:${(p) => p.padding};
 background:white;

`