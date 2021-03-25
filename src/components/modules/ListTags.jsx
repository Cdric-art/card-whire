import React from 'react';
import PropTypes from 'prop-types';

const ListTags = ({ label, tags, style, size }) => {
    return <ul>
        {
            tags.length > 0 ? tags.map(t => (
                <li className={style} style={{fontSize: `${size}px`}} key={t.label}>{t.label}</li>
            )) : label.map((t, i) => (
                <li className={style} style={{fontSize: `${size}px`}} key={i}>{t}</li>
            ))
        }
    </ul>
};

ListTags.prototypes = {
    label: PropTypes.array.isRequired,
    tags: PropTypes.array.isRequired,
    style: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
}

export default ListTags;
