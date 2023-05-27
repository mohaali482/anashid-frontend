import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledTag = styled(Link)`
    color: ${(props) => props.theme.palette.primary.main};
    text-decoration: none;   
`

export default StyledTag;