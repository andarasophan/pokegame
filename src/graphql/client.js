import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_BASE_API,
  cache: new InMemoryCache({
    // if data share the same id
    // src: https://stackoverflow.com/questions/48840223/apollo-duplicates-first-result-to-every-node-in-array-of-edges
    dataIdFromObject: o => (o._id ? `${o.__typename}:${o._id}` : null),
  })
})
