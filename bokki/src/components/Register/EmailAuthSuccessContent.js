import React from 'react';
import { Link } from 'react-router-dom';

import './EmailAuthSuccessContent.css';

const EmailAuthSuccessContent = () => {
    return (
        <div className="emailauth">
            <p className="auth-title">이메일 인증이 완료되었습니다.</p>
            <p className="congraturations">StudenTable의 선생님이 되신 걸 축하합니다.</p>
            
            <Link to='./login' href="" ><input className="gologin" type="submit" value="로그인" /></Link>
        </div>
    );
};

export default EmailAuthSuccessContent;