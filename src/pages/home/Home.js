import React, { useState } from "react";
import Filter from "../../components/Filter/Filter.component";
import GetImage from "../../components/Get-Image/GetImage.component";
import Setting from "../../components/Setting/Setting.component";
import style from "./home.module.scss";

function Home(props) {

    const [filter, setFilter] = useState('')
    const [brightnessImg, setBrightnessImg] = useState(0)


    return (
        <div className={style.container}>
            <GetImage filterImg = {filter} brightness = {brightnessImg}/>
            <div>
                <Filter filterimage = {(value) => setFilter(value)} />
                <Setting brightness = {(value) => setBrightnessImg(value)}  />
            </div>
        </div>
    );
}

export default Home;
