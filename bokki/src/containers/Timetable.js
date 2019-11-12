import React from 'react';
import Header from '../components/Header/Header';
import TimetableComponent from '../components/Timetable/TimetableComponent';
import Footer from '../components/Footer/Footer';

const Timetable = () => {
    return (
        <div>
            <Header/>
            <TimetableComponent/>
            <Footer/>
        </div>
    );
};

export default Timetable;