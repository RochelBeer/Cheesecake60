import React, { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"





const Order = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [specialRequest, setSpecialRequest] = useState('')
    const [baseFlavor, setBaseFlavor] = useState('')
    const [toppings, setToppings] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [total, setTotal] = useState(0)
    const [deliveryDate, setDeliveryDate] = useState('')
    const [toppingCount, setToppingCount] = useState(0)
    const [isDisabled, setIsDisabled] = useState(true)
    const [submitText, setSubmitText] = useState('Submit Order')
    const navigate = useNavigate();
    // const totalCalculated = () =>{
    //      const cakes = 49.99 * quantity
    //     const topps = (3.95 * toppingCount) * quantity
    //     setTotal(cakes + topps)
    //     console.log(total)
    // }
    useEffect(() => {
        const setSubmitToEnabled = () => {
            {
                if (name && email && baseFlavor && deliveryDate) {
                    setIsDisabled(false)

                } else {
                    setIsDisabled(true)
                }
            }
        }
        setSubmitToEnabled()
    })
    const onNameTextChange = e => {
        setName(e.target.value)
    }
    const onEmailTextChange = e => {
        setEmail(e.target.value)
    }
    const onSpecialRequestTextChange = e => {
        setSpecialRequest(e.target.value)
    }
    const onQuantityTextChange = e => {
        const quant = e.target.value;
        setQuantity(quant)
        const cakes = 49.99 * quant
        const topps = (3.95 * toppingCount) * quant
        setTotal(cakes + topps)
        // setTotal(totalCalculated())
    }
    const onDateTextChange = e => {
        setDeliveryDate(e.target.value)
    }
    const onBaseFlavorTextChange = e => {
        setBaseFlavor(e.target.value)
        if (e.target.value == 'Choose...') {
            setTotal(0)
        } else {
            const topps = (toppingCount * 3.95) * quantity;
            const cakes = quantity * 49.99;
            setTotal(cakes + topps)
        }

        // setTotal(totalCalculated())
    }
    const onCheckBoxClick = e => {

        const toppingArray = toppings.split(', ').filter(t => t !== '')

        if (toppingArray.includes(e.target.name)) {
            setToppings(toppingArray.filter(t => t !== e.target.name).join(', '))
            setToppingCount(toppingCount - 1)
            if (total) {
                setTotal(total - (3.95 * quantity))
            }
        } else {
            toppingArray.push(e.target.name)
            setToppings(toppingArray.join(', '))
            setToppingCount(toppingCount + 1)
            if (total) {
                setTotal(total + (3.95 * quantity))
            }
        }
        // if(!!total){ 
        //     console.log('in if!')
        //     const topps = (toppingCount * 3.95) * quantity;
        // const cakes = quantity * 49.99;
        // setTotal(cakes + topps)}
    }

    const onSubmitClick = async () => {
        setSubmitText('Submitting...')
        await axios.post('/api/orders/addorder', { name, email, newSpecialRequest, baseFlavor, total, deliveryDate, quantity, toppings })
        navigate('/success');
    }



    return (
        <div className="container" >
            <h1 className="text-center my-4">Cheesecake Factory Order Form</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} onChange={onNameTextChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={onEmailTextChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Cheesecake Base Flavor ($49.99)</label>
                        <select className="form-select" onChange={onBaseFlavorTextChange}>
                            <option>Choose...</option>
                            <option>Classic</option>
                            <option>Chocolate</option>
                            <option>Red Velvet</option>
                            <option>Brownie</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Toppings (each topping adds an additional $3.95)</label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={onCheckBoxClick} name="Chocolate Chips" />
                            <label className="form-check-label">Chocolate Chips</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={onCheckBoxClick} name="Caramel Drizzle" />
                            <label className="form-check-label">Caramel Drizzle</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={onCheckBoxClick} name="Whipped Cream" />
                            <label className="form-check-label">Whipped Cream</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={onCheckBoxClick} name="Pecans" />
                            <label className="form-check-label">Pecans</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={onCheckBoxClick} name="Almonds" />
                            <label className="form-check-label">Almonds</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={onCheckBoxClick} name="Toasted Coconut" />
                            <label className="form-check-label">Toasted Coconut</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={onCheckBoxClick} name="Graham Cracker Crumble" />
                            <label className="form-check-label">Graham Cracker Crumble</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={onCheckBoxClick} name="Cookie Dough" />
                            <label className="form-check-label">Cookie Dough</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={onCheckBoxClick} name="Mint Chocolate Chips" />
                            <label className="form-check-label">Mint Chocolate Chips</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={onCheckBoxClick} name="Caramelized Bananas" />
                            <label className="form-check-label">Caramelized Bananas</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={onCheckBoxClick} name="Rainbow Sprinkles" />
                            <label className="form-check-label">Rainbow Sprinkles</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={onCheckBoxClick} name="Powdered Sugar" />
                            <label className="form-check-label">Powdered Sugar</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={onCheckBoxClick} name="White Chocolate Shavings" />
                            <label className="form-check-label">White Chocolate Shavings</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onClick={onCheckBoxClick} name="Dark Chocolate Drizzle" />
                            <label className="form-check-label">Dark Chocolate Drizzle</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Special Requests</label>
                        <textarea className="form-control" rows="3" onChange={onSpecialRequestTextChange} value={specialRequest}>
                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input type="number" className="form-control" min="1" value={quantity} onChange={onQuantityTextChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Delivery Date</label>
                        <input type="date" className="form-control" value={deliveryDate} onChange={onDateTextChange} />
                    </div>
                    <button type="submit" disabled={isDisabled} className="btn btn-primary" onClick={onSubmitClick}>{submitText}</button>
                </div>
                <div className="col-md-6 position-sticky">
                    <h2 className="mb-4">Live Preview</h2>
                    <div className="card">
                        <img src="/cheesecake.jpg" className="card-img-top" alt="Cheesecake" />
                        <div className="card-body">
                            <h5 className="card-title">{name}'s Custom Cheesecake</h5>
                            <p className="card-text">Base: {baseFlavor}</p>
                            <p className="card-text">Toppings: {toppings} </p>
                            <p className="card-text">Special Requests: {specialRequest} </p>
                            <p className="card-text">Quantity: {quantity}</p>
                            <p className="card-text">Delivery Date: {deliveryDate} </p>
                            <p className="card-text fw-bold">Total: {total}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Order

