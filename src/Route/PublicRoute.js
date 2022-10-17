import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function PublicRoute({ component: Components,Restricted = false ,...Rest }) {

    let login = localStorage.getItem('login');
    return (

        <Route
            {...Rest}
            render={(props) => (
                login && Restricted ? 
                <>
                    <Header />
                    <Redirect path='/' />
                    <Footer />
                </>
                :
                <>
                    <Header />
                    <Components />
                    <Footer />
                </>
            )}
        />
    );
}

export default PublicRoute;