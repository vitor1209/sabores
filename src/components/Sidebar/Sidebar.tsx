import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Drawer, Typography } from "@mui/material";
import { ChevronDown, Heart, Popcorn, Undo2 } from "lucide-react";
import { Link, Outlet } from "react-router";
import * as styles from "./Sidebar.styles";

interface CategoriaComFilmes {
  categoria: string;
  filmes: string[];
}

const LARGURA_DRAWER = 280;

const categoriasComFilmes: CategoriaComFilmes[] = [
  {
    categoria: "Romance",
    filmes: ["Diario de uma Paixao", "Como Eu Era Antes de Voce", "La La Land"],
  },
  {
    categoria: "Animacao",
    filmes: ["Ratatouille", "A Viagem de Chihiro", "Viva: A Vida e uma Festa"],
  },
  {
    categoria: "Drama",
    filmes: ["Comer, Rezar, Amar", "Chef", "O Menu"],
  },
  {
    categoria: "Comedia",
    filmes: ["Julie & Julia", "Hancock", "As Branquelas"],
  },
  {
    categoria: "Aventura",
    filmes: ["Piratas do Caribe", "Indiana Jones", "Jumanji"],
  },
];

export default function SideBar() {
  return (
    <Box sx={styles.layout}>
      <Drawer variant="permanent" anchor="left" sx={styles.drawer(LARGURA_DRAWER)}>
        <Box sx={styles.sidebarContainer}>
          <Box sx={styles.logoContainer}>
            <Popcorn size={18} strokeWidth={1.8} />
            <Typography component="h2" sx={styles.logoTexto}>
              Alem da Pipoca
            </Typography>
          </Box>

          <Box sx={styles.categoriasContainer}>
            {categoriasComFilmes.map(({ categoria, filmes }) => (
              <Accordion key={categoria} disableGutters square elevation={0} sx={styles.acordeao}>
                <AccordionSummary expandIcon={<ChevronDown size={16} />} sx={styles.resumoAcordeao}>
                  <Box sx={styles.categoriaTituloContainer}>
                    <Heart size={16} strokeWidth={2} />
                    <Typography sx={styles.categoriaTitulo}>{categoria}</Typography>
                  </Box>
                </AccordionSummary>

                <AccordionDetails sx={styles.detalhesAcordeao}>
                  <Box component="ul" sx={styles.listaFilmes}>
                    {filmes.map((filme) => (
                      <Box key={filme} component="li" sx={styles.itemFilme}>
                        <Typography sx={styles.textoFilme}>{filme}</Typography>
                      </Box>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          <Box sx={styles.rodape}>
            <Button component={Link} to="/" startIcon={<Undo2 size={16} />} sx={styles.botaoVoltar}>
              Voltar
            </Button>
          </Box>
        </Box>
      </Drawer>

      <Box component="main" sx={styles.conteudoPrincipal}>
        <Outlet />
      </Box>
    </Box>
  );
}

