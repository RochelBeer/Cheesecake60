import React, {useState, useEffect} from 'react';
import OrderRow from './OrderRow';
import axios from 'axios';

const ViewOrders = () => {
    const[orders, setOrders] = useState([]);
    useEffect(()=>{
        const getOrders = async () => {
            const {data} = await axios.get('/api/orders/getall');
            setOrders(data);
        }
        getOrders()
    },[])
    
    return(
    <div className="container" style={{marginTop: 80}}>
        <div className="d-flex justify-content-center">
            <table className="table text-center shadow-lg" style={{borderCollapse: "separate", borderSpacing: 0- 15, maxWidth: 80}}>
                <thead>
                    <tr style={{backgroundColor: "rgb(33, 37, 41)", color: "white", borderRadius: 15}}>
                        <th>Name/Email</th>
                        <th>Base Flavor</th>
                        <th>Toppings</th>
                        <th>Special Requests</th>
                        <th>Quantity</th>
                        <th>Delivery Date</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                 { orders.map(o => <OrderRow order={o} key={o.id}/>)}

                </tbody>
            </table>
        </div>
    </div>)
}
export default ViewOrders;