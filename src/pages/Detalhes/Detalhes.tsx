import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import { Clock3, Users } from "lucide-react";
import { type SyntheticEvent, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useObterFilme as obterFilme } from "../../controllers/Detalhes";
import { filmePadrao, obterFilmePorSlug } from "../../models/ReceitasFilmes";
import * as styles from "./Detalhes.styles";

type AbaDetalhes = "receita" | "sinopse";

const indicePorAba: Record<AbaDetalhes, number> = {
    receita: 0,
    sinopse: 1,
};

export const Detalhes = () => {
    const [abaAtiva, setAbaAtiva] = useState<AbaDetalhes>("receita");
    const [sinopsesPorSlug, setSinopsesPorSlug] = useState<Record<string, string>>({});
    const [carregandoSinopse, setCarregandoSinopse] = useState(false);
    const [erroSinopse, setErroSinopse] = useState<string | null>(null);
    const { filmeSlug } = useParams();

    const filmeEmDestaque = obterFilmePorSlug(filmeSlug) ?? filmePadrao;
    const sinopseDaApi = sinopsesPorSlug[filmeEmDestaque.slug];
    const sinopseExibida = sinopseDaApi ?? filmeEmDestaque.sinopse;

    const aoTrocarAba = (_event: SyntheticEvent, novoIndice: number) => {
        setAbaAtiva(novoIndice === 0 ? "receita" : "sinopse");
    };

    useEffect(() => {
        let estaAtivo = true;

        if (abaAtiva !== "sinopse" || sinopseDaApi) {
            return () => {
                estaAtivo = false;
            };
        }

        const carregarSinopse = async () => {
            setErroSinopse(null);
            setCarregandoSinopse(true);

            try {
                const resposta = await obterFilme({ name: filmeEmDestaque.titulo });

                if (!estaAtivo) {
                    return;
                }

                const filmeDaBusca =
                    resposta.results.find(
                        (filme) => filme.title.toLowerCase() === filmeEmDestaque.titulo.toLowerCase()
                    ) ?? resposta.results[0];

                const sinopseRetornada = filmeDaBusca?.overview?.trim();

                setSinopsesPorSlug((estadoAnterior) => ({
                    ...estadoAnterior,
                    [filmeEmDestaque.slug]: sinopseRetornada || filmeEmDestaque.sinopse,
                }));
            } catch {
                if (!estaAtivo) {
                    return;
                }

                setErroSinopse("Nao foi possivel carregar a sinopse online. Exibindo versao local.");
                setSinopsesPorSlug((estadoAnterior) => ({
                    ...estadoAnterior,
                    [filmeEmDestaque.slug]: filmeEmDestaque.sinopse,
                }));
            } finally {
                if (estaAtivo) {
                    setCarregandoSinopse(false);
                }
            }
        };

        void carregarSinopse();

        return () => {
            estaAtivo = false;
        };
    }, [abaAtiva, filmeEmDestaque.sinopse, filmeEmDestaque.slug, filmeEmDestaque.titulo, sinopseDaApi]);

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
                            <Typography sx={styles.textoMetadado}>Carregando sinopse do TMDB...</Typography>
                        )}

                        {erroSinopse && <Typography sx={styles.textoMetadado}>{erroSinopse}</Typography>}

                        <Typography sx={styles.textoSinopse}>{sinopseExibida}</Typography>
                    </Stack>
                )}
            </Box>
        </Stack>
    );
};