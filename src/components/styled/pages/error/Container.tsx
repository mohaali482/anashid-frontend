import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: ${(props) => props.theme.palette.primary.lightGray};
    border-radius: 0.5rem;
    margin-top: 2rem;


    @media(prefers-color-scheme: dark) {
        background-color: ${(props) => props.theme.palette.primary.dark};
    }
    
    & a{
        text-decoration: none;
        color: ${(props) => props.theme.palette.primary.main};
        &:hover{
            text-decoration: underline;
        }
    }
    
`

export default Container;