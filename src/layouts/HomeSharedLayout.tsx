import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import BackgroundCover from "../components/styled/layout/BackgroundCover";

const HomeSharedLayout = () => {
    return (
        <>
            <BackgroundCover />
            <Outlet />
        </>
    )
}

export default HomeSharedLayout;