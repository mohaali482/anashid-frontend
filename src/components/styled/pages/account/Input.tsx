import styled from "styled-components";
import StyledInput from "../../common/form/Input";

const Input = styled(StyledInput) <{ error: boolean; }>`
    height: 45px;
    width: 100%;
    box-sizing: border-box;

    ${props => props.error ? `border: solid ${props.theme.danger} 1px;` : null}
`

export default Input;