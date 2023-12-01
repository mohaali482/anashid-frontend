import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: ${(props) => props.theme.palette.primary.backgroundPrimary};
    border-radius: 0.5rem;
    height: 60%;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    
    & a{
        text-decoration: none;
        color: ${(props) => props.theme.main};
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