import StyledButton from "../../components/styled/pages/account/StyledButton";
import Container from "../../components/styled/pages/account/Container";
import UserImage from "../../components/styled/pages/account/UserImage";
import StyledDangerButton from "../../components/styled/pages/account/StyledDangerButton";
import StyledHr from "../../components/styled/pages/account/StyledHr";
import FormContainer from "../../components/styled/common/form/FormContainer";
import StyledForm from "../../components/styled/pages/Form";
import InputDiv from "../../components/styled/pages/account/InputDiv";
import Input from "../../components/styled/pages/account/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import profile_default from "../../assets/images/profile_default.svg";
import { deleteUserImageRequest, deleteUserRequest, resetErrors, updateUserRequest } from "../../redux/ducks/user-slice";
import { useEffect, useState } from "react";
import Dialog from "../../components/styled/common/Dialog";
import Spinner from "../../components/styled/common/Spinner";
import InputError from "../../components/styled/pages/account/InputError";
import StyledFileUpload from "../../components/styled/common/form/StyledFileUpload";
import { FiUpload } from "react-icons/fi";
import StyledLink from "../../components/styled/pages/account/StyledLink";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Account = () => {
    const dispatch = useDispatch();
    const { user, updateFormErrors, loading } = useSelector((state: RootState) => state.user)
    const [profileSubmitted, setProfileSubmitted] = useState(false)

    useEffect(() => {
        return () => {
            dispatch(resetErrors())
        }
    }, [])

    useEffect(() => {
        if (!loading && profileSubmitted) {
            if (Object.keys(updateFormErrors).length === 0) {
                toast.success("Successfully updated")
            } else {
                toast.error("Fix the errors")
            }
            setProfileSubmitted(false)
        }
    }, [updateFormErrors])

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const formData = new FormData(ev.currentTarget);
        setProfileSubmitted(true)
        dispatch(updateUserRequest(formData));
    }

    const handleDeleteProfilePicture = () => {
        dispatch(deleteUserImageRequest());
    }

    const handleDeleteAccount = () => {
        dispatch(deleteUserRequest());
    }

    const handleUpdateProfilePicture = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const formData = new FormData(ev.currentTarget)
        const image: File = formData.get("image") as File
        if (image.size === 0) {
            toast.error("Select an image to update")
            return
        }
        dispatch(updateUserRequest(formData));
    }


    const [profile, setProfile] = useState<File | null>()
    const [profilePreview, setProfilePreview] = useState<string>()

    useEffect(() => {
        if (!profile) {
            setProfilePreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(profile)
        setProfilePreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [profile])

    const onSelectFile = (e: React.ChangeEvent) => {
        if (!(e.target as HTMLInputElement).files || (e.target as HTMLInputElement).files?.length === 0) {
            setProfile(undefined)
            return
        }

        setProfile((e.target as HTMLInputElement).files![0])
    }
    return (
        <>
            {loading && <Dialog onClose={null}>
                <Spinner />
            </Dialog>}
            <Container>
                <div style={{ padding: "1.5rem", width: "100%" }}>
                    <h1>Profile Picture</h1>
                    {updateFormErrors?.image &&
                        updateFormErrors.image.map((err, index) => (
                            <InputError key={index}>{err}</InputError>
                        ))
                    }
                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", height: "120px" }}>
                        <UserImage src={profile ? profilePreview : user?.image ? user.image : profile_default} alt={user?.first_name + " " + user?.last_name + " profile picture"} />
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", marginLeft: "1rem", height: "100%", width: "100%" }}>
                            <form onSubmit={handleUpdateProfilePicture} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", width: "100%" }}>
                                <StyledFileUpload style={{ display: "flex", alignItems: "center", height: "50px", padding: "0" }}>
                                    <FiUpload style={{ padding: "1rem", paddingRight: '0.5rem' }} />
                                    <span>Profile Upload</span>
                                    <input type="file" accept="image/*" name="image" id="image" onChange={onSelectFile} style={{ display: "none" }} />
                                </StyledFileUpload>
                                <StyledButton style={{ width: "100%" }} type="submit">Update</StyledButton>
                            </form>
                            <StyledDangerButton onClick={handleDeleteProfilePicture}>
                                Delete Profile Picture
                            </StyledDangerButton>
                        </div>
                    </div>
                </div>
                <StyledHr />
                <FormContainer style={{ justifyContent: "flex-start", margin: "0", maxWidth: "75%", paddingRight: "5rem" }}>
                    <StyledForm style={{ alignItems: "flex-start", margin: "0" }} onSubmit={handleSubmit}>
                        <h2>Account Details</h2>
                        <InputDiv>
                            <Input required placeholder="Username" type="text" name="username" id="username" defaultValue={user?.username} error={updateFormErrors?.username ? true : false} />
                            {updateFormErrors?.username &&
                                updateFormErrors.username.map(err => (
                                    <InputError>{err}</InputError>
                                ))
                            }
                        </InputDiv>
                        <InputDiv>
                            <Input required placeholder="Email" type="email" name="email" id="email" defaultValue={user?.email ? user.email : ""} error={updateFormErrors?.email ? true : false} />
                            {updateFormErrors?.email &&
                                updateFormErrors.email.map(err => (
                                    <InputError>{err}</InputError>
                                ))
                            }
                        </InputDiv>
                        <InputDiv>
                            <Input required placeholder="Firstname" type="text" name="first_name" id="first_name" defaultValue={user?.first_name ? user.first_name : ""} error={false} />
                        </InputDiv>
                        <InputDiv>
                            <Input required placeholder="Lastname" type="text" name="last_name" id="last_name" defaultValue={user?.last_name ? user.last_name : ""} error={false} />
                        </InputDiv>
                        <InputDiv>
                            <StyledButton type="submit">Update</StyledButton>
                        </InputDiv>
                    </StyledForm>
                </FormContainer >
                <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginBottom: "2rem", marginTop: "2rem" }}>
                    <h2>Password</h2>
                    <Link to={"/accounts/profile/change-password"}>
                        <StyledLink>
                            Change Password
                        </StyledLink>
                    </Link>
                </div>
                <StyledHr />
                <StyledDangerButton onClick={handleDeleteAccount}>Delete Account</StyledDangerButton>
            </Container >
        </>
    )
}

export default Account;