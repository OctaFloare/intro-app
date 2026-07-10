import { useEffect, useState } from "react";
import { client } from "../../../common/graphql"
import { CHARACTERS } from "../characters";

export type Character = {
    id: string;
    name: string;
    image: string;
} 

type CharactersResponse = {
    characters: {
        results: Character[];
    }
}

export const useCharacters = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        client.request(CHARACTERS).then((response: CharactersResponse) => {
            setCharacters(response.characters.results);
        }).catch((error: Error) => {
            setError(error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);



    return {
        characters,
        loading,
        error
    }
}
