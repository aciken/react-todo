    import { useState } from 'react';
    import  {Listitem}  from './Listitem';
    
    export function Addform({ AddTodo, arr, handleFunct, deleteFunct}){

        const [todo, setTodo] = useState('');

        const handleSubmit = (event) => {

            event.preventDefault();
         

            console.log(todo)
            if(todo == '') return
            AddTodo(todo)
            setTodo('');
          }
        
        return(
        <div>
        <h1>App</h1>
  
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={todo} 
            onChange={(e) => setTodo(e.target.value)} 
            placeholder="Add todo" 
          />
          <button type="submit">Add</button>
        </form>

           <Listitem arr={arr} handleFunct={handleFunct} deleteFunct={deleteFunct}/>  
      </div>
        )
    }
    
    
