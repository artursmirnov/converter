import { createMuiTheme } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';
import amber from '@material-ui/core/colors/amber';
import indigo from '@material-ui/core/colors/indigo';
import teal from '@material-ui/core/colors/teal';
import cyan from '@material-ui/core/colors/cyan';
import blueGrey from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({

  palette: {
    primary: teal,
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
