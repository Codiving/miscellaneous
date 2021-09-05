import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    height: 50,
    width: "100%",
    backgroundColor: "#ddd",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const getText = () => {
  const year = new Date().getFullYear();

  if (year === 2021) return "";
  return `- ${year}`;
};

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      &copy; 2021 {getText()} / Codiving
    </footer>
  );
};

export default Footer;
