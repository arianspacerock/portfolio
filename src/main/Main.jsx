import React from 'react';
import s from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <span>Hi there</span>
                    <h1>I am Artem Burlaev</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

