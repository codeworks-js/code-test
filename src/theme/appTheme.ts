import { blue } from '@material-ui/core/colors';
import { createMuiTheme, Theme } from '@material-ui/core/styles';

export const lightTheme: Theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: blue[500],
            light: blue[200],
            dark: blue[700],
        },
    },
});

export const darkTheme: Theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#fc5a8d',
        },
        secondary: {
            main: blue[500],
        },
    },
});
