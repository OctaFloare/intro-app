import type { Character as CharacterType } from "./hooks/useCharacters"

export const Character = ({ name, image }: Omit<CharacterType, 'id'>) => {
    return <div className="character">
        <img src={image} alt={name} />
        <h3>{name}</h3>
    </div>
}