import React from 'react'
import Spinner from './Spinner';
import CharacterItem from './Item';

const CharacterGrid = ({isLoading, items}) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map(item=>{
        return (<CharacterItem key={item.char_id} item={item} />)
      })}
    </section>
  )
}

export default CharacterGrid