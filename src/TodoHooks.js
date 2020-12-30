import React,{useState} from 'react'
import App from './App.css'
function TodoHooks() {
const [textArr,setTextArr] = useState([]);
const [texts,setTexts] = useState('');

const handler = e =>{
    setTexts(e.target.value)
}

const addTexts = (e) =>{
    e.preventDefault();
    if (texts!=='') { 
        const  detail = {
            id : Date.now(),
            isComplete : false,
            text : texts 
        }
      setTextArr([...textArr,detail])
    }  
} 
const delText = id =>{
    const newAry = [...textArr]
    const filteredArr = newAry.filter(t => t.id!==id)
    setTextArr(filteredArr)
}
const completedText = id =>{
    const ind = textArr.findIndex(t => t.id===id) 
    const newtextArr = [...textArr]
    newtextArr[ind] = {
        ...newtextArr[ind],
        isComplete:true,
    }
    setTextArr([...newtextArr])
}
 
return (
        <div className='containerone'>
             <header>
            <form>
            <input className='inputfield' placeholder='Enter Text....'   onChange={e=>handler(e)}  />
            <button className='onebut' onClick={addTexts} type='submit'>+</button>
            </form>
            </header> 
            <footer>
          <ul> {textArr.map(t =>(
                <li className='listn' key={t.id}>
                  <section className='section'> <p className={t.isComplete?'complete':'ninput'} >{t.text}</p>
                    <button className='butt1' type='submit' onClick={e=>completedText(t.id)}>C</button>
                    <button className='butt2' type='submit' onClick={e=>delText(t.id)}>-</button>
                    </section> </li> 
             )) }
            </ul></footer> 
        </div>
    )
}

export default TodoHooks
