import { gql } from "graphql-request";

export const CHARACTERS = gql`
    query {
        characters {
            results{
                id
                name
                image
            }
        }
    }
`
