import React from 'react';
import Header from '../components/Header/Header';
import ManageTimetableContent from '../components/Timetable/ManageTimetableContent';
import Footer from '../components/Footer/Footer';

const ManageTimetable = () => {
    return (
        <div>
            <Header/>
            <ManageTimetableContent/>
            <Footer/>
        </div>
    );
};

export default ManageTimetable;