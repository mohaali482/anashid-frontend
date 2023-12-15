import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../../redux/store";

const StyledFooter = styled.footer<{ playerOpened: boolean }>`
    background-color: ${(props) => props.theme.palette.primary.backgroundPrimary};
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    padding: 1.25rem;
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
    color: ${(props) => props.theme.palette.primary.textPrimary};

    @media (min-width: 768px) {
        text-align: center;
    }
`

const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme.palette.primary.textPrimary};
    list-style: none;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${(props) => props.theme.palette.primary.textPrimary};

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
    const { currentPlaying } = useSelector((state: RootState) => state.nasheeds)

    return (
        <StyledFooter playerOpened={currentPlaying !== null}>
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