import styled from "styled-components";

const StyledInput = styled.input`
    border-radius: ${(props) => props.theme.borderRadius};
    width: 70%;
    height: 35px;
    border: none;
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme.palette.primary.lightGray};
    color: ${(props) => props.theme.palette.primary.dark};

    &:focus{
        outline: none;
    }    
`

export default StyledInput;