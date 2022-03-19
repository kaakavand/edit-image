import React from "react";
import Filter from "../../components/Filter/Filter.component";
import GetImage from "../../components/Get-Image/GetImage.component";
import Setting from "../../components/Setting/Setting.component";
import style from "./home.module.scss";

function Home() {
    return (
        <div className={style.container}>
            <GetImage />
            <div>
                <Filter />
                <Setting />
            </div>
        </div>
    );
}

export default Home;
