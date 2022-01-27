import React from 'react';
import Login from '../Login/Login';
import styles from "../Login/Login.module.css"
function SignUp() {
  return ( 
    <div className={styles.signup}>
      <Login />
    </div>
   );
}

export default SignUp;