import CssBaseline from '@material-ui/core/CssBaseline';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  apolloClient: {
    MockedProvider,
    // any props you want to pass to MockedProvider on every story
  },
}
