import {
  makeStyles,
  ThemeProvider,
  unstable_createMuiStrictModeTheme
} from "@material-ui/core/styles";
import { MenuBar } from "layouts";
import { useEffect, useState } from "react";
import { BloodType, Calculator, Couple, Mbti, Sudoku } from "../../components";
import { menus } from "../../data";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

const theme = unstable_createMuiStrictModeTheme();

const useStyles = makeStyles(theme => ({
  contents: {
    minHeight: "100%",
    padding: "15px 10px 60px",
    minWidth: 400
  }
}));

const Components = [
  {
    key: "00",
    components: props => <Couple className={props.className} />
  },
  {
    key: "01",
    components: props => <Calculator className={props.className} />
  },
  {
    key: "10",
    components: props => <Mbti className={props.className} />
  },
  {
    key: "11",
    components: props => <BloodType className={props.className} />
  },
  {
    key: "20",
    components: props => <Sudoku className={props.className} />
  }
];

const initValue = [0, 0];

const Layout = props => {
  // const { children } = props;

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(initValue);

  useEffect(() => {
    setSelected(JSON.parse(localStorage.getItem("miscellaneous")) || initValue);
  }, []);

  useEffect(() => {
    localStorage.setItem("miscellaneous", JSON.stringify(selected));
  }, [selected]);

  return (
    <ThemeProvider theme={theme}>
      <MenuBar selected={selected} onOpen={() => setOpen(prev => !prev)} />
      <Sidebar
        open={open}
        onClose={() => setOpen(false)}
        menus={menus}
        onClick={selected => {
          setSelected(selected);
        }}
      />

      {selected?.length &&
        Components.find(el => el.key === selected.join("")).components({
          className: classes.contents
        })}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
