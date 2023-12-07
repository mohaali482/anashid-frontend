import Container from "../../components/styled/common/form/Container"
import FormContainer from "../../components/styled/common/form/FormContainer"
import StyledText from "../../components/styled/common/form/TitleText"
import StyledInput from "../../components/styled/common/form/Input"
import StyledButton from "../../components/styled/common/Button"
import StyledForm from "../../components/styled/pages/Form"
import StyledInputDiv from "../../components/styled/common/form/InputDiv"
import { BsFillKeyFill } from "react-icons/bs"
import StyledIcon from "../../components/styled/common/form/StyledIcon"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import InputError from "../../components/styled/pages/account/InputError"
import InputDiv from "../../components/styled/pages/account/InputDiv"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import toast from "react-hot-toast"
import { resetErrors, resetPasswordRequest } from "../../redux/ducks/user-slice"


const ResetPassword = () => {
    const dispatch = useDispatch();
    const { userId, token } = useParams();
    if (userId === undefined || token === undefined) {
        return <Navigate to={"/auth/login"} />
    }
    const resetPasswordFormRef = useRef<HTMLFormElement>(null);
    const { resetFormErrors, loading } = useSelector((state: RootState) => state.user);
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        return () => {
            dispatch(resetErrors())
        }
    }, [])

    const navigate = useNavigate()

    useEffect(() => {
        if (!loading && submit) {
            if (Object.keys(resetFormErrors).length === 0) {
                toast.success("Successfully changed")
                resetPasswordFormRef.current?.reset()
                navigate('/auth/login')
            } else {
                if (resetFormErrors.detail) {
                    toast.error(resetFormErrors.detail)
                } else {
                    toast.error("Fix the errors")
                }
            }
            setSubmit(false)
        }
    }, [resetFormErrors])

    const handleChangePassword = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const formData = new FormData(ev.currentTarget);
        setSubmit(true)
        dispatch(resetPasswordRequest({ formData, userId, token }));
    }

    return (
        <Container>
            <FormContainer>
                <StyledIcon>
                    <BsFillKeyFill size={50} />
                </StyledIcon>
                <StyledText>Reset Password</StyledText>
                <StyledForm onSubmit={handleChangePassword} ref={resetPasswordFormRef}>
                    <InputDiv style={{ alignItems: "center" }}>
                        <StyledInput required placeholder="New Password" type="password" name="new_password" id="new_password" error={resetFormErrors?.new_password ? true : false} />
                        {resetFormErrors?.new_password &&
                            resetFormErrors.new_password.map(err => (
                                <InputError>{err}</InputError>
                            ))
                        }
                    </InputDiv>
                    <InputDiv style={{ alignItems: "center" }}>
                        <StyledInput required placeholder="Confirm Password" type="password" name="confirm_password" id="confirm_password" error={resetFormErrors?.confirm_password ? true : false} />
                        {resetFormErrors?.confirm_password &&
                            resetFormErrors.confirm_password.map(err => (
                                <InputError>{err}</InputError>
                            ))
                        }
                    </InputDiv>
                    <StyledInputDiv>
                        <StyledButton type="submit">Submit</StyledButton>
                    </StyledInputDiv>
                </StyledForm>
            </FormContainer>
        </Container >
    )
}

export default ResetPassword;