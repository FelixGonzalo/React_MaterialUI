import {unstable_createMuiStrictModeTheme as createMuiTheme} from '@material-ui/core/styles'
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
   palette: {
    primary: {
      main: amber[800],
    },
    secondary: {
      main: '#124',
    },
  },
})

export default theme;