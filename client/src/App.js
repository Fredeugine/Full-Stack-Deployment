import { useRef, useState, useEffect } from "react";
import "./App.css";

function Part(){
  useState(()=>{

  })
}
function App() {
  var API = 'https://full-stack-app123-4db8d74ae08f.herokuapp.com/api/items/'
  const [results,setResults] =  useState()
  const inputRef = useRef()
  const id = 0


  const sortByRecent = () => {
    let dataCopy = [...results];
    dataCopy.sort((a, b) => a.timestamps - b.timestamps);
    setResults(dataCopy);
  };

  const sortByOldest = () => {
    let dataCopy = [...results];
    dataCopy.sort((a, b) => b.timestamps - a.timestamps);
    setResults(dataCopy);
  };
  async function Del(){
    let fetched = await fetch(`${API}${id}`,{
      headers: {"Content-Type": "application/json"},
      method: 'DELETE',
    })
    let response = await fetched.json()
    setResults(response)
  }
  const getData = async () => {
    let response = await fetch(API, {
      method: "GET",
    });
    let responseJson = await response.json();
    setResults(responseJson);
  };
  async function Blue(){
    let uploadData = inputRef.current.value
    let fetched = await fetch(API,{
      headers: {"Content-Type": "application/json"},
      method: 'POST',
      body: JSON.stringify({
        name: uploadData
      }),
    })
    getData()
  }
  return (
      <>
        <input ref={inputRef} type={'text'}/>
        <button onClick={Blue}>Save</button>
        <button onClick={getData}>refresh</button>
        <button onClick={Del}>Delete</button>
        <button onClick={sortByOldest}>Sort by oldest</button>
        <button onClick={sortByRecent}>Sort by recent</button>
        <div>
          {results && results.map((result) => {
            return (
                <>
                  <span>{result.name}</span><br/>
                  <span>{result.age}</span><br/>
                  <span>{result.id}</span><br/>
                  <p>{result.timestamps}</p>
                </>
            )
          })}
        </div>
      </>
  )
}

export default App;
