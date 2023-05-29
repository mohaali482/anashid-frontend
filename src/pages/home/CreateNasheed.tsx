import { AiOutlineUserAdd } from "react-icons/ai";
import FormContainer from "../../components/styled/common/form/FormContainer";
import StyledIcon from "../../components/styled/common/form/StyledIcon";
import StyledText from "../../components/styled/common/Text";
import StyledForm from "../../components/styled/pages/Form";
import StyledInputDiv from "../../components/styled/common/form/InputDiv";
import StyledInput from "../../components/styled/common/form/Input";
import StyledButton from "../../components/styled/common/Button";
import StyledFileUpload from "../../components/styled/common/form/StyledFileUpload";
import { FiUpload } from "react-icons/fi";

const CreateNasheede = () => {
    return (
        <FormContainer>
            <StyledIcon>
                <AiOutlineUserAdd size={50} />
            </StyledIcon>
            <StyledText>New Nasheed</StyledText>
            <StyledForm>
                <StyledInputDiv>
                    <StyledInput required placeholder="Nasheed Title" type="text" name="name" id="name" />
                </StyledInputDiv>
                <StyledInputDiv>
                    <StyledFileUpload>
                        <FiUpload style={{ paddingRight: '0.5rem' }} />
                        Poster Upload
                        <input required type="file" accept="image/*" name="poster" id="poster" style={{ display: "none" }} />
                    </StyledFileUpload>
                </StyledInputDiv>
                <StyledInputDiv>
                    <StyledFileUpload>
                        <FiUpload style={{ paddingRight: '0.5rem' }} />
                        Audio Upload
                        <input required type="file" accept=".mp3,audio/mpeg" name="audio" id="audio" style={{ display: "none" }} />
                    </StyledFileUpload>
                </StyledInputDiv>
                <StyledInputDiv>
                    <StyledButton type="submit">Finish</StyledButton>
                </StyledInputDiv>
            </StyledForm>
        </FormContainer>
    )
}

export default CreateNasheede;