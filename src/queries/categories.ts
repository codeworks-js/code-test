import { gql } from "@apollo/client";

export const CATEGORIES = gql`
    query GetCategories {
    categories {
        id
        label
        technologies {
        id
        image
        label
        }
    }
    }
`;