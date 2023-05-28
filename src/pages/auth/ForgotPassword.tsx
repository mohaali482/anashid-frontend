import Container from "../../components/styled/pages/auth/Login/Container"
import FormContainer from "../../components/styled/pages/auth/Login/FormContainer"
import StyledText from "../../components/styled/pages/auth/Login/TitleText"
import StyledInput from "../../components/styled/pages/auth/Login/Input"
import StyledButton from "../../components/styled/common/Button"
import StyledForm from "../../components/styled/pages/Form"
import StyledInputDiv from "../../components/styled/pages/auth/Login/InputDiv"
import { BsFillKeyFill } from "react-icons/bs"
import StyledIcon from "../../components/styled/pages/auth/Login/StyledIcon"


const ForgotPassword = () => {
    return (
        <Container>
            <FormContainer>
                <StyledIcon>
                    <BsFillKeyFill size={50} />
                </StyledIcon>
                <StyledText>Forgot Password</StyledText>
                <StyledForm>
                    <StyledInputDiv>
                        <StyledInput required placeholder="Email" type="email" name="email" id="email" />
                    </StyledInputDiv>
                    <StyledInputDiv>
                        <StyledButton type="submit">Submit</StyledButton>
                    </StyledInputDiv>
                </StyledForm>
            </FormContainer>
        </Container >
    )
}

export default ForgotPassword;