const React = require('react');

const myBody = {
    backgroundImage: "/images/obiekota.PNG",
    height: "100%,"
}

const head = {
    height: "100px",
    width: "60%",
    textAlign: "center",
    color: "white",
    backgroundColor: "#24221f",
    fontSize: "44px",
    padding: "10px",
    border: "4px white",
    borderRadius: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px"
}

const anchor = {
    color: "white"
}





const Products = require('../models/products');
class Index extends React.Component {
    render() {
        const {Products} = this.props;
        return (
            <div>
                <body style={myBody}>
            <h1 style={head}> Available Products </h1>
            <ul>
                {Products.map((product, i) => {
                    return (
                        <li style={head}>
                            <a style={anchor} href={`/products/${i}`}>{product.name}</a>  $
                            {product.price}
                        </li>
                    )
                })}
            </ul>
            <nav>
                <a href="/home/new">Add a New Item</a><br/>
                <a href="./">Back to Welcome Screen</a>
            </nav>
            </body>
            </div>
        );
    }
}

module.exports = Index;