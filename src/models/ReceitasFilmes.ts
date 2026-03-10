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
        categoria: "Comédia / Biografia",
        filmes: [
            {
                slug: "julie-and-julia",
                titulo: "Julie & Julia",
                nomeReceita: "Boeuf Bourguignon (estilo Julia Child)",
                sinopse:
                    "Dois relatos entrelaçados: a famosa chef Julia Child aprendendo a cozinhar na França e Julie Powell tentando completar o desafio de fazer todas as receitas do livro de Julia. Um tributo à paciência e ao prazer da cozinha.",
                receita: {
                    tempoPreparo: "3h 30min (muito do tempo é cozimento lento)",
                    porcoes: "Serve 6 pessoas",
                    ingredientes: [
                        "1 kg de acém ou músculo em cubos",
                        "150 g de bacon em cubos",
                        "2 colheres de sopa de óleo",
                        "1 cebola grande picada",
                        "2 cenouras em rodelas",
                        "2 colheres de sopa de farinha de trigo",
                        "750 ml de vinho tinto seco (Bourgogne ou similar)",
                        "500 ml de caldo de carne",
                        "2 colheres de sopa de extrato de tomate",
                        "2 dentes de alho picados",
                        "1 bouquet garni (tomilho, louro, salsinha)",
                        "150 g de cogumelos em quartos",
                        "Sal e pimenta-do-reino a gosto",
                    ],
                    modoPreparo: [
                        "Tempere os cubos de carne com sal e pimenta. Seque-os com papel-toalha.",
                        "Doure o bacon em uma panela grande e reserve. Na mesma panela, doure os cubos de carne em batches no óleo até formar uma crosta; reserve com o bacon.",
                        "Refogue a cebola e a cenoura na panela até ficarem macias. Polvilhe a farinha e mexa por 1-2 minutos.",
                        "Adicione o vinho tinto, raspando o fundo para soltar os sabores, depois acrescente o caldo e o extrato de tomate.",
                        "Devolva a carne e o bacon para a panela, acrescente o bouquet garni e cozinhe em fogo baixo - ou no forno a 160°C - por 2,5 a 3 horas, até a carne ficar macia.",
                        "Frite os cogumelos separadamente e junte nos últimos 15 minutos de cozimento.",
                        "Ajuste sal e pimenta. Sirva com purê de batatas ou pão rústico.",
                    ],
                },
            },
        ],
    },
    {
        categoria: "Drama / Cozinha Contemporânea",
        filmes: [
            {
                slug: "chef",
                titulo: "Chef",
                nomeReceita: "Sanduíche Cubano do Chef Carl Casper",
                sinopse:
                    "Depois de perder o emprego num restaurante, um chef decide abrir um food truck e redescobrir sua paixão pela cozinha e pela família. A comida - simples e bem feita - é a alma do filme.",
                receita: {
                    tempoPreparo: "40min",
                    porcoes: "Serve 4 sanduíches",
                    ingredientes: [
                        "8 fatias de pão cubano ou pão ciabatta pequeno",
                        "400 g de lombo de porco assado, fatiado fino",
                        "8 fatias de presunto",
                        "8 fatias de queijo suíço",
                        "Picles em fatias",
                        "Mostarda amarela",
                        "Manteiga para grelhar",
                    ],
                    modoPreparo: [
                        "Passe mostarda nas metades internas do pão.",
                        "Monte o sanduíche com lombo fatiado, presunto, queijo suíço e picles.",
                        "Feche o sanduíche e passe manteiga nas faces externas.",
                        "Aqueça uma chapa ou frigideira pesada; pressione o sanduíche (idealmente com uma prensa) e grelhe até o queijo derreter e o pão ficar dourado, cerca de 3-4 minutos por lado.",
                        "Corte ao meio e sirva quente.",
                    ],
                },
            },
        ],
    },
    {
        categoria: "Romance / Doce",
        filmes: [
            {
                slug: "chocolat",
                titulo: "Chocolat",
                nomeReceita: "Chocolate Quente Cremoso da Vianne",
                sinopse:
                    "Em uma vila conservadora da França, Vianne abre uma loja de chocolates que transforma a comunidade com sabores e afeto. O filme celebra o poder do chocolate como conforto e provocação.",
                receita: {
                    tempoPreparo: "20min",
                    porcoes: "Serve 4 xícaras",
                    ingredientes: [
                        "500 ml de leite integral",
                        "100 g de chocolate amargo (60-70%) picado",
                        "2 colheres de sopa de cacau em pó",
                        "1 colher de sopa de açúcar (ajustar a gosto)",
                        "1/2 colher de chá de extrato de baunilha",
                        "Uma pitada de canela (opcional)",
                        "Chantilly ou raspas de chocolate para finalizar (opcional)",
                    ],
                    modoPreparo: [
                        "Aqueça o leite em fogo médio sem deixar ferver.",
                        "Adicione o chocolate picado e o cacau em pó, mexendo até derreter e homogeneizar.",
                        "Acrescente o açúcar, a baunilha e a canela; cozinhe por 2-3 minutos até ficar cremoso.",
                        "Sirva em canecas e finalize com chantilly ou raspas de chocolate, se desejar.",
                    ],
                },
            },
        ],
    },
    {
        categoria: "Aventura / Tropical",
        filmes: [
            {
                slug: "pirates-of-the-caribbean",
                titulo: "Pirates of the Caribbean",
                nomeReceita: "Rum Punch Caribenho (estilo dos sete mares)",
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