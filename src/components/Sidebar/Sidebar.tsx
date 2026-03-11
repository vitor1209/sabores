import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Drawer, Typography } from "@mui/material";
import { ChevronDown, Film, Popcorn, Undo2 } from "lucide-react";
import { Outlet, useNavigate, useParams } from "react-router";
import { categoriasComFilmesDetalhados, filmePadrao } from "../../models/ReceitasFilmes";
import * as styles from "./Sidebar.styles";

const LARGURA_DRAWER = 280;

export default function SideBar() {
  const navigate = useNavigate();
  const { filmeSlug } = useParams();
  const slugAtivo = filmeSlug ?? filmePadrao.slug;

  return (
    <Box sx={styles.layout}>
      <Drawer variant="permanent" anchor="left" sx={styles.drawer(LARGURA_DRAWER)}>
        <Box sx={styles.sidebarContainer}>
          <Box sx={styles.logoContainer}>
            <Popcorn size={18} strokeWidth={1.8} />
            <Typography component="h2" sx={styles.logoTexto}>
              Além da Pipoca
            </Typography>
          </Box>

          <Box sx={styles.categoriasContainer}>
            {categoriasComFilmesDetalhados.map(({ categoria, filmes }) => (
              <Accordion key={categoria} disableGutters square elevation={0} sx={styles.acordeao}>
                <AccordionSummary expandIcon={<ChevronDown size={16} />} sx={styles.resumoAcordeao}>
                  <Box sx={styles.categoriaTituloContainer}>
                    <Film size={16} strokeWidth={2} />
                    <Typography sx={styles.categoriaTitulo}>{categoria}</Typography>
                  </Box>
                </AccordionSummary>

                <AccordionDetails sx={styles.detalhesAcordeao}>
                  <Box component="ul" sx={styles.listaFilmes}>
                    {filmes.map((filme) => (
                      <Box key={filme.slug} component="li" sx={styles.itemFilme}>
                        <Button
                          onClick={() => navigate(`/detalhes/${filme.slug}`, { viewTransition: true })}
                          sx={styles.botaoFilme(filme.slug === slugAtivo)}
                        >
                          {filme.titulo}
                        </Button>
                      </Box>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          <Box sx={styles.rodape}>
            <Button
              onClick={() => navigate("/", { viewTransition: true })}
              startIcon={<Undo2 size={16} />}
              sx={styles.botaoVoltar}
            >
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

