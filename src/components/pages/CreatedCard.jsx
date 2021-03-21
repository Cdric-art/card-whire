import React, { useState } from 'react';
import { SelectTagsAspi, SelectTagsAtout } from "../modules/SelectTagsAspi";
import ListTags from "../modules/ListTags";

import card_model from '../../assets/images/modele.png'
import logo_whire from '../../assets/images/Logo-whire.svg'
import coeur from '../../assets/icons/coeur.svg'
import star from '../../assets/icons/star.svg'
import profile from '../../assets/icons/profile.png'

const CreatedCard = () => {

    const [img, setImg] = useState(profile)
    const [name, setName] = useState('Prénom NOM')
    const [job, setJob] = useState('Intitulé métier visé')
    const [hook, setHook] = useState('Phrase d\'accroche sur 1 ou 2 lignes')

    const arrLabelTagsAspi = ["Tag aspiration 1", "Tag aspiration 2", "Tag aspiration 3"]
    const [tagsAspi, setTagsAspi] = useState([])

    const arrLabelTagsAtouts = ["Tag atout 1", "Tag atout 2", "Tag atout 3"]
    const [tagsAtouts, setTagsAtouts] = useState([])

    const [url, setUrl] = useState('Url de ma page Whire')

    const [themeTagsAspi, setThemeTagsAspi] = useState('yellow')
    const [themeTagsAtouts, setThemeTagsAtouts] = useState('yellow')

    return <div className="created-card">
        <div className="card">
            <img className="img-model" src={card_model} alt="Modele"/>
            <div className="wrapper-card">
                <div className="header-card">
                    <img className="photo-profil" src={img} alt=""/>
                    <div className="title-card">
                        <h2 className="name">{name}<span className="emoji"> 👋</span></h2>
                        <p className="job"><span className="emoji"> 🚀  </span>{job}</p>
                        <p className="hook">{hook}<span className="emoji">😀</span></p>
                    </div>
                    <img className="logo" src={logo_whire} alt="logo"/>
                </div>
                <div className="body-card">
                    <div className="wrapper-tags">
                        <div className="icon-tag">
                            <img src={coeur} alt="Coeur"/>
                        </div>
                        <div className="tags-list">
                            <ListTags label={arrLabelTagsAspi} tags={tagsAspi} style={themeTagsAspi}/>
                        </div>
                    </div>
                    <div className="wrapper-tags">
                        <div className="icon-tag">
                            <img src={star} alt="Star"/>
                        </div>
                        <div className="tags-list">
                            <ListTags label={arrLabelTagsAtouts} tags={tagsAtouts} style={themeTagsAtouts}/>
                        </div>
                    </div>
                </div>
                <div className="footer-card">
                    <p>Qui se cache derrière mon CV ?</p>
                    <a href={url} target="_blank" rel="noopener">👉 Cliquer ici</a>
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
                <div className="theme">
                    <span onClick={() => setThemeTagsAspi('yellow')} className="yellow"/>
                    <span onClick={() => setThemeTagsAspi('green')} className="green"/>
                    <span onClick={() => setThemeTagsAspi('blue')} className="blue"/>
                    <span onClick={() => setThemeTagsAspi('red')} className="red"/>
                    <span onClick={() => setThemeTagsAspi('purple')} className="purple"/>
                </div>
            </div>
            <div className="input-tags">
                <h3>Tags Atouts</h3>
                <label htmlFor="tagsAspi">👉 J'ajoute d’autres tags pour mettre en avant mes atouts principaux (compétences, qualités, outils maîtrisés, type de publics avec lesquelles je veux travailler…).</label>
                <SelectTagsAtout change={(e) => setTagsAtouts(e)}/>
                <div className="theme">
                    <span onClick={() => setThemeTagsAtouts('yellow')} className="yellow"/>
                    <span onClick={() => setThemeTagsAtouts('green')} className="green"/>
                    <span onClick={() => setThemeTagsAtouts('blue')} className="blue"/>
                    <span onClick={() => setThemeTagsAtouts('red')} className="red"/>
                    <span onClick={() => setThemeTagsAtouts('purple')} className="purple"/>
                </div>
            </div>
            <div className="input-url">
                <input type="text" onChange={(e) => setUrl(e.target.value)} value={url}/>
            </div>
            <div className="print">
                <button onClick={() => window.print()}>Télécharger / Imprimer</button>
            </div>
        </div>
    </div>
};

export default CreatedCard;
