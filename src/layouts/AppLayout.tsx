import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/styled/layout/Navbar";
import Sidebar from "../components/styled/layout/Sidebar";
import Container from "../components/styled/Nasheeds/Container";
import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/styled/layout/Footer";
import { IoAddCircle, IoHome, IoSave } from 'react-icons/io5'
import { FaUserAlt } from 'react-icons/fa'
import { BsMusicNoteList } from 'react-icons/bs'
import AudioPlayerDrawer from "../components/styled/Nasheeds/AudioPlayerDrawer";
import AudioPlayer from "../components/styled/Nasheeds/AudioPlayer";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const links = [
    {
        title: 'Home',
        link: '/',
        icon: <IoHome />
    },
    {
        title: 'Add Nasheed',
        link: '/nasheeds/add',
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
        title: 'Profile',
        link: '/accounts/profile',
        icon: <FaUserAlt />
    }
]

const AppLayout = () => {
    const route = useLocation()
    const [open, setOpen] = useState(false)
    const sidebarRef = useRef<HTMLDivElement>(null)
    const toggleSidebar = () => {
        setOpen(!open)
    }
    const { currentPlaying } = useSelector((state: RootState) => state.nasheeds)

    const audioRef = useRef<HTMLAudioElement>(null);
    const audioRefDrawer = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (currentPlaying?.audio) {
            audioRef.current?.load();
            audioRefDrawer.current?.load();
            audioRef.current?.play();
        }
    }, [currentPlaying])


    const [drawerOpen, setDrawerOpen] = useState(false)
    const drawerRef = useRef<HTMLDivElement>(null)
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    useEffect(() => {
        if (drawerOpen) {
            document.body.style.overflow = 'hidden'
            audioRefDrawer.current!.currentTime = audioRef.current!.currentTime
            audioRef.current!.pause()
        }
        else {
            audioRef.current!.currentTime = audioRefDrawer.current!.currentTime
            document.body.style.overflow = 'unset'
            audioRefDrawer.current!.pause()
        }
    }, [drawerOpen])

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
                setOpen(false)
            }
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
                setDrawerOpen(false)
            }
        })

        return () => {
            document.removeEventListener('mousedown', (event) => {
                if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                    setOpen(false)
                }
                if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
                    setDrawerOpen(false)
                }
            })
        }
    })

    return (
        <>
            <NavBar handleClick={toggleSidebar} title={links.find((link) => link.link === route.pathname)?.title || "Anashid"} />
            <Sidebar reference={sidebarRef} open={open} links={links} />
            <Container>
                <Outlet />
                <Footer />
                <AudioPlayer audioRef={audioRef} audio={currentPlaying?.audio || ''} poster={currentPlaying?.poster || ''} onClick={toggleDrawer} />
            </Container>
            <AudioPlayerDrawer audioRef={audioRefDrawer} open={drawerOpen} toggleDrawer={toggleDrawer} reference={drawerRef} />
        </>
    )
}

export default AppLayout;