import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return <nav className="nav">
        <ul>
            <li>
                <a className="card-link" href="https://www.whire.me/" target="_blank" rel="noopener">
                    <img src="src/assets/images/perso1.png" alt="Personnage connexion"/>
                    <h2>Aller sur le site</h2>
                </a>
            </li>
            <li>
                <Link className="card-link" to="/card">
                    <img src="src/assets/images/perso2.png" alt="Personnage connexion"/>
                    <h2>Créer ma carte de visite</h2>
                </Link>
            </li>
        </ul>
    </nav>
};

export default Home;
