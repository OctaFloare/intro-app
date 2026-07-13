import { Link } from "react-router";
import type { Character } from "./hooks/useCharacter";

export const CharacterCard = ({ character }: { character?: Character }) => {
    if(!character) {
        return <div>Character not found</div>
    }

    const onUpdateClick = () => {
        window.location.href = `/update-character/${character.id}`;
    }

    const onDeleteClick = () => {
        window.location.href = `/delete-character/${character.id}`;
    }

    return <div className="character-container">
        <div className="character-actions">
            <button className="update-button" onClick={onUpdateClick}>
                Update
            </button>
            <button className="delete-button" onClick={onDeleteClick}>
                Delete
            </button>
        </div>
        <img className="character-image" src={character.image} alt={character.name} width="200" height="200" />
        <div>{character.name}</div>
        <div>Species: {character.species}</div>
        <div>Gender: {character.gender}</div>
        <div>Origin: {character.origin.name}</div>
        <div>Origin Dimension: {character.origin.dimension}</div>
    </div>
}
