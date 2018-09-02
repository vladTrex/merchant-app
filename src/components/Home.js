import React from 'react';
import {Link} from "react-router-dom";


const Home = props => {
    return (<div>
        <h2>
            {props.auth && 'Welcome user'} Home - Merchant App!
        </h2>
        <Link to="/merchant/add"> Add merchant </Link>

        {props.merchants.map((item, idx) => <p key={idx}>{item.email}</p>)}
    </div>)
};

export default Home;