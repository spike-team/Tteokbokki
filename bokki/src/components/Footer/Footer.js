import React from 'react';
import './Footer.css';

const Member = ({active, children, to}) => (
    <div className="member">
            {children}
    </div>
)
const InfoItem = ({active, children, to}) => (
    <div className="info-item">
            {children}
    </div>
)

const Footer = () => {
    return (
        <div className="footer">
            <div className="team">
                <Member>Team OH!MIZA</Member>
                <Member>김진우</Member>
                <Member>김재훈</Member>
                <Member>박예린</Member>
                <Member>박영진</Member>
            </div>
            <div className="info">
                <InfoItem>의견제안</InfoItem>
                <InfoItem>이용약관</InfoItem>
                <InfoItem>개인정보처리방침</InfoItem>
                <InfoItem>법적 책임과 한계</InfoItem>
                <InfoItem>© StudenTable</InfoItem>
            </div>            
        </div>
    );
};

export default Footer;