import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-colums: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

const NasheedsListGrid = ({ children }: any) => {
    <Grid>
        {children}
    </Grid>
}

export default NasheedsListGrid;