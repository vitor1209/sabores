import { Box, Skeleton, Stack, Tab, Tabs, Typography } from "@mui/material";
import { Clock3, Users } from "lucide-react";
import * as styles from "./Detalhes.styles";
import { useDetalhes } from "./Detalhes.hook";
import type { AbaDetalhes } from "./Detalhes.types";

const indicePorAba: Record<AbaDetalhes, number> = {
    receita: 0,
    sinopse: 1,
};

export const Detalhes = () => {

    const { abaAtiva, erroSinopse, filmeEmDestaque, aoTrocarAba, carregandoSinopse, sinopseExibida } = useDetalhes();

    return (
        <Stack sx={styles.container}>
            <Box sx={styles.cabecalho}>
                <Typography variant="h3" sx={styles.titulo}>
                    {filmeEmDestaque.titulo}
                </Typography>

                <Typography sx={styles.subtitulo}>
                    Receita: {filmeEmDestaque.nomeReceita}
                </Typography>
            </Box>

            <Box sx={styles.areaConteudo}>
                <Tabs value={indicePorAba[abaAtiva]} onChange={aoTrocarAba} sx={styles.abas}>
                    <Tab disableRipple label="Receita" sx={styles.botaoAba} />
                    <Tab disableRipple label="Sinopse" sx={styles.botaoAba} />
                </Tabs>

                {abaAtiva === "receita" && (
                    <Stack sx={styles.cartao}>
                        <Stack sx={styles.metadadosReceita}>
                            <Stack sx={styles.itemMetadado}>
                                <Clock3 size={16} strokeWidth={1.5} />
                                <Typography sx={styles.textoMetadado}>
                                    {filmeEmDestaque.receita.tempoPreparo}
                                </Typography>
                            </Stack>

                            <Stack sx={styles.itemMetadado}>
                                <Users size={16} strokeWidth={1.5} />
                                <Typography sx={styles.textoMetadado}>
                                    {filmeEmDestaque.receita.porcoes}
                                </Typography>
                            </Stack>
                        </Stack>

                        <Box sx={styles.secaoConteudo}>
                            <Typography variant="h5" sx={styles.tituloSecao}>
                                Ingredientes
                            </Typography>

                            <Stack component="ul" sx={styles.listaIngredientes}>
                                {filmeEmDestaque.receita.ingredientes.map((ingrediente, indice) => (
                                    <Box
                                        key={`${ingrediente}-${indice}`}
                                        component="li"
                                        sx={styles.itemListaIngredientes}
                                    >
                                        <Box component="span" sx={styles.marcadorIngrediente} />
                                        <Typography sx={styles.textoLista}>{ingrediente}</Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>

                        <Box sx={styles.secaoConteudo}>
                            <Typography variant="h5" sx={styles.tituloSecao}>
                                Modo de Preparo
                            </Typography>

                            <Stack component="ol" sx={styles.listaModoPreparo}>
                                {filmeEmDestaque.receita.modoPreparo.map((passo, indice) => (
                                    <Box key={`${passo}-${indice}`} component="li" sx={styles.itemListaModoPreparo}>
                                        <Box component="span" sx={styles.indicePasso}>
                                            {indice + 1}
                                        </Box>
                                        <Typography sx={styles.textoLista}>{passo}</Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    </Stack>
                )}

                {abaAtiva === "sinopse" && (
                    <Stack sx={styles.cartao}>
                        <Typography variant="h5" sx={styles.tituloSecao}>
                            Sinopse
                        </Typography>

                        {carregandoSinopse && (
                            <>
                                <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100%" }} />
                                <Skeleton variant="text" sx={{ fontSize: "1rem", width: "95%" }} />
                                <Skeleton variant="text" sx={{ fontSize: "1rem", width: "90%" }} />
                            </>)}

                        {erroSinopse && <Typography sx={styles.textoMetadado}>{erroSinopse}</Typography>}

                        <Typography sx={styles.textoSinopse}>{sinopseExibida}</Typography>
                    </Stack>
                )}
            </Box>
        </Stack>
    );
};