import { AiFillFileAdd } from "react-icons/ai";
import FormContainer from "../../../components/styled/common/form/FormContainer";
import StyledIcon from "../../../components/styled/common/form/StyledIcon";
import StyledText from "../../../components/styled/common/Text";
import StyledForm from "../../../components/styled/pages/Form";
import StyledInputDiv from "../../../components/styled/common/form/InputDiv";
import StyledInput from "../../../components/styled/common/form/Input";
import StyledButton from "../../../components/styled/common/Button";
import StyledFileUpload from "../../../components/styled/common/form/StyledFileUpload";
import { FiUpload } from "react-icons/fi";
import React, { useEffect, useRef, useState } from "react";
import Image from "../../../components/styled/common/form/Image";
import { StyledAudioPlayer } from "../../../components/styled/Nasheeds/AudioPlayer";
import StyledTextArea from "../../../components/styled/common/form/StyledTextArea";
import { useDispatch, useSelector } from "react-redux";
import { addNasheed, resetErrors } from "../../../redux/ducks/nasheedSlice";
import { RootState } from "../../../redux/store";
import InputError from "../../../components/styled/pages/account/InputError";
import toast from "react-hot-toast";


const NasheedForm = () => {
    const dispatch = useDispatch()
    const [poster, setPoster] = useState<File | null>(null)
    const [posterPreview, setPosterPreview] = useState<string>()

    const audioRef = useRef<HTMLAudioElement>(null)
    const [audioFile, setAudioFile] = useState<File | null>(null)
    const [audioFilePreview, setAudioFilePreview] = useState<string>()

    useEffect(() => {
        if (poster === null) {
            setPosterPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(poster)
        setPosterPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [poster])

    useEffect(() => {
        if (audioFile === null) {
            if (audioRef.current)
                audioRef.current.src = ""
            setAudioFilePreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(audioFile)
        setAudioFilePreview(objectUrl)
        if (audioRef.current)
            audioRef.current.src = objectUrl
        audioRef.current?.load()

        return () => URL.revokeObjectURL(objectUrl)
    }, [audioFile])

    const onSelectFile = (e: React.ChangeEvent) => {
        if (!(e.target as HTMLInputElement).files || (e.target as HTMLInputElement).files?.length === 0) {
            setPoster(null)
            return
        }

        setPoster((e.target as HTMLInputElement).files![0])
    }

    const onSelectAudioFile = (e: React.ChangeEvent) => {
        if (!(e.target as HTMLInputElement).files || (e.target as HTMLInputElement).files?.length === 0) {
            setAudioFile(null)
            return
        }

        setAudioFile((e.target as HTMLInputElement).files![0])
    }


    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        dispatch(addNasheed(formData))
        setSubmit(true)
    }

    const { formErrors, loading } = useSelector((state: RootState) => state.nasheeds)
    const [submit, setSubmit] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if (submit && !loading) {
            if (Object.keys(formErrors).length === 0) {
                formRef.current?.reset()
                setPoster(null)
                setAudioFile(null)
            } else {
                toast.error("Fix the errors")
            }
            setSubmit(false)
        }
    }, [formErrors])


    return (
        <FormContainer onSubmit={onSubmit}>
            <StyledIcon>
                <AiFillFileAdd size={50} />
            </StyledIcon>
            <StyledText>New Nasheed</StyledText>
            <StyledForm onSubmit={onSubmit} ref={formRef}>
                <StyledInputDiv>
                    <StyledFileUpload style={{
                        width: "200px",
                        height: "200px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        {poster ?
                            <Image src={posterPreview} /> :
                            (
                                <>
                                    <FiUpload style={{ paddingRight: '0.5rem' }} />
                                    Poster Upload
                                </>
                            )
                        }
                        <input type="file" accept="image/*" name="poster" id="poster" onChange={onSelectFile} style={{ display: "none" }} />
                    </StyledFileUpload>
                    {formErrors.poster &&
                        formErrors.poster.map(err => (
                            <InputError>{err}</InputError>
                        ))
                    }
                </StyledInputDiv>
                <StyledInputDiv>
                    <StyledInput required placeholder="Nasheed Title" type="text" name="name" id="name" />
                    {formErrors.name &&
                        formErrors.name.map(err => (
                            <InputError>{err}</InputError>
                        ))
                    }
                </StyledInputDiv>
                <StyledInputDiv>
                    <StyledTextArea required placeholder="Nasheed Description" name="description" id="description" rows={10}>
                    </StyledTextArea>
                </StyledInputDiv>
                <StyledInputDiv>
                    <StyledAudioPlayer ref={audioRef} controls style={{ padding: "0", width: "70%" }}>
                        <source type="audio/mpeg" />
                    </StyledAudioPlayer>
                </StyledInputDiv>
                <StyledInputDiv>
                    <StyledFileUpload>
                        <FiUpload style={{ paddingRight: '0.5rem' }} />
                        {audioFile ? "Change Audio" : "Audio Upload"}
                        <input type="file" accept=".mp3,audio/mpeg" name="audio" id="audio" onChange={onSelectAudioFile} style={{ display: "none" }} />
                    </StyledFileUpload>
                    {formErrors.audio &&
                        formErrors.audio.map(err => (
                            <InputError>{err}</InputError>
                        ))
                    }
                </StyledInputDiv>
                <StyledInputDiv>
                    <StyledButton type="submit">Finish</StyledButton>
                </StyledInputDiv>
            </StyledForm>
        </FormContainer >
    )
}

export default NasheedForm;