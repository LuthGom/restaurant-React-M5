import React from "react";
import styles from "./styles.module.css";

const Loading = () => {
  return (
    <>
      <div className={styles.loadingContainer}>
        <div className={styles.dots}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
