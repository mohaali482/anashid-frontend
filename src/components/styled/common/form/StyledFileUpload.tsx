import styled from "styled-components";

const StyledFileUpload = styled.label`
    background-color: ${(props) => props.theme.palette.primary.light};
    color: ${(props) => props.theme.palette.primary.main};
    border: 1px solid ${(props) => props.theme.palette.primary.main};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: .5rem .5rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    width: 70%;

    @media (prefers-color-scheme: dark) {
        background-color: ${(props) => props.theme.palette.primary.dark};
    }
`

export default StyledFileUpload;