import styled from "styled-components";

const StyledLabel = styled.label`
    font-size:  1.2rem;
    font-weight: bold;
    padding: 1rem;
    color: ${(props) => props.theme.palette.primary.dark};
    
    @media (prefers-color-scheme: dark) {
        color: ${(props) => props.theme.palette.primary.light};
    }
`

export default StyledLabel;