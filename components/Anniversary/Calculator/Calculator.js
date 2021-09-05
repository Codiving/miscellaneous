import { makeStyles } from "@material-ui/core/styles";
import { DiffBeforeDays, DiffDaysDate } from "./components";
import DiffAfterDays from "./components/DiffAfterDays";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    display: "flex"
  }
}));

const Calculator = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DiffDaysDate />
      <DiffAfterDays />
      <DiffBeforeDays />
    </div>
  );
};

export default Calculator;
