import styled from "styled-components";

const Container = styled.div`
  padding: 0.5rem;
  margin-top: 4rem;
  height: calc(100% - 5rem);
  position: relative;

  @media (min-width: 1024px) {
    margin-left: 16rem;
  }
`

export default Container;