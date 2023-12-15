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
        const htmlElement = document.getElementsByTagName("html")[0]
        if (theme === "dark") {
            htmlElement.style.backgroundColor = "black";
            htmlElement.style.color = "white";
            const rootDiv = document.getElementById("root")
            if (rootDiv) {
                rootDiv.style.backgroundColor = "black";
            }
        } else {
            htmlElement.style.backgroundColor = "white";
            htmlElement.style.color = "black";
            const rootDiv = document.getElementById("root")
            if (rootDiv) {
                rootDiv.style.backgroundColor = "white";
            }
        }
    }, [theme])


    return (
        <ToggleContext.Provider value={{ theme, updateTheme }}>
            {children}
        </ToggleContext.Provider>
    )
}