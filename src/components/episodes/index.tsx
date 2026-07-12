import {type Episode as EpisodeType, useEpisodes} from "./hooks/useEpisodes.ts";
import {Episode} from "./episode";


export const Episodes = () => {
    const {episodes, loading, error} = useEpisodes();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <div className="episodes-container">
        {episodes.map((episode: EpisodeType) => {
            return <Episode
                id={episode.id}
                name={episode.name}
                air_date={episode.air_date}
            />;
        })}
    </div>
}