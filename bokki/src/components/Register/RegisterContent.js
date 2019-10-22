import React from 'react';
import './RegisterContent.css';

const RegisterContent = () => {
    return (
        <div>
            <div className="register">
            <p id="title">회원가입 - 정보입력</p>
            <p>회원가입 기능은 선생님들께만 지원해드리는 기능입니다.<br />1학교 당 1계정으로 가입할 수 있습니다.</p>

            <div id="input">
                <input type="text" name="school" placeholder="학교 이름"/>
                <p>* 띄어쓰기 없이 정확히 입력해주세요.</p>
            </div>
            <div id="input">
                <input type="email" name="email" placeholder="학교 이메일"/>
                <p>* 이메일 형식을 맞춰서 적어주세요.</p>
            </div>
            <div id="input">
                <input type="password" name="password" minlength='5' placeholder="비밀번호"/>
                <p>* 영어와 숫자를 혼합한 5글자 이상입니다.</p>
            </div>
            <div id="input">
                <input type="password" name="password" minlength='5' placeholder="비밀번호 재입력"/>
                <div className="false">* 비밀번호와 일치하지 않습니다.</div>
                <div className="true">* 비밀번호와 일치합니다.</div>
            </div>
            <input type="submit" name="send" value="회원가입"/>
        </div>
        </div>
    );
};

export default RegisterContent;