import { Button, Input } from "@mui/material";
import style from "../component.module.scss";
import React, { useState } from "react";

function GetImage() {
    const [showImg, setShowImg] = useState(false);

    return (
        <div>
            <h2>تصویر کالا</h2>
            <div className={style.input_box}>
                <figure>
                    {showImg ? (
                        <img src="" alt="" />
                    ) : (
                        <label htmlFor="contained-button-file">
                            <Input
                                accept="image/*"
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                            <Button variant="contained" component="span">
                                Upload
                            </Button>
                        </label>
                    )}
                </figure>
            </div>
        </div>
    );
}

export default GetImage;
