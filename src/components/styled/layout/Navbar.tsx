import styled from "styled-components";
import { HiMenuAlt2 } from 'react-icons/hi';
import UserIcon from "./UserIcon";

const StyledNav = styled.nav`
    position: fixed;
    top: 0;
    z-index: 30;
    width: 100%;
    height: 5rem;
`

const StyledDiv = styled.div`
    background-color: ${(props) => props.theme.palette.primary.light};
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -10;
    filter:  blur(40px);
    backdrop-filter: blur(1px);
    
    @media (prefers-color-scheme: dark) {
        background-color: ${(props) => props.theme.palette.primary.dark};
    }
`

const StyledDiv2 = styled.div`
    display: flex;
    max-width: 1280px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1rem;
`

const SidebarButton = styled.button`
    display: inline-flex;
    align-items: center;
    padding: 0.5rem;
    margin-top: 0.5rem;
    margin-right: 1rem;
    margin-left: 0.75rem;
    font-size: 0.875rem;
    color:  ${(props) => props.theme.palette.primary.darkGray};
    border: none;
    background: none;

    @media (min-width: 1024px) {
        display: none;
    }

    @media (prefers-color-scheme: dark) {
        color: ${(props) => props.theme.palette.primary.lightGray};
    }
`

const NavBar = ({ handleClick }: { handleClick: any }) => {
    return (
        <StyledNav>
            <StyledDiv />
            <StyledDiv2>
                <SidebarButton onClick={handleClick}>
                    <HiMenuAlt2 size={25} />
                </SidebarButton>
            </StyledDiv2>
            <UserIcon />
        </StyledNav>
    )
}

export default NavBar;