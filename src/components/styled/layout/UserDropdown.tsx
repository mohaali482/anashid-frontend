import React from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { logoutUser } from "../../../redux/ducks/user-slice"
import { Link } from "react-router-dom"

const StyledUserDropDownMenu = styled.div`
    position: absolute;
    right: 2rem;
    z-index: 50;
    background-color: ${(props) => props.theme.palette.primary.backgroundSecondary};
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.theme.boxShadow};
`

const StyledUserDropdrownUl = styled.ul`
    padding: 0;
    list-style: none;
`

const StyledUserDropdownButton = styled.button`
    background: none;
    border: none;
    padding: 0.5rem 2rem;
    text-decoration: none;
    color: ${(props) => props.theme.gray};
    font-size: 0.875rem;
    width: 100%;
    color: ${(props) => props.theme.palette.primary.textPrimary};

    &:hover{
        background-color: ${(props) => props.theme.palette.primary.backgroundPrimary};
    }
`

const StyledUserDropdownLink = styled(Link)`
    background: none;
    border: none;
    padding: 0.5rem 2rem;
    text-decoration: none;
    color: ${(props) => props.theme.gray};
    font-size: 0.875rem;
    width: 100%;
    color: ${(props) => props.theme.palette.primary.textPrimary};

    &:hover{
        background-color: ${(props) => props.theme.palette.primary.backgroundPrimary};
    }
`


const UserDropdown = ({ dropdownPosition }: { dropdownPosition: { top: number } }) => {
    const dispatch = useDispatch()
    const handleClick = (ev: React.MouseEvent) => {
        dispatch(logoutUser())
    }
    return (
        <StyledUserDropDownMenu style={{ ...dropdownPosition }}>
            <StyledUserDropdrownUl>
                <li>
                    <StyledUserDropdownLink to={"/accounts/profile"}>
                        Profile
                    </StyledUserDropdownLink>
                </li>
                <li>
                    <StyledUserDropdownButton onClick={handleClick}>
                        Logout
                    </StyledUserDropdownButton>
                </li>
            </StyledUserDropdrownUl>
        </StyledUserDropDownMenu>
    )
}

export default UserDropdown;