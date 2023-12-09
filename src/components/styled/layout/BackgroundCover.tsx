import { useState } from "react";
import styled, { StyledComponent } from "styled-components";

const StyledSection = styled.section`
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: multiply;
    height: 40%;
    background-size: cover;
    margin-bottom: 0.1rem;
`

const StyledDiv = styled.div`
    padding: 6rem 1rem;
    margin: 0 auto;
    max-width: 1280px;
    text-align: center;

    @media (min-width: 1024px) {
        padding-top: 9rem;
        padding-bottom: 9rem;
    }
`

const StyledH1 = styled.h1`
    margin-bottom: 1rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 800;
    color: #fff;

    @media (min-width: 768px) {
        font-size: 3rem;
        line-height: 1;
    }

    @media (min-width: 1024px) {
        font-size: 3.75rem;
        line-height: 1;
    }
`

const StyledP = styled.p`
    margin-bottom: 2rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 400;
    color: white;

    
    @media (min-width: 1024px) {
        font-size: 1.25rem;
        line-height: 1.75rem;
        padding-left: 12rem;
        padding-right: 12rem;
    }

    @media (min-width: 680px) {
        padding-left: 4rem;
        padding-right: 4rem;
    }
`

const BackgroundCover = () => {
    const getStyles = () => {
        const date = new Date();
        const hour = date.getHours();
        let images = [
            'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGlnaCUyMHJlc29sdXRpb24lMjBuYXR1cmUlMjBob3Jpem9udGFsJTIwbW9ybmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlc29sdXRpb24lMjBuYXR1cmUlMjBob3Jpem9udGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGlnaCUyMHJlc29sdXRpb24lMjBuYXR1cmUlMjBob3Jpem9udGFsJTIwbW9ybmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        ];

        let gretting;

        if (hour >= 5 && hour < 12) {
            gretting = "Good morning!";
        } else if (hour >= 12 && hour < 18) {
            gretting = "Good afternoon!";
        } else if (hour >= 18 && hour < 22) {
            images = [
                'https://images.unsplash.com/photo-1550025899-5f8a06b1b3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGlnaCUyMHJlc29sdXRpb24lMjBuYXR1cmUlMjBob3Jpem9udGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhpZ2glMjByZXNvbHV0aW9uJTIwbmF0dXJlJTIwaG9yaXpvbnRhbCUyMG1vcm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            ]
            gretting = "Good evening!";
        } else {
            images = [
                'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlnaCUyMHJlc29sdXRpb24lMjBuYXR1cmUlMjBob3Jpem9udGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1483086431886-3590a88317fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhpZ2glMjByZXNvbHV0aW9uJTIwbmF0dXJlJTIwaG9yaXpvbnRhbCUyMG1vcm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhpZ2glMjByZXNvbHV0aW9uJTIwbmF0dXJlJTIwaG9yaXpvbnRhbCUyMG1vcm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            ]
            gretting = "Welcome";
        }

        return { image: images.at(Math.floor(Math.random() * images.length)), greeting: gretting }
    }

    const [image, setImage] = useState(getStyles().image)
    return (
        <StyledSection style={{ backgroundImage: `url(${image})` }}>
            <StyledDiv>
                <StyledH1>
                    {getStyles().greeting}
                </StyledH1>
                <StyledP>
                    Welcome to Anasheed! Where we collect and share nasheeds from around the world just for you.
                </StyledP>
            </StyledDiv>
        </StyledSection>
    )
}

export default BackgroundCover