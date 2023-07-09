import styled from 'styled-components';

export const StyledAudioPlayer = styled.audio`
    width: 100%;
    padding-right: 2rem;
  
    &::-webkit-media-controls-panel {
        background-color: ${(props) => props.theme.palette.primary.main};
    }
`;

const StyledAudioPlayerContainer = styled.div`
    display: flex;
    align-items: center;
    width: -webkit-fill-available;
    height: 4rem;
    background-color:  ${(props) => props.theme.palette.primary.light};
    position: fixed;
    bottom: 0;
    border-radius: ${(props) => props.theme.borderRadius};
    margin-right: 0.5rem;
    z-index: 100;
    
    @media (prefers-color-scheme: dark) {
        background-color: ${(props) => props.theme.palette.primary.dark};
    }
`

const StyledAudioPoster = styled.img`
    max-height: 80%;
    object-fit: contain;
    padding: 1rem;
`

interface AudioPlayerProps {
    audio: string;
    poster: string;
    onClick: any;
}

const AudioPlayer = (props: AudioPlayerProps) => {
    return (
        <StyledAudioPlayerContainer onClick={props.onClick}>
            <StyledAudioPoster src={props.poster} />
            <StyledAudioPlayer controls>
                <source src={props.audio} type="audio/mpeg" />
            </StyledAudioPlayer>
        </StyledAudioPlayerContainer>
    )
}


export default AudioPlayer;