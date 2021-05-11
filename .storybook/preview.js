import { MockedProvider } from '@apollo/client/testing';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme } from "../src/theme/appTheme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  apolloClient: {
    MockedProvider,
    // any props you want to pass to MockedProvider on every story
  },
}

export const decorators = [
  (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
  ),
];
