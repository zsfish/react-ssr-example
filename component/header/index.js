import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import styles from './style.css'
import withStyle from '../../withStyle'
class Header extends Component{
    render(){
        return(
            <div className={styles.head}>
                <Link to='/login'>登录</Link>
                <Link to='/'>列表</Link>
            </div>
        )
    }
}
 export default withStyle(Header,styles)
