import styled from "styled-components";

const StyledLabel = styled.label`
    font-size:  1rem;
    font-weight: bold;
    padding: 1rem;
    color: ${(props) => props.theme.palette.primary.textPrimary};
`

export default StyledLabel;