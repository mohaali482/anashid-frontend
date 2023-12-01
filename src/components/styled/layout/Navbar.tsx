import styled from "styled-components";
import { HiMenuAlt2 } from 'react-icons/hi';
import UserIcon from "./UserIcon";
import StyledIcon from "../common/form/StyledIcon";
import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from "react";
import ToggleContext from "../../../toggler";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
    position: fixed;
    top: 0;
    z-index: 30;
    width: 100%;
    height: 5rem;
`

const StyledDiv = styled.div`
    background-color: ${(props) => props.theme.palette.primary.backgroundSecondary};
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -10;
    filter:  blur(40px);
    backdrop-filter: blur(1px);
`

const StyledDiv2 = styled.div`
    display: flex;
    max-width: 1280px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1rem;
    margin-right: 0.5rem;
    height: 40px;

    @media (min-width: 1024px) {
        margin-left: 16rem;
    }
`

const SidebarButton = styled.button`
    display: inline-flex;
    align-items: center;
    padding: 0.5rem;
    margin-top: 0.5rem;
    margin-right: 1rem;
    margin-left: 0.75rem;
    font-size: 0.875rem;
    color:  ${(props) => props.theme.gray};
    border: none;
    background: none;

    @media (min-width: 1024px) {
        display: none;
    }
`

const NavBar = ({ handleClick, title }: { handleClick: any, title: string }) => {
    document.title = title;
    const { theme, updateTheme } = useContext(ToggleContext)
    const { isLoggedIn } = useSelector((state: RootState) => state.user)

    return (
        <StyledNav>
            <StyledDiv />
            <StyledDiv2>
                <SidebarButton onClick={handleClick}>
                    <HiMenuAlt2 size={25} />
                </SidebarButton>
                {title}
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <StyledIcon onClick={() => updateTheme(theme === "dark" ? "light" : "dark")} style={{ cursor: "pointer" }}>
                        {theme === "light" ? <FaMoon /> : <FaSun />}
                    </StyledIcon>
                    {isLoggedIn && <UserIcon />}
                </div>
            </StyledDiv2>
        </StyledNav>
    )
}

export default NavBar;