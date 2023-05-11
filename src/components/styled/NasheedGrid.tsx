import styled from 'styled-components';

const NasheedGridDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Nasheed = styled.div`
    max-width: 14rem;
    background-color:  ${(props) => props.theme.palette.primary.main};
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.theme.boxShadow};

    @media (prefers-color-scheme: dark) {
        background-color: ${(props) => props.theme.palette.primary.dark};
    }
`

const NasheedPoster = styled.img`
    border-top-left-radius: ${(props) => props.theme.borderRadius}; 
    border-top-right-radius: ${(props) => props.theme.borderRadius};
`

const NasheedTitle = styled.p`
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: bold;
    @media(prefers-color-scheme: dark) {
        color: ${(props) => props.theme.palette.primary.light};
    }
`

const NasheedGrid = (props: NasheedGridProps) => {
    return (
        <NasheedGridDiv>
            <Nasheed>
                <NasheedPoster src={props.poster} alt="Nasheed" />
                <NasheedTitle>{props.title}"</NasheedTitle>
            </Nasheed>
        </NasheedGridDiv>
    )
}

export default NasheedGrid