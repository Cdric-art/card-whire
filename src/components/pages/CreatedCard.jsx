import React, { useState } from 'react';
import { SelectTagsAspi, SelectTagsAtout } from "../modules/SelectTagsAspi";
import ListTags from "../modules/ListTags";

const CreatedCard = () => {

    const [img, setImg] = useState('src/assets/icons/profile.png')
    const [name, setName] = useState('Prénom NOM')
    const [job, setJob] = useState('Intitulé métier visé')
    const [hook, setHook] = useState('Phrase d\'accroche sur 1 ou 2 lignes')

    const arrLabelTagsAspi = ["Tag aspiration 1", "Tag aspiration 2", "Tag aspiration 3"]
    const [tagsAspi, setTagsAspi] = useState([])

    const arrLabelTagsAtouts = ["Tag atout 1", "Tag atout 2", "Tag atout 3"]
    const [tagsAtouts, setTagsAtouts] = useState([])

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
                    <div className="wrapper-tags">
                        <div className="icon-tag">
                            <img src="src/assets/icons/coeur.svg" alt="Coeur"/>
                        </div>
                        <div className="tags-list">
                            <ListTags label={arrLabelTagsAspi} tags={tagsAspi} style="yellow"/>
                        </div>
                    </div>
                    <div className="wrapper-tags">
                        <div className="icon-tag">
                            <img src="src/assets/icons/star.svg" alt="Star"/>
                        </div>
                        <div className="tags-list">
                            <ListTags label={arrLabelTagsAtouts} tags={tagsAtouts} style="green"/>
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
            <div className="input-tags">
                <h3>Tags Aspirations</h3>
                <label htmlFor="tagsAspi">👉 Je choisis dans la liste suivante les tags “Aspirations”</label>
                <SelectTagsAspi change={(e) => setTagsAspi(e)}/>
            </div>
            <div className="input-tags">
                <h3>Tags Atouts</h3>
                <label htmlFor="tagsAspi">👉 J'ajoute d’autres tags pour mettre en avant mes atouts principaux (compétences, qualités, outils maîtrisés, type de publics avec lesquelles je veux travailler…).</label>
                <SelectTagsAtout change={(e) => setTagsAtouts(e)}/>
            </div>
        </div>
    </div>
};

export default CreatedCard;
