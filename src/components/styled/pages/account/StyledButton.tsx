import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.palette.primary.textPrimary};
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
`

export default StyledButton