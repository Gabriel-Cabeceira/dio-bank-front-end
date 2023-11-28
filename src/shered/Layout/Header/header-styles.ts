import styled from "styled-components";
import * as styledColors from '../../../general-styles'

export const StyledHeader = styled.header`
    background-color: ${styledColors.secondaryColor};
    color: #FFFFFF;
    width: 100%;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
`

export const DioBankTitle = styled.h1`
    margin-left: 3em;
`