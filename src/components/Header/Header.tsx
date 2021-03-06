import React from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/images/logo192.png';

const appName = 'Ideas Network';

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}
export type DispatchPropsType = {
    logOutUser: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    return (
        <header className={styles.Header}>
            <NavLink to='/home'>
                <img src={logo} alt='...'/>
            </NavLink>
            <h3>{appName.toUpperCase()}</h3>
            <div className={styles.login_block}>
                {
                    props.isAuth
                        ? <div>{props.login?.toUpperCase()}
                            <button onClick={props.logOutUser}>Log Out</button>
                        </div>
                        : <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;