
import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Snackbar, AlertColor } from "@mui/material";
// Alert,
import Slide from '@mui/material/Slide';

type SnackbarContextType = {
    showSnackbar: (message: React.ReactElement | string, severity?: AlertColor) => void;
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

type SnackbarProviderProps = {
    children: ReactNode;
};

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({ children }) => {
    const [snackbar, setSnackbar] = useState<{
        open: boolean;
        message: React.ReactElement | string;
        severity: AlertColor;
    }>({
        open: false,
        message: "",
        severity: "success",
    });

    const showSnackbar = useCallback((message: React.ReactElement | string, severity: AlertColor = "success") => {
        setSnackbar({ open: true, message, severity });
    }, []);

    const handleClose = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={1500}
                onClose={handleClose}
                message={snackbar.message}
                TransitionComponent={(props) => <Slide {...props} direction="left" />}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                sx={{
                    "& .MuiSnackbarContent-root": {
                        backgroundColor: "#00000",
                        color: "#fff",
                        // opacity: 0.3,
                    },
                }}
            >
                {/* <Alert sx={{ backgroundColor: 'black', color: 'white', height: "100px" }} severity={snackbar.severity} >
                    {snackbar.message}
                </Alert> */}
            </Snackbar>
        </SnackbarContext.Provider>
    );
};

export const useSnackbar = (): SnackbarContextType => {
    const context = useContext(SnackbarContext);
    if (!context) {
        throw new Error("useSnackbar must be used within a SnackbarProvider");
    }
    return context;
};
