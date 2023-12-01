import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import UserDropdown from './UserDropdown'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import profile_default from '../../../assets/images/profile_default.svg'

const StyledUserContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    margin-left: auto;
    background-color: none;
`

const StyledDropdownButton = styled.button`
    display: flex;
    font-size: 0.875rem;
    border-radius: 9999px;
    border: none;
    background: none;
    cursor: pointer;
`

const StyledUserImage = styled.img`
    width: 2rem;
    height: 2rem;
    object-fit: contain;
    border-radius: 9999px;
`

const UserIcon = () => {
    const [open, setOpen] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0 });
    const { user } = useSelector((state: RootState) => state.user)
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
        setDropdownPosition({ top: rect.bottom + 5 })
    }


    useEffect(() => {
        document.addEventListener('mousedown', closeDropDown)
        return () => {
            document.removeEventListener('mousedown', closeDropDown)
        }
    }, [])
    return (
        <StyledUserContainer ref={dropdown}>
            <StyledDropdownButton onClick={handleClick}>
                <StyledUserImage src={user?.image ? user.image : profile_default} />
            </StyledDropdownButton>
            {open && <UserDropdown dropdownPosition={dropdownPosition} />}
        </StyledUserContainer>
    )
}

export default UserIcon;