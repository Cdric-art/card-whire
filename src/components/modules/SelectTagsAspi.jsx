import React from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const optionsTagsaspi = [
    { value: 'tag1', label: 'tag1' },
    { value: 'tag2', label: 'tag2' },
    { value: 'tag3', label: 'tag3' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
]

export const SelectTagsAspi = ({ change }) => {
    return <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={optionsTagsaspi}
        onChange={change}
    />;
};

SelectTagsAspi.proptypes = {
    change: PropTypes.func.isRequired
}


const optionsTagsAtout = [
    { value: 'Atout1', label: 'Atout1' },
    { value: 'Atout2', label: 'Atout2' },
    { value: 'Atout3', label: 'Atout3' },
    { value: 'Atout4', label: 'Atout4' },
    { value: 'Atout5', label: 'Atout5' },
    { value: 'Atout6', label: 'Atout6' },
]

export const SelectTagsAtout = ({ change }) => {
    return <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={optionsTagsAtout}
        onChange={change}
    />;
};

SelectTagsAtout.proptypes = {
    change: PropTypes.func.isRequired
}
