
import React,{useState, useRef} from 'react';
import './Form.css';





function Form() {

  const inputRef = useRef(null);
 const [input,setInput]=useState('') 
 const [menu,setMenu]=useState([])
  console.log(menu)
 
 
 const onChanger= e =>{setInput(e.target.value)}
 const tombol=(e)=>{
                  e.preventDefault() 
                  setMenu([...menu,input])
                  setInput('')
                  inputRef.current.focus();
                  }

const handleEdit=(k)=>{ console.log(k)
     const newMenu= menu.filter(item=> { 
           if (item !== k){
                 return item
                 
           }
         
     })
  setMenu(newMenu)
  setInput(k)
  inputRef.current.focus();

}
const handleDelete=(k)=>{ 
      
      const newMenu= menu.filter(item=> {
            if (item !== k){
                  return item
            }
      })
      setMenu(newMenu)
 }

 




      return (  
                 
                  <form className='form'>

                        <h2>Pesan Makanan Anda ! </h2>

                        <div className="inputButton">

                        <input 
                        ref={inputRef}
                        className='input'
                        type='text'
                        placeholder='Ketik disini' 
                        value={input}
                        onChange= {onChanger}
                        
                        />   

                        <button 
                        className='tombol '
                        type='submit'
                        onClick={ tombol}> 
                        Tambah List
                        </button>
                        </div>


                        <div className='list'>
                        {menu.map(k =>{                   
                              return(
                              <div>
                                    <li className='key'  key={k}>{  k  }   
                              
                              <span className='span'>


                              <button 
                               className='edit' 
                               type='button' 
                               onClick ={ ()=> handleEdit(k)}

                        > Edit</button>

                        <button className='delete' 
                              type='button'
                              onClick={()=> handleDelete (k)}
                        > Hapus</button>
                              </span>
                      
                        
                        </li>
                        </div>

                              
                                    )})
                              
                        }

                        </div>

                     
                  </form>  




      )
    
}
export default Form
