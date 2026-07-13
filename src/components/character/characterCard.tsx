import type { Character } from "./hooks/useCharacter";

export const CharacterCard = ({ character }: { character?: Character }) => {
    if(!character) {
        return <div>Character not found</div>
    }

    return <div className="character-container">
        <img src={character.image} alt={character.name} />
        <div>{character.name}</div>
        <div>Species: {character.species}</div>
        <div>Gender: {character.gender}</div>
        <div>Origin: {character.origin.name}</div>
        <div>Origin Dimension: {character.origin.dimension}</div>
    </div>
}
