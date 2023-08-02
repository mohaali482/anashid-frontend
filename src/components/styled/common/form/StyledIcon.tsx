import styled from "styled-components";

const StyledIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme.palette.primary.main};
`

export default StyledIcon;