import styled from "styled-components";

const Container = styled.div`
    background-color: ${props => props.theme.palette.primary.backgroundPrimary};
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: ${props => props.theme.borderRadius};
`

export default Container;