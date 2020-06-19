import React, {useState, useEffect} from 'react'
import MenuItem from '../MenuItem/MenuItem'
import './Directory.style.scss'

function Directory() {
    const [sections, setSections] = useState([
        {
          title: 'hats',
          imageUrl: 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://images.pexels.com/photos/908602/pexels-photo-908602.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ])
      
    return (
        <div className='directory-menu'>
            {
                sections.map(x=> 
                <MenuItem key={x.id}  title={x.title} imageUrl={x.imageUrl} size={x.size}  linkUrl={x.linkUrl} /> )
            } 
        </div>
    )
}

export default Directory
