import styled from "styled-components";

const StyledButton = styled.button<{ reverse?: boolean }>`
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.palette.primary.textPrimary};
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    padding: .5rem 5rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

    ${(props) => props.reverse && `
        background-color: ${props.theme.palette.primary.backgroundPrimary};
        border: 1px solid ${props.theme.main};
        color: ${props.theme.main};
    `}
`

export default StyledButton