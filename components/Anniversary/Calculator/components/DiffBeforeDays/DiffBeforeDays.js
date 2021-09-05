import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DateTime } from "luxon";
import { useState } from "react";
import { DateSelector, DiffCalculator, Title } from "..";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: { flex: 1 },
  flex: {
    display: "flex",
    alignItems: "center"
  },
  sub__label: {
    marginRight: 20
  },
  border: {
    margin: "10px 0",
    padding: "10px 0",
    borderBottom: "1px solid"
  },
  margin__padding__top__none: {
    marginTop: 0,
    paddingTop: 0
  },
  red: {
    fontWeight: "bold",
    margin: "0 10px",
    textDecoration: "underline",
    textUnderlineOffset: 2,
    color: "red"
  },
  result: {
    display: "flex"
  },
  hidden: {
    visibility: "hidden"
  },
  mt30: {
    margin: "30px 0 0 0"
  }
}));

const DiffBeforeDays = props => {
  const { matches } = props;
  const classes = useStyles();

  const [beforeDate, setBeforeDate] = useState({
    year: Number(DateTime.now().toFormat("yyyy")),
    month: Number(DateTime.now().toFormat("MM")),
    day: Number(DateTime.now().toFormat("dd"))
  });
  const [resultDate, setResultDate] = useState(null);
  const [beforeDays, setBeforDays] = useState(1);
  const [check, setCheck] = useState(false);

  const handleChangeDate = (value, type) => {
    setResultDate(null);
    setBeforeDate(prev => ({
      ...prev,
      [type]: value
    }));
  };

  return (
    <div className={clsx(classes.root, { [classes.mt30]: !matches })}>
      <Title value={"날짜 기준으로 몇일 전"} />
      <div
        className={clsx(
          classes.flex,
          classes.border,
          classes.margin__padding__top__none
        )}
      >
        <Typography className={classes.sub__label}>기준</Typography>
        <DateSelector value={beforeDate} onChange={handleChangeDate} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setResultDate(null);
            setBeforeDate({
              year: Number(DateTime.now().toFormat("yyyy")),
              month: Number(DateTime.now().toFormat("MM")),
              day: Number(DateTime.now().toFormat("dd"))
            });
          }}
        >
          당일 변경
        </Button>
      </div>

      <div
        className={clsx(
          classes.flex,
          classes.border,
          classes.margin__padding__top__none
        )}
      >
        <Typography className={classes.sub__label}>타겟</Typography>
        <TextField
          label="일 전"
          variant="outlined"
          margin="dense"
          value={beforeDays}
          onChange={e => {
            setResultDate(null);
            const { value } = e.target;
            const number = Number(value.replace(/[^-0-9]/g, ""));
            setBeforDays(number);
          }}
          onBlur={() => {
            if (beforeDays < 1) {
              setBeforDays(1);
            } else if (beforeDays > 10000000) {
              setBeforDays(10000000 - 1);
            } else {
              setBeforDays(beforeDays);
            }
          }}
        />
      </div>

      <div
        className={clsx(
          classes.flex,
          classes.border,
          classes.margin__padding__top__none
        )}
      >
        <DiffCalculator
          check={check}
          onHandleCheck={() => setCheck(prev => !prev)}
          onCalculator={result => {
            console.log("result", result);
            const date = DateTime.fromObject(beforeDate).minus({
              days: Math.abs(result)
            });
            setResultDate({
              year: Number(date.toFormat("yyyy")),
              month: Number(date.toFormat("MM")),
              day: Number(date.toFormat("dd"))
            });
          }}
          date1={beforeDate}
          date2={(() => {
            const date = DateTime.fromObject(beforeDate).minus({
              days: beforeDays
            });

            return {
              year: Number(date.toFormat("yyyy")),
              month: Number(date.toFormat("MM")),
              day: Number(date.toFormat("dd"))
            };
          })()}
          type={3}
        />
      </div>
      <div className={clsx(classes.result, { [classes.hidden]: !resultDate })}>
        <Typography>
          {beforeDate.year}년 {beforeDate.month}월 {beforeDate.day}일의{" "}
          {beforeDays}일 전은{" "}
        </Typography>
        <Typography className={classes.red}>
          {resultDate?.year}년 {resultDate?.month}월 {resultDate?.day}일{" "}
        </Typography>
        <Typography>입니다.</Typography>
      </div>
    </div>
  );
};

export default DiffBeforeDays;
