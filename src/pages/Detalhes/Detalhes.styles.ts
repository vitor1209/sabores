import type { SxProps } from "@mui/material";

export const container: SxProps = {
	minHeight: "100%",
	width: "100%",
	borderRadius: 2,
	overflow: "hidden",
	backgroundColor: "background.paper",
	boxShadow: "0px 4px 20px rgba(16, 24, 40, 0.06)",
};

export const cabecalho: SxProps = {
	backgroundColor: "primary.main",
	color: "secondary.main",
	px: { xs: 3, md: 5 },
	py: { xs: 3, md: 4 },
};

export const titulo: SxProps = {
	fontFamily: "var(--font-sans)",
	fontWeight: 700,
	fontSize: { xs: "2rem", md: "2.625rem" },
	lineHeight: 1.1,
};

export const subtitulo: SxProps = {
	mt: 1,
	color: "rgba(241, 225, 148, 0.86)",
	fontSize: "1rem",
};

export const areaConteudo: SxProps = {
	px: { xs: 2, md: 5 },
	py: { xs: 3, md: 4 },
};

export const abas: SxProps = {
	minHeight: 0,
	mb: 3,
	borderBottom: "1px solid rgba(128, 13, 22, 0.2)",
	"& .MuiTabs-flexContainer": {
		gap: 1,
	},
	"& .MuiTabs-indicator": {
		height: 3,
		borderRadius: "4px 4px 0 0",
		backgroundColor: "primary.main",
	},
};

export const botaoAba: SxProps = {
	minHeight: 40,
	textTransform: "none",
	fontSize: "0.95rem",
	fontWeight: 700,
	color: "text.secondary",
	px: 2.5,
	"&.Mui-selected": {
		color: "primary.main",
	},
};

export const cartao: SxProps = {
	border: "1px solid rgba(128, 13, 22, 0.2)",
	borderRadius: 1.5,
	backgroundColor: "background.paper",
	p: { xs: 2.5, md: 4 },
	gap: 4,
};

export const metadadosReceita: SxProps = {
	flexDirection: "row",
	flexWrap: "wrap",
	alignItems: "center",
	gap: 3,
};

export const itemMetadado: SxProps = {
	flexDirection: "row",
	alignItems: "center",
	gap: 1,
	color: "text.secondary",
};

export const textoMetadado: SxProps = {
	fontSize: "0.875rem",
	color: "text.secondary",
};

export const secaoConteudo: SxProps = {
	display: "flex",
	flexDirection: "column",
	gap: 2,
};

export const tituloSecao: SxProps = {
	fontFamily: "var(--font-sans)",
	fontWeight: 700,
	color: "primary.main",
	fontSize: "1.4rem",
};

export const listaIngredientes: SxProps = {
	m: 0,
	p: 0,
	listStyle: "none",
	display: "flex",
	flexDirection: "column",
	gap: 1.25,
};

export const itemListaIngredientes: SxProps = {
	display: "flex",
	alignItems: "flex-start",
	gap: 1.5,
};

export const marcadorIngrediente: SxProps = {
	width: 8,
	height: 8,
	borderRadius: "50%",
	backgroundColor: "primary.main",
	mt: "10px",
	flexShrink: 0,
};

export const textoLista: SxProps = {
	fontSize: "0.95rem",
	lineHeight: 1.7,
	color: "text.primary",
};

export const listaModoPreparo: SxProps = {
	m: 0,
	p: 0,
	listStyle: "none",
	display: "flex",
	flexDirection: "column",
	gap: 2,
};

export const itemListaModoPreparo: SxProps = {
	display: "flex",
	alignItems: "flex-start",
	gap: 1.5,
};

export const indicePasso: SxProps = {
	width: 28,
	height: 28,
	borderRadius: "50%",
	display: "grid",
	placeItems: "center",
	flexShrink: 0,
	backgroundColor: "primary.main",
	color: "secondary.main",
	fontSize: "0.75rem",
	fontWeight: 700,
	mt: "2px",
};

export const textoSinopse: SxProps = {
	fontSize: "1rem",
	lineHeight: 1.8,
	color: "text.primary",
};
