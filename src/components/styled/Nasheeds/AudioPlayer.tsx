import { memo, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import StyledIcon from '../common/form/StyledIcon';
import { clearPlayerQueue, pauseCurrentPlaying, popFromPlayerQueue, removeFromPlayerQueue, setCurrentPlaying } from '../../../redux/ducks/nasheedSlice';
import { StyledDivIcons, StyledPoster, StyledPosterContainer, formatDuration } from './NasheedTd';
import { MdCancel } from 'react-icons/md';
import StyledHr from '../pages/account/StyledHr';
import Button from '../pages/detail/button';
import { BsPlay, BsPlayFill } from 'react-icons/bs';
import Title from '../pages/detail/title';



const AudioDrawerPoster = styled.img`
    width: 100%;
    height: 300px;
    object-fit: contain;
    object-position: center;
    border-radius: ${(props) => props.theme.borderRadius};
`

const AudioDrawerTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    text-align: center;
    color: ${(props) => props.theme.palette.primary.textPrimary};
`


const StyledCloseButton = styled.button`
    color: ${(props) => props.theme.main};
    position: absolute;
    top: 1rem;
    left: 1rem;
    cursor: pointer;
    background: none;
    border: none;
    z-index: 1;
`



export const StyledAudioPlayer = styled.audio`
    width: 100%;
    padding-right: 0.5rem;
  
    &::-webkit-media-controls-panel {
        background-color: ${(props) => props.theme.main};
    }
`;

const StyledAudioPlayerContainer = styled.div<{ open: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${props => props.open ? "column" : "row"};
    width: -webkit-fill-available;
    width: -moz-available;
    width: fill-available;
    width: ${props => props.open ? "100vw" : ""};
    height: ${props => props.open ? "100vh" : "4rem"};
    background-color:  ${(props) => props.theme.palette.primary.backgroundPrimary};
    position: ${(props) => props.open ? "fixed" : "sticky"};
    bottom: 0;
    left: ${props => props.open ? "0" : ""};
    right: ${props => props.open ? "0" : ""};
    border-radius: ${(props) => props.theme.borderRadius};
    z-index: 100;
    transition: all 0.5s ease;
    overflow-y: ${(props) => props.open ? "scroll" : ""};
    overflow-x: ${(props) => props.open ? "hidden" : ""};
    cursor: ${(props) => props.open ? "" : "pointer"};
`

const StyledAudioPoster = styled.img`
    max-height: 80%;
    object-fit: cover;
    padding: 1rem;
`

const StyledLoadingContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Drawer = styled.div<{ open: boolean }>`
    ${props => props.open ? "position: absolute; top: 1rem; left: 0; right: 0;" : "width: 100%"}
`

const AudioPlayerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const AudioPlayerQueue = styled.div`
    width: 70%;
    height: 300px;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    gap: 1rem;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-left: auto;
    margin-right: auto;
    color: ${(props) => props.theme.palette.primary.textPrimary};
`

const AudioPlayerQueueItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`

interface AudioPlayerProps {
    open: boolean;
    setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface InternalAudioPlayerProps {
    audioRef: React.RefObject<HTMLAudioElement>;
    audio: string;
    open: boolean;
}

const InternalAudioPlayer = (props: InternalAudioPlayerProps) => {
    return (
        <StyledAudioPlayer controls ref={props.audioRef} style={props.open ? { width: "70%", padding: "1rem" } : undefined}>
            <source src={props.audio} type="audio/mpeg" />
        </StyledAudioPlayer >
    )
}

const MemoizedAudioPlayer = memo(InternalAudioPlayer)

const AudioPlayer = (props: AudioPlayerProps) => {
    const { currentPlaying, currentPlayingPaused, currentPlayingQueue } = useSelector((state: RootState) => state.nasheeds)
    const [loading, setLoading] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)
    const dispatch = useDispatch();

    const handleRemoveAudio = () => {
        dispatch(setCurrentPlaying(null))
    }

    const handleRemoveFromQueue = (index: number) => {
        dispatch(removeFromPlayerQueue(index))
    }

    const handlePlayFromQueue = (index: number) => {
        const nasheed = currentPlayingQueue[index]
        dispatch(setCurrentPlaying(nasheed))
    }

    const handleClearList = () => {
        dispatch(clearPlayerQueue())
    }


    useEffect(() => {
        if (currentPlaying && currentPlayingPaused) {
            audioRef.current?.pause()
        } else if (currentPlaying && !currentPlayingPaused) {
            audioRef.current?.play()
        }
    }, [currentPlaying, currentPlayingPaused])

    useEffect(() => {
        const loaded = () => {
            setLoading(false)
        }

        if (audioRef.current !== null && currentPlaying !== null) {
            audioRef.current.addEventListener('loadeddata', loaded)
        }

        return () => {
            audioRef.current?.removeEventListener('loadeddata', loaded)
        }
    }, [currentPlaying])


    useEffect(() => {
        if (currentPlaying?.audio) {
            audioRef.current?.load();
            audioRef.current?.play();
            setLoading(true)
        } else {
            audioRef.current?.load()
        }
    }, [currentPlaying])




    if (props.open) {
        document.body.style.overflow = 'hidden';
        document.title = "Nasheeds - " + currentPlaying?.name
    } else {
        document.body.style.overflow = 'auto';
    }
    useEffect(() => {
        const playHandler = () => {
            dispatch(pauseCurrentPlaying(false));
        }
        const pauseHandler = () => {
            dispatch(pauseCurrentPlaying(true));
        }

        audioRef.current?.addEventListener('pause', pauseHandler)
        audioRef.current?.addEventListener('play', playHandler)

        return () => {
            audioRef.current?.removeEventListener('pause', pauseHandler)
            audioRef.current?.removeEventListener('play', playHandler)
        }
    }, [])

    useEffect(() => {
        const endedHandler = () => {
            if (currentPlayingQueue.length > 0) {
                const nasheed = currentPlayingQueue[0];
                dispatch(setCurrentPlaying(nasheed))
                dispatch(popFromPlayerQueue())
            }
        }
        audioRef.current?.addEventListener('ended', endedHandler)

        return () => {
            audioRef.current?.removeEventListener('ended', endedHandler)
        }
    }, [currentPlayingQueue])

    useEffect(() => {
        const keyboardEventListener = (ev: KeyboardEvent) => {
            if (audioRef.current) {
                if (!(((ev.target as HTMLElement)).matches("body"))) return;
                switch (ev.key.toLowerCase()) {
                    case " ":
                    case "k":
                        if (audioRef.current.paused) {
                            audioRef.current.play();
                        } else if (audioRef.current) {
                            audioRef.current.pause();
                        }
                        break;
                    case "arrowright":
                        audioRef.current.currentTime += 5;
                        break;
                    case "l":
                        audioRef.current.currentTime += 10;
                        break;
                    case "arrowleft":
                        audioRef.current.currentTime -= 5;
                        break
                    case "j":
                        audioRef.current.currentTime -= 10;
                        break;
                    case "r":
                        audioRef.current.currentTime = 0;
                        audioRef.current.play();
                        break;
                    case "f":
                        props.setDrawerOpen((open) => !open)
                        break;
                    case "escape":
                        props.setDrawerOpen(false)
                        break;
                }
            }
        }
        if (currentPlaying !== null) {
            document.body.addEventListener('keydown', keyboardEventListener)
        }

        return () => {
            document.body.removeEventListener('keydown', keyboardEventListener)
        }

    }, [currentPlaying])



    return (
        <StyledAudioPlayerContainer open={props.open}>
            {loading &&
                <StyledLoadingContainer>
                    <p>Loading...</p>
                </StyledLoadingContainer>
            }
            {props.open &&
                <StyledCloseButton onClick={() => props.setDrawerOpen(false)}>
                    <IoClose size={30} />
                </StyledCloseButton>
            }

            {!props.open && <StyledAudioPoster src={currentPlaying?.poster} onClick={() => !props.open && props.setDrawerOpen(true)} />}
            <Drawer open={props.open}>
                {props.open &&
                    <center>
                        <AudioDrawerPoster src={currentPlaying?.poster} alt="audio-poster" />
                    </center>}
                <AudioPlayerContainer>
                    <MemoizedAudioPlayer audioRef={audioRef} audio={currentPlaying ? currentPlaying.audio : ''} open={props.open} />
                    {!props.open &&
                        <StyledIcon onClick={handleRemoveAudio} style={
                            {
                                width: "25px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginRight: "0.5rem",
                                cursor: "pointer",
                            }}>
                            {currentPlaying && <IoClose size={50} />}
                        </StyledIcon>
                    }
                </AudioPlayerContainer>

                {props.open &&
                    <>
                        <div>
                            <AudioDrawerTitle>{currentPlaying?.name}</AudioDrawerTitle>
                        </div>
                        <StyledHr />
                        <div>
                            <div style={{ display: "flex", margin: "0 auto", justifyContent: "space-evenly" }}>
                                <div>
                                    <Title>Queue</Title>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Button onClick={handleClearList}>Clear List</Button>
                                </div>
                            </div>
                            <AudioPlayerQueue>
                                {
                                    currentPlayingQueue?.length > 0 ?
                                        currentPlayingQueue.map((nasheed, index) => (
                                            <AudioPlayerQueueItem key={index}>
                                                <StyledPosterContainer style={{ width: "20%" }}>
                                                    <StyledPoster style={{ width: "100%" }} src={nasheed.poster} />
                                                </StyledPosterContainer>
                                                <div>{nasheed.name}</div>
                                                <div>{formatDuration(nasheed.duration)}</div>
                                                <div>
                                                    <StyledDivIcons onClick={() => handleRemoveFromQueue(index)}>
                                                        <MdCancel size={25} />
                                                    </StyledDivIcons>
                                                </div>
                                                <div>
                                                    <StyledDivIcons onClick={() => handlePlayFromQueue(index)}>
                                                        <BsPlayFill size={30} />
                                                    </StyledDivIcons>
                                                </div>
                                            </AudioPlayerQueueItem>
                                        ))
                                        :
                                        <div>No items</div>
                                }
                            </AudioPlayerQueue>
                        </div>
                    </>
                }
            </Drawer>
        </StyledAudioPlayerContainer >
    )
}


export default AudioPlayer;