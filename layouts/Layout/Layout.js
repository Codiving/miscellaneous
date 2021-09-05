import { makeStyles } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core/styles";
const theme = unstable_createMuiStrictModeTheme();
import { ThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";
import { menus } from "../../data";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Couple, Calculator, Mbti, BloodType, Sudoku } from "../../components";

const useStyles = makeStyles(theme => ({
  contents: {
    // height: "calc(100% - 64px - 50px)",
    minHeight: "100%",
    padding: "15px 10px 60px"
  }
}));

const Components = [
  {
    key: "00",
    components: <Couple />
  },
  {
    key: "01",
    components: <Calculator />
  },
  {
    key: "10",
    components: <Mbti />
  },
  {
    key: "11",
    components: <BloodType />
  },
  {
    key: "20",
    components: <Sudoku />
  }
];

const Layout = props => {
  const { children } = props;

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([0, 1]);

  return (
    <ThemeProvider theme={theme}>
      <Header selected={selected} onOpen={() => setOpen(prev => !prev)} />
      <Sidebar
        open={open}
        onClose={() => setOpen(false)}
        menus={menus}
        onClick={selected => {
          console.log("selected", selected);
          setSelected(selected);
        }}
      />
      <div className={classes.contents}>
        {selected?.length &&
          Components.find(el => el.key === selected.join("")).components}
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
