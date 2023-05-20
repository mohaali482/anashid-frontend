import styled from "styled-components";
import { Nasheed } from "../../../types/store";
import NasheedsTable from "./NasheedsTable";
import NasheedsListGrid from "./NasheedsListGrid";

const TableContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`

const GridContainer = styled.div`
    display: block;

    @media (min-width: 1024px) {
        display: none;
    }
`


interface NasheedsListProps {
    data: Nasheed[];
}

const NasheedsList = (props: NasheedsListProps) => {
    return (
        <>
            <TableContainer>
                <NasheedsTable tableData={props.data} />
            </TableContainer>
            <GridContainer>
                <NasheedsListGrid data={props.data} />
            </GridContainer>
        </>
    )
}

export default NasheedsList