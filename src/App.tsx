import React from 'react';
import { ApolloProvider } from './context/ApolloProvider';
import { 
  ThemeProvider, 
  createMuiTheme, 
  Theme, 
  responsiveFontSizes, 
} from '@material-ui/core/styles';
import { lightTheme, darkTheme } from './theme/appTheme';
import Layout from './components/organisms/Layout/Layout';
import { Home } from './pages/Home/Home';
import 'fontsource-roboto';

const AppContext = React.createContext(null);

function App() {
  const [useDefaultTheme, toggle] = React.useReducer((theme) => !theme, true);

  let theme: Theme = createMuiTheme(useDefaultTheme ? lightTheme : darkTheme);
  theme = responsiveFontSizes(theme);

  return (
      <React.Fragment>
        <AppContext.Provider value={null}>
          <ApolloProvider>
            <ThemeProvider theme={theme}>
              <Layout toggleTheme={toggle} useDefaultTheme={useDefaultTheme}>
                <Home />
              </Layout>
            </ThemeProvider>
            </ApolloProvider>
        </AppContext.Provider>
      </React.Fragment>
  );
}

export default App;
