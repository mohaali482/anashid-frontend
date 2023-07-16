import styled from "styled-components";
import { StyledAudioPlayer } from "./AudioPlayer";
import { IoClose } from 'react-icons/io5'


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
}

const AudioPlayerDrawer = (props: AudioPlayerDrawerProps) => {
    if (props.open) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return (
        <Drawer ref={props.reference} style={props.open ? { height: '100%' } : {}}>
            <AudioPlayerDrawerContainer onClick={props.toggleDrawer}>
                <StyledCloseButton>
                    <IoClose size={30} />
                </StyledCloseButton>
                <AudioDrawerContentContainer>
                    <div>
                        <AudioDrawerPoster src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="audio-poster" />
                    </div>
                    <div>
                        <AudioDrawerTitle>Title</AudioDrawerTitle>
                    </div>
                    <StyledAudioPlayerContainer style={{ maxWidth: "40rem", width: "100%" }}>
                        <StyledAudioPlayer controls>
                            <source src='https://storage.googleapis.com/nasheeds-198d4.appspot.com/nasheeds/audios/Free_Test_Data_2MB_MP3.mp3?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=firebase-adminsdk-fxr94%40nasheeds-198d4.iam.gserviceaccount.com%2F20230523%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230523T071729Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=02b2da8d474783ce7c894bbab1b57386f7ff0a46070e76efed96818c9b887e9ea8130e515879b5d22db0c21a432f77103ddcd17d010ab389f2bdeac19926fa55f5bc657b9b6d94fd69ce64900f32f037f1c4af5794884d0124d14b109c9c78ae06d423a891bdac3738c4537dbb95b9fff6db72beb33b1ff40f3fcb15783d346785907fe05cd74835a4f919658e09f5b018aeed62271a698a1668d9ac92e974f3e356722d63ddb2fd5b5423499118a06cc3028024e0f8cd912cab2f0ae3717acca8d1285688a482d99056a7ed19a6370107860fa64911f364a9c2fee6f3854395d594110102f3f7afe5ce945f0b82798be765f8948e96636e599a2c59bd1e6c51' type="audio/mpeg" />
                        </StyledAudioPlayer>
                    </StyledAudioPlayerContainer>
                    <div>
                        <Description>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit odio beatae eum doloremque necessitatibus veniam repellendus officiis alias vel minus, unde consectetur. Repudiandae incidunt inventore minus architecto laboriosam? Beatae, repellendus!
                        </Description>
                    </div>
                </AudioDrawerContentContainer>
            </AudioPlayerDrawerContainer>
        </Drawer >)
}

export default AudioPlayerDrawer;