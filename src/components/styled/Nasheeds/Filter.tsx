import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import StyledIcon from "../common/form/StyledIcon";
import React from "react";

const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.palette.primary.light};
    color: ${(props) => props.theme.palette.primary.dark};
    border-radius: 10px;
    padding: 0 10px;
    margin: 10px;
    width: fit-content;
    margin-left: auto;

    @media (prefers-color-scheme: dark) {
        color: ${(props) => props.theme.palette.primary.lightGray};
        background-color: ${(props) => props.theme.palette.primary.dark};
    }
`

const Input = styled.input`
    background-color: ${(props) => props.theme.palette.primary.light};
    color: ${(props) => props.theme.palette.primary.dark};
    color: ${(props) => props.theme.palette.primary.dark};
    border-radius: 5px;
    border: ${(props) => props.theme.palette.primary.dark};
    padding: 10px;
    margin: 10px;

    @media (prefers-color-scheme: dark) {
        border: ${(props) => props.theme.palette.primary.light};
        color: ${(props) => props.theme.palette.primary.lightGray};
        background-color: ${(props) => props.theme.palette.primary.dark};
    }
`


const Filter = ({ onChangeHandler, query }: { onChangeHandler: React.ChangeEventHandler<HTMLInputElement>, query: string }) => {
    return (
        <Container>
            <StyledIcon>
                <FiSearch />
            </StyledIcon>
            <Input type="text" placeholder="Filter" onChange={onChangeHandler} defaultValue={query} autoComplete="off" />
        </Container>
    )
}

export default Filter;