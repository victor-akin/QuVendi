import { gql } from "apollo-boost";

export const AUTH_QUERY = gql`
    query authorized {
        authorized {
            isAuthorized
            message
            user {
                firstname
                lastname
                user_uid
            }
        }
    }
`;

export const TRANSACTIONS_QUERY = gql`
    query getTransactions {
        transactions {
            status
            transaction_uid
            transaction_type
            amount
            created_at
            month
        }
    }
`;