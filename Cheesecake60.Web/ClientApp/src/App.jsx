import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Order from './Order';
import ViewOrders from './ViewOrders';
import OrderDetails from './orderDetails';
import Success from "./Success"

    const App = () => {
        return (
            <Layout>
                <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/order' element={<Order/>} />
            <Route exact path='/viewOrders' element={<ViewOrders/>} />
            <Route exact path='/orderDetails/:id' element={<OrderDetails/>} />
            <Route exact path='/success' element={<Success/>} />

            </Routes>
     </Layout>
        );
    }
   

export default App;