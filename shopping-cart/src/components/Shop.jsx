import React from "react";
import { connect } from 'react-redux';
import add from '../images/add.png';
import { addToCart } from './actions/cartActions'

const Shop = (props) => {
    console.log('Props *** ', props);
    const { items } = props;
    const handleClick = (item) => {
        console.log('Add to cart ***', item);
        props.addToCart(item);

    }
    let itemList = items.map(item => {
        return (
            <div className="card" key={item.id}>
                <div className="card-image">
                    <img src={item.img} alt={item.title} />
                    <span className="card-title">{item.title}</span>
                    <img className='image' src={add} alt={'add item'} onClick={() => handleClick(item.id)} />


                </div>

                <div className="card-content">
                    <p>{item.desc}</p>
                    <p><b>Price: {item.price}$</b></p>
                </div>
            </div >
        )
    })

    return (
        <>
            <div className=".container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        </>
    )

}

const mapStateToProps = (state) => {
    return ({
        items: state.items,
        addedItems: state.addedItems
    }
    )

}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Shop);