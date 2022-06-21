import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ocbeua1rmb01xm2gw50bas/master',
  cache: new InMemoryCache()  
})