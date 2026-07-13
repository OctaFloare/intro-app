import { Navbar } from "../navbar";
import { Character } from "./character";
import { useCharacters, type Character as CharacterType } from "./hooks/useCharacters"

export const Characters = () => {
    const { characters, loading, error } = useCharacters();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <div>
        <Navbar />
    <div className="characters-container">
        {characters.map((character: CharacterType) => {
            return <Character
                key={`${character.id}-${character.name}`}
                name={character.name}
                image={character.image}
                id={character.id}
            />;
        })}
    </div>
    </div>
}
