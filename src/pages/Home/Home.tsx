import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { AboutContainer, AboutImg, AboutImgContainer, AboutTitulo, AboutTxt, AboutTxtLine, FooterStack, FooterText, FooterTitle, HeaderImg } from "./Home.styles";
import { Popcorn } from "lucide-react"
import { filmeComida, pipoca } from "../../assets";
import { Link } from "react-router";

export const Home = () => {
  return (
    <>
      <Stack>

        <Stack sx={HeaderImg}>
          <Popcorn strokeWidth={1.5} />
          <h1>Além da Pipoca</h1>
          <p>Descubra receitas inspiradas nos seus filmes favoritos.
            Cada filme conta uma história — e cada história tem um sabor.</p>

          <Button variant="contained"
            component={Link}
            to="/detalhes">
            Conheça Mais
          </Button>
        </Stack>

        <Stack>

          <Grid container spacing={6} sx={AboutContainer}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack sx={AboutTxt}>
                <Typography variant="h4" sx={AboutTitulo}>
                  De onde vem a inspiração?
                </Typography>

                <Typography sx={AboutTxtLine}>
                  Já saiu do cinema com vontade de experimentar aquele prato que
                  apareceu na tela? O Além da Pipoca nasceu dessa curiosidade. Nós
                  pesquisamos, testamos e adaptamos receitas icônicas do mundo dos
                  filmes para que você possa reproduzir em casa.
                </Typography>

                <Typography sx={AboutTxtLine}>
                  Do ratatouille perfeitamente fatiado de Remy ao chocolate sedutor
                  de Vianne Rocher, cada receita é uma homenagem à cena que nos fez
                  salivar. Cozinhar nunca foi tão cinematográfico.
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Stack sx={AboutImgContainer}>
                <Box
                  component="img"
                  src={pipoca}
                  alt="Pipoca e acessórios de cinema sobre uma mesa"
                  sx={AboutImg}
                />
              </Stack>
            </Grid>
          </Grid>

        </Stack>

        <Stack sx={{ m: "0% 0% 10% 0%" }}>
          <Grid container spacing={6} sx={AboutContainer}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack sx={AboutImgContainer}>
                <Box
                  component="img"
                  src={filmeComida}
                  alt="Pipoca e acessórios de cinema sobre uma mesa"
                  sx={AboutImg}
                />
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Stack sx={AboutTxt}>
                <Typography variant="h4" sx={AboutTitulo}>
                  Como funciona?
                </Typography>

                <Typography sx={AboutTxtLine}>
                  Navegue pelas categorias de filmes — animação, romance, drama, comédia — e escolha o título que desperta a sua fome. Para cada filme, preparamos uma receita completa com ingredientes, modo de preparo e uma sinopse para relembrar a história.
                </Typography>

                <Typography sx={AboutTxtLine}>
                  É simples: escolha o filme, vá para a cozinha e crie uma experiência que une o melhor do cinema com o melhor da gastronomia.
                </Typography>

                <Button variant="contained"
                  component={Link}
                  to="/detalhes">
                  Explorar Receitas
                </Button>

              </Stack>
            </Grid>
          </Grid>
        </Stack>

        <Stack sx={FooterStack}>
          <Popcorn strokeWidth={1.5} />

          <Typography sx={FooterTitle}>
            Além da Pipoca
          </Typography>

          <Typography sx={FooterText}>
            Feito com amor por quem ama cinema e gastronomia.
          </Typography>
        </Stack>

      </Stack>
    </>
  );
};

