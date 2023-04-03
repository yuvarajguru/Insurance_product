import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [name,setName] = useState('');

  let id: number = 4
  let text : string = 'welcome'
  let val : any;
  let arr : number[] = [1,2,3]
  let arr1 : any[] = [1,'don',true]
  let arr2 : [number,string] = [23,'don'] //tuple
let obj : [number,string][]
let valq : number | string 

valq = '32';

obj = [
  [1,'q'],
  [2,'w']
]
type datatype = {
  id : number,
  name:string
}
let obj1 : datatype = {
  id:1,
  name:'string'
}

  val = 23;
  val = 'next'

  const onChange = () =>{
    setName('ram')
    
  }
  console.log(id);
  console.log(text);
  console.log(val);
  console.log(arr);
  console.log(arr1);
  console.log(arr2);
  console.log(obj);
  console.log(obj1);
  return (
    <div className="App">
     <h2>{name}</h2>
     <button onClick={onChange}>change</button>
    </div>
  );
}

export default App;
