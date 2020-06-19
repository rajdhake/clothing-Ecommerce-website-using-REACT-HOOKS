import React from 'react'
import './CollectionPreview.scss'
import CollectionItem from './CollectionItem'


function CollectionPreview(props) {

    return (
        <div className='collection-preview'>
            <h1 className='title'>{props.title.toUpperCase()}</h1>
            <div className='preview'>
                {
                props.items
                 .filter((x,idx) => idx<4)
                .map((x)=>
                    <CollectionItem key ={x.id} item={x} />         
                     )
                }
            </div>
        </div>
    )
}

export default CollectionPreview
        
