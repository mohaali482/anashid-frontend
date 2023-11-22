import styled from "styled-components";

const StyledDangerButton = styled.button`
    background-color: ${(props) => props.theme.palette.primary.backgroundSecondary};
    color: ${(props) => props.theme.danger};
    border: 1px solid ${(props) => props.theme.danger};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
`

export default StyledDangerButton