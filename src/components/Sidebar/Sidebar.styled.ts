import { Box, Stack, styled } from "@mui/material"
import { NavLink } from "react-router"

export const Header = styled(Stack<"header">)(({ theme }) => ({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2, 4),

    [theme.breakpoints.up("md")]: {
        display: "none",
    },
}))

export const SidebarOverlay = styled(
    Box,
)<{ isSidebarOpened: boolean }>(({ theme, isSidebarOpened }) => ({
    position: "fixed",
    zIndex: 9,
    inset: 0,
    width: "100dvw",
    height: "100dvh",
    backgroundColor: "rgba(0, 0, 0, .5)",
    transition: ".2s ease",

    ...(!isSidebarOpened && {
        pointerEvents: "none",
        opacity: 0,
        visibility: "hidden",
    }),

    [theme.breakpoints.up("md")]: {
        display: "none",
    },
}))

export const SidebarWrapper = styled(
    Stack,
)<{ isSidebarOpened: boolean; largura: number }>(({ theme, isSidebarOpened, largura }) => ({
    position: "sticky",
    gap: theme.spacing(1),
    top: 0,
    height: "100dvh",
    backgroundColor: "#fff",
    width: largura,
    minWidth: largura,
    borderRight: "1px solid #E4E7EC",
    paddingTop: theme.spacing(4),

    [theme.breakpoints.down("md")]: {
        position: "fixed",
        zIndex: 10,
        left: 0,
        transform: isSidebarOpened ? "translateX(0)" : "translateX(-100%)",
        transition: "transform .3s ease",
    },
}))

export const SideUpper = styled(Stack)(({ theme }) => ({
    height: "100%",
    overflowY: "auto",
    gap: theme.spacing(3),
    padding: theme.spacing(0, 1, 0, 2),

    "&::-webkit-scrollbar": {
        width: 16,
    },

    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#D0D5DD",
        borderRadius: 80,
        border: "4px solid #fff",
    },
}))

export const SideFooter = styled(Stack)(() => ({
    marginTop: "auto",
    position: "sticky",
    bottom: 0,
}))

export const ItemWrapper = styled(
    NavLink,
)<{ espacamentoEsquerda: number }>(({ theme, espacamentoEsquerda }) => ({
    padding: theme.spacing(1, 1.5, 1, espacamentoEsquerda || 1.5),
    borderRadius: 6,
    outlineOffset: 2,
    fontSize: 14,
    fontWeight: 600,
    alignItems: "center",
    color: "#344054",
    userSelect: "none",
    outline: "2px solid transparent",
    transition: ".2s ease",

    span: {
        display: "flex",
        justifyContent: "flex-start",
        gap: theme.spacing(1.5),
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        alignItems: "center",
    },

    "&:focus-visible": {
        outline: `2px solid ${theme.palette.primary.main}`,
    },

    "&[aria-current=page]": {
        backgroundColor: "#F9FAFB",
        color: "#182230",
    },

    "&:hover": {
        backgroundColor: "#0000000a",
        color: "#182230",
    },

    svg: {
        width: 24,
        height: 24,
        minWidth: 24,

        path: {
            stroke: "#667085",
        },
    },
}))

export const ItemsMapperWrapper = styled(
    Stack,
)<{ espacamentoEsquerda: number; open: boolean }>(({ theme, espacamentoEsquerda, open }) => ({
    flexDirection: "column",
    width: "100%",
    color: "#344054",

    "> .MuiListItemButton-root": {
        padding: theme.spacing(1, 1.5, 1, espacamentoEsquerda || 1.5),
        justifyContent: "flex-start",
        width: "100%",
        borderRadius: 6,
        gap: theme.spacing(1.5),

        "&:focus-visible": {
            outline: `2px solid ${theme.palette.primary.main}`,
        },

        ...(open && {
            backgroundColor: "#F9FAFB",
            color: "#182230",

            ">.MuiTypography-root": {
                color: "#182230",
            },
        }),

        ".icon": {
            width: 24,
            height: 24,
            minWidth: 24,
            display: "grid",
            placeItems: "center",

            svg: {
                width: 24,
                height: 24,
                minWidth: 24,

                path: {
                    stroke: "#667085",
                },
            },
        },

        ".chevron": {
            width: 20,
            marginLeft: "auto",
            height: 20,
            minWidth: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            svg: {
                width: 20,
                height: 20,
                minWidth: 20,

                path: {
                    stroke: "#667085",
                },
            },
        },
    },
}))
