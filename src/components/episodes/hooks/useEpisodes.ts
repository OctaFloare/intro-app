import {EPISODES} from "../episodes.ts";
import {useEffect, useState} from "react";
import {client} from "../../../common/graphql.ts";

export type Episode = {
    id: string;
    name: string;
    air_date: string;
}

type EpisodesResponse = {
    episodes: {
        results: Episode[];
    }
}

export const useEpisodes = () => {
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        client.request(EPISODES).then((response: EpisodesResponse) => {
            setEpisodes(response.episodes.results);
        }).catch((error: Error) => {
            setError(error);
        }).finally(() => {
            setLoading(false)
        });
    }, [])

    return {
        episodes,
        loading,
        error,
    }
}