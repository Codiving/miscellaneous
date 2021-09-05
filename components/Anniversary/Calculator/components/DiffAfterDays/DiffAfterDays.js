import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { DateTime } from "luxon";
import { useState } from "react";
import { DateSelector, DiffCalculator, Title } from "..";

const useStyles = makeStyles(theme => ({
  root: { flex: 1, margin: "0 10px" },
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

const DiffAfterDays = props => {
  const { matches } = props;
  const classes = useStyles();

  const [beforeDate, setBeforeDate] = useState({
    year: Number(DateTime.now().toFormat("yyyy")),
    month: Number(DateTime.now().toFormat("MM")),
    day: Number(DateTime.now().toFormat("dd"))
  });
  const [resultDate, setResultDate] = useState(null);
  const [afterDays, setAfterDays] = useState(1);
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
      <Title value={"날짜 기준으로 몇일 후"} />
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
          label="일 후"
          variant="outlined"
          margin="dense"
          value={afterDays}
          onChange={e => {
            setResultDate(null);
            const { value } = e.target;
            const number = Number(value.replace(/[^-0-9]/g, ""));
            setAfterDays(number);
          }}
          onBlur={() => {
            if (afterDays < 1) {
              setAfterDays(1);
            } else if (afterDays > 10000000) {
              setAfterDays(10000000 - 1);
            } else {
              setAfterDays(afterDays);
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
            const date = DateTime.fromObject(beforeDate).plus({
              days: result
            });
            setResultDate({
              year: Number(date.toFormat("yyyy")),
              month: Number(date.toFormat("MM")),
              day: Number(date.toFormat("dd"))
            });
          }}
          date1={beforeDate}
          date2={(() => {
            const date = DateTime.fromObject(beforeDate).plus({
              days: afterDays
            });

            return {
              year: Number(date.toFormat("yyyy")),
              month: Number(date.toFormat("MM")),
              day: Number(date.toFormat("dd"))
            };
          })()}
          type={2}
        />
      </div>
      <div className={clsx(classes.result, { [classes.hidden]: !resultDate })}>
        <Typography>
          {beforeDate.year}년 {beforeDate.month}월 {beforeDate.day}일의{" "}
          {afterDays}일 후는{" "}
        </Typography>
        <Typography className={classes.red}>
          {resultDate?.year}년 {resultDate?.month}월 {resultDate?.day}일{" "}
        </Typography>
        <Typography>입니다.</Typography>
      </div>
    </div>
  );
};

export default DiffAfterDays;
