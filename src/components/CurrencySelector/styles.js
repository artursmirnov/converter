export default theme => {
  return {

    root: {
      minHeight: theme.spacing.unit * 20,
      position: 'relative'
    },

    avatar: {
      fontSize: '0.9rem',
      border: `1px solid ${theme.palette.grey[900]}`
    },

    filter: {
      margin: `0 ${theme.spacing.unit * 3}px`
    },

    nodata: {
      margin: theme.spacing.unit * 3
    }

  };
};
