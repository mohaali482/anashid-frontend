import StyledButton from "../../components/styled/pages/account/StyledButton";
import Container from "../../components/styled/pages/account/Container";
import FormContainer from "../../components/styled/common/form/FormContainer";
import StyledForm from "../../components/styled/pages/Form";
import InputDiv from "../../components/styled/pages/account/InputDiv";
import Input from "../../components/styled/pages/account/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { changePasswordRequest, resetErrors } from "../../redux/ducks/user-slice";
import { useEffect, useRef, useState } from "react";
import InputError from "../../components/styled/pages/account/InputError";
import toast from "react-hot-toast";
import Dialog from "../../components/styled/common/Dialog";
import Spinner from "../../components/styled/common/Spinner";

const ChangePassword = () => {
    const dispatch = useDispatch();
    const changePasswordFormRef = useRef<HTMLFormElement>(null);
    const { passwordChangeFormErrors, loading } = useSelector((state: RootState) => state.user);
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        return () => {
            dispatch(resetErrors())
        }
    }, [])

    useEffect(() => {
        if (!loading && submit) {
            if (Object.keys(passwordChangeFormErrors).length === 0) {
                toast.success("Successfully updated")
                changePasswordFormRef.current?.reset()
            } else {
                toast.error("Fix the errors")
            }
            setSubmit(false)
        }
    }, [passwordChangeFormErrors])

    const handleChangePassword = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const formData = new FormData(ev.currentTarget);
        setSubmit(true)
        dispatch(changePasswordRequest(formData));
    }

    return (
        <>
            {loading &&
                <Dialog onClose={null}>
                    <Spinner />
                </Dialog>
            }
            <Container>
                <FormContainer style={{ justifyContent: "flex-start", margin: "0", maxWidth: "75%", paddingRight: "5rem" }}>
                    <StyledForm style={{ alignItems: "flex-start", margin: "0" }} onSubmit={handleChangePassword} ref={changePasswordFormRef}>
                        <h2>Change Password</h2>
                        <InputDiv>
                            <Input required placeholder="Current Password" type="password" name="current_password" id="current_password" error={passwordChangeFormErrors?.current_password ? true : false} />
                            {passwordChangeFormErrors?.current_password &&
                                passwordChangeFormErrors.current_password.map(err => (
                                    <InputError>{err}</InputError>
                                ))
                            }
                        </InputDiv>
                        <InputDiv>
                            <Input required placeholder="Password" type="password" name="password" id="password" error={passwordChangeFormErrors?.password ? true : false} />
                            {passwordChangeFormErrors?.password &&
                                passwordChangeFormErrors.password.map(err => (
                                    <InputError>{err}</InputError>
                                ))
                            }
                        </InputDiv>
                        <InputDiv>
                            <Input required placeholder="Confirm Password" type="password" name="confirm_password" id="confirm_password" error={passwordChangeFormErrors?.confirm_password ? true : false} />
                            {passwordChangeFormErrors?.confirm_password &&
                                passwordChangeFormErrors.confirm_password.map(err => (
                                    <InputError>{err}</InputError>
                                ))
                            }
                        </InputDiv>
                        <InputDiv>
                            <StyledButton type="submit">Change Password</StyledButton>
                        </InputDiv>
                    </StyledForm>
                </FormContainer >
            </Container>
        </>
    )
}

export default ChangePassword