
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../../utils/Routes';
import Home from '../../pages/home/Home';
import CarGallery from '../carGallery/CarGallery';
import LoginPage from '../../pages/login/LoginPage';

const AppRouter = () => {
    return (
        <Routes>
        <Route path={ROUTES.LOGIN} element={<LoginPage/>}/>
      
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.CARGALLERY} element={<CarGallery />} />

        </Routes>
    );
}

export default AppRouter;