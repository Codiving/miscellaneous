import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: { marginTop: 50, color: "gray", "& *": { fontSize: "0.9rem" } },
  mt10: { marginTop: 10 },
  mb10: { marginBottom: 10 },
  divide: {
    borderTop: "1px solid",
    paddingTop: 10
  }
}));

const Explain = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.mt10}>
        <Typography className={classes.mb10}>
          * 계산하는 날짜가 기준 날짜보다 이후인 경우 기준일 포함 또는 기준일
          미포함을 선택할 수 있습니다. (같은 날짜인 경우 불가)
        </Typography>
        <ul>
          <li>
            <Typography>
              기준 : 2021-12-12 / 계산 : 2021-12-12 / 결과 : 0일
            </Typography>
          </li>
          <li>
            <Typography>
              기준 : 2021-12-12 / 계산 : 2021-12-13 / 기준일 포함 / 결과 : 2일
            </Typography>
          </li>
          <li>
            <Typography>
              기준 : 2021-12-12 / 계산 : 2021-12-12 / 기준일 미포함 / 결과 : 1일
            </Typography>
          </li>
        </ul>
      </div>
      <div className={clsx(classes.mt10, classes.divide)}>
        <Typography className={classes.mb10}>
          * 계산하는 날짜가 기준 날짜와 동일하거나 이전인 경우 기준 날짜를
          포함하지 않습니다.
        </Typography>
        <ul>
          <li>
            <Typography>
              기준 : 2021-12-12 / 계산 : 2021-12-12 / 결과 : 0일
            </Typography>
          </li>
          <li>
            <Typography>
              기준 : 2021-12-12 / 계산 : 2021-12-11 / 결과 : 1일 전
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Explain;
