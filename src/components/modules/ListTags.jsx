import React from 'react';
import PropTypes from 'prop-types';

const ListTags = ({ label, tags, style }) => {
    return <ul>
        {
            tags.length > 0 ? tags.map(t => (
                <li className={style} key={t.label}>{t.label}</li>
            )) : label.map((t, i) => (
                <li className={style} key={i}>{t}</li>
            ))
        }
    </ul>
};

ListTags.prototypes = {
    label: PropTypes.array.isRequired,
    tags: PropTypes.array.isRequired,
    style: PropTypes.string.isRequired
}

export default ListTags;
