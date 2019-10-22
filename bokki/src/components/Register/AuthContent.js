import React from 'react';
import './AuthContent.css';

const AuthContent = () => {
    return (
        <div className="auth">
            <p id="title">회원가입</p>
            <p>회원가입 기능은 선생님들께만 지원해드리는 기능입니다.<br />1학교 당 1계정으로 가입할 수 있습니다.</p>

            <div id="input">
                <input type="email" name="email" placeholder="학교 이메일"/>
                <p>* 이메일 형식을 맞춰서 적어주세요.</p>
            </div>
            <input type="submit" name="send" value="인증코드 보내기"/>
        </div>
    );
};

export default AuthContent;