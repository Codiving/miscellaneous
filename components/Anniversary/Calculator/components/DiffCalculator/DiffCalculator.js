import { Button, Checkbox, Typography } from "@material-ui/core";
import { DateTime } from "luxon";
import { getDiffDays, validDate } from "utils/date";

const DiffCalculator = props => {
  const {
    check,
    onHandleCheck,
    onCalculator,
    date1,
    date2: _date2,
    type
  } = props;

  return (
    <>
      <Typography>기준 날짜 포함</Typography>
      <Checkbox checked={check} onChange={onHandleCheck} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          let date2 = _date2;

          if (type === 1) {
          } else if (type === 2) {
            if (check) {
              const tmp = DateTime.fromObject(_date2).minus({ days: 1 });

              date2 = {
                year: Number(tmp.toFormat("yyyy")),
                month: Number(tmp.toFormat("MM")),
                day: Number(tmp.toFormat("dd"))
              };
            }
          } else if (type === 3) {
            if (check) {
              const tmp = DateTime.fromObject(_date2).plus({ days: 1 });

              date2 = {
                year: Number(tmp.toFormat("yyyy")),
                month: Number(tmp.toFormat("MM")),
                day: Number(tmp.toFormat("dd"))
              };
            }
          }

          if (!validDate(date1)) {
            alert("");
          } else if (!validDate(date2)) {
            alert("");
          } else {
            onCalculator(getDiffDays(date1, date2, check));
          }
        }}
      >
        계산하기
      </Button>
    </>
  );
};

export default DiffCalculator;
