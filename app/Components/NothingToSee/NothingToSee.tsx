import Layout from "../Layout/Layout";
import classes from "./NothingToSee.module.css";

const NothingToSee = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <p>Nothing to see here</p>
      </div>
    </Layout>
  );
};

export default NothingToSee;
