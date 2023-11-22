import styled from "styled-components";

const Button = styled.button`
    
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.palette.primary.textPrimary};
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

    svg {
        color: ${(props) => props.theme.palette.primary.textPrimary};
    }
`

export default Button;