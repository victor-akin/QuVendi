import { gql } from "apollo-boost";

export const AUTH_QUERY = gql`
    query authorized {
        authorized {
            isAuthorized
            message
            user {
                firstname
                lastname
            }
        }
    }
`;