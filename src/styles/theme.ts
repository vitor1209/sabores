import { createTheme } from "@mui/material/styles";
import { designSystem } from "./designSystem";

export const appTheme = createTheme({
    palette: {
        primary: {
            main: designSystem.cores.primaria,
            contrastText: designSystem.cores.secundaria,
        },
        secondary: {
            main: designSystem.cores.secundaria,
            contrastText: designSystem.cores.primaria,
        },
        background: {
            default: designSystem.cores.fundo,
            paper: designSystem.cores.superficie,
        },
        text: {
            primary: designSystem.cores.textoPrimario,
            secondary: designSystem.cores.textoSecundario,
        },
    },
    typography: {
        fontFamily: designSystem.fontes.sans,
        button: {
            textTransform: "none",
            fontWeight: 700,
            fontFamily: designSystem.fontes.sans,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                ":root": {
                    "--font-sans": "'Geist Sans', 'Geist', 'Geist Fallback', 'Segoe UI', sans-serif",
                    "--font-mono": "'Geist Mono', 'Geist Mono Fallback', 'Consolas', monospace",
                },
                "*, *::before, *::after": {
                    boxSizing: "border-box",
                },
                body: {
                    margin: 0,
                    fontFamily: designSystem.fontes.sans,
                    backgroundColor: designSystem.cores.fundo,
                    color: designSystem.cores.textoPrimario,
                },
                code: {
                    fontFamily: designSystem.fontes.mono,
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    fontWeight: 700,
                    paddingInline: 16,
                },
                containedPrimary: {
                    color: designSystem.cores.primaria,
                    backgroundColor: designSystem.cores.secundaria,
                    "&:hover": {
                        backgroundColor: "#b3a978",
                    },
                },
            },
        },
    },
});