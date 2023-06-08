import { Outlet } from "react-router-dom";
import NavBar from "../../components/styled/layout/Navbar";
import Sidebar from "../../components/styled/layout/Sidebar";
import Container from "../../components/styled/Nasheeds/Container";
import { useEffect, useRef, useState } from "react";
import BackgroundCover from "../../components/styled/layout/BackgroundCover";
import Footer from "../../components/styled/layout/Footer";
import {IoAddCircle, IoHome, IoSave} from 'react-icons/io5'
import {FaUserAlt} from 'react-icons/fa'
import {BsMusicNoteList} from 'react-icons/bs'

const links = [
    { 
        title: 'Home',
        link: '/',
        icon: <IoHome />
    },
    {
        title: 'Add Nasheed',
        link: '/add',
        icon: <IoAddCircle />
    },
    {
        title: 'My Nasheeds',
        link: '/my-nasheeds',
        icon: <BsMusicNoteList />
    },
    {
        title: 'Saved Nasheeds',
        link: '/saved-nasheeds',
        icon: <IoSave />
    },
    {
        title: 'Account',
        link: '/user',
        icon: <FaUserAlt />
    }
]

const HomeSharedLayout = () => {
    const [open, setOpen] = useState(false)
    const sidebarRef = useRef<HTMLDivElement>(null)
    const toggleSidebar = () => {
        setOpen(!open)
    }

    // useEffect(() => {
    //     if (open) {
    //         document.body.style.overflow = 'hidden'
    //     }
    //     else {
    //         document.body.style.overflow = 'unset'
    //     }
    // }, [open])

    // useEffect(() => {
    //     document.addEventListener('keydown', (event) => {
    //         if (event.key == 'Escape')
    //             setOpen(false)
    //     })

    //     return () => {
    //         document.removeEventListener('keydown', (event) => {
    //             if (event.key == 'Escape')
    //                 setOpen(false)
    //         })

    //     }
    // }, [])

    useEffect(() => {
        document.addEventListener('mousedown', (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
        })
    })

    return (
        <>
            <NavBar handleClick={toggleSidebar} />
            <Sidebar reference={sidebarRef} open={open} links={links} />
            <Container>
                <BackgroundCover />
                <Outlet />
                <Footer />
            </Container>
        </>
    )
}

export default HomeSharedLayout;