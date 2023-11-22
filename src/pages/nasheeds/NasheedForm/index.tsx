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


const NasheedForm = () => {
    const [poster, setPoster] = useState<File | null>()
    const [posterPreview, setPosterPreview] = useState<string>()

    const audioRef = useRef<HTMLAudioElement>(null)
    const [audioFile, setAudioFile] = useState<File | null>()
    const [audioFilePreview, setAudioFilePreview] = useState<string>()

    useEffect(() => {
        if (!poster) {
            setPosterPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(poster)
        setPosterPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [poster])

    useEffect(() => {
        if (!audioFile) {
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
            setPoster(undefined)
            return
        }

        setPoster((e.target as HTMLInputElement).files![0])
    }

    const onSelectAudioFile = (e: React.ChangeEvent) => {
        if (!(e.target as HTMLInputElement).files || (e.target as HTMLInputElement).files?.length === 0) {
            setAudioFile(undefined)
            return
        }

        setAudioFile((e.target as HTMLInputElement).files![0])
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const data = new FormData(e.target as HTMLFormElement)
        console.log([...data.entries()])
    }

    return (
        <FormContainer onSubmit={onSubmit}>
            <StyledIcon>
                <AiFillFileAdd size={50} />
            </StyledIcon>
            <StyledText>New Nasheed</StyledText>
            <StyledForm>
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
                </StyledInputDiv>
                <StyledInputDiv>
                    <StyledInput required placeholder="Nasheed Title" type="text" name="name" id="name" />
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
                </StyledInputDiv>
                <StyledInputDiv>
                    <StyledButton type="submit">Finish</StyledButton>
                </StyledInputDiv>
            </StyledForm>
        </FormContainer >
    )
}

export default NasheedForm;