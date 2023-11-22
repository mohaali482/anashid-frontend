import React, { createContext, useEffect, useState } from "react"

type ThemeTypes = "light" | "dark"

const ToggleContext = createContext<{ theme: ThemeTypes; updateTheme: (type: ThemeTypes) => void; }>({
    theme: "light",
    updateTheme: (type: ThemeTypes) => { },
});

export default ToggleContext;

export const ToggleProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<ThemeTypes>("light");
    const updateTheme = (type: ThemeTypes) => {
        localStorage.setItem("theme", type)
        setTheme(type);
    }

    useEffect(() => {
        const localStorageTheme = localStorage.getItem("theme")
        if (localStorageTheme) {
            updateTheme(localStorageTheme as ThemeTypes)
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        } else {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
    }, [theme])


    return (
        <ToggleContext.Provider value={{ theme, updateTheme }}>
            {children}
        </ToggleContext.Provider>
    )
}