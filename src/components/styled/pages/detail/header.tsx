import styled from 'styled-components';

const FlexDiv = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 100%;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;

        & > * {
            margin: 0;
        }
    }
`

export default FlexDiv;