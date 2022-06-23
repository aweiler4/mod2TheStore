const React = require('react');
const Products = require('../models/products');

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>Add a New Item for the Dogs!</h1>
                <form action='/home' method="POST">
                    Item: <input type="text" name="name" placeholder="type..." value={Products.name}/><br/>
                    Price: <input type="text" name="price" placeholder='cost...' value={Products.price} /><br/>
                    Image: <input type="text" name="img" placeholder='paste img address...' value={Products.img}/>
                    <input type="submit" name=""/>
                </form>
            </div>)
    }
}

module.exports = New;