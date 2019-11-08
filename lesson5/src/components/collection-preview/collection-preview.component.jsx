import React from 'react'

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h2 className="title">
            {title}
        </h2>
        {items.filter((item, idx) => idx > 4).map(({ id, name }) => <p key={id}> {name}</p>)}
    </div>
)

export default CollectionPreview