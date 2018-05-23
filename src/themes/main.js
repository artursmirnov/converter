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
        zIndex: 0
      }

    },

    MuiDialogActions: {

      root: {
        padding: '16px',
        margin: 0
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
