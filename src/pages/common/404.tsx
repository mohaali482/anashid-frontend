import { Link } from "react-router-dom";
import StyledText from "../../components/styled/common/Text";
import Container from "../../components/styled/pages/error/Container";

const PageNotFound = () => {
    return (
        <Container>
            <StyledText style={{ fontSize: "4rem" }}>404</StyledText>
            <StyledText>Page Not Found</StyledText>
            <p>Hmmm. I don't think we can find what you're looking for, but feel free to go back to the <Link to="/">homepage</Link> and try again. You might as well try your luck, right? 😉</p>
        </Container>
    )
}

export default PageNotFound;