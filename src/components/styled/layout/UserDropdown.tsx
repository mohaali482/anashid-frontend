import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledUserDropDownMenu = styled.div`
    display: none;
    z-index: 50;
    background-color: ${(props) => props.theme.palette.primary.light};
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.theme.boxShadow};

    @media (prefers-color-scheme: dark){
        background-color: ${(props) => props.theme.palette.primary.dark}
    }
`

const StyledUserDropdrownUl = styled.ul`
    padding: 0 0.5rem;
    list-style: none;
`

const StyledUserDropdownLink = styled(Link)`
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: ${(props) => props.theme.palette.primary.darkGray};
    font-size: 0.875rem;

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


const UserDropdown = () => {
    return (
        <StyledUserDropDownMenu>
            <StyledUserDropdrownUl>
                <li>
                    <StyledUserDropdownLink to={'/'}>

                    </StyledUserDropdownLink>
                </li>
            </StyledUserDropdrownUl>
        </StyledUserDropDownMenu>
    )
}