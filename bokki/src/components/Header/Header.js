import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const MenuItem = ({children}) => (
    <div className="menu-item">{children}</div>
)

const Header = () => {
    return (
        <div className="header">
            <Link to='/'><div className="logo"><img alt="" src={logo} />StudenTable</div></Link>
            <div className="menu">
                <MenuItem><Link to='/meal'>오늘급식</Link></MenuItem>
                <MenuItem><Link to='/timetable'>시간표 확인</Link></MenuItem>
                <MenuItem><Link to='/manage-timetable'>시간표 관리</Link></MenuItem>
                <MenuItem><Link to='/login'>로그인</Link></MenuItem>
            </div>
        </div>
    );
};

export default Header;