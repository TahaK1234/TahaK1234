import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Skills from "./Skills";
import SideBar from "./Sidebar"
import Edit from "./edit";
import { v4 as uuidV4 } from 'uuid';


//note number id issue look at reset funciton 

function App() {



  const localData = (() => {
    const localData = localStorage.getItem('note');
    return localData? JSON.parse(localData):[]
  })

  const numb = (()=>{
    const data = localStorage.getItem('number');
    return data? Number(data):1

  })

  const [note , setNote] = useState(localData())


  const [note_num, setNumber] = useState(numb());

  const [active, setActive] = useState(0);




  
    
  
  const AddNote = (body,title,formatDate,body_html, DayTimeUnformated) =>{

    const newN = {
      id:uuidV4(),
      title: title === ''? title:'Untitled',
      body: body? body: '...',
      DayTime:formatDate? formatDate: '',
      num: note_num,
      check: null,
      body_html: body_html===''? body_html:'',
      DayTimeUnformated: DayTimeUnformated===''? DayTimeUnformated: ''
    }

    setNumber(note_num+1)
    setNote([newN, ...note])

  }


  const deleteNoteElement = (key) => {
    const newList = note.filter((N) =>  N.num !== note_num - key )
    for(let i = 0, j = note_num-2; i < note_num-2; i++, j--){
      newList[i].num = j
    }

    setNote([...newList])
    setNumber(note_num-1)




  }

  
  const updateNote = (body,title,formatDate,number_id,x,z) =>{
    note[number_id].body = body
    note[number_id].title = title===''? 'Untitled':title
    note[number_id].DayTime = formatDate
    note[number_id].body_html = x
    note[number_id].DayTimeUnformated = z

    setNote([...note])
  }



    useEffect(() => {
      localStorage.setItem('note', JSON.stringify(note))
    }, [note])
  
    useEffect(() => {
      localStorage.setItem('number', note_num)
    },[note_num])

  
  
  
  


 



  return (
  <>
 



    <BrowserRouter>
      <Routes>
        <Route element={<SideBar   note = {note} AddNote={AddNote} note_num = {note_num} active={active} setActive={setActive}  />}>
          <Route path="/note" element={<Skills note = {note} deleteNoteElement = {deleteNoteElement}/>}></Route>
          <Route path="/note/:noteId"  element={<Skills note = {note} deleteNoteElement={deleteNoteElement}/>}></Route>
          <Route path="*" element={<Skills />}></Route>
          <Route path="/note/:noteId/edit" element={<Edit  note = {note} updateNote={updateNote} deleteNoteElement={deleteNoteElement}/>}></Route>
        </Route>

        <Route path="/" element={<Navigate to = "note"/>}></Route>
        


      </Routes>
    </BrowserRouter>






  </>
  );
}




export default App;








