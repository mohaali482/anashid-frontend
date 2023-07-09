import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.dark};
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    padding: .5rem 5rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

    @media (prefers-color-scheme: dark) {
        color: ${(props) => props.theme.palette.primary.light};
    }
`

export default StyledButton