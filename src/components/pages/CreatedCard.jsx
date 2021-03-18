import React, { useState } from 'react';

const CreatedCard = () => {

    const [img, setImg] = useState('src/assets/icons/profile.png')

    return <div className="created-card">
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
    </div>
};

export default CreatedCard;
