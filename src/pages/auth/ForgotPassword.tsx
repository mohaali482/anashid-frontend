import Container from "../../components/styled/common/form/Container"
import FormContainer from "../../components/styled/common/form/FormContainer"
import StyledText from "../../components/styled/common/form/TitleText"
import StyledInput from "../../components/styled/common/form/Input"
import StyledButton from "../../components/styled/common/Button"
import StyledForm from "../../components/styled/pages/Form"
import StyledInputDiv from "../../components/styled/common/form/InputDiv"
import { BsFillKeyFill } from "react-icons/bs"
import StyledIcon from "../../components/styled/common/form/StyledIcon"
import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { forgotPasswordRequest } from "../../redux/ducks/user-slice"


const ForgotPassword = () => {
    const dispatch = useDispatch();
    const [submit, setSubmit] = useState(false);

    const handleSumbit = (ev: FormEvent) => {
        ev.preventDefault();
        const formData = new FormData(ev.currentTarget as HTMLFormElement)
        setSubmit(true)
        dispatch(forgotPasswordRequest(formData))
    }

    return (
        <Container>
            <FormContainer>
                <StyledIcon>
                    <BsFillKeyFill size={50} />
                </StyledIcon>
                <StyledText>Forgot Password</StyledText>
                {!submit ?
                    <StyledForm onSubmit={handleSumbit}>
                        <StyledInputDiv>
                            <StyledInput required placeholder="Email" type="email" name="email" id="email" />
                        </StyledInputDiv>
                        <StyledInputDiv>
                            <StyledButton type="submit">Submit</StyledButton>
                        </StyledInputDiv>
                    </StyledForm>
                    : <p>Successfully Submitted. Please check your email</p>
                }
            </FormContainer>
        </Container >
    )
}

export default ForgotPassword;