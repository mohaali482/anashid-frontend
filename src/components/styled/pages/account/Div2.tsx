import styled from "styled-components";

const StyledDiv2 = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media (max-width: 768px) {
        & :nth-child(2){
            display: none;
        }
    }
`

export default StyledDiv2