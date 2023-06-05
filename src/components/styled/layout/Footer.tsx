import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: ${(props) => props.theme.palette.primary.lightGray};
    margin-top: 2rem;
    margin-bottom: 0;
    border-radius: 0.5rem;
    padding: 1.25rem;


    @media (prefers-color-scheme: dark) {
        background-color: ${(props) => props.theme.palette.primary.dark};
    }
`

const Container = styled.div`
    width: 100%;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

const StyledCopyright = styled.span`
    font-size: 0.875rem;
    color: ${(props) => props.theme.palette.primary.darkGray};

    @media (prefers-color-scheme: dark) {
        color: ${(props) => props.theme.palette.primary.lightGray};
    }

    @media (min-width: 768px) {
        text-align: center;
    }
`

const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme.palette.primary.darkGray};
    list-style: none;

    @media (prefers-color-scheme: dark) {
        color: ${(props) => props.theme.palette.primary.lightGray};
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;

    color: ${(props) => props.theme.palette.primary.darkGray};

    @media (prefers-color-scheme: dark) {
        color: ${(props) => props.theme.palette.primary.lightGray};
    }

    &:hover {
        text-decoration: underline;
    }
`

const StyledLi = styled.li`
    margin-right: 2rem;

    &:last-child{
        margin-right: 0;
    }

`

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <StyledCopyright>© 2023 <StyledLink to="https://github.com/mohaali482">Mohammed Ali</StyledLink>. All Rights Reserved.</StyledCopyright>
                <StyledUl>
                    <StyledLi>
                        <StyledLink to="https://github.com/mohaali482">Github</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="https://www.linkedin.com/in/mohammed-ali-0170b2203/">Linkedin</StyledLink>
                    </StyledLi>
                </StyledUl>
            </Container>
        </StyledFooter>
    )
}

export default Footer;