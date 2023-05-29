import styled from "styled-components";

const StyledHr = styled.hr`
    color: ${props => props.theme.palette.primary.darkGray};
    width: 100%;

    @media (prefers-color-scheme: dark) {
        color: ${props => props.theme.palette.primary.lightGray};
    }
`

export default StyledHr;