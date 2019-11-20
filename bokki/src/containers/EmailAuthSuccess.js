import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import EmailAuthSuccessContent from '../components/Register/EmailAuthSuccessContent';

const EmailAuthSuccess = () => {
    return (
        <div>
            <Header />
            <EmailAuthSuccessContent />
            <Footer />
        </div>
    );
};

export default EmailAuthSuccess;