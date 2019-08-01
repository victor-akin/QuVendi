import gql from 'graphql-tag';

export const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
        accessToken: String!
    }

    extend type AuthenticatedResponse {
        test: String!
    }
`;


export const resolvers = {};


