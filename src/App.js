import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import CharacterGrid from './components/Grid';

function App() {
  const [items ,setItems] = useState([]);
  const [isLoading,setLoading] = useState(true);
  const [query,setQuery] = useState("");
  useEffect(()=>{
    const fetchItems = ()=>{
      setLoading(true);
      axios.get(`https://cors-anywhere.herokuapp.com/https://www.breakingbadapi.com/api/characters?name=${query}`).then(res=>{
        setItems(res.data);
        setLoading(false);
      });
    };
    fetchItems();
  },[query]);
  return (
    <div className='container'>
      <Header />
      <Search setQuery={(q)=>setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
