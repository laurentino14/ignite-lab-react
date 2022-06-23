import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4nwrfox0scy01yw0pcl5n1o/master",
  cache: new InMemoryCache(),
});
