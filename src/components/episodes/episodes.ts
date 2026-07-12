import {gql} from "graphql-request";

export const EPISODES = gql`
    query {
        episodes {
            results{
                id
                name
                air_date
            }
        }
    }
`
