import styled from "styled-components";
import { Nasheed } from "../../../types/store";
import { BsDownload, BsPlayCircleFill, BsShareFill, BsThreeDots } from 'react-icons/bs'
import NasheedTdActionsDropDown from "./NasheedTdActionsDropDown";
import React, { useEffect, useId, useRef, useState } from "react";

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
    object-fit: contain;
`

export const StyledDivIcons = styled.div`
    color:  ${(props) => props.theme.palette.primary.main};
`

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`

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
    // const audio = new Audio(nasheed.audio);
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
                    <BsPlayCircleFill size={40} />
                </StyledDivIcons>
            </StyledTdPlayButton>
            <StyledTd>
                <StyledPosterContainer>
                    <StyledPoster src={nasheed.poster} />
                </StyledPosterContainer>
            </StyledTd>
            <StyledTitleTd>
                {nasheed.name}
            </StyledTitleTd>
            <StyledTd>
                {nasheed.created_at.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                })}
            </StyledTd>
            <StyledTd>
                {`${nasheed.owner.first_name} ${nasheed.owner.last_name}`}
            </StyledTd>
            <StyledTd>
                {"00:00"}
                {/* TODO:  Make this depend on the data recieved */}
            </StyledTd>

            <StyledTd>
                <StyledDiv>
                    <StyledDivIcons>
                        <BsShareFill size={20} />
                    </StyledDivIcons>
                    <StyledDivIcons>
                        <a href={nasheed.audio} download style={{ textDecoration: 'none', color: 'inherit' }}>
                            <BsDownload size={20} />
                        </a>
                    </StyledDivIcons>
                    <StyledDivIcons ref={dropdown}>
                        <button onClick={handleClick} style={{ textDecoration: 'none', color: 'inherit', backgroundColor: 'inherit', border: 'none' }}>
                            <BsThreeDots size={20} />
                        </button>
                        {open && <NasheedTdActionsDropDown dropdownPosition={dropdownPosition} links={dropdownLinks} />}
                    </StyledDivIcons>
                </StyledDiv>
            </StyledTd>
        </StyledTr>
    )
}

export default NasheedTd;