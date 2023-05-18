import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { MdDashboard } from 'react-icons/md'

const NavbarAndSidebar = () => {
    const [open, setOpen] = useState(false);
    const sidebar = useRef<HTMLElement>(null);
    const closeSidebar = (e: MouseEvent) => {
        if (sidebar.current && !sidebar.current.contains(e.target as Node)) {
            setOpen(false)
        }
    }
    const handleClick: React.MouseEventHandler = (event) => {
        setOpen(!open);
        console.log('opening')
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeSidebar)
        return () => {
            document.removeEventListener('mousedown', closeSidebar)
        }
    }, [])
    return (
        <>
            <Navbar handleClick={handleClick} />
            <Sidebar reference={sidebar} open={open} links={[{ icon: <MdDashboard />, link: '/', title: 'Dashboard' }]} />
        </>
    )
}

export default NavbarAndSidebar