
// import React,{useState, useRef} from 'react';
// import './Form.css';


function Form() {
  const inputRef = useRef(null);
 const [input,setInput]=useState('') // nilai deault input= string kosong, men
 const [menu,setMenu]=useState([])
  
 
 
 const onChanger= e => {setInput(e.target.value)}
 
 const tombol=(e)=>{
                  e.preventDefault() 
                  setMenu([...menu,input])
                  setInput('')
                  inputRef.current.focus();
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
                        onClick={tombol}> 
                        Tambah List
                        </button>

                      
                        </div>

                   <div className='list'>
                        {menu.map(k =>{                   
                              return(
                              <li key={k}>{  k }   
                              

                              <button className='Edit'                                    
                              > Edit</button>

                              <button className='Delete'                             
                              > Hapus</button>
                              
                              </li>
                                    )})
                              
                        }

                        </div>
    
                  </form>  




      )
    
}
// export default Form
