import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

import { QUVENDI_LOCAL, QUVENDI_HEROKU } from '../appConfig';
import { typeDefs, resolvers } from './queries/resolvers';
import AsyncStorage from '@react-native-community/async-storage';
import { access_token_storage } from './utils'

const cache = new InMemoryCache();

const authlink = createHttpLink({uri: QUVENDI_LOCAL}) 

// initial cache state
cache.writeData({
    data: {
      isLoggedIn: false,
      accessToken: 'initial token',
      transactions: [],
    }
})


export const client = AsyncStorage.getItem('access_token')
  .then(data => {
    let token = setContext((request, previousContext) => ({
        headers: {
            authorization: `Bearer ${data}`
        }
    }))

    return !!data ? Promise.resolve(token) : Promise.reject(token) 
  })
  .then(data => {
      let link = data.concat(authlink)

      cache.writeData({
          data: {
            isLoggedIn: true,
            // dataFromClient: null
          }
      })

      let clientObject = new ApolloClient({
          cache,
          link,
          typeDefs,
          resolvers,
      })
      
      return clientObject
  })
  .catch(err => {
      // unknown  error
      // setup empty ApolloClient to load app
    const emptyClient = new ApolloClient({
        cache,
        link: authlink,
        typeDefs,
        resolvers,
    })
      
    return emptyClient
  })


export const clientInit = new ApolloClient({
    cache,
    link: authlink,
    typeDefs,
    resolvers
})

