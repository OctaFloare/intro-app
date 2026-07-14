import { Link } from "react-router-dom"
import type { Character as CharacterType } from "./hooks/useCharacters"

type Something = {
    caca?: string;
}

const somethingElse : Something = {
    caca: "caca"
}

export const Character = ({ name, image, id }: CharacterType) => {
    return <div className="character">
        <Link to={`/character/${id}`}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
        </Link>
    </div>
}