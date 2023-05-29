import Container from "../../components/styled/common/form/Container"
import FormContainer from "../../components/styled/common/form/FormContainer"
import StyledText from "../../components/styled/common/form/TitleText"
import StyledInput from "../../components/styled/common/form/Input"
import StyledButton from "../../components/styled/common/Button"
import StyledForm from "../../components/styled/pages/Form"
import StyledInputDiv from "../../components/styled/common/form/InputDiv"
import { FaUserAlt } from "react-icons/fa"
import StyledIcon from "../../components/styled/common/form/StyledIcon"
import StyledTag from "../../components/styled/common/form/StyledAnchorTag"


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
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <StyledText style={{ fontSize: "1rem" }}>Don't have an account? <StyledTag to={'/auth/signup'}>Create account.</StyledTag></StyledText>
                    <StyledText style={{ fontSize: "1rem" }}><StyledTag to={'/auth/forgot-password'}>Forgot password?</StyledTag></StyledText>
                </div>
            </FormContainer>
        </Container >
    )
}

export default Login;