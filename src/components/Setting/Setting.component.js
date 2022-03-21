import { Button, Slider } from "@mui/material";
import React from "react";
import style from "../component.module.scss";
import FlipIcon from "@mui/icons-material/Flip";
import Rotate90DegreesCcwIcon from "@mui/icons-material/Rotate90DegreesCcw";
import Rotate90DegreesCwIcon from "@mui/icons-material/Rotate90DegreesCw";

function Setting(props) {
    const changBrightness = (e) => {
        props.brightness(e.target.value);
    };
    const changRotate = (e) => {
        props.rotate(e.target.value);
    };

    return (
        <>
            <h2 className={style.setting_h2}>تنظیمات</h2>
            <div className={style.setting_box}>
                <div>
                    <span>
                        روشنایی
                        <Slider
                            size="small"
                            defaultValue={100}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            onChange={changBrightness}
                        />
                    </span>
                    <span>
                        چرخش
                        <Slider
                            size="small"
                            defaultValue={0}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            onChange={changRotate}
                        />
                    </span>
                </div>
                <div className={style.fliper}> 
                    <Button variant="contained" onClick={() => alert('coming soon 😎')}>
                        <Rotate90DegreesCcwIcon />
                    </Button>
                    <Button variant="contained" onClick={() => alert('coming soon 😎')}>
                        <Rotate90DegreesCwIcon />
                    </Button>
                    <Button variant="contained" onClick={() => alert('coming soon 😎')} className={style.rotate}>
                        <FlipIcon />
                    </Button>
                    <Button variant="contained" onClick={() => alert('coming soon 😎')}>
                        <FlipIcon />
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Setting;
