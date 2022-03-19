import React from "react";
import style from "../component.module.scss";

function Filter() {
    return (
        <>
            <h2> فیلتر ها</h2>
            <div className={style.filter_box}>
                <div className={style.box}>invert</div>
                <div className={style.box}>invert</div>
                <div className={style.box}>invert</div>
                <div className={style.box}>invert</div>
                <div className={style.box}>invert</div>
                <div className={style.box}>invert</div>
                <div className={style.box}>invert</div>
                <div className={style.box}>invert</div>
            </div>
        </>
    );
}

export default Filter;
