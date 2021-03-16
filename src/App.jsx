import React, { useEffect, useRef, useState } from 'react'
import './styles/App.css'

function App() {

    const [img, setImg] = useState('src/assets/icons/profile.png')

    return (
        <div className="App">
            <div className="Header">
                <img src="src/assets/images/Logo-whire.svg" alt="Logo Whire"/>
            </div>
            <main className="container">
                <div className="card">
                    <img className="img-model" src="src/assets/images/modele.png" alt="Modele"/>
                    <div className="wrapper-card">
                        <div className="header-card">
                            <img className="photo-profil" src={img} alt=""/>
                            <div className="title-card">

                            </div>
                            <img className="logo" src="src/assets/images/Logo-whire.svg" alt="logo"/>
                        </div>
                    </div>
                </div>

                <div className="dashboard">
                    <input type="file" onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}/>
                </div>
            </main>
        </div>
    )
}

export default App
