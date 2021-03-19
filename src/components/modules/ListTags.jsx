import React from 'react';

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

export default ListTags;
