export type ReceitaFilme = {
    tempoPreparo: string;
    porcoes: string;
    ingredientes: string[];
    modoPreparo: string[];
};

export type FilmeDetalhes = {
    slug: string;
    titulo: string;
    nomeReceita: string;
    sinopse: string;
    receita: ReceitaFilme;
};

export type CategoriaComFilmesDetalhado = {
    categoria: string;
    filmes: FilmeDetalhes[];
};

export const categoriasComFilmesDetalhados: CategoriaComFilmesDetalhado[] = [
    {
        categoria: "Animação",
        filmes: [
            {
                slug: "ratatouille",
                titulo: "Ratatouille",
                nomeReceita: "Ratatouille Tradicional do Remy",
                sinopse:
                    "Remy, um rato com talento extraordinário para cozinhar, sonha em se tornar chef em Paris. Ao lado de Linguini, ele desafia preconceitos e prova que qualquer pessoa pode cozinhar quando existe paixão pelo que faz.",
                receita: {
                    tempoPreparo: "1h 20min",
                    porcoes: "Serve 4 pessoas",
                    ingredientes: [
                        "1 berinjela média em rodelas finas",
                        "1 abobrinha média em rodelas finas",
                        "2 tomates italianos em rodelas finas",
                        "1 pimentão amarelo pequeno em rodelas",
                        "2 colheres de sopa de azeite de oliva",
                        "2 dentes de alho picados",
                        "1 xícara de molho de tomate rústico",
                        "Sal, pimenta-do-reino e folhas de tomilho a gosto",
                    ],
                    modoPreparo: [
                        "Preaqueça o forno a 200°C e espalhe o molho de tomate no fundo de uma travessa redonda.",
                        "Intercale as rodelas de berinjela, abobrinha, tomate e pimentão formando uma espiral sobre o molho.",
                        "Misture o azeite, o alho, o sal, a pimenta e o tomilho; regue os legumes com essa mistura.",
                        "Cubra com papel-alumínio e asse por 35 minutos. Retire o papel e asse por mais 15-20 minutos para dourar levemente.",
                        "Finalize com um fio de azeite e ervas frescas. Sirva quente com pão artesanal ou arroz branco.",
                    ],
                },
            },
        ],
    },
    {
        categoria: "Comédia",
        filmes: [
            {
                slug: "kung-fu-panda",
                titulo: "Kung Fu Panda",
                nomeReceita: "Macarrão Chinês do Sr. Ping",
                sinopse:
                    "Po é um panda desajeitado que trabalha no restaurante de macarrão de seu pai, mas sonha em se tornar um grande mestre de kung fu. Quando inesperadamente é escolhido como o Dragão Guerreiro, ele precisa treinar com os lendários Cinco Furiosos para salvar o Vale da Paz.",
                receita: {
                    tempoPreparo: "25min",
                    porcoes: "Serve 3 pessoas",
                    ingredientes: [
                        "300 g de macarrão tipo yakisoba",
                        "2 colheres de sopa de óleo de gergelim",
                        "2 dentes de alho picados",
                        "1 cenoura em tiras finas",
                        "1/2 pimentão em tiras",
                        "1 xícara de repolho fatiado",
                        "3 colheres de sopa de molho shoyu",
                        "1 colher de sopa de molho de ostra",
                        "1 colher de chá de açúcar",
                        "Cebolinha picada para finalizar"
                    ],
                    modoPreparo: [
                        "Cozinhe o macarrão conforme as instruções da embalagem e reserve.",
                        "Aqueça o óleo de gergelim em uma panela ou wok.",
                        "Refogue o alho rapidamente.",
                        "Adicione a cenoura, o pimentão e o repolho e salteie por alguns minutos.",
                        "Acrescente o macarrão cozido.",
                        "Misture o molho shoyu, o molho de ostra e o açúcar.",
                        "Mexa bem até o molho envolver todo o macarrão.",
                        "Finalize com cebolinha e sirva quente."
                    ]
                }
            }
        ],
    },
    {
        categoria: "Drama",
        filmes: [
            {
                slug: "the-godfather",
                titulo: "O Poderoso Chefão",
                nomeReceita: "Espaguete com Molho de Tomate Italiano",
                sinopse:
                    "A história da poderosa família mafiosa Corleone e da transformação de Michael Corleone em líder do império criminoso. Um dos filmes mais influentes da história do cinema.",
                receita: {
                    tempoPreparo: "40min",
                    porcoes: "Serve 4 pessoas",
                    ingredientes: [
                        "400 g de espaguete",
                        "2 colheres de sopa de azeite",
                        "2 dentes de alho picados",
                        "1 lata de tomate pelado",
                        "1 colher de chá de açúcar",
                        "Sal e pimenta a gosto",
                        "Folhas de manjericão",
                        "Queijo parmesão ralado"
                    ],
                    modoPreparo: [
                        "Cozinhe o espaguete em água com sal.",
                        "Refogue o alho no azeite.",
                        "Adicione o tomate pelado e cozinhe por 15 minutos.",
                        "Tempere com sal, pimenta e açúcar.",
                        "Misture o molho ao espaguete e finalize com manjericão e parmesão."
                    ]
                }
            }
        ],
    },
    {
        categoria: "Romance",
        filmes: [
            {
                slug: "lady-and-the-tramp",
                titulo: "A Dama e o Vagabundo",
                nomeReceita: "Espaguete com Almôndegas",
                sinopse:
                    "Uma elegante cadela chamada Lady conhece um cachorro de rua chamado Vagabundo. Juntos vivem uma aventura romântica que inclui uma das cenas mais famosas do cinema: dividir um prato de espaguete.",
                receita: {
                    tempoPreparo: "50min",
                    porcoes: "Serve 4 pessoas",
                    ingredientes: [
                        "400 g de espaguete",
                        "300 g de carne moída",
                        "1 ovo",
                        "2 colheres de sopa de farinha de rosca",
                        "1 dente de alho picado",
                        "1 lata de molho de tomate",
                        "Sal e pimenta a gosto",
                        "Queijo parmesão ralado"
                    ],
                    modoPreparo: [
                        "Misture a carne moída, ovo, alho e farinha de rosca.",
                        "Modele pequenas almôndegas.",
                        "Frite ou asse as almôndegas até dourar.",
                        "Aqueça o molho de tomate e adicione as almôndegas.",
                        "Cozinhe o espaguete e misture ao molho.",
                        "Finalize com queijo parmesão."
                    ]
                }
            }
        ],
    },
    {
        categoria: "Aventura",
        filmes: [
            {
                slug: "pirates-of-the-caribbean",
                titulo: "Piratas do Caribe",
                nomeReceita: "Rum Punch Caribenho",
                sinopse:
                    "Piratas, marés e rum: a franquia traz o clima dos mares tropicais - perfeito para um coquetel clássico de piratas (versão sem álcool também possível).",
                receita: {
                    tempoPreparo: "10min",
                    porcoes: "Serve 4 copos (coquetel)",
                    ingredientes: [
                        "120 ml de rum escuro",
                        "60 ml de rum claro (opcional)",
                        "240 ml de suco de abacaxi",
                        "120 ml de suco de laranja",
                        "30 ml de suco de limão fresco",
                        "2 colheres de sopa de xarope simples (ou a gosto)",
                        "Gelo e rodelas de laranja/limão para decorar",
                        "Folhas de hortelã (opcional)",
                    ],
                    modoPreparo: [
                        "Em uma jarra, misture os sucos, os runs e o xarope simples.",
                        "Prove e ajuste a doçura com mais xarope, se necessário.",
                        "Sirva sobre bastante gelo e decore com rodelas de laranja e hortelã.",
                        "Para versão sem álcool, substitua o rum por suco de maracujá ou água com gás e um pouco de extrato de rum (opcional).",
                    ],
                },
            },
        ],
    },
];

export const filmesDetalhados = categoriasComFilmesDetalhados.flatMap(({ filmes }) => filmes);

export const filmePadrao = filmesDetalhados[0];

export const obterFilmePorSlug = (filmeSlug?: string) => {
    if (!filmeSlug) {
        return undefined;
    }

    return filmesDetalhados.find((filme) => filme.slug === filmeSlug);
};