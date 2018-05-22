import { createMuiTheme } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({

  palette: {
    primary: lightGreen,
    secondary: amber,
  },

  overrides: {

    MuiBackdrop: {

      root: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        zIndex: 900
      }

    }

  },

  props: {

    MuiButton: {
      disableFocusRipple: true
    }

  }

});

export default theme;
