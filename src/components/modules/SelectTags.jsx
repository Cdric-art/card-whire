import React from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();


const optionsTagsAspi = [
    { value: 'J\'aime conseiller les autres', label: 'J\'aime conseiller les autres' },
    { value: 'Je suis un communicant hors pair', label: 'Je suis un communicant hors pair' },
    { value: 'J\'aime utiliser mes mains', label: 'J\'aime utiliser mes mains' },
    { value: 'Je suis prêt à guider une équipe et trancher', label: 'Je suis prêt à guider une équipe et trancher' },
    { value: 'J\'ai une belle plume', label: 'J\'ai une belle plume' },
    { value: 'Je veux enseigner et transmettre', label: 'Je veux enseigner et transmettre' },
    { value: 'Être aimable et rendre service', label: 'Être aimable et rendre service' },
    { value: 'Le monde artistique me plaît', label: 'Le monde artistique me plaît' },
    { value: 'Il faut que ce soit beau et esthétique', label: 'Il faut que ce soit beau et esthétique' },
    { value: 'Les sciences ? J\'adore !', label: 'Les sciences ? J\'adore !' },
    { value: 'J\'aime construire, fabriquer des trucs', label: 'J\'aime construire, fabriquer des trucs' },
    { value: 'J\'ai la fibre commerciale', label: 'J\'ai la fibre commerciale' },
    { value: 'Rigueur et ordre, il faut que la loi soit respectée !', label: 'Rigueur et ordre, il faut que la loi soit respectée !' },
    { value: 'Méticuleux/se, j\'ai le souci du détail', label: 'Méticuleux/se, j\'ai le souci du détail' },
    { value: 'Amoureux/se des chiffres', label: 'Amoureux/se des chiffres' },
    { value: 'Je suis un as de l\'organisation', label: 'Je suis un as de l\'organisation' },
    { value: 'Je veux protéger la planète', label: 'Je veux protéger la planète' },
    { value: 'Je ne tiens pas en place, il faut que je voyage, me déplace souvent !', label: 'Je ne tiens pas en place, il faut que je voyage, me déplace souvent !' },
    { value: 'Amoureux/se du travail en plein air', label: 'Amoureux/se du travail en plein air' },
    { value: 'Geek assumé/e ou passionné/e par la tech', label: 'Geek assumé/e ou passionné/e par la tech' },
    { value: 'Soigner les autres et les secourir', label: 'Soigner les autres et les secourir' },
    { value: 'Je veux avoir une utilité sociale', label: 'Je veux avoir une utilité sociale' },
    { value: 'Prendre soin des autres', label: 'Prendre soin des autres' },
]

export const SelectTagsAspi = ({ change }) => {
    return <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        maxSelected={3}
        isMulti
        options={optionsTagsAspi}
        onChange={change}
    />;
};

SelectTagsAspi.proptypes = {
    change: PropTypes.func.isRequired
}


const optionsTagsAtout = []

export const SelectTagsAtout = ({ change }) => {
    return <CreatableSelect
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        isClearable
        onChange={change}
        placeholder="Type something and press enter..."
    />;
};

SelectTagsAtout.proptypes = {
    change: PropTypes.func.isRequired
}
