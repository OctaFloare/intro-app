import { useParams } from "react-router-dom"
import { Navbar } from "../navbar";
import { useCharacter } from "./hooks/useCharacter";
import { CharacterCard } from "./characterCard";
import "./character.css"

export const Character = () => {
    const params = useParams<{ id: string }>();

    const { data, isLoading, error } = useCharacter({ id: parseInt(params.id || "0", 10)});
    
    return <div>
        <Navbar />

        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        <CharacterCard character={data} />
    </div>
}
