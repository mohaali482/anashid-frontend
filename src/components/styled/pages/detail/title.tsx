import styled from "styled-components";

const Title = styled.h3`
    color: ${(props) => props.theme.palette.primary.dark};
    
    @media(prefers-color-scheme: dark) {
        color: ${(props) => props.theme.palette.primary.light};
    }
`

export default Title;