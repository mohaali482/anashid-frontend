import styled from "styled-components";
import { Nasheed } from "../../../types/store";
import { BsDownload, BsPlayCircleFill, BsShareFill, BsThreeDots } from 'react-icons/bs'
import NasheedTdActionsDropDown from "./NasheedTdActionsDropDown";
import React, { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setCurrentPlaying } from "../../../redux/ducks/nasheedSlice";

const StyledTr = styled.tr`
    background-color:  ${(props) => props.theme.palette.primary.light};
    border-bottom: 1px;
    
    @media (prefers-color-scheme: dark) {
        background-color: ${(props) => props.theme.palette.primary.dark};
        color: ${(props) => props.theme.palette.primary.light};
    }
`

const StyledTd = styled.td`
    padding: 0.75rem 1rem;
`

const StyledTitleTd = styled(StyledTd)`
    font-weight: bold;
`

const StyledTdPlayButton = styled(StyledTd)`
    width: 2rem;
    height: 2rem;
`

const StyledPosterContainer = styled.div`
    display: flex;
    justify-content: center;
    border-radius: ${(props) => props.theme.borderRadius};
    
    @media (prefers-color-scheme: dark) {
        background-color: ${(props) => props.theme.palette.primary.dark};
    }
`

const StyledPoster = styled.img`
    border-radius: ${(props) => props.theme.borderRadius};
    height: 6rem;
    width: 6rem;
    object-fit: cover;
`

export const StyledDivIcons = styled.div`
    color:  ${(props) => props.theme.palette.primary.main};
    cursor: pointer;
`

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;

    & div{
        margin: 0 auto;
    }
    & :nth-child(1){
        margin-left: 0;
    }
`

function formatDuration(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

interface NasheedTdProps {
    nasheed: Nasheed,
    dropdownLinks: {
        link: string,
        text: string
    }[]
}

const NasheedTd = ({ nasheed, dropdownLinks }: NasheedTdProps) => {
    const [open, setOpen] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0 });
    const dropdown = useRef<HTMLDivElement>(null);
    const closeDropDown = (e: MouseEvent) => {
        if (dropdown.current && !dropdown.current.contains(e.target as Node)) {
            setOpen(false)
        }
    }
    const handleClick: React.MouseEventHandler = (event) => {
        setOpen(!open);
        const target = event.target as HTMLElement
        const rect = target.getBoundingClientRect();
        if (window.innerHeight - rect.bottom < 200) {
            setDropdownPosition({ top: rect.bottom + window.scrollY - 200 })
        }
        else {
            setDropdownPosition({ top: rect.bottom + window.scrollY })
        }
    }

    const dispatch = useDispatch();

    const setCurrentPlayingNasheed = () => {
        if (nasheed) {
            dispatch(setCurrentPlaying(nasheed))
        }
    }


    useEffect(() => {
        document.addEventListener('mousedown', closeDropDown)
        return () => {
            document.removeEventListener('mousedown', closeDropDown)
        }
    }, [])
    return (
        <StyledTr>
            <StyledTdPlayButton>
                <StyledDivIcons>
                    <BsPlayCircleFill size={40} onClick={setCurrentPlayingNasheed} />
                </StyledDivIcons>
            </StyledTdPlayButton>
            <StyledTd>
                <StyledPosterContainer>
                    <Link to={`/nasheeds/${nasheed.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <StyledPoster src={nasheed.poster} />
                    </Link>
                </StyledPosterContainer>
            </StyledTd>
            <StyledTitleTd>
                {nasheed.name}
            </StyledTitleTd>
            <StyledTd>
                {new Date(nasheed.created_at).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                })}
            </StyledTd>
            <StyledTd>
                {formatDuration(nasheed.duration)}
            </StyledTd>

            <StyledTd>
                <StyledDiv>
                    {/* <StyledDivIcons>
                        <BsShareFill size={20} />
                    </StyledDivIcons> */}
                    <StyledDivIcons>
                        {nasheed.saved ? <button style={{ textDecoration: 'none', color: 'inherit', backgroundColor: 'inherit', border: 'none', cursor: "pointer" }}>
                            <MdFavorite size={20} />
                        </button> : <button style={{ textDecoration: 'none', color: 'inherit', backgroundColor: 'inherit', border: 'none', cursor: "pointer" }}>
                            <MdFavoriteBorder size={20} />
                        </button>}

                    </StyledDivIcons>
                    <StyledDivIcons>
                        <a href={nasheed.audio} download style={{ textDecoration: 'none', color: 'inherit' }}>
                            <BsDownload size={20} />
                        </a>
                    </StyledDivIcons>
                    {dropdownLinks.length > 0 &&
                        <StyledDivIcons ref={dropdown}>
                            <button onClick={handleClick} style={{ textDecoration: 'none', color: 'inherit', backgroundColor: 'inherit', border: 'none', cursor: "pointer" }}>
                                <BsThreeDots size={20} />
                            </button>
                            {open && <NasheedTdActionsDropDown nasheedId={nasheed.id} dropdownPosition={dropdownPosition} links={dropdownLinks} />}
                        </StyledDivIcons>}
                </StyledDiv>
            </StyledTd>
        </StyledTr>
    )
}

export default NasheedTd;