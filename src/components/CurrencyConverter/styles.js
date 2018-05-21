export default theme => {
  return {

    root: {
      width: '100%'
    },

    panelSummary: {
      justifyContent: 'space-between'
    },

    code: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '10%',
      flexShrink: 0
    },

    title: {
      flexBasis: '100%',
      textAlign: 'left',
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary
    },

    rate: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '20%'
    }

  };
};
