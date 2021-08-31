import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: new createHttpLink({
    uri: process.env.REACT_APP_BASE_API
  }),
  cache: new InMemoryCache({
    // if data share the same id
    // src: https://stackoverflow.com/questions/48840223/apollo-duplicates-first-result-to-every-node-in-array-of-edges
    dataIdFromObject: o => (o._id ? `${o.__typename}:${o._id}` : null),

    typePolicies: {
      Query: {
        fields: {
          pokemons: {
            keyArgs: false,
            merge(existing, incoming) {
              const existingResult = existing?.results ? existing.results : []

              const merged = {
                ...incoming,
                results: [
                  ...existingResult,
                  ...incoming.results
                ]
              }

              return merged
            }
          }
        }
      }
    }
  })
})
