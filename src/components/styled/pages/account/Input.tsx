import styled from "styled-components";
import StyledInput from "../../common/form/Input";

const Input = styled(StyledInput) <{ error: boolean; }>`
    width: 100%;

    ${props => props.error ? `border: solid ${props.theme.danger} 1px;` : null}
`

export default Input;