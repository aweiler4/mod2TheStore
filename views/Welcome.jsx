const React = require('react')


const myBody = {
    backgroundImage: "url(https://media.istockphoto.com/photos/light-blue-paper-texture-background-picture-id1303637923?b=1&k=20&m=1303637923&s=612x612&w=0&h=iwLb9ARrRFooPmT5Bp2Gq2iX22AbVGIVpRrJFd2Bvl4=)",
    margin: '50px',
    padding: '30px'
}

const head = {
    backgroundColor: "navy",
    textAlign: "center",
    border: "6px white",
    padding: "15px",
    color: "white"
}

const links = {
    textAlign: "center",
    backgroundColor: "tan",
    padding: "8px",
    margin: "10px 0",
    fontSize: "2em",
    color: "white"
}


class Welcome extends React.Component {
    render() {
        return (
            <div>
                <body style={myBody}>

                    <div style={head}>
            <h1> Welcome to the Obie and Kota Supply Store! </h1>
            </div>
            <nav style={links}>
                <a href="/home">See All Products</a>
            </nav>
            


            </body>
            </div>
        );
    }
}

module.exports = Welcome;