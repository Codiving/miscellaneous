import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { DiffBeforeDays, DiffDaysDate } from "./components";
import DiffAfterDays from "./components/DiffAfterDays";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "row"
  },
  column: {
    flexDirection: "column"
  }
}));

const Calculator = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:1200px)");

  return (
    <div className={clsx(classes.root, { [classes.column]: !matches })}>
      <DiffDaysDate matches={matches} />
      <DiffAfterDays matches={matches} />
      <DiffBeforeDays matches={matches} />
    </div>
  );
};

export default Calculator;
