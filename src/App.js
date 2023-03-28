
import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/card/Card';
import CardEnd from './components/cardEnd/CardEnd';
import axios from 'axios'

function App() {
  const [tempNote,setTempNote] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}`)
    .then((res)=>{
      setTempNote(res.data)
      setIsLoading(false)
    })
    .catch(err=>console.log(err))
  }, [tempNote]);
  if(isLoading){
    return(<div><h1>Loading...</h1></div>)
  }
  return (
    <div className='container'>
      <header className='header'>
        <h1>TO-DO LİST</h1>
      </header>

      <Card 
        setTempNote={setTempNote} 
        tempNote = {tempNote}
      />
      {tempNote.map((data,index)=> <CardEnd key={index} data={data} setTempNote={setTempNote} tempNote={tempNote}/>)}
      
      
    </div>
  );
}

export default App;
