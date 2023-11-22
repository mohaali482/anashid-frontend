import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledDropDown = styled.div`
    position: absolute;
    right: 2rem;
    z-index: 10;
    width: 11rem;
    background-color: ${(props) => props.theme.palette.primary.backgroundSecondary};
    border-radius: 0.5rem;
    border-top-width: 1px; 
    border-color: ${(props) => props.theme.palette.primary.backgroundPrimary};
    box-shadow: 0 0.5rem 1rem rgba(255,255,255,0.1);
    transition: all 0.3s ease-in-out;
`

export const StyledDropDownUl = styled.ul`
    list-style: none;
    padding: 0.25rem 0;
    font-size: 0.875rem;
    color: ${(props) => props.theme.gray};
`

export const StyledDropDownLink = styled(Link)`
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: ${(props) => props.theme.gray};
    :hover {
        background-color: ${(props) => props.theme.palette.primary.backgroundPrimary};
    }
`
interface dropDownProps {
    dropdownPosition: {
        top: number;
    },
    nasheedId: number,
    links: {
        link: string;
        text: string;
    }[]
}

const NasheedTdActionsDropDown = ({ dropdownPosition, links, nasheedId: id }: dropDownProps) => {

    return (
        <StyledDropDown style={{ ...dropdownPosition }}>
            <StyledDropDownUl>
                {links.map((link, index) => (
                    <StyledDropDownLink key={index} to={link.link.replace(":id", id.toString())}>{link.text}</StyledDropDownLink>
                ))}
            </StyledDropDownUl>
        </StyledDropDown>
    )

}

export default NasheedTdActionsDropDown;