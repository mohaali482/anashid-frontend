import styled from 'styled-components';
import { Nasheed } from '../../types/store';
import NasheedTd from './NasheedTd';

const Container = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`

const StyledTable = styled.table`
    width: 100%;
    font-size: 0.875rem;
    text-align: left;
    border-spacing: 0;
    color: ${(props) => props.theme.palette.primary.darkGray};

    @media (prefers-color-scheme: dark) {
        color: ${(props) => props.theme.palette.primary.lightGray};
    }
`

const StyledThead = styled.thead`
    font-size: 0.75rem;
    color: ${(props) => props.theme.palette.primary.darkGray};
    text-transform: uppercase;
    background-color: ${(props) => props.theme.palette.primary.light};

    @media (prefers-color-scheme: dark) {
        color: ${(props) => props.theme.palette.primary.lightGray};
        background-color: ${(props) => props.theme.palette.primary.dark};
    }
`

const StyledTh = styled.th`
    padding: 0.75rem 0;
    padding-left: 1rem;
`

interface NasheedsTableProps {
  tableData: Nasheed[];
}

const NasheedsTable = (props: NasheedsTableProps) => {
  const tableHeaders = ['', '', 'Name', 'Created', 'Owner', 'Duration', 'Actions']

  return (
    <Container>
      <StyledTable>
        <StyledThead>
          <tr>
            {tableHeaders.map((tableHead, index) => (
              <StyledTh key={index}>{tableHead}</StyledTh>
            ))}
          </tr>
        </StyledThead>

        <tbody>
          {props.tableData.map((nasheed, index) => (
            <NasheedTd nasheed={nasheed} key={index} />
          ))}
        </tbody>
      </StyledTable>
    </Container>
  )
}


export default NasheedsTable;