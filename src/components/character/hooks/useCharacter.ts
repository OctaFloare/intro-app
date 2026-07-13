import { useQuery } from "@tanstack/react-query";
import { client } from "../../../common/graphql";
import { CHARACTER } from "../CHARACTER";

type Origin ={
    name: string;
    dimension: string;
}

export type Character = {
    id: number;
    name: string;
    image: string;
    species: string;
    gender: string;
    origin: Origin;
} 

type CharacterResponse = {
    character: Character;
}

export const useCharacter = ({ id }: { id: number }) => {
   return useQuery<Character | undefined>({
        queryKey: ["character"],
        queryFn: async () => {
            const response = await client.request<CharacterResponse>(CHARACTER, { id });

            return response.character;
        },
        retry: 1,
        gcTime: 1000 * 10,
    })
}
