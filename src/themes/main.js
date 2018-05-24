import { createMuiTheme } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({

  palette: {
    primary: lightGreen,
    secondary: amber,
  },

  overrides: {

    MuiButton: {

      root: {
        whiteSpace: 'nowrap'
      }

    },

    MuiBackdrop: {

      root: {
        zIndex: 0
      }

    },

    MuiDialog: {

      root: {
        alignItems: 'flex-start'
      },

      paper: {
        width: '100%'
      }

    },

    MuiDialogActions: {

      root: {
        padding: '16px',
        margin: 0
      }

    },

    MuiListItemSecondaryAction: {

      root: {
        display: 'flex',
        alignItems: 'center'
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
