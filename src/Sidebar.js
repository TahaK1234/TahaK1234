import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import Test from "./plus";
import { useNavigate } from 'react-router-dom';




function SideBar({ note, AddNote,note_num, active, setActive}) {

  

  const navigate = useNavigate();

  

    const [count, setCount] = useState(0);
    const [show,setShow] = useState(true)
  
    const display = () => {
      if (count === 0){
        setShow(false);
        setCount(1)
      }
      else {
        setShow(true);
        setCount(0)
      }
  
      document.getElementById('display').disabled = true;
      document.getElementById('display').disabled = false;
  
    }





    return (
      <>
      
        <header>
        <div id = 'icon' className = 'icon'><button id = 'display'type = 'button' onClick={display}>&#9776;</button></div>
        <div className = 'center'><h1 className ='Title'>Lotion</h1>
        <p>Lotion Notion but worse</p>
        </div>
        <div className = 'align'></div>
        </header>
        
        
        <div className = "container">
        {
        show?<div id = 'm' className = 'm'>
        <div className = 'top'>
        <div className = 'Notes'>
        <h3>Notes</h3></div>
        <div className = 'plus'>
        <button type = 'button' onClick={()=>{ AddNote(); navigate('note/1/edit');  setActive(Number(note_num))}}><h3>+</h3></button></div>
        </div>

        {note.map((note => {
          return<>
          <Test  key = {note.id} note = {note} note_num= {note_num} active={active} setActive={setActive}/>
          </>
        }))}
        
         
        </div>:null
        }

        <div className="MaxPage">
        <Outlet />
        </div>

        </div>
      </>
    )
  };
  
  export default SideBar;
  

