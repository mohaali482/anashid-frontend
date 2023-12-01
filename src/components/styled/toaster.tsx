import { ToastPosition, Toaster, ToasterProps } from "react-hot-toast";
import { useTheme } from "styled-components";
import { darkTheme } from "./theme";

const StyledToaster = () => {
    const theme = useTheme();
    return <Toaster toastOptions={{
        style: {
            background: theme === darkTheme ? theme.palette.primary.backgroundPrimary : theme.palette.primary.backgroundSecondary,
            color: theme.palette.primary.textPrimary,
        },
    }} />
}

export default StyledToaster;