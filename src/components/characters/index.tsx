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

    return <div className="characters-container">
        {characters.map((character: CharacterType) => {
            return <div key={`${character.id}-${character.name}`}>
                <Character name={character.name} image={character.image} />
            </div>;
        })}
    </div>
}
