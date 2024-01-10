import ListComponents from "./components/ListComponents";
import SystemTable from "./components/SystemTable";
import TeamFilter from "./components/TeamFilter";

import styles from "../temporary.module.css";

const Operations = () => {
  return (
    <>
      <TeamFilter />
      <div className={styles.operations_wrapper}>
        <ListComponents />
        <SystemTable />
      </div>
    </>
  );
};

export default Operations;
