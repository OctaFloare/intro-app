import {Link} from "react-router-dom"
import type {Episode as EpisodeType} from "./hooks/useEpisodes.ts"

export const Episode = ({name, id, air_date}: EpisodeType) => {
    return <div className="episode">
        <Link to={`/episode/${id}`}>
            <p className="title">{name}</p>
        </Link>
        <p className="air_date">{air_date}</p>
    </div>
}