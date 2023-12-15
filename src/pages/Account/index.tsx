import StyledButton from "../../components/styled/pages/account/StyledButton";
import { default as StyledButton2 } from "../../components/styled/common/Button"
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
import { FormEvent, useEffect, useRef, useState } from "react";
import Dialog from "../../components/styled/common/Dialog";
import Spinner from "../../components/styled/common/Spinner";
import InputError from "../../components/styled/pages/account/InputError";
import StyledFileUpload from "../../components/styled/common/form/StyledFileUpload";
import { FiUpload } from "react-icons/fi";
import StyledLink from "../../components/styled/pages/account/StyledLink";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Modal from "../../components/styled/common/Alert";
import StyledDiv from "../../components/styled/pages/account/Div";
import logo from "../../assets/images/logo.png";
import StyledDiv2 from "../../components/styled/pages/account/Div2";
import StyledDiv3 from "../../components/styled/pages/account/Div3";

const Account = () => {
    const dispatch = useDispatch();
    const formRef = useRef<HTMLFormElement>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const { user, updateFormErrors, deleteAccountErrors, loading } = useSelector((state: RootState) => state.user)
    const [profileSubmitted, setProfileSubmitted] = useState(false)
    const [profile, setProfile] = useState<File | null>()
    const [profilePreview, setProfilePreview] = useState<string>()

    useEffect(() => {
        return () => {
            dispatch(resetErrors())
        }
    }, [])

    useEffect(() => {
        if (profileSubmitted) {
            setProfilePreview(undefined)
        }
    }, [profileSubmitted])

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
        dispatch(updateUserRequest(formData));
        setProfileSubmitted(true)
        if (formRef.current) {
            formRef.current.reset()
        }
    }

    const handleDeleteProfilePicture = () => {
        dispatch(deleteUserImageRequest());
        setModalOpen2(false)
    }

    const handleDeleteAccount = (ev: FormEvent) => {
        ev.preventDefault()
        const formData = new FormData(ev.currentTarget as HTMLFormElement)
        dispatch(deleteUserRequest(formData));
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



    useEffect(() => {
        if (!profile) {
            setProfile(undefined)
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
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <h1>Delete Account</h1>
                <div style={{ padding: "1.5rem 1rem" }}>
                    <p>Are you sure you want to delete your account?</p>
                    <StyledForm style={{ margin: "0", width: "100%" }} onSubmit={handleDeleteAccount}>
                        <InputDiv>
                            <Input required placeholder="Username" type="text" name="username" id="username" error={deleteAccountErrors?.username ? true : false} />
                            {deleteAccountErrors?.username &&
                                deleteAccountErrors.username.map(err => (
                                    <InputError>{err}</InputError>
                                ))
                            }
                        </InputDiv>
                        <InputDiv>
                            <Input required placeholder="Password" type="password" name="password" id="password" error={deleteAccountErrors?.password ? true : false} />
                            {deleteAccountErrors?.password &&
                                deleteAccountErrors.password.map(err => (
                                    <InputError>{err}</InputError>
                                ))
                            }
                        </InputDiv>
                        <InputDiv>
                            <StyledButton2 reverse style={{ width: "100%" }} type="submit">Delete Account</StyledButton2>
                        </InputDiv>
                    </StyledForm>
                </div>
                <StyledButton style={{ padding: "0.5rem 2rem", width: "100%" }} onClick={() => setModalOpen(false)}>Cancel</StyledButton>
            </Modal>
            <Modal isOpen={modalOpen2} onClose={() => setModalOpen2(false)}>
                <h1>Delete Account Profile</h1>
                <div style={{ padding: "1.5rem 1rem" }}>
                    <p>Are you sure you want to delete your profile?</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <StyledButton2 reverse style={{ padding: "0.5rem 2rem" }} onClick={() => setModalOpen2(false)}>Cancel</StyledButton2>
                    <StyledButton style={{ padding: "0.5rem 2rem" }} onClick={handleDeleteProfilePicture}>Delete</StyledButton>
                </div>
            </Modal>
            {loading && <Dialog onClose={null}>
                <Spinner />
            </Dialog>}
            <Container style={{ paddingRight: "2rem", paddingLeft: "2rem", alignItems: "center" }}>
                <div style={{ padding: "1.5rem", width: "100%" }}>
                    <h1>Profile Picture</h1>
                    {updateFormErrors?.image &&
                        updateFormErrors.image.map((err, index) => (
                            <InputError key={index}>{err}</InputError>
                        ))
                    }
                    <StyledDiv>
                        <UserImage src={profile ? profilePreview : user?.image ? user.image : profile_default} alt={user?.first_name + " " + user?.last_name + " profile picture"} />
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", marginLeft: "1rem", height: "100%", width: "100%" }}>
                            <form onSubmit={handleUpdateProfilePicture} ref={formRef} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", width: "100%", marginBottom: "1rem" }}>
                                <StyledFileUpload style={{ display: "flex", alignItems: "center", height: "50px", padding: "0" }}>
                                    <FiUpload style={{ padding: "1rem", paddingRight: '0.5rem' }} />
                                    <span style={{ paddingRight: '1rem' }}>Change</span>
                                    <input type="file" accept="image/*" name="image" id="image" onChange={onSelectFile} style={{ display: "none" }} />
                                </StyledFileUpload>
                                <StyledButton style={{ width: "100%" }} type="submit">Save</StyledButton>
                            </form>
                            <StyledDangerButton onClick={() => setModalOpen2(true)} disabled={user?.image ? false : true}>
                                Delete Profile Picture
                            </StyledDangerButton>
                        </div>
                    </StyledDiv>
                </div>
                <StyledHr />
                <StyledDiv2 style={{ width: "100%" }}>
                    <FormContainer style={{ justifyContent: "flex-start", margin: "0", width: "100%" }}>
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
                                <StyledButton style={{ width: "100%" }} type="submit">Update</StyledButton>
                            </InputDiv>
                        </StyledForm>
                    </FormContainer>
                    <div style={{ width: "50%" }}>
                        <img src={logo} style={{ width: "100%", borderRadius: "10px" }} alt="I don't know what to put here. If you're reading this hello :)." />
                    </div>
                </StyledDiv2>
                <StyledHr />
                <StyledDiv3>
                    <div>
                        <Link to={"/accounts/profile/change-password"}>
                            <StyledLink>
                                Change Password
                            </StyledLink>
                        </Link>
                    </div>
                    <div>
                        <StyledDangerButton onClick={() => setModalOpen(true)}>Delete Account</StyledDangerButton>
                    </div>
                </StyledDiv3>
            </Container >
        </>
    )
}

export default Account;