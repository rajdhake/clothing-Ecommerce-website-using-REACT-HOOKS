import React, {useEffect,useState} from 'react'
import ShopData from './ShopData'
import CollectionPreview from '../../components/CollectionPreview'


function ShopPage() {
const [collections, setCollections]= useState(ShopData)
    return (
        <div className='shop-page'>
          {
              collections.map(({id, ...otherCollectionProps}) =>(
            <CollectionPreview key={id} {...otherCollectionProps}    
            />         ))
          }
        </div>
    )
}

export default ShopPage
