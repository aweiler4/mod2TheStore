const React = require('react');
const Products = require('../models/products');
// const Products = require('../models/products');

const header = {
    textAlign: "center",
    border: "4px",
    padding: "12px",
    backgroundColor: "navy",
    color: "white"
}

const center = {
    textAlign: "center",
    padding: "20px",
    margin: "5px"
}

const myPic = {
    width: "40%",
    height: "40%",
    border: "solid 6px white"
}



class Show extends React.Component {
    render() {
        const product = this.props.product;
        return (
            <div style={center}>
            <h1 style={header}> {product.name} </h1><br/>

            <img style={myPic} src={product.img}></img>
            
            {product.price}<br/>

            <button>Delete</button>


            <nav>
                <a href="/home/new">Add a New Item</a><br/>
                <a href="/home">Back to Home</a>
            </nav>
            </div>
        );
    }
}

module.exports = Show;