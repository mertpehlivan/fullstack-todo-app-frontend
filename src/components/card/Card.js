import React, { useState } from 'react'
import styles from './card.module.css'
import foto from '../../images/addicon.svg'
import axios from 'axios'
export default function Card({setTempNote,tempNote}) {
  const [text,setText] = useState({
    text:"",
    check:false
  })
  
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setText(prevState =>({
      ...prevState,
      [name]:value
    }));
  }
  const handleSubmit = e => {
    
    e.preventDefault();
    setTempNote([...tempNote, text])
    axios.post(`${process.env.REACT_APP_BASE_URL}save`,{
      text:text.text,check:text.check
    }).then((res)=>{
      console.log(res)
      
    })
  };

  
  return (
    <div className={styles.card}>
      
      <input 
        type="text" 
        name='text' 
        className= {styles.textbox} 
        onChange={handleChange} 
        value={text.text}
      />

      <div className={styles.add} >
        
        <img 
          className={ styles.image }  
          src={foto} alt="resim" 
          onClick={handleSubmit} 
        />

      </div>
      
    </div>
  )
}
