import styled from 'styled-components';
import { Nasheed } from '../../../types/store';
import NasheedTd from './NasheedTd';

const StyledTable = styled.table`
    width: 100%;
    font-size: 0.875rem;
    text-align: left;
    border-spacing: 0;
    color: ${(props) => props.theme.palette.primary.textPrimary};
`

const StyledThead = styled.thead`
    font-size: 0.75rem;
    color: ${(props) => props.theme.palette.primary.textPrimary};
    text-transform: uppercase;
    background-color: ${(props) => props.theme.palette.primary.backgroundPrimary};
`

const StyledTh = styled.th`
    padding: 0.75rem 0;
    padding-left: 1rem;
`

interface NasheedsTableProps {
  tableData: Nasheed[];
  dropdownLinks: {
    link: string;
    text: string;
  }[]
}

const NasheedsTable = (props: NasheedsTableProps) => {
  const tableHeaders = ['', '', 'Name', 'Created', 'Duration', 'Actions']

  return (
    <>
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
            <NasheedTd nasheed={nasheed} key={index} dropdownLinks={props.dropdownLinks} />
          ))}
        </tbody>
      </StyledTable>
    </>
  )
}


export default NasheedsTable;