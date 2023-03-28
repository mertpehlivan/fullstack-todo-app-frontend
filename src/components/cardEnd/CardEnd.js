import React, { useState } from 'react'
import styles from './cardEnd.module.css'
import deleteico from '../../images/addicon.svg'
import axios from 'axios';

export default function CardEnd({data,setTempNote,tempNote}) {

  const [isLoading,setIsLoading] = useState(false)
  const handleDelete = (e) => {
    setIsLoading(true)
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_BASE_URL}delete`, { _id: data._id })
      .then(() => {
        const updatedNot = tempNote.filter(
          (fdata) => fdata.text !== data.text);
        setTempNote(updatedNot);
        setIsLoading(false)
      })
      .catch((err) => console.log(err));
  };
  if(isLoading){
    return(<div><h1>Loading...</h1></div>)
  }
  return (
    <div className={styles.cardEnd}>

      <h1 className= {styles.textbox }>

        {data.text}

      </h1>
      
      <div className={styles.add} >

        <img 
          className={ styles.image }  
          src={deleteico} 
          alt="resim" 
          onClick={handleDelete}
        />

      </div>
    
    </div>
  )
}
