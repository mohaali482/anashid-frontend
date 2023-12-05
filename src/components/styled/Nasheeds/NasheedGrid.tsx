import styled from 'styled-components';
import { Nasheed } from '../../../types/nasheed-store';
import { Link } from 'react-router-dom';
import { pauseCurrentPlaying, setCurrentPlaying } from '../../../redux/ducks/nasheedSlice';
import { useDispatch, useSelector } from 'react-redux';
import StyledIcon from '../common/form/StyledIcon';
import { BsPauseCircleFill, BsPlayCircleFill } from 'react-icons/bs';
import { RootState } from '../../../redux/store';

const NasheedGridDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const NasheedComponent = styled.div`
    height: 18rem;
    width: 14rem;
    background-color: ${(props) => props.theme.palette.primary.backgroundPrimary};
    border-radius: 0.5rem;
`

const NasheedPoster = styled.img`
    border-top-left-radius: ${(props) => props.theme.borderRadius}; 
    border-top-right-radius: ${(props) => props.theme.borderRadius};
    width: 100%;
    height: 100%;
    object-fit: cover;

`

const NasheedContent = styled.div`
    padding: 0.25rem;
`

const NasheedTitle = styled.p`
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: bold;
    color: ${(props) => props.theme.palette.primary.textPrimary};
`

interface NasheedGridProps {
    nasheed: Nasheed;
}

const NasheedGrid = (props: NasheedGridProps) => {
    const dispatch = useDispatch();
    const { currentPlaying, currentPlayingPaused } = useSelector((state: RootState) => state.nasheeds)
    const isCurrentlyPlaying = currentPlaying !== null && currentPlaying.id === props.nasheed.id && !currentPlayingPaused

    const setCurrentPlayingNasheed = () => {
        if (props.nasheed) {
            dispatch(setCurrentPlaying(props.nasheed))
        }
    }

    const pauseCurrentPlayingNasheed = () => {
        dispatch(pauseCurrentPlaying(true))
    }

    return (
        <NasheedGridDiv>
            <NasheedComponent>
                <div style={{ position: "relative", height: "80%" }}>
                    <Link to={`/nasheeds/${props.nasheed.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <NasheedPoster src={props.nasheed.poster} alt={props.nasheed.name} />
                    </Link>
                    <StyledIcon style={{ position: "absolute", bottom: "0", right: "0", cursor: "pointer", height: "fit-content" }}>
                        {
                            isCurrentlyPlaying ?
                                <BsPauseCircleFill size={40} onClick={pauseCurrentPlayingNasheed} style={{ position: "absolute", right: "0rem", bottom: "0rem" }} />
                                :
                                <BsPlayCircleFill size={40} onClick={setCurrentPlayingNasheed} style={{ position: "absolute", right: "0rem", bottom: "0rem" }} />
                        }
                    </StyledIcon>
                </div>
                <NasheedContent>
                    <Link to={`/nasheeds/${props.nasheed.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <NasheedTitle>{props.nasheed.name}</NasheedTitle>
                    </Link>
                </NasheedContent>
            </NasheedComponent>
        </NasheedGridDiv>
    )
}

export default NasheedGrid