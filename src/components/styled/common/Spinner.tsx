import styled, { keyframes } from "styled-components";

const rippleAnimation = keyframes`
    0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledDiv = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin 0 auto;

    & div {
        position: absolute;
        border: 4px solid ${(props) => props.theme.palette.primary.main};
        opacity: 1;
        border-radius: 50%;
        animation: ${rippleAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    & div:nth-child(2) {
        animation-delay: -0.5s;
    }
`


const Spinner = () => {
    return (
        <Flex>
            <StyledDiv>
                <div></div>
                <div></div>
            </StyledDiv>
        </Flex>
    )
}

export default Spinner;
