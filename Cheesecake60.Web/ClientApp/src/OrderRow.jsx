import { Link } from 'react-router-dom'
import dayjs from 'dayjs';


const OrderRow = ({ order }) => {
    const { id, name, email, baseFlavor, toppings, specialRequest, quantity, deliveryDate, total } = order
    return (
        <tr style={{ backgroundColor: "rgb(248, 249, 250)", borderRadius: 15 }}>
            <td style={{ paddingTop: 15, paddingBottom: 15 }}>
                <Link to={`/orderdetails/${id}`}>
                    {name} - {email}
                </Link>
            </td>
            <td>{baseFlavor}</td>
            <td>{toppings}</td>
            <td>{specialRequest ? specialRequest : 'N/A'}</td>
            <td>{quantity}</td>
            <td>{dayjs(deliveryDate).format("MM/DD/YYYY")}</td>
            <td>{total}</td>
        </tr>
    )
}
export default OrderRow;


