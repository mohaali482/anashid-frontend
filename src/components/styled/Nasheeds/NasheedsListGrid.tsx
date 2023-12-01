import styled from "styled-components";
import { Nasheed } from "../../../types/nasheed-store";
import NasheedGrid from "./NasheedGrid";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

interface NasheedGridProps {
  data: Nasheed[];
}

const NasheedsListGrid = (props: NasheedGridProps) => {
  return (
    <Grid>
      {props.data.map((nasheed) => (
        <NasheedGrid key={nasheed.id} nasheed={nasheed} />
      ))
      }
    </Grid>
  )
}

export default NasheedsListGrid;