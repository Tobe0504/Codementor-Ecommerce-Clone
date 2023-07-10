import Header from "../../header/header";
import classes from "./Layout.module.css";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <div className={classes.header}>
        <Header />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
