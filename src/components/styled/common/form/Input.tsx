import styled from "styled-components";

const StyledInput = styled.input<{ error?: boolean }>`
    border-radius: ${(props) => props.theme.borderRadius};
    width: 100%;
    height: 35px;
    border: none;
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme.palette.primary.backgroundSecondary};
    color: ${(props) => props.theme.palette.primary.textPrimary};

    &:focus{
        outline: none;
    }

    ${props => props.error ? `border: solid ${props.theme.danger} 1px;` : null}
`

export default StyledInput;