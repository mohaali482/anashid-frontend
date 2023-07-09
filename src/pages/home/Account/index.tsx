import StyledButton from "../../../components/styled/pages/account/StyledButton";
import Container from "../../../components/styled/pages/account/Container";
import UserImage from "../../../components/styled/pages/account/UserImage";
import StyledDangerButton from "../../../components/styled/pages/account/StyledDangerButton";
import StyledHr from "../../../components/styled/pages/account/StyledHr";
import FormContainer from "../../../components/styled/common/form/FormContainer";
import StyledForm from "../../../components/styled/pages/Form";
import InputDiv from "../../../components/styled/pages/account/InputDiv";
import Input from "../../../components/styled/pages/account/Input";

const Account = () => {
    return (
        <>
            <Container>
                <div style={{ padding: "1.5rem" }}>
                    <h1>Profile Picture</h1>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "120px" }}>
                        <UserImage src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="User Image" />
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", marginLeft: "1rem", height: "100%" }}>
                            <StyledButton>Update Profile Picture</StyledButton>
                            <StyledDangerButton>
                                Delete Profile Picture
                            </StyledDangerButton>
                        </div>
                    </div>
                </div>
                <StyledHr />

                <FormContainer style={{ justifyContent: "flex-start", margin: "0", }} >
                    <StyledForm style={{ alignItems: "flex-start", margin: "0" }}>
                        <h2>Account Details</h2>
                        <InputDiv>
                            <Input required placeholder="Username" type="text" name="username" id="username" />
                        </InputDiv>
                        <InputDiv>
                            <Input required placeholder="Firstname" type="text" name="firstname" id="firstname" />
                        </InputDiv>
                        <InputDiv>
                            <Input required placeholder="Lastname" type="text" name="lastname" id="lastname" />
                        </InputDiv>
                        <InputDiv>
                            <StyledButton type="submit">Update</StyledButton>
                        </InputDiv>
                    </StyledForm>
                </FormContainer >
                <StyledHr />
                <StyledDangerButton >Delete Account</StyledDangerButton>
            </Container >
        </>
    )
}

export default Account;