import Container from "../../components/styled/pages/auth/Login/Container"
import FormContainer from "../../components/styled/pages/auth/Login/FormContainer"
import StyledText from "../../components/styled/pages/auth/Login/TitleText"
import StyledInput from "../../components/styled/pages/auth/Login/Input"
import StyledButton from "../../components/styled/common/Button"
import StyledForm from "../../components/styled/pages/Form"
import StyledInputDiv from "../../components/styled/pages/auth/Login/InputDiv"
import { FaUserAlt } from "react-icons/fa"
import StyledIcon from "../../components/styled/pages/auth/Login/StyledIcon"
import StyledTag from "../../components/styled/pages/auth/Login/StyledAnchorTag"


const Login = () => {
    return (
        <Container>
            <FormContainer>
                <StyledIcon>
                    <FaUserAlt size={50} />
                </StyledIcon>
                <StyledText>Welcome</StyledText>
                <StyledForm>
                    <StyledInputDiv>
                        <StyledInput required placeholder="Username" type="text" name="username" id="username" />
                    </StyledInputDiv>
                    <StyledInputDiv>
                        <StyledInput required placeholder="Password" type="password" name="password" id="password" />
                    </StyledInputDiv>
                    <StyledInputDiv>
                        <StyledButton type="submit">Login</StyledButton>
                    </StyledInputDiv>
                </StyledForm>
                <StyledText style={{ fontSize: "1rem" }}>Don't have an account? <StyledTag to={'/auth/signup'}>Create account.</StyledTag></StyledText>
            </FormContainer>
        </Container>
    )
}

export default Login;