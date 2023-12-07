import styled from "styled-components";
import { Nasheed } from "../../../types/nasheed-store";
import { BsDownload, BsPauseCircleFill, BsPlayCircleFill, BsShareFill, BsThreeDots } from 'react-icons/bs'
import NasheedTdActionsDropDown from "./NasheedTdActionsDropDown";
import React, { useEffect, useId, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder, MdQueueMusic } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { pauseCurrentPlaying, pushToPlayerQueue, removeSavedNasheedRequest, saveNasheedRequest, setCurrentPlaying } from "../../../redux/ducks/nasheedSlice";
import StyledIcon from "../common/form/StyledIcon";
import { RootState } from "../../../redux/store";

const StyledTr = styled.tr`
    background-color:  ${(props) => props.theme.palette.primary.backgroundPrimary};
    border-bottom: 1px;
    color: ${(props) => props.theme.palette.primary.textPrimary};
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

export const StyledPosterContainer = styled.div`
    display: flex;
    justify-content: center;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.palette.primary.backgroundPrimary};
`

export const StyledPoster = styled.img`
    border-radius: ${(props) => props.theme.borderRadius};
    height: 6rem;
    width: 6rem;
    object-fit: cover;
`

export const StyledDivIcons = styled.div`
    color:  ${(props) => props.theme.main};
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

export function formatDuration(seconds: number) {
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
        text: string,
        action?: boolean;
    }[]
}

const NasheedTd = ({ nasheed, dropdownLinks }: NasheedTdProps) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0 });
    const { currentPlaying, currentPlayingPaused } = useSelector((state: RootState) => state.nasheeds)
    const { isLoggedIn } = useSelector((state: RootState) => state.user)
    const isCurrentlyPlaying = currentPlaying !== null && currentPlaying.id === nasheed.id && !currentPlayingPaused


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

    const setCurrentPlayingNasheed = () => {
        if (nasheed) {
            dispatch(setCurrentPlaying(nasheed))
        }
    }

    const handleUnsaveNasheed = (id: number) => {
        if (!isLoggedIn) return navigate('/auth/login')
        dispatch(removeSavedNasheedRequest(id))
    }

    const handleAddToQueue = (nasheed: Nasheed) => {
        dispatch(pushToPlayerQueue(nasheed))
    }

    const handleSaveNasheed = (id: number) => {
        if (!isLoggedIn) return navigate('/auth/login')
        dispatch(saveNasheedRequest(id))
    }

    const pauseCurrentPlayingNasheed = () => {
        dispatch(pauseCurrentPlaying(true))
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
                    {
                        isCurrentlyPlaying ?
                            <BsPauseCircleFill size={40} onClick={pauseCurrentPlayingNasheed} />
                            :
                            <BsPlayCircleFill size={40} onClick={setCurrentPlayingNasheed} />
                    }
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
                <Link to={`/nasheeds/${nasheed.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {nasheed.name}
                </Link>
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
                        <StyledIcon>
                            {
                                nasheed.saved ?
                                    <MdFavorite size={20} onClick={() => handleUnsaveNasheed(nasheed.saved_id!)} />
                                    :
                                    <MdFavoriteBorder size={20} onClick={() => handleSaveNasheed(nasheed.id)} />
                            }
                        </StyledIcon>
                    </StyledDivIcons>
                    <StyledDivIcons>
                        <StyledIcon>
                            <MdQueueMusic size={20} onClick={() => handleAddToQueue(nasheed)} />
                        </StyledIcon>
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
                            {open && <NasheedTdActionsDropDown setOpen={setOpen} nasheedId={nasheed.id} dropdownPosition={dropdownPosition} links={dropdownLinks} />}
                        </StyledDivIcons>}
                </StyledDiv>
            </StyledTd>
        </StyledTr>
    )
}

export default NasheedTd;