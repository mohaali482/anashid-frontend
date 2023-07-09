import { AiFillFileAdd } from "react-icons/ai";
import FormContainer from "../../components/styled/common/form/FormContainer";
import StyledIcon from "../../components/styled/common/form/StyledIcon";
import StyledText from "../../components/styled/common/Text";
import StyledForm from "../../components/styled/pages/Form";
import StyledInputDiv from "../../components/styled/common/form/InputDiv";
import StyledInput from "../../components/styled/common/form/Input";
import StyledButton from "../../components/styled/common/Button";
import StyledFileUpload from "../../components/styled/common/form/StyledFileUpload";
import { FiUpload } from "react-icons/fi";
import React, { useEffect, useRef, useState } from "react";
import Image from "../../components/styled/common/form/Image";
import { StyledAudioPlayer } from "../../components/styled/Nasheeds/AudioPlayer";

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

    return (
        <FormContainer>
            <StyledIcon>
                <AiFillFileAdd size={50} />
            </StyledIcon>
            <StyledText>New Nasheed</StyledText>
            <StyledForm>
                <StyledInputDiv>
                    <StyledInput required placeholder="Nasheed Title" type="text" name="name" id="name" />
                </StyledInputDiv>
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
                        <input required type="file" accept="image/*" name="poster" id="poster" onChange={onSelectFile} style={{ display: "none" }} />
                    </StyledFileUpload>
                </StyledInputDiv>
                <StyledInputDiv>
                    <StyledAudioPlayer ref={audioRef} controls style={{ padding: "0" }}>
                        <source src={audioFilePreview} type="audio/mpeg" />
                    </StyledAudioPlayer>
                </StyledInputDiv>
                <StyledInputDiv>
                    <StyledFileUpload>
                        <FiUpload style={{ paddingRight: '0.5rem' }} />
                        Audio Upload
                        <input required type="file" accept=".mp3,audio/mpeg" name="audio" id="audio" onChange={onSelectAudioFile} style={{ display: "none" }} />
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