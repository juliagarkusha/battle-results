import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import "./home.scss";

const Home: FC = (): ReactElement => {
    return (
        <div className="home">
            <h1>Github Battle: Battle your friends and ... stuff</h1>
            <Link to="/battle" className="button-link">
                Battle
            </Link>
        </div>
    );
};

export default Home;
