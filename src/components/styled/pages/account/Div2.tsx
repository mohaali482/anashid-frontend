import styled from "styled-components";

const StyledDiv2 = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media (max-width: 768px) {
        & > div{
            display: none;
        }
        & :first-child{
            display: block;
        }
        justify-content: center;
    }
`

export default StyledDiv2