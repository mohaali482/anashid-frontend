import styled from "styled-components";

const StyledDiv3 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`

export default StyledDiv3