import React from 'react';
import Header from '../components/Header/Header';
import MakeTimetableContent from '../components/Timetable/MakeTimetableContent';
import Footer from '../components/Footer/Footer';

const MakeTimetable = () => {
    return (
        <div>
            <Header />
            <MakeTimetableContent />
            <Footer />
        </div>
    );
};

export default MakeTimetable;