import { Button, Slider } from "@mui/material";
import React from "react";
import style from "../component.module.scss";

function Setting() {
    return (
        <div className={style.setting_box}>
            <div>
                <span>
                    روشنایی
                    <Slider
                        size="small"
                        defaultValue={0}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                    />
                </span>
                <span>
                    چرخش
                    <Slider
                        size="small"
                        defaultValue={0}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                    />
                </span>
            </div>
            <Button variant="contained">Contained</Button>
            <Button variant="contained">Contained</Button>

        </div>
    );
}

export default Setting;
