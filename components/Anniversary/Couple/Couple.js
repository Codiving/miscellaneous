import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { DateTime } from "luxon";
import Head from "next/head";
import Image from "next/image";
import { useMemo } from "react";
import { dates } from "./dates";

const useStyles = makeStyles(theme => ({
  root: {},
  date: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: 20
  },
  hr: {
    border: "1px solid",
    width: "100%",
    maxWidth: 600,
    marginTop: 30
  }
}));

const Couple = props => {
  const { className } = props;

  const classes = useStyles();
  const year = useMemo(() => DateTime.now().toFormat("yyyy"), []);

  return (
    <div className={clsx(classes.root, className)}>
      <Head>
        <title>연인과의 기념일</title>
        <meta
          name="keyword"
          content="연인, 기념일, 커플, 특별한 날, 날짜, 날짜 계산"
        />
        <meta
          name="description"
          content="연인, 커플간에 특별한 날을 확인할 수 있습니다."
        />
      </Head>

      {dates.map((date, index) => {
        const {
          image,
          name,
          date: { month, day },
          description
        } = date;

        return (
          <div className={classes.date} key={name}>
            <Typography variant="h6" component="h6">
              {year}년 {month}월 {day}일 : {name}
            </Typography>
            <Typography>{description}</Typography>
            <div>
              <Image src={image} alt={name} width={600} height={400} />
            </div>
            <div className={classes.hr}></div>
          </div>
        );
      })}
    </div>
  );
};

export default Couple;
