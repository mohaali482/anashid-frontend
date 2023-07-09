import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledAside = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 40;
    width: 16rem;
    height: 100vh;
    background-color: ${(props) => props.theme.palette.primary.lightGray};
    color: ${(props) => props.theme.palette.primary.dark};
    overflow-x: hidden;
    overflow-y: auto;
    transition: all 0.3s ease-in-out;

    @media (max-width: 1024px) {
        width: 0;
    };

    @media (prefers-color-scheme: dark) {
        background-color: ${(props) => props.theme.palette.primary.dark};
        color: ${(props) => props.theme.palette.primary.lightGray};
    };

`;


const StyledAsideContent = styled.div`
    height: fit-content;
    padding: 1rem 0.75rem;
    overflow-y: auto;
    background-color: ${(props) => props.theme.palette.primary.light};

    @media (prefers-color-scheme: dark) {
        background-color: ${(props) => props.theme.palette.primary.dark};
    }
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

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    color: ${(props) => props.theme.palette.primary.dark};
    text-decoration: none;
    border-radius: 0.5rem;

    @media(prefers-color-scheme: dark) {
        color: ${(props) => props.theme.palette.primary.light};
    }
`

const StyledLi = styled.li`
    display: flex;
    align-items: center;
    color:  ${(props) => props.theme.palette.primary.main};
    padding: 0.5rem;
`

const SidebarOverlay = styled.div`

    position: absolute;
    top: 0;
    left: ;
    z-index: 30;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.palette.primary.light};
    opacity: 0.5;
    transition: all 0.3s ease-in-out;

    

    @media (prefers-color-scheme: dark) {
        background-color: ${(props) => props.theme.palette.primary.dark};
    }
    
`

const Sidebar = (props: { reference: any, open: boolean, links: { title: string, link: string, icon: JSX.Element }[] }) => {

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
                            <StyledLi key={link.title}>
                                {link.icon}
                                <StyledLink to={link.link}>{link.title}</StyledLink>
                            </StyledLi>
                        ))}
                    </StyledAsideUl>
                </StyledAsideContent >
            </StyledAside >
        </>
    )
}


export default Sidebar;
