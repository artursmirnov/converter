export default theme => {
  return {

    root: Object.assign({}, theme.mixins.toolbar, {
    }),

    header: {
      color: theme.palette.grey[50]
    }

  };
};
