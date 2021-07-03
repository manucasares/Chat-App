import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#1e88e5',
        },
        secondary: {
            main: '#512da8',
        },
    },
    typography: {
        fontFamily: 'Open Sans, Arial',
    },
});

mainTheme = responsiveFontSizes( mainTheme );

export default mainTheme;