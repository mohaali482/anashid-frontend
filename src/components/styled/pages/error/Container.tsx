import React from "react";
import { ReactChildren, ReactComponentElement } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: ${(props) => props.theme.palette.primary.lightGray};
    border-radius: 0.5rem;
    height: 60%;
    width: 80%;
    margin-left: auto;
    margin-right: auto;


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
const StyledDiv = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <StyledDiv>
            <StyledContainer>
                {children}
            </StyledContainer>
        </StyledDiv>
    )
}

export default Container;