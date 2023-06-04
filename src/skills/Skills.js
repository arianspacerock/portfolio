import React from "react";
import s from "./Skills.module.css";
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"JavaScript"} description={"Основной язык программирования"}/>
                    <Skill title={"React"} description={"Библиотека JavaScript"}/>
                    <Skill title={"CSS"} description={"Стилизация"}/>
                </div>
            </div>
        </div>
    );
};
