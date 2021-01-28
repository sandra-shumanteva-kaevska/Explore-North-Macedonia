import { createMuiTheme } from '@material-ui/core/styles'

export const myTheme = createMuiTheme({
    typography: {
        fontFamily: [
            'Chilanka',
            'cursive',
        ].join(','),
    },
    // overrides: {
    //     MuiAppBar: {
    //         colorDefault: "#3f51b5d1",
    //     },
    //     MuiCard: {
    //         root: {
    //             background: "#3f51b5d1",
    //         }
    //     },
    //     MuiOutlinedInput: {
    //         root: {
    //             background: "#3f51b5d1",
    //         }
    //     }
    // }
});