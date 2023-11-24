import styled from "styled-components";
import * as styledColors from '../../../../../general-styles'

export const StyledButton = styled.button`
    background-color: #transparent;
    color: ${styledColors.mainColor};
    border: 1px solid ${styledColors.mainColor};
    border-radius: 5px;
    width: 100%;

    &:hover {
        box-shadow: 0 0 2px ${styledColors.mainColor};
    }
`