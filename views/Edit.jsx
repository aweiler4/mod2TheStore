const React = require('react')

class Edit extends React.Component {
    render() {
        return (
            <div>
            <h1>Edit this product</h1><br/>
            
     

            <nav>
                <a href="/products/new">Add a New Item</a><br/>
                <a href="/home">Back to Home</a>
            </nav>
            </div>
        );
    }
}

module.exports = Edit;