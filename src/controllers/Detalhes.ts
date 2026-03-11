import { api } from "../api/axios";
import type { MovieRequest, MovieResponse } from "../models/Detalhes.types";

const apiKeyPadrao = import.meta.env.VITE_TMDB_API_KEY;

export const obterFilme = async (request: MovieRequest): Promise<MovieResponse> => {
    const apiKey = request.apiKey ?? apiKeyPadrao;

    if (!apiKey) {
        throw new Error("Informe o token da API do TMDB em request.apiKey ou VITE_TMDB_API_KEY.");
    }

    const { data } = await api.get<MovieResponse>("/search/movie", {
        params: {
            api_key: apiKey,
            query: request.name,
            language: request.language ?? "pt-BR",
        },
    });

    return data;
};