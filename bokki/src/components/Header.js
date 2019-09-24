import React from 'react';
import './Header.css';

const MenuItem = ({active, children, to}) => (
    <div className="menu-item">
            {children}
    </div>
)

const Header = () => {
    return (
        <div className="header">
            <div className="logo">StudenTable</div>
            <div className="menu">
                <MenuItem>오늘급식</MenuItem>
                <MenuItem>시간표 확인</MenuItem>
                <MenuItem>시간표 관리</MenuItem>
                <MenuItem>로그인</MenuItem>
            </div>
        </div>
    );
};

export default Header;