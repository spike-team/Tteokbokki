import React from 'react';
import './LoginContent.css';

const Login = () => {
    return (
        <div className="login">
            <p className="login-title">학교 로그인</p>
            <p className="login-des">회원가입 기능은 선생님들께만 지원해드리는 기능입니다.<br />1학교 당 1계정으로 가입할 수 있습니다.</p>

            <div className="login-input">
                <input className="login-subinput" type="email" name="email" placeholder="학교 이메일"/>
                <p>* 이메일 형식을 맞춰서 적어주세요.</p>
            </div>
            <div className="login-input">
                <input className="login-subinput" type="password" name="password" minlength='5' placeholder="비밀번호"/>
                <p>* 영어와 숫자를 혼합한 5글자 이상입니다.</p>
            </div>
            <input className="login-submit" type="submit" name="login" value="학교 로그인"/>
            <a>StudenTable 에 가입하지 않은 학교인가요?</a>
        </div>
    );
};

export default Login;