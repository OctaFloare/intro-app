import { gql } from "graphql-request";

export const CHARACTER = gql`
    query ($id: ID!) {
        character (id: $id) {
            id
            name
            image
            species
            gender
            origin {
                name
                dimension
            }
        }
    }
`
