import styled from "styled-components";
import { StyledAudioPlayer } from "./AudioPlayer";
import { IoClose } from 'react-icons/io5'
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";


const Drawer = styled.div`
    position: fixed;
    overflow: hidden;
    bottom: 0;
    z-index: 101;
    width: 100vw;
    height: 0;
    background-color: ${(props) => props.theme.palette.primary.lightGray};
    color: ${(props) => props.theme.palette.primary.dark};
    transition: all 0.3s ease-in-out;

    
    @media (prefers-color-scheme: dark) {
        background-color: ${(props) => props.theme.palette.primary.dark};
        color: ${(props) => props.theme.palette.primary.lightGray};
    };
`

const AudioDrawerContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 2rem;
`


const AudioPlayerDrawerContainer = styled.div`
    height: 100%;
    margin-top: 2rem;
    overflow-y: auto;
`

const AudioDrawerPoster = styled.img`
    width: 300px;
    height: 300px;
    object-fit: contain;
    object-position: center;
    border-radius: ${(props) => props.theme.borderRadius};
    margin-top: 5rem;
`

const AudioDrawerTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    text-align: center;
    color: ${(props) => props.theme.palette.primary.dark};

    @media (prefers-color-scheme: dark) {
        color: ${(props) => props.theme.palette.primary.lightGray};
    }
`

const StyledAudioPlayerContainer = styled.div`
    width: 80%;
`

const StyledCloseButton = styled.button`
    color: ${(props) => props.theme.palette.primary.main};
    position: absolute;
    top: 1rem;
    left: 1rem;
    cursor: pointer;
    background: none;
    border: none;
`

const Description = styled.div`
    max-width: 40rem;
    margin: 0 auto;
    padding-bottom: 5rem;
`

interface AudioPlayerDrawerProps {
    open: boolean;
    toggleDrawer: any;
    reference: any;
    audioRef: React.RefObject<HTMLAudioElement>;
}

const AudioPlayerDrawer = (props: AudioPlayerDrawerProps) => {
    if (props.open) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    const { currentPlaying } = useSelector((state: RootState) => state.nasheeds)

    return (
        <Drawer ref={props.reference} style={props.open ? { height: '100%' } : {}}>
            <AudioPlayerDrawerContainer onClick={props.toggleDrawer}>
                <StyledCloseButton>
                    <IoClose size={30} />
                </StyledCloseButton>
                <AudioDrawerContentContainer>
                    <div>
                        <AudioDrawerPoster src={currentPlaying?.poster} alt="audio-poster" />
                    </div>
                    <div>
                        <AudioDrawerTitle>{currentPlaying?.name}</AudioDrawerTitle>
                    </div>
                    <StyledAudioPlayerContainer style={{ maxWidth: "40rem", width: "100%" }}>
                        <StyledAudioPlayer controls ref={props.audioRef}>
                            <source src={currentPlaying?.audio} type="audio/mpeg" />
                        </StyledAudioPlayer>
                    </StyledAudioPlayerContainer>
                    <div>
                        <Description>
                            {currentPlaying?.description}
                        </Description>
                    </div>
                </AudioDrawerContentContainer>
            </AudioPlayerDrawerContainer>
        </Drawer >)
}

export default AudioPlayerDrawer;