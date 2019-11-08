import React from 'react'

const CollectionPreview = ({ id, title, name }) => (
    <div className="collection-preview">
        <h2 className="title">
            {title}
        </h2>
        {this.item.map(({ id, name }) => <p key={id}> {name}</p>)}
    </div>
)

export default CollectionPreview