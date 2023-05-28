import { Outlet } from "react-router-dom";
import NavBar from "../../components/styled/layout/Navbar";
import Sidebar from "../../components/styled/layout/Sidebar";
import Container from "../../components/styled/Nasheeds/Container";
import { useEffect, useRef, useState } from "react";

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
            <Sidebar reference={sidebarRef} open={open} links={[]} />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default HomeSharedLayout;