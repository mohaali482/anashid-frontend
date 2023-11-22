import styled from "styled-components";

const StyledTextArea = styled.textarea`
    border-radius: ${(props) => props.theme.borderRadius};
    width: 100%;
    border: none;
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme.palette.primary.backgroundPrimary};
    color: ${(props) => props.theme.palette.primary.textPrimary};

    &:focus{
        outline: none;
    }    
`

export default StyledTextArea;