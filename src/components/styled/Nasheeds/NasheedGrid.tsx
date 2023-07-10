import styled from 'styled-components';
import { Nasheed } from '../../../types/store';
import { Link } from 'react-router-dom';

const NasheedGridDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const NasheedComponent = styled.div`
    height: 18rem;
    width: 14rem;
    background-color: ${(props) => props.theme.palette.primary.light};
    border-width: 1px;
    border-color: ${(props) => props.theme.palette.primary.lightGray};
    border-radius: 0.5rem;
    box-shadow: ${(props) => props.theme.palette.primary.lightGray} 0px 0px 0px 1px;

    @media (prefers-color-scheme: dark) {
        background-color: ${(props) => props.theme.palette.primary.dark};
        border-color: ${(props) => props.theme.palette.primary.darkGray};
    }
`

const NasheedPoster = styled.img`
    border-top-left-radius: ${(props) => props.theme.borderRadius}; 
    border-top-right-radius: ${(props) => props.theme.borderRadius};
    width: 100%;
    height: 80%;
    object-fit: contain;
    background-color:  ${(props) => props.theme.palette.primary.lightGray};

    @media (prefers-color-scheme: dark) {
        background-color: ${(props) => props.theme.palette.primary.darkGray};
    }

`

const NasheedContent = styled.div`
    padding: 0.25rem;
`

const NasheedTitle = styled.p`
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: bold;
    @media(prefers-color-scheme: dark) {
        color: ${(props) => props.theme.palette.primary.light};
    }
`

interface NasheedGridProps {
    nasheed: Nasheed;
}

const NasheedGrid = (props: NasheedGridProps) => {
    return (
        <NasheedGridDiv>
            <NasheedComponent>
                <Link to={`/nasheeds/${props.nasheed.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <NasheedPoster src={props.nasheed.poster} alt="Nasheed" />
                </Link>
                <NasheedContent>
                    <NasheedTitle>{props.nasheed.name}</NasheedTitle>
                </NasheedContent>
            </NasheedComponent>
        </NasheedGridDiv>
    )
}

export default NasheedGrid