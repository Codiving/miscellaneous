import { MenuItem, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { days, months, years } from "utils/date";

const useStyles = makeStyles(theme => ({
  year: {
    width: 85,
    marginRight: 5
  },
  month: {
    width: 65,
    marginRight: 5
  },
  day: {
    width: 65,
    marginRight: 5
  }
}));

const DateSelector = props => {
  const { value, onChange } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        className={classes.year}
        label="년도"
        select
        variant="outlined"
        margin="dense"
        value={value.year}
        onChange={e => onChange(e.target.value, "year")}
      >
        {years.map(year => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        className={classes.month}
        label="월"
        select
        variant="outlined"
        margin="dense"
        value={value.month}
        onChange={e => onChange(e.target.value, "month")}
      >
        {months.map(month => (
          <MenuItem key={month} value={month}>
            {month}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        className={classes.day}
        label="일"
        select
        variant="outlined"
        margin="dense"
        value={value.day}
        onChange={e => onChange(e.target.value, "day")}
      >
        {days.map(day => (
          <MenuItem key={day} value={day}>
            {day}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default DateSelector;
