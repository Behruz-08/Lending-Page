
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../../utils/Routes';
import Home from '../../pages/home/Home';
import CarGallery from '../carGallery/CarGallery';
import LoginPage from '../../pages/login/LoginPage';

// import ProductList from '../productList/ProductList';

const AppRouter = () => {
    return (
        <>

        
        <Routes>
        <Route path={ROUTES.LOGIN} element={<LoginPage/>}/>
      
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.CARGALLERY} element={<CarGallery />} />
            {/* <Route path={ROUTES.PRODUCTS} element={<ProductList/>} /> */}


        </Routes>
        </>
    );
}

export default AppRouter;