import {
  makeStyles,
  ThemeProvider,
  unstable_createMuiStrictModeTheme
} from "@material-ui/core/styles";
import { MenuBar } from "layouts";
import { useState } from "react";
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
  // const { children } = props;

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([0, 0]);

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
      <div className={classes.contents}>
        {selected?.length &&
          Components.find(el => el.key === selected.join("")).components}
      </div>
      {/* {children} */}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
