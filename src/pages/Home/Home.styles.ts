import type { SxProps } from "@mui/material";
import { cinemaHeader } from "../../assets/index";

export const HeaderImg: SxProps = {
  backgroundImage: `linear-gradient(rgba(128,13,22,0.8), rgba(128,13,22,0.8)), url(${cinemaHeader})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#f2d97a",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 3,
  textAlign: "center",
  px: 2,
};

export const AboutContainer: SxProps = {
  width: "80%",
  margin: "10% 10% 0% 10%",
  alignItems: "center",
};

export const AboutTxt: SxProps = {
  flexDirection: "column",
  gap: 3,
};

export const AboutTitulo: SxProps = {
  fontFamily: "serif",
  fontWeight: "bold",
  color: "#800D16",
};

export const AboutTxtLine: SxProps = {
  color: "#474745",
  lineHeight: 1.7,
};

export const AboutImgContainer: SxProps = {
  overflow: "hidden",
  borderRadius: 1,
};

export const AboutImg: SxProps = {
  width: "100%",
  height: 320,
  objectFit: "cover",
};

export const FooterStack: SxProps = {
  backgroundColor: "#800D16",
  alignItems: "center",
  textAlign: "center",
  gap: 1,
  p: "2.5% 0%",
};

export const FooterIcon: SxProps = {
  fontSize: 32,
  color: "secondary.main",
};

export const FooterTitle: SxProps = {
  fontFamily: "serif",
  fontSize: "1.125rem",
  color: "#f2d97a",
};

export const FooterText: SxProps = {
  fontSize: "0.875rem",
  color: "#f2d97a",
  opacity: 0.6,
};