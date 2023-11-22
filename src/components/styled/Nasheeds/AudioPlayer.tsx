import { memo, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';



const AudioDrawerPoster = styled.img`
    width: 300px;
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

const Description = styled.div`
    max-width: 40rem;
    margin: 0 auto;
    padding-bottom: 5rem;
    padding-top: 5rem;
`


export const StyledAudioPlayer = styled.audio`
    width: 100%;
    padding-right: 2rem;
  
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
    position: fixed;
    bottom: 0;
    left: ${props => props.open ? "0" : ""};
    right: ${props => props.open ? "0" : ""};
    border-radius: ${(props) => props.theme.borderRadius};
    margin-right: 1.58rem;
    z-index: 100;
    transition: all 0.5s ease;
    overflow-y: ${(props) => props.open ? "scroll" : ""};
`

const StyledAudioPoster = styled.img`
    max-height: 80%;
    object-fit: cover;
    padding: 1rem;
`

const Drawer = styled.div<{ open: boolean }>`
    ${props => props.open ? "position: absolute; top: 1rem; left: 0; right: 0;" : "width: 100%"}
`

const AudioPlayerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

interface AudioPlayerProps {
    audioRef: React.RefObject<HTMLAudioElement>;
    audio: string;
    poster: string;
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
    const { currentPlaying } = useSelector((state: RootState) => state.nasheeds)
    if (props.open) {
        document.body.style.overflow = 'hidden';
        document.title = "Nasheeds - " + currentPlaying?.name
    } else {
        document.body.style.overflow = 'auto';
    }
    useEffect(() => {
        const keyboardEventListener = (ev: KeyboardEvent) => {
            if (props.audioRef.current) {
                if (!(((ev.target as HTMLElement)).matches("body"))) return;
                switch (ev.key.toLowerCase()) {
                    case " ":
                    case "k":
                        if (props.audioRef.current.paused) {
                            props.audioRef.current.play()
                        } else if (props.audioRef.current) {
                            props.audioRef.current.pause();
                        }
                        break;
                    case "arrowright":
                        props.audioRef.current.currentTime += 5;
                        break;
                    case "l":
                        props.audioRef.current.currentTime += 10;
                        break;
                    case "arrowleft":
                        props.audioRef.current.currentTime -= 5;
                        break
                    case "j":
                        props.audioRef.current.currentTime -= 10;
                        break;
                    case "r":
                        props.audioRef.current.currentTime = 0;
                        props.audioRef.current.play();
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
        <StyledAudioPlayerContainer open={props.open} onClick={() => props.audioRef.current !== null ?? props.setDrawerOpen(true)}>
            {props.open &&
                <StyledCloseButton>
                    <IoClose size={30} />
                </StyledCloseButton>}

            {!props.open && <StyledAudioPoster src={props.poster} />}
            <Drawer open={props.open}>
                {props.open &&
                    <center>
                        <AudioDrawerPoster src={currentPlaying?.poster} alt="audio-poster" />
                    </center>}
                <AudioPlayerContainer>
                    <MemoizedAudioPlayer audioRef={props.audioRef} audio={props.audio} open={props.open} />
                </AudioPlayerContainer>

                {props.open &&
                    <>
                        <div>
                            <AudioDrawerTitle>{currentPlaying?.name}</AudioDrawerTitle>
                        </div>
                        <Description>
                            {currentPlaying?.description}
                        </Description>
                    </>
                }
            </Drawer>
        </StyledAudioPlayerContainer >
    )
}


export default AudioPlayer;