import type { SxProps } from "@mui/material";

export const layout: SxProps = {
  display: "flex",
  minHeight: "100dvh",
  backgroundColor: "background.default",
};

export const drawer = (largura: number): SxProps => ({
  width: largura,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: largura,
    boxSizing: "border-box",
    backgroundColor: "primary.main",
    color: "secondary.main",
    borderRight: "1px solid rgba(241, 225, 148, 0.45)",
  },
});

export const sidebarContainer: SxProps = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

export const logoContainer: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  px: 2.5,
  py: 3,
  borderBottom: "1px solid rgba(241, 225, 148, 0.4)",
};

export const logoTexto: SxProps = {
  fontFamily: "var(--font-sans)",
  fontWeight: 700,
  fontSize: "1.1rem",
  color: "secondary.main",
};

export const categoriasContainer: SxProps = {
  flex: 1,
  overflowY: "auto",
  px: 2,
  py: 1,
  "&::-webkit-scrollbar": {
    width: 8,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(241, 225, 148, 0.35)",
    borderRadius: 999,
  },
};

export const acordeao: SxProps = {
  backgroundColor: "transparent",
  color: "secondary.main",
  boxShadow: "none",
  borderBottom: "1px solid rgba(241, 225, 148, 0.4)",
  "&::before": {
    display: "none",
  },
};

export const resumoAcordeao: SxProps = {
  minHeight: 44,
  px: 0,
  "& .MuiAccordionSummary-content": {
    m: 0,
    py: 1.5,
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    my: 0,
    py: 1.5,
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "secondary.main",
  },
};

export const categoriaTituloContainer: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 1.1,
};

export const categoriaTitulo: SxProps = {
  fontSize: "0.92rem",
  fontWeight: 600,
  color: "secondary.main",
};

export const detalhesAcordeao: SxProps = {
  px: 0,
  pt: 0,
  pb: 1.5,
};

export const listaFilmes: SxProps = {
  m: 0,
  p: 0,
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: 0.5,
};

export const itemFilme: SxProps = {
  px: 0,
  py: 0,
};

export const botaoFilme = (ativo: boolean): SxProps => ({
  width: "100%",
  justifyContent: "flex-start",
  textTransform: "none",
  fontSize: "0.85rem",
  lineHeight: 1.5,
  fontWeight: 500,
  px: 1,
  py: 0.6,
  borderRadius: 1,
  borderLeft: ativo ? "2px solid #F1E194" : "2px solid transparent",
  color: ativo ? "secondary.main" : "rgba(255, 248, 224, 0.92)",
  backgroundColor: ativo ? "rgba(241, 225, 148, 0.12)" : "transparent",
  "&:hover": {
    backgroundColor: "rgba(241, 225, 148, 0.12)",
  },
});

export const rodape: SxProps = {
  mt: "auto",
  px: 2.5,
  py: 2.5,
  borderTop: "1px dashed rgba(241, 225, 148, 0.65)",
};

export const botaoVoltar: SxProps = {
  width: "100%",
  justifyContent: "flex-start",
  textTransform: "none",
  color: "secondary.main",
  fontWeight: 700,
  borderRadius: 1,
  px: 1,
  py: 1,
  "&:hover": {
    backgroundColor: "rgba(241, 225, 148, 0.12)",
  },
};

export const conteudoPrincipal: SxProps = {
  flexGrow: 1,
  minWidth: 0,
  p: { xs: 2, md: 3.5 },
  backgroundColor: "background.default",
};
