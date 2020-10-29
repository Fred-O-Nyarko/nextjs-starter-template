import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FFA023",
            dark: "#ab6100"
        },

        secondary: {
            main: "#fafafa"
        }
    },

    typography: {
        fontFamily: [
            'Open Sans',
            'Poppins'
        ].join(','),
    }

})

theme = responsiveFontSizes(theme)

export default theme