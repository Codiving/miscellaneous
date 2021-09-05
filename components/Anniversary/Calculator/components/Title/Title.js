import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    fontWeight: 600,
    borderBottom: "1px solid",
    fontSize: "1.25rem",
    marginBottom: 20,
    borderLeft: "3px solid blue",
    paddingLeft: 10
  }
}));

const Title = props => {
  const { value } = props;
  const classes = useStyles();

  return <Typography className={classes.root}>{value}</Typography>;
};

export default Title;
