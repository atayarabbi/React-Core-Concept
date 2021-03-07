import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {

    const heros = ['Sharukh Khan', 'Salman Khan', 'Irfan Khan', 'Amir Khan', 'Sakib Khan', 'Salman Khan']

    const products = [
        { name: 'Photoshop', price: '99.99' },
        { name: 'Illustrator', price: '69.99' },
        { name: 'PDF', price: '29.99' },

    ]
    // const heroNames = heros.map(hero => hero);

    return (<div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <h1 style={{ color: "" }}>I am a <code style={{ color: "green" }}>REACT</code> person</h1>

            <Counter> </Counter>
            <Users></Users>
{/* 
            <Product product={products[0]}></Product>
            <Product product={products[1]}></Product>
            <Product product={products[2]}></Product> */}

            <ul style={{ border: '2px solid red', width: '400px' }}>
                {
                    heros.map(hero => <li>{hero}</li>)
                }
            </ul>

            <ol style={{ border: '2px solid white', width: '400px' }}>
                {
                    products.map(product => <li>{product.name}</li>)
                }
            </ol>
            {
                heros.map(hero => <Person hero={hero}></Person>)
            }
            {
                products.map(pd => <Product product={pd}></Product>)
            }

            <Person hero="Sahrukh Khan" heroin="Rani Mukharji"></Person>
            <Person hero="Salman Khan" heroin="Katrina Kaif"></Person>
            <Person hero="Irfan Khan" heroin="Bhumika Chaula"></Person>
            <Person hero="Amir Khan" heroin="Awisharia Ray"></Person>

        </header>
    </div>
    );
}

//set count

function Counter() {
    const [count, setCount] = useState(10);
    const handleIncrease = () => setCount(count + 1);

    return (
        <div>
            <h1>Count:{count} </h1>
            <button onClick={() => setCount(count - 1)}>Decrease</button>

            {/* <button onClick= { handleIncrease}>Increase</button> */}
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}
// users

function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <div>
            <h2>Dynamic Users: {users.length}</h2>
            {
                users.map(user => <li>{user.name}</li>)
            }
        </div>
    )
}


// Hero Function
function Person(props) {
    const personStyle = {
        border: "5px Solid Red",
        margin: "10px",
        borderRadius: '20px',
        width: "400px"
    }
    return (
        <div style={personStyle}>
            <h1 style={{ color: 'tomato' }}> Hero: {props.hero}</h1>
            <h3> Hero of {props.heroin}</h3>
        </div>
    )

}

// Products Function

function Product(props) {
    const productStyle = {
        border: "5px Solid Red",
        margin: "10px",
        backgroundColor: 'Gray',
        borderRadius: '20px',
        width: '400px',
        height: '300px',
        float: 'left'
    }
    const { name, price } = props.product;

    return (
        <div style={productStyle}>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <button>Buy Now</button>
        </div>
    )

}


export default App;