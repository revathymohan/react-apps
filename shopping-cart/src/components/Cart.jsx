
import React, { useState } from "react";
import { useEffect } from 'react';

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'

const Cart = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        let addedItems = props.items.length ?
            (
                props.items.map(item => {
                    return (

                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img">
                                <img src={item.img} alt={item.img} className="" />
                            </div>

                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}$</b></p>
                                <p>
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                                <div className="add-remove">
                                    <button onClick={() => { handleAddQuantity(item.id) }}> + </button>
                                    <button onClick={() => { handleSubtractQuantity(item.id) }}> - </button>

                                    {/* <Link to="/cart"><span className="material-icons" onClick={() => { handleAddQuantity(item.id) }}>+</span></Link>
                                <Link to="/cart"><span className="material-icons" onClick={() => { handleSubtractQuantity(item.id) }}>-</span></Link> */}
                                </div>
                                <button className="waves-effect waves-light btn pink remove" onClick={() => { handleRemove(item.id) }}>Remove</button>
                            </div>

                        </li>

                    )
                })
            ) :

            (
                <p>Nothing.</p>
            )


        setItems(addedItems);
    })


    //to remove the item completely
    const handleRemove = (id) => {
        props.removeItem(id);
    }
    //to add the quantity
    const handleAddQuantity = (id) => {
        console.log('Add quantity......', props.items);
        props.addQuantity(id);
    }
    //to substruct from the quantity
    const handleSubtractQuantity = (id) => {
        props.subtractQuantity(id);
    }
    console.log('Added items••••••', props.addedItems);
    const addedItems = props.items.length ?
        (
            props.items.map(item => {
                return (

                    <li className="collection-item avatar" key={item.id}>
                        <div className="item-img">
                            <img src={item.img} alt={item.img} className="" />
                        </div>

                        <div className="item-desc">
                            <span className="title">{item.title}</span>
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                            <p>
                                <b>Quantity: {item.quantity}</b>
                            </p>
                            <div className="add-remove">
                                <button onClick={() => { handleAddQuantity(item.id) }}> Add</button>
                                <button onClick={() => { handleSubtractQuantity(item.id) }}> Substract</button>

                                {/* <Link to="/cart"><span className="material-icons" onClick={() => { handleAddQuantity(item.id) }}>+</span></Link>
                                <Link to="/cart"><span className="material-icons" onClick={() => { handleSubtractQuantity(item.id) }}>-</span></Link> */}
                            </div>
                            <button className="waves-effect waves-light btn pink remove" onClick={() => { handleRemove(item.id) }}>Remove</button>
                        </div>

                    </li>

                )
            })
        ) :

        (
            <p>Nothing.</p>
        )

    return (
        <>
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {items}
                    </ul>
                </div>
            </div>
        </>
    );
}


const mapStateToProps = (state) => {

    return ({
        items: state.addedItems
    });
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);