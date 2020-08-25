import React from 'react';
import withStyle from '../withStyle';
import styles from './login.css';
// node里渲染jsx，react必须得使用babel
const Login = () =>{
  return (
    <div className={styles.box}>
      <h1>登录</h1>
      <input type="text" placeholder="用户名" />
    </div>
  )
}

export default withStyle(Login, styles);