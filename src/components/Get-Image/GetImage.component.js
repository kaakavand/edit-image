import { Button, Input } from "@mui/material";
import style from "../component.module.scss";
import React, { useEffect, useState } from "react";

function GetImage(props) {
    const [showImg, setShowImg] = useState(false);
    const [img, setImg] = useState("");
    const [imgFilter, setImgFilter] = useState("");
    const [brightness, setBrightness] = useState(0);


    const changeImage = (e) => {
        const src = URL.createObjectURL(e.target.files[0]);
        setImg(src);
        setShowImg(true);
    };

    const removeImage = (e) => {
        setImg("");
        setShowImg(false);
    };

    useEffect(() => {
        setImgFilter(props.filterImg);
        setImgFilter(`brightness(${props.brightness}%)`);
    }, [props]);

    return (
        <div>
            <h2>تصویر کالا</h2>
            <div className={style.input_box}>
                <figure>
                    {showImg ? (
                        <>
                            <img
                                src={img}
                                alt=""
                                style={{ filter: imgFilter }}
                            />
                            <span
                                className={style.remove}
                                onClick={removeImage}
                            >
                                X
                            </span>
                        </>
                    ) : (
                        <label htmlFor="contained-button-file">
                            <Input
                                accept="image/*"
                                id="contained-button-file"
                                multiple
                                type="file"
                                onChange={changeImage}
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
