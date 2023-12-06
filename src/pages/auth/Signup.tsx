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
import { FormEvent, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { resetErrors, signupUser } from "../../redux/ducks/user-slice"
import { RootState } from "../../redux/store"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import InputError from "../../components/styled/pages/account/InputError"
import Dialog from "../../components/styled/common/Dialog"
import Spinner from "../../components/styled/common/Spinner"


const Signup = () => {
    const dispatch = useDispatch();
    const signupFormRef = useRef<HTMLFormElement>(null);
    const { signupFormErrors, loading } = useSelector((state: RootState) => state.user);
    const [submit, setSubmit] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        return () => {
            dispatch(resetErrors())
        }
    }, [])


    useEffect(() => {
        if (!loading && submit) {
            if (Object.keys(signupFormErrors).length === 0) {
                toast.success("Signed up successfully")
                signupFormRef.current?.reset()
                navigate('/auth/login')
            } else {
                toast.error("Fix the errors")
            }
            setSubmit(false)
        }
    }, [signupFormErrors])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        setSubmit(true);
        dispatch(signupUser(formData))
    }

    return (
        <Container>
            {loading &&
                <Dialog onClose={null}>
                    <Spinner />
                </Dialog>
            }
            <FormContainer>
                <StyledIcon>
                    <AiOutlineUserAdd size={50} />
                </StyledIcon>
                <StyledText>Signup</StyledText>
                <StyledForm ref={signupFormRef} style={{ width: "max-content" }} onSubmit={handleSubmit}>
                    <StyledInputDiv style={{ flexDirection: "row" }}>
                        <label htmlFor="image">Image: </label>
                        <StyledInput required placeholder="Image" type="file" accept="image/png" name="image" id="image" />
                        {signupFormErrors?.image &&
                            signupFormErrors.image.map(err => (
                                <InputError>{err}</InputError>
                            ))
                        }
                    </StyledInputDiv>
                    <StyledInputDiv>
                        <StyledInput required placeholder="Username" type="text" name="username" id="username" />
                        {signupFormErrors?.username &&
                            signupFormErrors.username.map(err => (
                                <InputError>{err}</InputError>
                            ))
                        }
                    </StyledInputDiv>
                    <StyledInputDiv>
                        <StyledInput required placeholder="Firstname" type="text" name="first_name" id="first_name" />
                        {signupFormErrors?.first_name &&
                            signupFormErrors.first_name.map(err => (
                                <InputError>{err}</InputError>
                            ))
                        }
                    </StyledInputDiv>
                    <StyledInputDiv>
                        <StyledInput required placeholder="Lastname" type="text" name="last_name" id="last_name" />
                        {signupFormErrors?.last_name &&
                            signupFormErrors.last_name.map(err => (
                                <InputError>{err}</InputError>
                            ))
                        }
                    </StyledInputDiv>
                    <StyledInputDiv>
                        <StyledInput required placeholder="Email" type="email" name="email" id="email" />
                        {signupFormErrors?.email &&
                            signupFormErrors.email.map(err => (
                                <InputError>{err}</InputError>
                            ))
                        }
                    </StyledInputDiv>
                    <StyledInputDiv>
                        <StyledInput required placeholder="Password" type="password" name="password" id="password" />
                        {signupFormErrors?.password &&
                            signupFormErrors.password.map(err => (
                                <InputError>{err}</InputError>
                            ))
                        }
                    </StyledInputDiv>
                    <StyledInputDiv>
                        <StyledInput required placeholder="Confirm Password" type="password" name="confirm_password" id="confirm_password" />
                        {signupFormErrors?.confirm_password &&
                            signupFormErrors.confirm_password.map(err => (
                                <InputError>{err}</InputError>
                            ))
                        }
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