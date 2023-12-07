import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export default StyledDiv;