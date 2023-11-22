import styled from "styled-components";

const StyledFileUpload = styled.label`
    background-color: ${(props) => props.theme.palette.primary.backgroundSecondary};
    color: ${(props) => props.theme.main};
    border: 1px solid ${(props) => props.theme.main};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: .5rem .5rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    width: 70%;
`

export default StyledFileUpload;