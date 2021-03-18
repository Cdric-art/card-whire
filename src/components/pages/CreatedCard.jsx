import React, { useState } from 'react';

const CreatedCard = () => {

    const [img, setImg] = useState('src/assets/icons/profile.png')
    const [name, setName] = useState('Prénom NOM')
    const [job, setJob] = useState('Intitulé métier visé')
    const [hook, setHook] = useState('Phrase d\'accroche sur 1 ou 2 lignes')
    const [tagsAspi, setTagsAspi] = useState([])
    const arrTagsAspi = ['Tag Aspiration 1', "Tag Aspiration 2", "Tag Aspiration 3"]


    return <div className="created-card">

        <div className="card">
            <img className="img-model" src="src/assets/images/modele.png" alt="Modele"/>
            <div className="wrapper-card">
                <div className="header-card">
                    <img className="photo-profil" src={img} alt=""/>
                    <div className="title-card">
                        <h2 className="name">{name}<span className="emoji"> 👋</span></h2>
                        <p className="job"><span className="emoji"> 🚀  </span>{job}</p>
                        <p className="hook">{hook}<span className="emoji">😀</span></p>
                    </div>
                    <img className="logo" src="src/assets/images/Logo-whire.svg" alt="logo"/>
                </div>
                <div className="body-card">
                    <div className="tags-aspiration">
                        <div className="icon-tag">
                            <img src="src/assets/icons/coeur.svg" alt="Coeur"/>
                        </div>
                        <div className="tags-list">
                            <ul>
                                {tagsAspi.length === 0 ? arrTagsAspi.map((tag, i) => (
                                    <li key={i}>{tag}</li>
                                )) : tagsAspi.map((tag, i) => (
                                    <li key={i}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="dashboard">
            <div className="input-file">
                <label htmlFor="file">Ajouter votre photo :</label>
                <input className="file" name="file" type="file"
                       onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}/>
            </div>
            <div className="input-title">
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                <input type="text" onChange={(e) => setJob(e.target.value)} value={job}/>
                <input type="text" onChange={(e) => setHook(e.target.value)} value={hook}/>
            </div>
            <div className="input-tagsInspi">
                <h3>Tags Aspirations</h3>
                <label htmlFor="tagsAspi">👉 Je choisis dans la liste suivante les tags “Aspirations”</label>
                <select name="tagsAspi" onChange={(e) => setTagsAspi([...tagsAspi, e.target.value])}>
                    <option/>
                    <option value="tag1">Tag 1</option>
                    <option value="tag2">Tag 2</option>
                    <option value="tag3">Tag 3</option>
                    <option value="tag4">Tag 4</option>
                    <option value="tag5">Tag 5</option>
                </select>
                <button disabled={tagsAspi.length === 0} onClick={() => setTagsAspi([])}>Clear</button>
            </div>
        </div>

    </div>
};

export default CreatedCard;
