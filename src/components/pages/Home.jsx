import React from 'react';
import { Link } from "react-router-dom";

import perso_1 from '../../assets/images/perso1.png'
import perso_2 from '../../assets/images/perso2.png'

const Home = () => {
    return <nav className="nav">
        <ul>
            <li>
                <a className="card-link" href="https://www.whire.me/" target="_blank" rel="noopener">
                    <img src={perso_1} alt="Personnage connexion"/>
                    <h2>Aller sur le site</h2>
                </a>
            </li>
            <li>
                <Link className="card-link" to="/card">
                    <img src={perso_2} alt="Personnage connexion"/>
                    <h2>Créer ma carte de visite</h2>
                </Link>
            </li>
        </ul>
    </nav>
};

export default Home;
