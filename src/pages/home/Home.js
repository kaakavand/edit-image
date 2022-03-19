import React, { useState } from "react";
import Filter from "../../components/Filter/Filter.component";
import GetImage from "../../components/Get-Image/GetImage.component";
import Setting from "../../components/Setting/Setting.component";
import style from "./home.module.scss";

function Home(props) {
    const [filter, setFilter] = useState("");
    const [brightnessImg, setBrightnessImg] = useState(100);
    const [rotate, setRotate] = useState(0);

    return (
        <div className={style.container}>
            <GetImage
                filterImg={filter}
                brightness={brightnessImg}
                rotate={rotate}
            />
            <div>
                <Filter filterimage={(value) => setFilter(value)} />
                <Setting
                    brightness={(value) => setBrightnessImg(value)}
                    rotate={(value) => setRotate(value)}
                />
            </div>
        </div>
    );
}

export default Home;
