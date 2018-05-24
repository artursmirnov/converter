export default theme => {
  return {

    root: {
      marginBottom: theme.spacing.unit * 2
    },

    paper: {
      backgroundColor: theme.palette.primary.main
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
