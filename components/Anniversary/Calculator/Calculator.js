import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Head from "next/head";
import { DiffAfterDays, DiffBeforeDays, DiffDaysDate } from "./components";
import { Explain } from "./components/DiffDaysDate/components";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    minHeight: "100%",
    padding: "50px 15px",
    minWidth: 400
  },
  column: {
    flexDirection: "column",
    padding: "15px 10px"
  }
}));

const Calculator = props => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:1200px)");

  return (
    <>
      <Head>
        <title>날짜 계산기</title>
        <meta name="keyword" content="특별한 날, 날짜, 날짜 계산" />
        <meta
          name="description"
          content="특정 날짜가 몇일 남았는 지 계산할 수 있습니다."
        />
      </Head>
      <div
        className={clsx(classes.root, {
          [classes.column]: !matches
        })}
      >
        <DiffDaysDate matches={matches} />
        <DiffAfterDays matches={matches} />
        <DiffBeforeDays matches={matches} />
      </div>
      <Explain matches={matches} />
    </>
  );
};

export default Calculator;
