import { useParams } from "react-router-dom";
import React from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useNavigate } from 'react-router-dom';




function Skills({note, deleteNoteElement}) {

  const navigate = useNavigate();

  const { noteId } = useParams();
  console.log(noteId)




  const main = (() => {
    return note[noteId-1]?<>

    <div className="M">
    <div className = "top_save">
        <div className="left_top">
        <div className = "title" ><h3>{note[noteId-1].title}</h3></div>
        <div className="dateTime">{note[noteId-1].DayTime}
        
        </div></div>
        <div className="right_top">
          <button className="edit"onClick={()=>{  navigate('/note/' + noteId +'/edit')}} >Edit</button>
          <button className="delete" onClick={() => { if (window.confirm("Are you sure")) {deleteNoteElement(noteId); navigate('/note')}}} >Delete</button>
        </div>
        
        </div>
      
        <div className="Quill"><ReactQuill value = {note[noteId-1].body_html} readOnly={true} theme={"bubble"}
  /></div>

    </div>


    </>
    :<div className = 'notes'><h2>Select or Create a Note</h2></div>
  })




  return (
    <>    
    {main()}
    </>
  )
};

export default Skills;
