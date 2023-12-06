import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/styled/layout/Navbar";
import Sidebar from "../components/styled/layout/Sidebar";
import Container from "../components/styled/Nasheeds/Container";
import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/styled/layout/Footer";
import { IoAddCircle, IoHome, IoSave } from 'react-icons/io5'
import { FaUserAlt } from 'react-icons/fa'
import { BsMusicNoteList } from 'react-icons/bs'
import AudioPlayer from "../components/styled/Nasheeds/AudioPlayer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Dialog from "../components/styled/common/Dialog";
import Spinner from "../components/styled/common/Spinner";
import toast from "react-hot-toast";
import { clearMessage } from "../redux/ducks/nasheedSlice";

const links = [
    {
        title: 'Home',
        link: '/',
        protect: false,
        icon: <IoHome />
    },
    {
        title: 'Add Nasheed',
        link: '/nasheeds/add',
        protect: true,
        icon: <IoAddCircle />,
        codename: 'add_nasheed',
    },
    {
        title: 'My Nasheeds',
        link: '/my-nasheeds',
        protect: true,
        icon: <BsMusicNoteList />,
        codename: 'add_nasheed',
    },
    {
        title: 'Saved Nasheeds',
        link: '/saved-nasheeds',
        protect: true,
        icon: <IoSave />
    },
    {
        title: 'Profile',
        link: '/accounts/profile',
        protect: true,
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
    const { loading, message, currentPlaying } = useSelector((state: RootState) => state.nasheeds)

    const [drawerOpen, setDrawerOpen] = useState(false)
    const drawerRef = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if (message !== null) {
            toast.success(message, {
                position: "bottom-right",
            })
            dispatch(clearMessage())
        }
    }, [message])

    useEffect(() => {
        if (drawerOpen) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = 'unset'
        }
    }, [drawerOpen])

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
                {loading && <Dialog onClose={null}>
                    <Spinner />
                </Dialog>}
                <Outlet />
                <Footer />
                {currentPlaying && <AudioPlayer setDrawerOpen={setDrawerOpen} open={drawerOpen} />}
            </Container>
        </>
    )
}

export default AppLayout;