import React from "react";
import {
  ApolloProvider as Provider,
  ApolloClient,
//   HttpLink,
  InMemoryCache,
} from "@apollo/client";

export function ApolloProvider({ children }) {
    // React.useEffect(() => {
        const client = new ApolloClient({
            uri: 'https://code-test-back-service-tibbsrug5q-ew.a.run.app',
            cache: new InMemoryCache()
        });
        // setClient(client);
    // });

    // const [client, setClient] = React.useState(undefined);

    return client ? <Provider client={client}>{children}</Provider> : null;
}