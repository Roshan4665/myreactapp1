import {useState} from 'react';
import React from 'react';
import MyAppBar from './components/AppBar';
import AddTaskModal from './components/AddTaskModal';
import CardsContainer from './components/CardsContainer';
let len=parseInt(localStorage.getItem("len"));
let tasks=[];
console.log(localStorage.length);
for(let i=0;i<len;i++)
{
  let temp=JSON.stringify(i);
  tasks.push(JSON.parse(localStorage.getItem(temp)));
}
function App() {
  //
  const [taskList, setTasks] = useState(
    [...tasks]
);
  const [showModal, setShowModal] = useState(false);
  function ModalHandler()
  {
    setShowModal(oldModal=>oldModal=(showModal===false?true:false));
  }
  
  return (
    <>
    <MyAppBar modalHandler={ModalHandler}/>
    <CardsContainer taskList={taskList} setTasks={setTasks}/>
    {showModal===true?<AddTaskModal modalHandler={ModalHandler} taskList={taskList} setTasks={setTasks}/>:<></>}
    
    </>
  );
}

export default App;
