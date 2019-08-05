import gql from 'graphql-tag';

export const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
        accessToken: String!
        dataFromClient: String!
    }

    extend type AuthenticatedResponse {
        test: String!
    }

`;

/**
 * context object in resolver argument contains {client, cache, getCacheKey}
 * cache contains {readQuery, writeQuery, readFragment, writeFragment, writeData}
 */

export const resolvers = {
    Query: {
        dataFromClient: (rootObj, args, context, info) => {
            context.cache.writeData({data: {dataFromClient: 'from resolver'} })
            return 'changed from resolver'
        },
    },
};


// 15 th june 7pm