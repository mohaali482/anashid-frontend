import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../../redux/store";
import { FaLock } from "react-icons/fa";

const StyledAside = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 40;
    width: 16rem;
    height: 100vh;
    background-color: ${(props) => props.theme.palette.primary.backgroundPrimary};
    color: ${(props) => props.theme.palette.primary.textPrimary};
    overflow-x: hidden;
    overflow-y: auto;
    transition: width 0.3s ease-in-out;

    @media (max-width: 1024px) {
        width: 0;
    };
`;


const StyledAsideContent = styled.div`
    height: fit-content;
    padding: 1rem 0.75rem;
    overflow-y: auto;
    background-color: ${(props) => props.theme.palette.primary.backgroundPrimary};
`

const StyledAsideHeader = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 700;
    margin-left: 1.25rem;
    margin-bottom: 1.25rem;
    margin-top: 1.25rem;
`

const StyledAsideUl = styled.ul`
    font-weight: 500;
    list-style: none;
    padding: 0;
    margin: 0;
`

const StyledLink = styled(NavLink)`
    display: flex;
    align-items: center;
    padding: .75rem;
    color: ${(props) => props.theme.palette.primary.textPrimary};
    text-decoration: none;
    border-radius: 0.5rem;
    width: 100%;

    &.active{
        background-color: ${(props) => props.theme.main};
        color: ${(props) => props.theme.light};
        svg{
            color: ${(props) => props.theme.light}
        }
    }

    svg{
        color: ${(props) => props.theme.main};
        padding-right: 0.5rem;
    }
`

const StyledLi = styled.li`
    display: flex;
    align-items: center;
    color:  ${(props) => props.theme.main};
    padding: 0.5rem 0;
    border-radius: ${(props) => props.theme.borderRadius};
`

const SidebarOverlay = styled.div`

    position: absolute;
    top: 0;
    left: ;
    z-index: 30;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.palette.primary.backgroundSecondary};
    opacity: 0.5;
    transition: all 0.3s ease-in-out;
`

const Sidebar = (props: { reference: React.RefObject<HTMLDivElement>, open: boolean, links: { title: string, link: string, protect: boolean, icon: JSX.Element, codename?: string }[] }) => {
    const { isLoggedIn, user } = useSelector((state: RootState) => state.user)

    return (
        <>
            {props.open ? <SidebarOverlay /> : null}
            <StyledAside ref={props.reference} style={props.open ? { width: '16rem' } : {}}>
                <StyledAsideHeader>
                    Anashid
                </StyledAsideHeader>
                <StyledAsideContent>
                    <StyledAsideUl>
                        {props.links.map((link) => (
                            (link.protect && isLoggedIn && (link.codename && user ? user.permissions.filter(p => p.codename === link.codename).length > 0 : true) || !link.protect) &&
                            <StyledLi key={link.title}>
                                <StyledLink to={link.link}>
                                    {link.icon}
                                    {link.title}
                                </StyledLink>
                            </StyledLi>
                        ))}

                        {!isLoggedIn &&
                            <StyledLi>
                                <StyledLink to={'/auth/login'}>
                                    <FaLock />
                                    Login
                                </StyledLink>
                            </StyledLi>
                        }
                    </StyledAsideUl>
                </StyledAsideContent >
            </StyledAside >
        </>
    )
}


export default Sidebar;
