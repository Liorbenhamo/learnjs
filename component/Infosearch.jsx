import React, { useState } from 'react'
import axios from 'axios';
import "./infosearch.css"
function Infosearch() {
    const [search,setSearch]=useState()
    const [result,setResult]=useState()
    const [result2,setResult2]=useState()

  
   async function handleclick() {
        console.log(search);
        bot1()
        bot2()
    }
    async function bot1() {
      try {
        const {data} = await axios.post("http://localhost:4000/question", {
            question:search
        });
        console.log(data);
        setResult(data)
      } catch (err) {
        console.log(err);
      }
    }
    const bot2 = () => {
      axios.post('http://localhost:5000/question2', {
        question:search
      }).then((data) => {
        setResult2(data)
      })
    }
    console.log(result);
    console.log(result2);
  return (
    <div className='bodyinfo'>
    <div className='containerinfo' >
        <br />
        <h1>find</h1>
        <h2>AI that will help you with web develoop</h2><br />
        <textarea onChange={(e)=>setSearch(e.target.value)} type="text" />
        <br />
        <button onClick={()=>handleclick()}>search question</button>
        {result&&<div>
          <h3>question</h3>
          <p>{result.answer1}</p>
          <h3>answer1</h3>
          <p>{result.answer2}</p>
          <h3>answer2</h3>
          <p>{result.answer3}</p>
          </div>}
          <br /><br />
        {result2&&<div>
          <h3>if you asked about it you may want to learn about:</h3>
          {result2.data.map((item,index)=><div>
          <h5>{result2.data[index].name}</h5>
          <a href={result2.data[index].url} target="_blank"><p>{result2.data[index].url}</p></a></div>)}
          </div>}

        </div>
        <br /><br />
        </div>
  )
}

export default Infosearch