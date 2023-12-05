import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "../common/Alert";
import { useState } from "react";
import StyledButton from "../common/Button";
import { useDispatch } from "react-redux";
import { removeNasheed } from "../../../redux/ducks/nasheedSlice";

export const StyledDropDown = styled.div`
    position: absolute;
    right: 2rem;
    z-index: 10;
    width: 11rem;
    background-color: ${(props) => props.theme.palette.primary.backgroundSecondary};
    border-radius: 0.5rem;
    border-top-width: 1px; 
    border-color: ${(props) => props.theme.palette.primary.backgroundPrimary};
    box-shadow: 0 0.5rem 1rem rgba(255,255,255,0.1);
    transition: all 0.3s ease-in-out;
`

export const StyledDropDownUl = styled.ul`
    list-style: none;
    padding: 0.25rem 0;
    font-size: 0.875rem;
    color: ${(props) => props.theme.gray};
`

export const StyledDropDownLink = styled(Link)`
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: ${(props) => props.theme.gray};
    :hover {
        background-color: ${(props) => props.theme.palette.primary.backgroundPrimary};
    }
`

export const StyledDropDownButton = styled.button`
    border: none;
    display: block;
    padding: 0.7rem 1rem;
    text-decoration: none;
    color: ${(props) => props.theme.gray};
    background: none;
    width: 100%;
    text-align: start;
    cursor: pointer;

    :hover {
        background-color: ${(props) => props.theme.palette.primary.backgroundPrimary};
    }
`
interface dropDownProps {
    dropdownPosition: {
        top: number;
    },
    nasheedId: number,
    links: {
        link: string;
        text: string;
        action?: boolean;
    }[]

    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NasheedTdActionsDropDown = ({ setOpen: setDropDownOpen, dropdownPosition, links, nasheedId: id }: dropDownProps) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const handleDeleteNasheed = () => {
        dispatch(removeNasheed(id))
        setOpen(false)
        setDropDownOpen(false)
    }

    return (
        <>
            <Modal isOpen={open} onClose={() => setOpen(false)}>
                <h1>Delete Nasheed</h1>
                <div style={{ padding: "1.5rem 1rem" }}>
                    <p>Are you sure you want to delete this nasheed?</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <StyledButton reverse style={{ padding: "0.5rem 2rem" }} onClick={() => setOpen(false)}>No</StyledButton>
                    <StyledButton style={{ padding: "0.5rem 2rem" }} onClick={handleDeleteNasheed}>Yes</StyledButton>
                </div>
            </Modal>
            <StyledDropDown style={{ ...dropdownPosition }}>
                <StyledDropDownUl>
                    {links.map((link, index) => (
                        link.action ? <StyledDropDownButton key={index} type="button" onClick={() => setOpen(true)}>Delete</StyledDropDownButton> :
                            <StyledDropDownLink key={index} to={link.link.replace(":id", id.toString())}>{link.text}</StyledDropDownLink>
                    ))}
                </StyledDropDownUl>
            </StyledDropDown >
        </>
    )

}

export default NasheedTdActionsDropDown;