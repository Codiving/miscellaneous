import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  red: {
    fontWeight: "bold",
    margin: "0 10px",
    textDecoration: "underline",
    textUnderlineOffset: 2,
    color: "red"
  },
  flex: {
    display: "flex"
  }
}));

const Result = props => {
  const { className, value, date1, date2 } = props;
  const classes = useStyles();

  if (!value)
    return (
      <div className={clsx({ [className]: Boolean(className) })}>
        <Typography>동일 날짜입니다.</Typography>
      </div>
    );

  const { year: y1, month: m1, day: d1 } = date1;
  const { year: y2, month: m2, day: d2 } = date2;
  const text1 = `${y1}년 ${m1}월 ${d1}일`;
  const text2 = `${y2}년 ${m2}월 ${d2}일`;
  if (value < 0)
    return (
      <div className={clsx(classes.flex, { [className]: Boolean(className) })}>
        <Typography>
          {text1}은 {text2}
        </Typography>
        <Typography className={classes.red}>{value}일 </Typography>
        <Typography>전 입니다.</Typography>
      </div>
    );
  return (
    <div className={clsx(classes.flex, { [className]: Boolean(className) })}>
      <Typography>
        {text1}은 {text2}
      </Typography>
      <Typography className={classes.red}>{value}일 </Typography>
      <Typography>후 입니다.</Typography>
    </div>
  );
};

export default Result;
