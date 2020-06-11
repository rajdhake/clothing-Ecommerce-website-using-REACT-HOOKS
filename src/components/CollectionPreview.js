import React,{useEffect,useState} from 'react'
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
                .map(({id, ...otherItemProps})=>
                    <CollectionItem key ={id} {...otherItemProps} />         
                     )
                }
            </div>
        </div>
    )
}

export default CollectionPreview
        
