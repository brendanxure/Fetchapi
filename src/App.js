import React from "react";
import Buttons from "./Buttons";
import Contents from "./Contents";
import { useState, useEffect } from 'react'
import List from "./List";


function App() {
  const Api_Url = 'https://jsonplaceholder.typicode.com/'
  const [reqType, setReqType] = useState('users')
  const [contents, setContents] = useState([])

  useEffect(()=> {
    const fetchitems = async()=> {
      try {
        const response = await fetch(`${Api_Url}${reqType}`)
        if(!response.ok) throw Error('Cant fetch Data')
        const data = await response.json()
        setContents(data)
        console.log(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchitems()
  },[reqType])
  return (
    <div className="App">
    <Buttons reqType={reqType} 
    setReqType={setReqType} 
    />
    <Contents contents={contents} />
    {/* <List contents={contents} /> */}
    </div>
  );
}

export default App;
