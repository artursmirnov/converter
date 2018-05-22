export default theme => {
  return {

    root: {
      width: '100%',
      textAlign: 'center',
      margin: `${theme.spacing.unit * 4}px 0`,
      padding: theme.spacing.unit * 4,
      borderRadius: theme.spacing.unit / 2,
      backgroundColor: theme.palette.grey[100]
    },

    childrenContainer: {
      marginTop: theme.spacing.unit * 3
    }

  };
};
