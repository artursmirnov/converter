import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({

  palette: {
    primary: purple,
    secondary: green,
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
