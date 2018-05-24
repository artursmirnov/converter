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
    }

  };
};
