import Container from "../../components/styled/common/form/Container"
import FormContainer from "../../components/styled/common/form/FormContainer"
import StyledText from "../../components/styled/common/form/TitleText"
import StyledInput from "../../components/styled/common/form/Input"
import StyledButton from "../../components/styled/common/Button"
import StyledForm from "../../components/styled/pages/Form"
import StyledInputDiv from "../../components/styled/common/form/InputDiv"
import { AiOutlineUserAdd } from "react-icons/ai"
import StyledIcon from "../../components/styled/common/form/StyledIcon"
import StyledTag from "../../components/styled/common/form/StyledAnchorTag"


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
                <StyledText style={{ fontSize: "1rem" }}>Already have an account? <StyledTag to={'/auth/login'}>Login.</StyledTag></StyledText>
            </FormContainer>
        </Container>
    )
}

export default Signup;