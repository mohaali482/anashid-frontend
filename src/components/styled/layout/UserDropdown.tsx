import { Link } from "react-router-dom"
import styled from "styled-components"

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

const StyledUserDropdownLink = styled(Link)`
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