export default theme => {
  const baseCurrencyPanelHeight = theme.spacing.unit * 10;

  return {

    root: {
      marginBottom: theme.spacing.unit * 2,
      height: baseCurrencyPanelHeight
    },

    paper: {
      backgroundColor: theme.palette.primary.main,
      position: 'fixed',
      width: '100%',
      zIndex: 1,
      height: baseCurrencyPanelHeight
    },

    listPaper: {
      backgroundColor: theme.palette.common.white,
      marginBottom: theme.spacing.unit
    },

    list: {
      padding: 0
    },

    amount: {
      width: theme.spacing.unit * 12,
      marginRight: theme.spacing.unit * 3
    },

    amountInput: {
      textAlign: 'right'
    },

    amountLabel: {
      right: 0,
      left: 'initial',
      transformOrigin: 'top right'
    }

  };
};
