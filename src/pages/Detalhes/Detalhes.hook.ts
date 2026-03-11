import { useEffect, useState, type SyntheticEvent } from "react";
import { useParams } from "react-router";
import { filmePadrao, obterFilmePorSlug } from "../../models/ReceitasFilmes";
import type { AbaDetalhes } from "./Detalhes.types";
import { obterFilme } from "../../controllers/Detalhes";

export const useDetalhes = () => {
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
    
                    setErroSinopse("Nao foi possivel carregar a sinopse.");
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

        return {
            abaAtiva,
            erroSinopse,
            filmeEmDestaque,
            sinopseExibida,
            carregandoSinopse,
            aoTrocarAba,
        }
}