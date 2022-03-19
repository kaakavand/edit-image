import React, { useEffect, useState } from "react";
import style from "../component.module.scss";

function Filter(props) {

    const [filter, setFilter] = useState('')

    useEffect(() => {
        props.filterimage(filter)
    }, [filter])
    

    return (
        <>
            <h2 className={style.filter_h2}> فیلتر ها</h2>
            <div className={style.filter_box}>
                <div className={style.box} onClick={() => setFilter('invert(1)')}>invert</div>
                <div className={style.box}  onClick={() => setFilter('sepia(1)')}>sepia</div>
                <div className={style.box}  onClick={() => setFilter('grayscale(1)')}>grayscale</div>
                <div className={style.box}  onClick={() => setFilter('none')}>none</div>
                <div className={style.box}  onClick={() => setFilter('blur(2px)')}>blur</div>
                <div className={style.box}  onClick={() => setFilter('saturate(2)')}>saturate</div>
                <div className={style.box}  onClick={() => setFilter('contrast(2)')}>contrast</div>
                <div className={style.box}  onClick={() => setFilter('hue-rotate(90deg)')}>hue-rotate</div>
            </div>
        </>
    );
}

export default Filter;
