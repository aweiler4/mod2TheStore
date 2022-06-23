const React = require('react')

class Delete extends React.Component {
    render() {
        return (
            <div>
            <h1>This item has been deleted.</h1><br/>
            
     

            <nav>
                <a href="/products/new">Add a New Item</a><br/>
                <a href="/home">Back to Home</a>
            </nav>
            </div>
        );
    }
}

module.exports = Delete;