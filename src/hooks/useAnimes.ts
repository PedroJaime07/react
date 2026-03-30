import { useState } from "react";
import type { AnimeProps } from "../types/anime.type";
import { api } from "../services/api";

export const useAnimes = () => {
  const [animes, setAnimes] = useState<AnimeProps[]>();
  const [anime, setAnime] = useState<AnimeProps>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function buscarAnimes() {
    try {
      setLoading(true);
      setError(null);
      const { data } = await api.get<AnimeProps[]>("/animes");
      setAnimes(data);
    } catch (err) {
      setError(`Erro ao buscar animes: ${err}`);
    } finally {
      setLoading(false);
    }
  }

  async function buscarAnime(id: string | number | undefined) {
    try {
      setLoading(true);
      setError(null);
      const {data} = await api.get<AnimeProps>(`/animes/${id}`)
      setAnime(data)
    } catch (err) {
      setError(`Erro ao buscar anime: ${err}`);
    } finally {
        setLoading(false)
    }
  }

  async function criarAnimes(anime: Omit<AnimeProps, "id">) {
    try {
      setError(null);
      await api.post("/animes", anime);
    } catch (err) {
      setError(`Erro ao criar o anime: ${err}`);
    }
  }

  async function atualizarAnime(id: number | string | undefined, infos_animes: Partial<AnimeProps>) {
    try {
      setError(null);
      await api.put<AnimeProps>(`/animes/${id}`, infos_animes);
    } catch (err) {
      setError(`Erro ao atualizar o anime: ${err}`);
    }
  }

  async function deletarAnime(id: number | string | undefined) {
    try {
      setError(null);
      await api.delete(`/animes/${id}`);
    } catch (err) {
      setError(`Erro ao deletar o anime: ${err}`);
    }
  }

  return {
    animes,
    anime,
    loading,
    error,
    buscarAnimes,
    criarAnimes,
    atualizarAnime,
    deletarAnime,
    buscarAnime
  };
};
