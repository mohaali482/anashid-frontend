import styled from "styled-components";

const Container = styled.div`
  padding: 0.5rem;
  padding-top: 5rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    margin-left: 16rem;
  }
`

export default Container;