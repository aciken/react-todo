import { useState } from 'react';
import { Addform } from './Addfrom';

export function App(){

  const [arr, setarr] = useState([]);

  const AddTodo = (text) =>{
      setarr(prevArr => {
          return [
                  ...prevArr, 
          {id: crypto.randomUUID(), text, checked: false}
      ]})
  }

  const handleFunct = (key) =>{
    arr.forEach((item) => {
        if(item.id == key){
            console.log('yes')
            console.log(arr)
            if(item.checked == false){
                item.checked = true
        } else {
            item.checked = false
        }
        setarr([...arr])
        
    }})
}

const deleteFunct = (key) =>  setarr(arr.filter(item => item.id !== key))
  




  return (
    <Addform AddTodo={AddTodo} arr={arr} handleFunct={handleFunct} deleteFunct={deleteFunct}/>
  )
}
