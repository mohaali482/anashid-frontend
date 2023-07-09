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
import AudioPlayerDrawer from "../../components/styled/Nasheeds/AudioPlayerDrawer";
import AudioPlayer from "../../components/styled/Nasheeds/AudioPlayer";

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

    const [drawerOpen, setDrawerOpen] = useState(false)
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    useEffect(() => {
        if (drawerOpen) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = 'unset'
        }
    }, [open])

    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            if (event.key == 'Escape')
                setDrawerOpen(false)
        })

        return () => {
            document.removeEventListener('keydown', (event) => {
                if (event.key == 'Escape')
                    setDrawerOpen(false)
            })

        }
    }, [])

    useEffect(() => {
        document.addEventListener('mousedown', (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setDrawerOpen(false)
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
                <AudioPlayer audio="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" poster="https://www.soundhelix.com/examples/images/1.jpg" onClick={toggleDrawer} />
            </Container>
            <AudioPlayerDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
        </>
    )
}

export default HomeSharedLayout;