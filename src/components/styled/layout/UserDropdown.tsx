import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledUserDropDownMenu = styled.div`
    position: absolute;
    right: 2rem;
    z-index: 50;
    background-color: ${(props) => props.theme.palette.primary.light};
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.theme.boxShadow};

    @media (prefers-color-scheme: dark){
        background-color: ${(props) => props.theme.palette.primary.dark}
    }
`

const StyledUserDropdrownUl = styled.ul`
    padding: 0;
    list-style: none;
`

const StyledUserDropdownLink = styled(Link)`
    padding: 0.5rem 2rem;
    text-decoration: none;
    color: ${(props) => props.theme.palette.primary.darkGray};
    font-size: 0.875rem;
    width: 100%;

    &:hover{
        background-color: ${(props) => props.theme.palette.primary.lightGray};
    }

    @media (prefers-color-scheme: dark){
        color: ${(props) => props.theme.palette.primary.lightGray};

        &:hover{
            background-color: ${(props) => props.theme.palette.primary.darkGray};
        }
    }
`


const UserDropdown = ({ dropdownPosition }: { dropdownPosition: { top: number } }) => {
    return (
        <StyledUserDropDownMenu style={{ ...dropdownPosition }}>
            <StyledUserDropdrownUl>
                <li>
                    <StyledUserDropdownLink to={'/'}>
                        Link
                    </StyledUserDropdownLink>
                </li>
            </StyledUserDropdrownUl>
        </StyledUserDropDownMenu>
    )
}

export default UserDropdown;