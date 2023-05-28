import styled from "styled-components";

const FormContainer = styled.div`
    margin: 2rem auto;
    padding: 1.5rem;
    width: 75%;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    background-color: ${(props) => props.theme.palette.primary.light};
    border-radius: 1rem;
    color: ${(props) => props.theme.palette.primary.dark};

    @media (prefers-color-scheme: dark) {
        background-color: ${(props) => props.theme.palette.primary.dark};
        color: ${(props) => props.theme.palette.primary.light};
    }
    
`


export default FormContainer