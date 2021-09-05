import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { DateTime } from "luxon";
import { useState } from "react";
import { DateSelector, DiffCalculator, Result, Title } from "..";
import { Explain } from "./components";

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
  hidden: {
    visibility: "hidden"
  }
}));

const DiffDaysDate = props => {
  const { matches } = props;

  const classes = useStyles();

  const [diffDaysDate1, setDiffDaysDate1] = useState({
    year: Number(DateTime.now().toFormat("yyyy")),
    month: Number(DateTime.now().toFormat("MM")),
    day: Number(DateTime.now().toFormat("dd"))
  });
  const [diffDaysDate2, setDiffDaysDate2] = useState({
    year: Number(DateTime.now().toFormat("yyyy")),
    month: Number(DateTime.now().toFormat("MM")),
    day: Number(DateTime.now().toFormat("dd"))
  });
  const [check, setCheck] = useState(false);
  const [diffDays, setDiffDaysDate] = useState(0);
  const [display, setDisplay] = useState(false);

  const handleChangeDate1 = (value, type) => {
    setDisplay(false);
    setDiffDaysDate1(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleChangeDate2 = (value, type) => {
    setDisplay(false);
    setDiffDaysDate2(prev => ({
      ...prev,
      [type]: value
    }));
  };

  return (
    <div className={classes.root}>
      <Title value={"날짜와 날짜 계산기"} />

      <div
        className={clsx(
          classes.flex,
          classes.border,
          classes.margin__padding__top__none
        )}
      >
        <Typography className={classes.sub__label}>기준</Typography>
        <DateSelector value={diffDaysDate1} onChange={handleChangeDate1} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setDisplay(false);
            setDiffDaysDate1({
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
        <DateSelector
          className={classes.border}
          value={diffDaysDate2}
          onChange={handleChangeDate2}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setDisplay(false);
            setDiffDaysDate2({
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
        <DiffCalculator
          check={check}
          onHandleCheck={() => setCheck(prev => !prev)}
          onCalculator={result => {
            console.log(result);
            setDiffDaysDate(result);
            setDisplay(true);
          }}
          date1={diffDaysDate1}
          date2={diffDaysDate2}
          type={1}
        />
      </div>
      <Result
        className={clsx({ [classes.hidden]: !display })}
        value={diffDays}
        date1={diffDaysDate1}
        date2={diffDaysDate2}
      />
      {matches && <Explain />}
    </div>
  );
};

export default DiffDaysDate;
