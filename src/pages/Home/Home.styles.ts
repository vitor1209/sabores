import type { SxProps } from "@mui/material";
import { cinemaHeader } from "../../assets/index";

export const HeaderImg: SxProps = {
  backgroundImage: `linear-gradient(rgba(128, 13, 22, 0.82), rgba(128, 13, 22, 0.82)), url(${cinemaHeader})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "secondary.main",
  minHeight: "100dvh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 3,
  textAlign: "center",
  px: { xs: 2.5, md: 4 },
};

export const HeroTitle: SxProps = {
  fontFamily: "var(--font-sans)",
  fontWeight: 700,
  fontSize: { xs: "2.2rem", md: "3.6rem" },
  letterSpacing: "0.01em",
  m: 0,
};

export const HeroDescricao: SxProps = {
  maxWidth: 700,
  fontSize: { xs: "1rem", md: "1.125rem" },
  lineHeight: 1.7,
  opacity: 0.95,
  m: 0,
};

export const AboutContainer: SxProps = {
  width: { xs: "90%", lg: "82%" },
  margin: { xs: "12% 5% 0", lg: "8% 9% 0" },
  alignItems: "center",
};

export const AboutTxt: SxProps = {
  flexDirection: "column",
  gap: 3,
};

export const AboutTitulo: SxProps = {
  fontFamily: "var(--font-sans)",
  fontWeight: 700,
  color: "primary.main",
};

export const AboutTxtLine: SxProps = {
  color: "text.secondary",
  lineHeight: 1.7,
};

export const AboutImgContainer: SxProps = {
  overflow: "hidden",
  borderRadius: 2,
  border: "1px solid rgba(128, 13, 22, 0.18)",
};

export const AboutImg: SxProps = {
  width: "100%",
  height: { xs: 260, md: 320 },
  objectFit: "cover",
};

export const SecaoSecundaria: SxProps = {
  pb: { xs: 8, md: 10 },
};

export const FooterStack: SxProps = {
  backgroundColor: "primary.main",
  alignItems: "center",
  textAlign: "center",
  gap: 1, 
  p: { xs: "9% 0", md: "3.2% 0" },
};

export const FooterIcon: SxProps = {
  fontSize: 32,
  color: "secondary.main",
};

export const FooterTitle: SxProps = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.125rem",
  color: "secondary.main",
};

export const FooterText: SxProps = {
  fontSize: "0.875rem",
  color: "rgba(241, 225, 148, 0.72)",
};