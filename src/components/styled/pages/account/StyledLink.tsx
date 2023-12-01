import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled.button`
    background-color: ${(props) => props.theme.palette.primary.backgroundSecondary};
    color: ${(props) => props.theme.main};
    border: 1px solid ${(props) => props.theme.main};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
`

export default StyledLink