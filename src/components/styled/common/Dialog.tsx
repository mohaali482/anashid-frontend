import styled from "styled-components";

const Dialog = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto auto;
    z-index: 102;
    background-color: ${(props) => props.theme.palette.primary.light};
    display: block;
    max-width: 50%;
    max-height: 50%;
    padding: 2rem;
    overflow-x: hidden;
    overflow-y: auto;

    @media (prefers-color-scheme: dark) {
        color: ${(props) => props.theme.palette.primary.lightGray};
        background-color: ${(props) => props.theme.palette.primary.dark};
    }
`

export default Dialog;