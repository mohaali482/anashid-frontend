import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import StyledIcon from "../common/form/StyledIcon";
import React from "react";

const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.palette.primary.backgroundPrimary};
    color: ${(props) => props.theme.palette.primary.textPrimary};
    border-radius: 10px;
    padding: 0 10px;
    margin: 10px;
    width: fit-content;
    margin-left: auto;
`

const Input = styled.input`
    background-color: ${(props) => props.theme.palette.primary.backgroundPrimary};
    color: ${(props) => props.theme.palette.primary.textPrimary};
    color: ${(props) => props.theme.palette.primary.textPrimary};
    border-radius: 5px;
    border: ${(props) => props.theme.palette.primary.textPrimary};
    padding: 10px;
    margin: 10px;
`
export function debounce(callback: CallableFunction, delay = 500) {
    let timeout: number;
    return (...args: any[]) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            callback(...args)
        }, delay)
    }
}

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