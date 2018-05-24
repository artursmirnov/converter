export default theme => {
  return {

    root: Object.assign({}, theme.mixins.toolbar, {
    }),

    appbar: {
      bottom: 0,
      top: 'initial',
      boxShadow: `
        0px -1px 3px 0px rgba(0, 0, 0, 0.2),
        0px -1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12)`
    }

  };
};