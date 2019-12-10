import React, { useState } from 'react';
import './LoginContent.css';
import { Link } from 'react-router-dom';
import { signIn } from '../../services/post';

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [status, setStatus] = useState(0);
    
    const onChangeEmail = e => {
        setEmail(e.target.value);
    }; 
    const onChangePassword = e => {
        setPassword(e.target.value);
    };

    const submitLoginInfo = async (email, password) => {
        try {
            let response = await signIn(email, password);
            sessionStorage.setItem('accessToken', response.data.accessToken);
            setStatus(200);
        } catch(error) {
            console.log(error.response);
        }
    };

    if(status === 200) {
        alert("로그인 성공");
    }
    if(status === 409) {
        alert("존재하지 않는 이메일이나 틀린 비밀번호입니다.");
    }

    return (
        <div className="login">
            <p className="login-title">학교 로그인</p>
            <p className="login-des">회원가입 기능은 선생님들께만 지원해드리는 기능입니다.<br />1학교 당 1계정으로 가입할 수 있습니다.</p>

            <div className="login-input">
                <input className="login-subinput" type="email" value={email} onChange={onChangeEmail} placeholder="학교 이메일 (@korea.kr)"/>
                <p>* 이메일 형식을 맞춰서 적어주세요.</p>
            </div>
            <div className="login-input">
                <input className="login-subinput" type="password" value={password} onChange={onChangePassword} placeholder="비밀번호"/>
                <p>* 영어와 숫자를 혼합한 5글자 이상입니다.</p>
            </div>
            <input className="login-submit" type="submit" onClick={() => setStatus(submitLoginInfo(email, password))} value="학교 로그인"/>
            <Link to='./register' href="" className="goauth"><span>StudenTable 에 가입하지 않은 학교인가요?</span></Link>
        </div>
    );
};

export default Login;