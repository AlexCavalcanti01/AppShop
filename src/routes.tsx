import React from "react";

import { Categories } from "./components/C.Menu/Categories";


import { Route, Routes } from 'react-router-dom'

export const Router = () => (   
    <Routes>
        <Route path="/Shop" element={<Categories/>}/>
    </Routes>
);

export default Router

