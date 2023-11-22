import styled from "styled-components";

const Container = styled.div`
    background-color: ${props => props.theme.palette.primary.backgroundSecondary};
    padding: 5rem;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export default Container;