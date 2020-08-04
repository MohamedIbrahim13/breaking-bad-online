import React,{useState} from 'react';

const Search = ({setQuery}) => {
  const [entrySearch,setEntry] = useState("");
  const onChange = (q)=>{
    setEntry(q);
    setQuery(q);
  };
  return (
    <section className='search'>
      <form>
        <input type='text' className='form-control' onChange={e=>onChange(e.target.value)} value={entrySearch} placeholder='Search characters' autoFocus/>
      </form>
    </section>
  )
}

export default Search