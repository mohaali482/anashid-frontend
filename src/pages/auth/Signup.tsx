import Container from "../../components/styled/pages/auth/Login/Container"
import FormContainer from "../../components/styled/pages/auth/Login/FormContainer"
import StyledText from "../../components/styled/pages/auth/Login/TitleText"
import StyledInput from "../../components/styled/pages/auth/Login/Input"
import StyledButton from "../../components/styled/common/Button"
import StyledForm from "../../components/styled/pages/Form"
import StyledInputDiv from "../../components/styled/pages/auth/Login/InputDiv"
import { AiOutlineUserAdd } from "react-icons/ai"
import StyledIcon from "../../components/styled/pages/auth/Login/StyledIcon"


const Signup = () => {
    return (
        <Container>
            <FormContainer>
                <StyledIcon>
                    <AiOutlineUserAdd size={50} />
                </StyledIcon>
                <StyledText>Signup</StyledText>
                <StyledForm>
                    <StyledInputDiv>
                        <StyledInput required placeholder="Username" type="text" name="username" id="username" />
                    </StyledInputDiv>
                    <StyledInputDiv>
                        <StyledInput required placeholder="Firstname" type="text" name="firstname" id="firstname" />
                    </StyledInputDiv>
                    <StyledInputDiv>
                        <StyledInput required placeholder="Lastname" type="text" name="lastname" id="lastname" />
                    </StyledInputDiv>
                    <StyledInputDiv>
                        <StyledInput required placeholder="Password" type="password" name="password" id="password" />
                    </StyledInputDiv>
                    <StyledInputDiv>
                        <StyledInput required placeholder="Confirm Password" type="password" name="confirm_password" id="confirm_password" />
                    </StyledInputDiv>
                    <StyledInputDiv>
                        <StyledButton type="submit">Signup</StyledButton>
                    </StyledInputDiv>
                </StyledForm>
            </FormContainer>
        </Container>
    )
}

export default Signup;