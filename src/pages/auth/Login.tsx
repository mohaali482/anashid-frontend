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
import { useDispatch, useSelector } from "react-redux"
import { loginRequest, resetErrors } from "../../redux/ducks/user-slice"
import { FormEvent, useEffect } from "react"
import { RootState } from "../../redux/store"
import { useNavigate } from "react-router-dom"
import Dialog from "../../components/styled/common/Dialog"
import Spinner from "../../components/styled/common/Spinner"
import toast from "react-hot-toast"
import logo from "../../assets/images/logo3.png"

const Login = () => {
    const dispatch = useDispatch()
    const { isLoggedIn, loading, error } = useSelector((state: RootState) => state.user)
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/")
        }
    }, [isLoggedIn])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        dispatch(loginRequest(formData))
    }

    const toastError = () => {
        if (error) {
            if (typeof (error) === "object") {
                return toast.error("Wrong username or password")
            }
            return toast.error(error)
        }
    }
    useEffect(() => {
        toastError()
    }, [error])

    useEffect(() => {
        return () => {
            dispatch(resetErrors())
        }
    }, [])

    return (
        <Container>
            <FormContainer>
                <StyledIcon >
                    <img src={logo} alt="logo" style={{ height: "150px" }} />
                </StyledIcon>
                {loading && <Dialog onClose={null}>
                    <Spinner />
                </Dialog>}
                <StyledForm onSubmit={handleSubmit} style={{ margin: "2rem 0" }}>
                    <StyledInputDiv>
                        <StyledInput required placeholder="Username" type="text" name="username" id="username" />
                    </StyledInputDiv>
                    <StyledInputDiv>
                        <StyledInput required placeholder="Password" type="password" name="password" id="password" />
                    </StyledInputDiv>
                    <StyledInputDiv style={{ marginTop: "2rem" }}>
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