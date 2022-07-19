import React from "react";

import { Main } from "./components/C.Main/Main";
import { RacquetsTour } from "./Routes/RacquetsTour"
import { RacquetsItem } from "./Routes/RacquetsItem";

import { Route, Routes } from 'react-router-dom'

export const Router = () => (   
    <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/Racquets/Tour" element={<RacquetsTour />} />
        <Route path="/HeadBoomPro" element={<RacquetsItem />} />
    </Routes>
);

export default Router

