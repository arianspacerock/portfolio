import React from 'react';
import s from './Main.module.css';

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.text}>
                <span>Hi there</span>
                <h1>I am Artem Burlaev</h1>
                <p>Frontend developer</p>
            </div>
            <div className={s.photo}></div>
        </div>
    );
};

