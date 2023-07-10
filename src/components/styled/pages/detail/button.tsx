import styled from "styled-components";

const Button = styled.button`
    
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.dark};
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    padding: .5rem 2rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    max-height: 40px;
    margin-left: auto;

    @media (prefers-color-scheme: dark) {
        color: ${(props) => props.theme.palette.primary.light};
    }

    svg {
        color: ${(props) => props.theme.palette.primary.dark};
    }
`

export default Button;