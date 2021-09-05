import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  }
}));

const Sudoku = () => {
  const classes = useStyles();
  return <div className={classes.root}>스도쿠</div>;
};

export default Sudoku;
