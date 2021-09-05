import { HeadInfo } from "..";

const Layout2 = props => {
  return (
    <>
      <HeadInfo />
      {props.children}
    </>
  );
};

export default Layout2;
