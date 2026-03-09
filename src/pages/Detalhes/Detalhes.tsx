import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import { Clock3, Users } from "lucide-react";
import { type SyntheticEvent, useState } from "react";
import * as styles from "./Detalhes.styles";

type AbaDetalhes = "receita" | "sinopse";

interface ReceitaFilme {
    tempoPreparo: string;
    porcoes: string;
    ingredientes: string[];
    modoPreparo: string[];
}

interface FilmeDetalhes {
    titulo: string;
    nomeReceita: string;
    sinopse: string;
    receita: ReceitaFilme;
}

const filmeEmDestaque: FilmeDetalhes = {
    titulo: "Ratatouille",
    nomeReceita: "Ratatouille Tradicional do Remy",
    sinopse:
        "Remy, um rato com talento extraordinario para cozinhar, sonha em se tornar chef em Paris. Ao lado de Linguini, ele desafia preconceitos e prova que qualquer pessoa pode cozinhar quando existe paixao pelo que faz.",
    receita: {
        tempoPreparo: "1h 20min",
        porcoes: "Serve 4 pessoas",
        ingredientes: [
            "1 berinjela media em rodelas finas",
            "1 abobrinha media em rodelas finas",
            "2 tomates italianos em rodelas finas",
            "1 pimentao amarelo pequeno em rodelas",
            "2 colheres de sopa de azeite de oliva",
            "2 dentes de alho picados",
            "1 xicara de molho de tomate rustico",
            "Sal, pimenta-do-reino e folhas de tomilho a gosto",
        ],
        modoPreparo: [
            "Preaqueca o forno a 200 graus e espalhe o molho de tomate no fundo de uma travessa redonda.",
            "Intercale as rodelas de berinjela, abobrinha, tomate e pimentao formando uma espiral sobre o molho.",
            "Misture o azeite, o alho, o sal, a pimenta e o tomilho; regue os legumes com essa mistura.",
            "Cubra com papel-aluminio e asse por 35 minutos. Retire o papel e asse por mais 20 minutos para dourar levemente.",
            "Finalize com um fio de azeite e ervas frescas. Sirva quente com pao artesanal ou arroz branco.",
        ],
    },
};

const indicePorAba: Record<AbaDetalhes, number> = {
    receita: 0,
    sinopse: 1,
};

export const Detalhes = () => {
    const [abaAtiva, setAbaAtiva] = useState<AbaDetalhes>("receita");

    const aoTrocarAba = (_event: SyntheticEvent, novoIndice: number) => {
        setAbaAtiva(novoIndice === 0 ? "receita" : "sinopse");
    };

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

                        <Typography sx={styles.textoSinopse}>{filmeEmDestaque.sinopse}</Typography>
                    </Stack>
                )}
            </Box>
        </Stack>
    );
};